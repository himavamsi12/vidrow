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

// the white tetris ground of every card, measured off the 1440×640 design.
// Drawn as one SVG stretched over the card, so the pieces butt together
// with no hairline seams at any width.
const GROUND = [
  [0, 0, 224, 111], // brand block
  [362, 72, 194, 97],
  [246, 131, 310, 38],
  [246, 169, 194, 59],
  [440, 180, 54, 48],
  [494, 206, 97, 22],
  [300, 228, 291, 27],
  [615, 158, 98, 119],
  [300, 255, 413, 22],
  [397, 277, 316, 26],
  [322, 303, 194, 96],
  [576, 303, 137, 48],
  [576, 351, 98, 97],
  [0, 362, 86, 96],
  [0, 458, 172, 62],
  [0, 520, 258, 32],
  [773, 41, 79, 80], // quote-mark chip
  [852, 56, 588, 584], // quote panel
  [662, 552, 190, 88], // step off the panel's bottom-left
];

function Ground() {
  return (
    <svg
      className="fw2-ground"
      viewBox="0 0 1440 640"
      preserveAspectRatio="none"
      shapeRendering="crispEdges"
      aria-hidden="true"
    >
      {GROUND.map(([x, y, w, h], i) => (
        <rect key={i} x={x} y={y} width={w} height={h} />
      ))}
    </svg>
  );
}

/**
 * Featured work: one acid card per company, each a tetris
 * arrangement of white blocks — logo, founder cut-out, headline, and the
 * full testimonial with its author down the right. The heading sticks at
 * the top of the section; each card rests as its row and grows into the
 * full card while the one above it sinks away under the heading.
 */
export default function FeaturedWork() {
  const stackRef = useRef(null);

  // an accordion driven straight off the scroll position, with the card
  // going away and the card coming in moving as one: while an open card
  // scrolls up under the sticky heading, the row after it grows into the
  // full card — starting as that row reaches the middle of the screen, done
  // just as the open card's bottom meets the heading. The open
  // card stays joined to the one opening below it the whole way, so
  // there's never a gap between them, and it shrinks back slightly as it
  // goes, so it reads as sinking away behind the heading.
  //
  // Each card's opening range is worked out from the document layout with
  // every card above it already open, so it depends only on scrollY —
  // never on where the cards happen to sit mid-growth — and so can't feed
  // back on itself. Heights only ever change below the heading, so nothing
  // above the card opening moves.
  useEffect(() => {
    const stack = stackRef.current;
    if (!stack) return;
    const cards = [...stack.querySelectorAll(".fw2-card")];
    if (!cards.length) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const head = stack.parentElement.querySelector(".fw2-head");

    let frame = 0;
    const update = () => {
      frame = 0;
      const row = cards[0].querySelector(".fw2-row").offsetHeight;
      const full = cards[0].querySelector(".fw2-full").offsetHeight;
      const stackRect = stack.getBoundingClientRect();
      const stackTop = stackRect.top + window.scrollY;
      // the heading's height is where it sticks to, and so where the cards
      // go under it
      const headH = head ? head.offsetHeight : 0;
      const hinge = head ? head.getBoundingClientRect().bottom : 0;
      // each card's layout top on screen, summed from the heights set here
      let top = stackRect.top;
      cards.forEach((card, i) => {
        // the first card is the one on show as the section arrives; each
        // later one starts opening as its row's centre reaches the middle
        // of the screen, and is fully open as its top reaches the heading —
        // the moment the card above it has gone under completely
        let o = 1;
        if (i > 0) {
          const docTop = stackTop + i * full;
          const start = docTop - (window.innerHeight / 2 - row / 2);
          const end = docTop - headH;
          o = Math.min(Math.max((window.scrollY - start) / Math.max(end - start, 1), 0), 1);
        }
        const h = row + (full - row) * o;
        card.style.height = `${h}px`;
        card.style.setProperty("--o", o.toFixed(3));

        // passing under the heading: shrink back about the bottom edge, so
        // it stays joined to the card opening below
        const past = Math.min(Math.max(hinge - top, 0), h);
        const c = past / h;
        card.style.transform = c > 0 ? `scale(${(1 - 0.06 * c).toFixed(4)})` : "";
        top += h;
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
      cards.forEach((card) => {
        card.style.height = "";
        card.style.transform = "";
        card.style.removeProperty("--o");
      });
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
        // it stops there rather than shrinking further
        while (q.scrollHeight > q.clientHeight + 1 && size > 12) {
          size -= 0.5;
          q.style.fontSize = `${size}px`;
        }
      });
    };

    fit();
    window.addEventListener("resize", fit);
    // re-run once webfonts land, since they change the wrapping
    document.fonts?.ready.then(fit).catch(() => {});
    return () => window.removeEventListener("resize", fit);
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
              {/* collapsed: one list row — logo, headline, the quote's opening */}
              <div className="fw2-row" aria-hidden="true">
                <span className="fw2-rowLogo" style={{ "--trim": item.logo.trim, "--lscale": item.logo.scale }}>
                  {item.logo.type === "image" ? (
                    <img src={item.logo.src} alt="" />
                  ) : (
                    <b>{item.logo.value || item.logo.alt}</b>
                  )}
                </span>
                <span className="fw2-rowLine">{item.line}</span>
                <span className="fw2-rowSay">{paras[0]}</span>
              </div>

              <div className="fw2-full">
                <div className="fw2-frame">
                  <Ground />

                  <span className="fw2-logo" style={{ "--trim": item.logo.trim, "--lscale": item.logo.scale }}>
                    {item.logo.type === "image" ? (
                      <img src={item.logo.src} alt={item.logo.alt} />
                    ) : (
                      <b>{item.logo.value || item.logo.alt}</b>
                    )}
                  </span>

                  <figure className="fw2-photo">
                    <img src={photo.src} alt="" loading="lazy" />
                  </figure>

                  <h3 className="fw2-headline">{item.line}</h3>

                  <span className="fw2-chip">
                    <QuoteMark />
                  </span>

                  <div className="fw2-quote">
                    <div className="fw2-quoteText">
                      {paras.map((p, i) => (
                        <p key={i}>{p}</p>
                      ))}
                    </div>
                    <div className="fw2-by">
                      <b>{founder.name}</b>
                      {founder.role && <span>{founder.role}</span>}
                    </div>
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
