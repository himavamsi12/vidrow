"use client";

import { useEffect, useRef, useState } from "react";
import { useLenis } from "lenis/react";
import Mark from "./Mark";
import Reveal from "./Reveal";
import { FEATURED_WORK } from "../data/featuredWork";

// the blocky quote mark in the chip at each card's top-right corner
function QuoteMark({ className }) {
  return (
    <svg className={className} viewBox="0 0 68 42" aria-hidden="true">
      <path d="M0 0h26v12H0zM14 12h12v9H14zM0 21h26v21H0zM42 0h26v12H42zM56 12h12v9H56zM42 21h26v21H42z" />
    </svg>
  );
}

// a testimonial's [[…]] runs are the lines set darker than the rest
function Para({ text }) {
  const parts = text.split(/\[\[(.+?)\]\]/);
  return <p>{parts.map((t, i) => (i % 2 ? <strong key={i}>{t}</strong> : t))}</p>;
}

// how far below the top of the screen a card pins
const STICK = 16;

/**
 * The mobile Featured Work section: "Hear it from the Founders", one acid
 * card per company stacked as a deck — each card pins near the top of the
 * screen and the next one slides up over it, while the one underneath
 * shrinks back and dims. A card taller than the screen scrolls through
 * first and pins by its bottom edge. A rail fixed down the left edge shows
 * which card is up, only while the section is on screen. Desktop and mobile
 * are swapped by CSS at the 900px breakpoint, and the page wraps both in
 * the #featured anchor.
 */
export default function FeaturedWorkMobile() {
  const sectionRef = useRef(null);
  const listRef = useRef(null);
  const updateRef = useRef(null);
  const [active, setActive] = useState(0);
  const [inView, setInView] = useState(false);
  // run the layout pass inside Lenis's own frame, straight after it moves
  // the page, so the cards never trail the smooth scroll by a frame
  useLenis(() => updateRef.current?.());

  useEffect(() => {
    const list = listRef.current;
    const section = sectionRef.current;
    if (!list || !section) return;
    const cards = [...list.querySelectorAll(".fwm-card")];
    if (!cards.length) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let frame = 0;
    const update = () => {
      frame = 0;
      // hidden on desktop: nothing to lay out
      if (!list.offsetParent) return;
      const vh = window.innerHeight;
      const tops = cards.map((card) => {
        const top = Math.min(STICK, vh - card.offsetHeight - STICK);
        card.style.top = `${top}px`;
        return top;
      });

      let on = 0;
      cards.forEach((card, i) => {
        const r = card.getBoundingClientRect();
        if (r.top < vh * 0.5) on = i;
        const next = cards[i + 1];
        if (!next || reduce) return;
        // 0 while the next card is still a screen below, 1 once it has
        // pinned over this one
        const nt = next.getBoundingClientRect().top;
        const q = Math.min(Math.max((vh - nt) / Math.max(vh - tops[i + 1], 1), 0), 1);
        card.style.setProperty("--q", q.toFixed(3));
      });
      setActive(on);

      const s = section.getBoundingClientRect();
      setInView(s.top < vh * 0.6 && s.bottom > vh * 0.4);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    updateRef.current = update;

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    // images landing change the cards' heights
    window.addEventListener("load", onScroll);
    return () => {
      if (frame) cancelAnimationFrame(frame);
      updateRef.current = null;
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      window.removeEventListener("load", onScroll);
      cards.forEach((card) => {
        card.style.top = "";
        card.style.removeProperty("--q");
      });
    };
  }, []);

  return (
    <section className="fw" ref={sectionRef}>
      <Reveal className="fw-head">
        <div className="fw-tagwrap">
          <span className="fw-tag">Featured work</span>
          <Mark />
        </div>
        <h2 className="fw-h">Hear it from the Founders</h2>
      </Reveal>

      <div className="fwm-list" ref={listRef}>
        {FEATURED_WORK.map((item) => {
          const founder = item.plates[0];
          // testimonials carry their paragraph breaks as blank lines
          const paras = (item.mobileQuote || item.quote).split(/\n{2,}/);

          return (
            <article key={item.id} className="fwm-card">
              <span className="fwm-logo" style={{ "--zoom": item.logo.zoom }}>
                <img src={item.logo.src} alt={item.logo.alt} />
              </span>
              <div className="fwm-panel">
                <span className="fwm-chip">
                  <QuoteMark className="fwm-mark" />
                </span>
                <div className="fwm-top">
                  <img className="fwm-photo" src={item.photos[0].src} alt="" />
                  <div className="fwm-by">
                    <b>-{founder.name}</b>
                    {founder.role && <span>{founder.role}</span>}
                  </div>
                  <h3 className="fwm-line">{item.line}</h3>
                </div>

                <div className="fwm-quote">
                  {paras.map((p, j) => (
                    <Para key={j} text={p} />
                  ))}
                </div>
              </div>
            </article>
          );
        })}
      </div>

      {/* which card is up: the current one a tall acid bar, the rest small
          grey squares. Fixed to the screen's left edge, shown only while
          the section is on screen */}
      <div className={`fwm-rail${inView ? " is-on" : ""}`} aria-hidden="true">
        {FEATURED_WORK.map((item, i) => (
          <span key={item.id} className={i === active ? "is-active" : ""} />
        ))}
      </div>
    </section>
  );
}
