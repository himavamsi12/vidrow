"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import TagMark from "./TagMark";
import Reveal from "./Reveal";
import { NEWS_ITEMS } from "../data/news";

function NavArrow() {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true">
      <path
        d="M6 16h20M19 9l7 7-7 7"
        fill="none"
        stroke="#3A3A3A"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// the site's solid step mark, in violet — same glyph WyMark draws
function ReadMark() {
  return (
    <svg viewBox="0 0 40 40" aria-hidden="true">
      <path fill="var(--violet)" d="M0 0 H40 V40 H26.667 V26.667 H13.333 V13.333 H0 Z" />
    </svg>
  );
}

export default function News() {
  const trackRef = useRef(null);
  // index of the leftmost visible card
  const [at, setAt] = useState(0);
  // index of the last page, so the next arrow can step aside at the end
  const maxRef = useRef(0);
  const atRef = useRef(0);
  const [max, setMax] = useState(null);

  // On desktop the row is moved by transform rather than by scrolling it: a
  // scroll animation there gets reverted by the snap container and by Lenis,
  // a transform can't be. A phone has no arrows and swipes the row instead,
  // so scrolling goes back to the browser and the transform is left off —
  // the two can't both drive the row at once.
  const place = useCallback((i) => {
    const track = trackRef.current;
    if (!track) return 0;
    if (window.matchMedia("(max-width: 759px)").matches) {
      track.style.transform = "";
      return 0;
    }
    const cards = [...track.children];
    if (!cards.length) return 0;

    const step = cards.length > 1 ? cards[1].offsetLeft - cards[0].offsetLeft : 0;
    const gap = parseFloat(getComputedStyle(track).columnGap) || 0;
    // how many whole cards the viewport shows, so the last page sits flush
    const perView = step ? Math.max(1, Math.round((track.parentElement.clientWidth + gap) / step)) : 1;
    const max = Math.max(0, cards.length - perView);
    const clamped = Math.min(Math.max(i, 0), max);
    maxRef.current = max;

    track.style.transform = `translate3d(${-clamped * step}px, 0, 0)`;
    return clamped;
  }, []);

  const go = (i) => {
    atRef.current = place(i);
    setAt(atRef.current);
    setMax(maxRef.current);
  };
  const page = (dir) => go(atRef.current + dir);

  // keep the row aligned as the breakpoint (and so cards-per-view) changes
  useEffect(() => {
    const sync = () => go(atRef.current);
    sync();
    window.addEventListener("resize", sync);
    return () => window.removeEventListener("resize", sync);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [place]);

  return (
    <section className="news" id="news">
      <div className="news-in">
        <div className="news-topbar">
          <Reveal className="news-head">
            <div className="news-tagwrap">
              <span className="news-tag">News</span>
              <TagMark />
            </div>
            <h2 className="news-h">In The News</h2>
            <p className="news-sub">
              The startups and founders we work with end up getting noticed
            </p>
          </Reveal>
        </div>

        {/* desktop arrows sit on the row's two edges, centred on the cards */}
        <div className="news-stage">
          <button
            className={`news-side news-side--prev${at === 0 ? " is-off" : ""}`}
            type="button"
            aria-label="Previous articles"
            aria-hidden={at === 0}
            tabIndex={at === 0 ? -1 : 0}
            onClick={() => page(-1)}
          >
            <NavArrow />
          </button>
          <button
            className={`news-side news-side--next${max !== null && at >= max ? " is-off" : ""}`}
            type="button"
            aria-label="Next articles"
            aria-hidden={max !== null && at >= max}
            tabIndex={max !== null && at >= max ? -1 : 0}
            onClick={() => page(1)}
          >
            <NavArrow />
          </button>

          <Reveal className="news-rail" as="div">
            <div className="news-grid" ref={trackRef}>
              {NEWS_ITEMS.map((item) => (
                <a
                  className="news-card"
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ "--img": `url('${item.img}')` }}
                  key={item.title}
                >
                  <span className="news-shot" aria-hidden="true" />
                  <span className="news-panel" aria-hidden="true" />
                  <span className="news-step" aria-hidden="true" />
                  <span className="news-bar" aria-hidden="true" />
                  <h3 className="news-title">{item.title}</h3>
                  <span className="news-read">
                    Read article
                    <ReadMark />
                  </span>
                </a>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
