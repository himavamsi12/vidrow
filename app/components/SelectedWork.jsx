"use client";

import { useState } from "react";
import TagMark from "./TagMark";
import Reveal from "./Reveal";
import WyMark from "./WyMark";
import { SW_TABS } from "../data/selectedWork";

export default function SelectedWork() {
  const [activeCat, setActiveCat] = useState(SW_TABS[0].cat);
  const tab = SW_TABS.find((t) => t.cat === activeCat) || SW_TABS[0];
  const items = tab.items;

  return (
    <section className="sw" id="work">
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
              onClick={() => setActiveCat(f.cat)}
            >
              <span className="sw-d">{f.label}</span>
              <span className="sw-m">{f.short}</span>
            </button>
          ))}
        </div>

        <div className="sw-field">
          <div className={`sw-grid sw-grid--${tab.layout}`}>
            {items.map((item) => (
              <a key={`${tab.cat}-${item.title}`} className="sw-item" href={item.href || "#work"}
                onClick={item.href ? undefined : (e) => e.preventDefault()}>
                <span className="sw-shot">
                  {item.img && <img src={item.img} alt={item.alt} loading="lazy" />}
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
