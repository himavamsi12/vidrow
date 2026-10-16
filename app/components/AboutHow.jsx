"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";

const AUTOPLAY_MS = 4000;

// "How Vidrow works": on desktop a 2 x 2 grid of grey cards around a yellow
// block; on phones the same cards become a carousel that advances itself every
// 4 seconds (swipe to move sooner), with a dash per card underneath.
export default function AboutHow({ cards }) {
  const track = useRef(null);
  const [index, setIndex] = useState(0);
  // desktop reveal: the cards start folded into the yellow block at the grid's
  // centre ("armed"), then grow out of it one at a time as the page scrolls:
  // each card comes in once the grid's top has passed its own line, so the
  // next bit of scroll brings the next card (and scrolling back folds them
  // away again). Armed only when the browser can run it, so it never hides
  // the cards for anyone who can't see the reveal.
  const [armed, setArmed] = useState(false);
  const [shown, setShown] = useState(0);

  useLayoutEffect(() => {
    const wide = window.matchMedia("(min-width: 701px)");
    const still = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (wide.matches && !still.matches) setArmed(true);
  }, []);

  useEffect(() => {
    if (!armed) return;
    const el = track.current;
    let raf = 0;
    const update = () => {
      raf = 0;
      const vh = window.innerHeight;
      const top = el.getBoundingClientRect().top;
      // the first card at 80% of the screen, each next one 12% of a screen later
      const start = vh * 0.8;
      const step = vh * 0.12;
      const n = top > start ? 0 : Math.min(cards.length, Math.floor((start - top) / step) + 1);
      setShown(n);
    };
    const onScrollOrResize = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScrollOrResize, { passive: true });
    window.addEventListener("resize", onScrollOrResize);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScrollOrResize);
      window.removeEventListener("resize", onScrollOrResize);
    };
  }, [armed, cards.length]);

  const goTo = (i) => {
    const el = track.current;
    if (!el || !el.children[i]) return;
    el.scrollTo({ left: el.children[i].offsetLeft - el.children[0].offsetLeft, behavior: "smooth" });
  };

  const onScroll = () => {
    const el = track.current;
    const step = el.children[1].offsetLeft - el.children[0].offsetLeft;
    setIndex(Math.max(0, Math.min(cards.length - 1, Math.round(el.scrollLeft / step))));
  };

  // phones only: the grid isn't scrollable on desktop. Restarts whenever the
  // card changes, so a swipe gets a full 4 seconds before the next advance.
  useEffect(() => {
    const phone = window.matchMedia("(max-width: 700px)");
    const still = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!phone.matches || still.matches) return;
    const t = setTimeout(() => goTo((index + 1) % cards.length), AUTOPLAY_MS);
    return () => clearTimeout(t);
  }, [index, cards.length]);

  return (
    <>
      <div
        className={`ab-howGrid${armed ? " is-armed" : ""}`}
        ref={track}
        onScroll={onScroll}
      >
        {cards.map((c, i) => (
          <article className={`ab-howCard${i < shown ? " is-on" : ""}`} key={c.title}>
            <h3>{c.title}</h3>
            <p>{c.body}</p>
          </article>
        ))}
        <span className="ab-howBlock" aria-hidden="true">
          <i /><i /><i /><i />
        </span>
      </div>

      <div className="ab-howDots" aria-hidden="true">
        {cards.map((c, i) => (
          <span key={c.title} className={i === index ? "is-on" : ""} />
        ))}
      </div>
    </>
  );
}
