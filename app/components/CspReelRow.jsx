"use client";

import { useCallback, useRef } from "react";

function NavArrow() {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true">
      <path
        d="M6 16h20M19 9l7 7-7 7"
        fill="none"
        stroke="#1A1C1C"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// Desktop shows the row as a static grid — this only drives the mobile
// carousel, where the row becomes a horizontally scrolling strip of
// full-width cards and the arrows below step it one card at a time.
export default function CspReelRow({ ads, four }) {
  const rowRef = useRef(null);

  const step = useCallback((dir) => {
    const row = rowRef.current;
    if (!row) return;
    const cards = [...row.children];
    if (cards.length < 2) return;
    const cardStep = cards[1].offsetLeft - cards[0].offsetLeft;
    row.scrollBy({ left: dir * cardStep, behavior: "smooth" });
  }, []);

  return (
    <>
      <div className={`csp-reel-row${four ? " csp-reel-row--4" : ""}`} ref={rowRef}>
        {ads.map((ad) => (
          <div className="csp-reelCard" key={ad.label}>
            <span className="csp-reelPlaceholder" aria-hidden="true" />
            <span className="csp-reelPlay" aria-hidden="true">
              <span />
            </span>
            <span className="csp-reelLabel">{ad.label}</span>
          </div>
        ))}
      </div>

      <div className="csp-reel-nav">
        <button
          type="button"
          className="csp-reel-navBtn csp-reel-navBtn--prev"
          aria-label="Previous video"
          onClick={() => step(-1)}
        >
          <NavArrow />
        </button>
        <button
          type="button"
          className="csp-reel-navBtn csp-reel-navBtn--next"
          aria-label="Next video"
          onClick={() => step(1)}
        >
          <NavArrow />
        </button>
      </div>
    </>
  );
}
