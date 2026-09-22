"use client";

import { useEffect, useRef } from "react";
import { useLenis } from "lenis/react";
import Mark from "./Mark";
import Reveal from "./Reveal";
import { FEATURED_WORK } from "../data/featuredWork";

// the step mark that opens each testimonial, drawn as separate dots
function StepMark({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <path d="M0 0h6v6H0zM9 0h6v6H9zM18 0h6v6h-6zM0 9h6v6H0zM9 9h6v6H9zM0 18h6v6H0z" />
    </svg>
  );
}

// the solid violet step on the right of each row
function RowMark() {
  return (
    <svg className="fw-rowMark" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M0 0H24V24H16V16H8V8H0Z" />
    </svg>
  );
}

/**
 * The mobile Featured Work section, playing the same scroll-driven handover
 * as the desktop cards in FeaturedWork: the heading sticks at the top, each
 * company rests as its row, and it grows into its full card as it's
 * scrolled up the screen while the open card above sinks away under the
 * heading. Desktop and mobile are swapped by CSS at the 900px breakpoint,
 * and the page wraps both in the #featured anchor.
 */
export default function FeaturedWorkMobile() {
  const listRef = useRef(null);
  const updateRef = useRef(null);
  // run the layout pass inside Lenis's own frame, straight after it moves
  // the page, so the cards never trail the smooth scroll by a frame
  useLenis(() => updateRef.current?.());

  // the same model as desktop, except each card's full height is its own
  // (the testimonials differ in length). Each card starts opening as its
  // row's centre rises past 70% of the way down the screen and is fully
  // open as its top reaches the sticky heading — the moment the card above
  // has gone under. The ranges come from the layout with every card above
  // already open, so they depend only on scrollY and can't feed back on
  // themselves; heights only change below the heading, so nothing above
  // the card opening moves.
  useEffect(() => {
    const list = listRef.current;
    if (!list) return;
    const items = [...list.querySelectorAll(".fw-item")];
    if (!items.length) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const head = list.parentElement.querySelector(".fw-head");

    const clear = () =>
      items.forEach((item) => {
        item.style.height = "";
        item.style.transform = "";
        item.style.removeProperty("--o");
      });

    let frame = 0;
    const update = () => {
      frame = 0;
      // hidden on desktop: leave the cards at rest
      if (!list.offsetParent) return clear();
      const vh = window.innerHeight;
      const row = items[0].querySelector(".fw-row").offsetHeight;
      const fulls = items.map((item) => item.querySelector(".fw-card").offsetHeight);
      const listRect = list.getBoundingClientRect();
      const listTop = listRect.top + window.scrollY;
      const headH = head ? head.offsetHeight : 0;
      const hinge = head ? head.getBoundingClientRect().bottom : 0;

      let docTop = listTop; // with every card above open
      let top = listRect.top; // on screen, from the heights set here
      items.forEach((item, i) => {
        const full = fulls[i];
        let o = 1;
        if (i > 0) {
          const start = docTop - (vh * 0.7 - row / 2);
          const end = docTop - headH;
          const t = Math.min(Math.max((window.scrollY - start) / Math.max(end - start, 1), 0), 1);
          o = t * t * (3 - 2 * t);
        }
        const h = row + (full - row) * o;
        item.style.height = `${h}px`;
        item.style.setProperty("--o", o.toFixed(3));

        // passing under the heading: shrink back slightly about the bottom
        // edge, so it stays joined to the card opening below
        const past = Math.min(Math.max(hinge - top, 0), h);
        const c = past / h;
        item.style.transform = c > 0 ? `scale(${(1 - 0.06 * c).toFixed(4)})` : "";

        docTop += full;
        top += h;
      });
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    updateRef.current = update;

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    // images landing change the cards' natural heights
    window.addEventListener("load", onScroll);
    return () => {
      if (frame) cancelAnimationFrame(frame);
      updateRef.current = null;
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      window.removeEventListener("load", onScroll);
      clear();
    };
  }, []);

  return (
    <section className="fw">
      <Reveal className="fw-head">
        <div className="fw-tagwrap">
          <span className="fw-tag">Featured work</span>
          <Mark />
        </div>
        <h2 className="fw-h">Featured Work</h2>
      </Reveal>

      <div className="fw-list" ref={listRef}>
        {FEATURED_WORK.map((item) => {
          const founder = item.plates[0];
          // testimonials carry their paragraph breaks as blank lines
          const paras = item.quote.split(/\n{2,}/);

          return (
            <article key={item.id} className="fw-item">
              {/* collapsed: the row, laid over the top of the card and
                  faded off it as the card opens */}
              <div className="fw-row" aria-hidden="true">
                <span className="fw-rowLogo">
                  <img src={item.logo.src} alt="" />
                </span>
                <span className="fw-rowLine">{item.line}</span>
                <RowMark />
              </div>

              <div className="fw-card">
                <div className="fw-top">
                  <span className="fw-logo" style={{ "--zoom": item.logo.zoom }}>
                    <img src={item.logo.src} alt={item.logo.alt} />
                  </span>
                  <img className="fw-photo" src={item.photos[0].src} alt="" />
                  <h3 className="fw-line">{item.line}</h3>
                </div>

                <div className="fw-quote">
                  <StepMark className="fw-quoteMark" />
                  {paras.map((p, j) => (
                    <p key={j}>{p}</p>
                  ))}
                  <div className="fw-by">
                    <b>{founder.name}</b>
                    {founder.role && <span>{founder.role}</span>}
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
