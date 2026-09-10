"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Mark from "./Mark";
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

// the site's pixel staircase, in violet — same mark the hero CTA uses
function ReadMark() {
  return (
    <svg viewBox="0 0 40 40" aria-hidden="true">
      <g fill="var(--violet)">
        <rect x="10" y="10" width="6" height="6" />
        <rect x="17" y="10" width="6" height="6" />
        <rect x="24" y="10" width="6" height="6" />
        <rect x="17" y="17" width="6" height="6" />
        <rect x="24" y="17" width="6" height="6" />
        <rect x="24" y="24" width="6" height="6" />
      </g>
    </svg>
  );
}

export default function News() {
  const trackRef = useRef(null);
  // index of the leftmost visible card
  const [at, setAt] = useState(0);

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

    track.style.transform = `translate3d(${-clamped * step}px, 0, 0)`;
    return clamped;
  }, []);

  const page = (dir) => setAt((i) => place(i + dir));

  // keep the row aligned as the breakpoint (and so cards-per-view) changes
  useEffect(() => {
    setAt((i) => place(i));
    const onResize = () => setAt((i) => place(i));
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [place]);

  return (
    <section className="news" id="news">
      <div className="news-in">
        <div className="news-topbar">
          <Reveal className="news-head">
            <div className="news-tagwrap">
              <span className="news-tag">News</span>
              <Mark />
            </div>
            <h2 className="news-h">Trends worth knowing</h2>
            <p className="news-sub">
              The latest stories, ideas, and shifts worth paying attention to.
            </p>
          </Reveal>

          <div className="news-nav">
            <button className="prev" type="button" aria-label="Previous articles" onClick={() => page(-1)}>
              <NavArrow />
            </button>
            <button className="next" type="button" aria-label="Next articles" onClick={() => page(1)}>
              <NavArrow />
            </button>
          </div>
        </div>

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
    </section>
  );
}
