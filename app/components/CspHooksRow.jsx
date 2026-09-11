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

// Desktop shows the row as a static 4-up grid — this only drives the mobile
// carousel, where the row becomes a horizontally scrolling strip and the
// arrows below step it one card at a time.
export default function CspHooksRow({ hooks }) {
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
      <div className="csp-hooks-row" ref={rowRef}>
        {hooks.map((h) => (
          <div className="csp-hookCard" key={h.n}>
            <span className="csp-hookNum">{h.n}</span>
            <h3 className="csp-hookTitle">{h.title}</h3>
            <p className="csp-hookDesc">{h.desc}</p>
          </div>
        ))}
      </div>

      <div className="csp-hooks-nav">
        <button
          type="button"
          className="csp-hooks-navBtn csp-hooks-navBtn--prev"
          aria-label="Previous hook"
          onClick={() => step(-1)}
        >
          <NavArrow />
        </button>
        <button
          type="button"
          className="csp-hooks-navBtn csp-hooks-navBtn--next"
          aria-label="Next hook"
          onClick={() => step(1)}
        >
          <NavArrow />
        </button>
      </div>
    </>
  );
}
