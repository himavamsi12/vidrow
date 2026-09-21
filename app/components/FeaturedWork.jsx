"use client";

import { useEffect, useRef } from "react";
import { useLenis } from "lenis/react";
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
 * full testimonial with its author down the right. The cards rest as a
 * list of collapsed rows, and each one opens into its full card as it
 * scrolls up into view.
 */
export default function FeaturedWork() {
  const stackRef = useRef(null);
  const lenis = useLenis();
  const lenisRef = useRef(null);
  lenisRef.current = lenis;

  // an accordion with one card open at a time. Scrolling down, a row that
  // reaches the middle of the screen opens there — growing downward from
  // where it is — while the card above it collapses back to its row. That
  // collapse would drag the opening card up the screen, so for as long as
  // the transition runs the scroll position is moved by exactly the height
  // the cards above give back, and the opening card stays where it was.
  // Scrolling back up runs the same thing in reverse (the card reopening
  // above grows down from its own top, so nothing needs holding there).
  useEffect(() => {
    const stack = stackRef.current;
    if (!stack) return;
    const cards = [...stack.querySelectorAll(".fw2-card")];
    if (!cards.length) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    // move the page by dy without disturbing a smooth scroll in progress:
    // Lenis eases toward a target, so the target, the eased value and the
    // animation's own endpoints all shift together and the glide carries on
    const shiftScroll = (dy) => {
      const l = lenisRef.current;
      if (l && l.isScrolling === "smooth") {
        l.animatedScroll += dy;
        l.targetScroll += dy;
        if (l.animate) {
          l.animate.value += dy;
          l.animate.from += dy;
          l.animate.to += dy;
        }
        l.setScroll(l.animatedScroll);
      } else {
        window.scrollTo({ top: window.scrollY + dy, behavior: "instant" });
      }
    };

    // hold the page still against the height changes of `held` (the cards
    // above the one opening) until their transition has finished
    let holdFrame = 0;
    // while holding, <html data-scroll-hold> tells SiteNav the page is moving
    // itself, so it doesn't read the shift up as the user scrolling up
    const root = document.documentElement;
    const release = () => delete root.dataset.scrollHold;
    const hold = (held) => {
      cancelAnimationFrame(holdFrame);
      if (!held.length) return release();
      root.dataset.scrollHold = "1";
      let prev = held.map((c) => c.offsetHeight);
      const until = performance.now() + 1100; // the 1s height transition
      const step = (now) => {
        const heights = held.map((c) => c.offsetHeight);
        const dy = heights.reduce((sum, h, i) => sum + h - prev[i], 0);
        prev = heights;
        if (dy) shiftScroll(dy);
        // one frame of grace after the last shift, so its scroll event is
        // still covered
        holdFrame = requestAnimationFrame(now < until ? step : release);
      };
      holdFrame = requestAnimationFrame(step);
    };

    let active = -1;
    const setActive = (next, held) => {
      if (next === active) return;
      if (active !== -1) cards[active].classList.remove("is-open");
      if (next !== -1) cards[next].classList.add("is-open");
      active = next;
      hold(held);
    };

    let frame = 0;
    const update = () => {
      frame = 0;
      const mid = window.innerHeight / 2;
      const row = cards[0].querySelector(".fw2-row").offsetHeight;
      const full = cards[0].querySelector(".fw2-full").offsetHeight;
      // every card's top as it will be once settled (only the active card
      // full height), not read off the page — mid-transition the heights
      // are still in flight and would make the next row look centred too
      const base = stack.getBoundingClientRect().top;
      const top = (i) => base + i * row + (active !== -1 && i > active ? full - row : 0);
      const reached = (i) => top(i) + row / 2 < mid;

      // arriving with every card closed (e.g. the hero curtain dropping the
      // page onto this section with a couple of rows already past the
      // middle): the first card that qualifies opens, not a later one
      if (active === -1) {
        const j = cards.findIndex((_, i) => reached(i) && top(i) + full > mid);
        if (j !== -1) setActive(j, []);
        return;
      }

      // scrolling down: the lowest row below the open card that has reached
      // the middle takes over, and everything above it is held still
      for (let j = cards.length - 1; j > active; j--) {
        if (reached(j) && top(j) + full > mid) {
          setActive(j, cards.slice(0, j));
          return;
        }
      }
      // scrolling back up: the open card's row has dropped below the
      // middle, so the nearest row above that is still past it reopens.
      // Scrolling on past the last card leaves it open — closing it there
      // would pull its row back up across the middle and reopen it, over
      // and over.
      if (active === -1 || reached(active)) return;
      let j = active - 1;
      while (j >= 0 && !reached(j)) j--;
      setActive(j >= 0 && top(j) + full > mid ? j : -1, []);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      if (frame) cancelAnimationFrame(frame);
      cancelAnimationFrame(holdFrame);
      release();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cards.forEach((card) => card.classList.remove("is-open"));
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
