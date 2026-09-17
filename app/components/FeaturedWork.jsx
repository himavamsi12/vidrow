"use client";

import { useEffect, useRef } from "react";
import Mark from "./Mark";
import Reveal from "./Reveal";
import { FEATURED_WORK } from "../data/featuredWork";

// the small step mark that opens each testimonial
function QuoteMark() {
  return (
    <svg className="fw2-mark" viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="#0B0B0D"
        d="M0 0h7v7H0zM8.5 0h7v7h-7zM17 0h7v7h-7zM0 8.5h7v7H0zM8.5 8.5h7v7h-7zM0 17h7v7H0z"
      />
    </svg>
  );
}

/**
 * Featured work: one full-screen acid card per company, each a tetris
 * arrangement of white blocks — brand, headline, founder cut-out with its
 * name plates, and the full testimonial down the right. The cards are
 * sticky, so scrolling stacks each new one over the last rather than
 * scrolling them past each other.
 */
export default function FeaturedWork() {
  const stackRef = useRef(null);

  // drive each card's --p (0..1) from how far the next card has risen over
  // it, so the stack has real depth — the card underneath sinks back and
  // dims as the one above lands on it — instead of cards simply covering
  // one another. Written straight from a rAF-throttled scroll listener
  // rather than a CSS transition, so it tracks the scroll exactly.
  useEffect(() => {
    const stack = stackRef.current;
    if (!stack) return;
    const cards = [...stack.querySelectorAll(".fw2-card")];
    if (!cards.length) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let frame = 0;
    const update = () => {
      frame = 0;
      const vh = window.innerHeight;
      cards.forEach((card, i) => {
        const next = cards[i + 1];
        // 0 while the next card is still below the fold, 1 once it has
        // covered this one completely
        const p = next ? Math.min(Math.max(1 - next.getBoundingClientRect().top / vh, 0), 1) : 0;
        card.style.setProperty("--p", p.toFixed(3));
      });
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  // the longest testimonials (Apnamart's, say) run past their panel. Rather
  // than letting one card scroll while the rest don't, each quote's type is
  // stepped down until it fits its own panel — the shorter ones keep the
  // design's size untouched.
  useEffect(() => {
    const stack = stackRef.current;
    if (!stack) return;
    const quotes = [...stack.querySelectorAll(".fw2-quoteText")];

    const fit = () => {
      quotes.forEach((q) => {
        q.style.fontSize = "";
        const start = parseFloat(getComputedStyle(q).fontSize);
        let size = start;
        // 12px is the floor: below that the quote stops being readable and
        // the panel is better off scrolling than shrinking further
        while (q.scrollHeight > q.clientHeight + 1 && size > 12) {
          size -= 0.5;
          q.style.fontSize = `${size}px`;
        }
      });
    };

    // the name plate sizes to its own name, so the role plate's offset is
    // measured per card rather than fixed in CSS
    const placeRoles = () => {
      [...stack.querySelectorAll(".fw2-card")].forEach((card) => {
        const plate = card.querySelector(".fw2-plate");
        const role = card.querySelector(".fw2-role");
        if (!plate || !role) return;
        // layout widths, not rects: a stacked card can be mid-scale, which
        // would skew a measured rect
        const w = card.offsetWidth;
        if (!w) return;
        const right = plate.offsetLeft + plate.offsetWidth;
        role.style.setProperty("--role-left", `${((right / w) * 100).toFixed(2)}%`);
      });
    };

    const run = () => {
      fit();
      placeRoles();
    };

    run();
    window.addEventListener("resize", run);
    // re-run once webfonts land, since they change the wrapping
    document.fonts?.ready.then(run).catch(() => {});
    return () => window.removeEventListener("resize", run);
  }, []);

  return (
    <section className="fw2">
      <Reveal className="fw2-head">
        <div className="fw2-tagwrap">
          <span className="fw2-tag">Featured work</span>
          <Mark />
        </div>
        <h2 className="fw2-h">Featured Work</h2>
      </Reveal>

      <div className="fw2-stack" ref={stackRef}>
        {FEATURED_WORK.map((item) => {
          const founder = item.plates[0];
          const photo = item.photos[0];
          // testimonials carry their paragraph breaks as blank lines
          const paras = item.quote.split(/\n{2,}/);

          return (
            <article className="fw2-card" key={item.id}>
              {/* top-left: logo over the company name and category */}
              <div className="fw2-brand">
                <span className="fw2-logo">
                  {item.logo.type === "image" ? (
                    <img src={item.logo.src} alt={item.logo.alt} />
                  ) : (
                    <b>{item.logo.value || item.logo.alt}</b>
                  )}
                </span>
                <span className="fw2-names">
                  <b>{item.name}</b>
                  <span>{item.category}</span>
                </span>
              </div>

              <div className="fw2-headline">
                <h3>{item.line}</h3>
              </div>

              {/* the white block that squares off the top right edge */}
              <span className="fw2-chip" aria-hidden="true" />

              <figure className="fw2-photo">
                <img src={photo.src} alt="" loading="lazy" />
              </figure>

              <span className="fw2-plate">{founder.name}</span>
              {founder.role && <span className="fw2-role">{founder.role}</span>}

              {/* the quote panel and the two steps that notch into its left */}
              <span className="fw2-step fw2-step1" aria-hidden="true" />
              <span className="fw2-step fw2-step2" aria-hidden="true" />
              <span className="fw2-step fw2-step3" aria-hidden="true" />
              <div className="fw2-quote">
                <QuoteMark />
                <div className="fw2-quoteText" data-lenis-prevent>
                  {paras.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
