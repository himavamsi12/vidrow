"use client";

import { useEffect, useRef, useState } from "react";
import TagMark from "./TagMark";
import Reveal from "./Reveal";
import WyMark from "./WyMark";
import { SW_TABS } from "../data/selectedWork";
import useNear from "../hooks/useNear";

export default function SelectedWork() {
  const [activeCat, setActiveCat] = useState(SW_TABS[0].cat);
  // set once a tab has been clicked, so the cards animate in on a tab change
  // but not on the page's first paint
  const [switched, setSwitched] = useState(false);

  // every tab's photos are fetched quietly once the section is near the
  // screen (not with the page, where they were most of the homepage's
  // download), so a tab's cards come in with their photos ready instead of
  // blinking in empty. On a slow or data-saving connection only the open
  // tab loads, and another tab's photos are fetched when its button is
  // pointed at or focused, just before it opens
  const [sectionRef, near] = useNear();
  const fetched = useRef(new Set());
  const prefetchTab = (t) => {
    if (fetched.current.has(t.cat)) return;
    fetched.current.add(t.cat);
    t.items.forEach((it) => {
      if (!it.img) return;
      const im = new Image();
      im.decoding = "async";
      im.src = it.img;
    });
  };
  useEffect(() => {
    if (!near) return;
    const c = navigator.connection;
    if (c && (c.saveData || /(^|-)2g|3g/.test(c.effectiveType || ""))) return;
    const load = () => SW_TABS.forEach(prefetchTab);
    const ric = window.requestIdleCallback;
    const id = ric ? ric(load, { timeout: 3000 }) : setTimeout(load, 1500);
    return () => (ric ? window.cancelIdleCallback(id) : clearTimeout(id));
  }, [near]);

  // a page load starts on the first tab; only coming back from a campaign page
  // (a card was opened) reopens the tab that card was in, once
  useEffect(() => {
    try {
      const saved = sessionStorage.getItem("sw-cat");
      sessionStorage.removeItem("sw-cat");
      // the saved tab is only set when a card was opened, and is cleared
      // above, so a fresh visit or a reload starts on Brand Marketing while
      // any way back from a campaign page (Back, logo, nav) restores the tab
      if (saved && SW_TABS.some((t) => t.cat === saved)) setActiveCat(saved);
    } catch {}
  }, []);

  // a campaign page is a full page load, so on Back the homepage starts over;
  // SmoothScrolling puts the page back at the spot it was left, and the tab
  // the card was opened from is saved here so it reopens too
  const rememberSpot = () => {
    try {
      sessionStorage.setItem("sw-cat", activeCat);
    } catch {}
  };

  const tab = SW_TABS.find((t) => t.cat === activeCat) || SW_TABS[0];
  const items = tab.items;

  return (
    <section className="sw" id="work" ref={sectionRef}>
      <div className="sw-in">
        <Reveal className="sw-head">
          <div className="sw-headL">
            <div className="sw-tagwrap">
              <span className="sw-tag">
                Selected Work<span className="sw-m">s</span>
              </span>
              <TagMark />
            </div>
            <div className="sw-titleRow">
              <h2 className="sw-h">
                <span className="sw-d">We make Ads that people don&rsquo;t skip</span>
                <span className="sw-m">The Creatives That Scaled</span>
              </h2>
            </div>
          </div>
        </Reveal>

        <div className="sw-filters" role="group" aria-label="Filter work by service">
          {SW_TABS.map((f) => (
            <button
              key={f.cat}
              className="sw-filter"
              data-cat={f.cat}
              aria-pressed={activeCat === f.cat}
              onPointerEnter={() => prefetchTab(f)}
              onFocus={() => prefetchTab(f)}
              onClick={() => {
                if (f.cat === activeCat) return;
                setSwitched(true);
                setActiveCat(f.cat);
              }}
            >
              {/* data-text feeds an invisible bold copy that holds the
                  tab at its selected width, so picking one doesn't reflow
                  the row */}
              <span className="sw-filterT" data-text={f.label}>{f.label}</span>
            </button>
          ))}
        </div>

        <div className="sw-field">
          {/* keyed by tab, so a tab change mounts a fresh grid whose cards
              fade and slide up in turn */}
          <div key={tab.cat} className={`sw-grid sw-grid--${tab.layout}${switched ? " sw-grid--in" : ""}`}>
            {items.map((item, i) => (
              <a key={`${tab.cat}-${item.title}`} className="sw-item" href={item.href || "#work"}
                style={{ "--i": i }}
                onClick={item.href ? rememberSpot : (e) => e.preventDefault()}>
                <span className="sw-shot">
                  {item.img && <img src={item.img} alt={item.alt} loading="lazy" decoding="async" />}
                </span>
                <span className="sw-body">
                  <h3 className="sw-name">{item.title}</h3>
                  <span className="sw-client">{item.client}</span>
                  <span className="sw-view">
                    View Work <WyMark />
                  </span>
                </span>
                <svg
                  className="sw-corner"
                  aria-hidden="true"
                  viewBox={`0 0 ${item.corner.w} ${item.corner.h}`}
                  style={{ width: `calc(${item.corner.w} * var(--cu))` }}
                  shapeRendering="crispEdges"
                >
                  {item.corner.cells.map(([c, r]) => (
                    <rect key={`${c}-${r}`} x={c} y={r} width="1.01" height="1.01" fill="#F5F978" />
                  ))}
                </svg>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
