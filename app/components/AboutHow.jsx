"use client";

import { useEffect, useRef, useState } from "react";

const AUTOPLAY_MS = 4000;

// "How Vidrow works": on desktop a 2 x 2 grid of grey cards around a yellow
// block; on phones the same cards become a carousel that advances itself every
// 4 seconds (swipe to move sooner), with a dash per card underneath.
export default function AboutHow({ cards }) {
  const track = useRef(null);
  const [index, setIndex] = useState(0);

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
      <div className="ab-howGrid" ref={track} onScroll={onScroll}>
        {cards.map((c) => (
          <article className="ab-howCard" key={c.title}>
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
