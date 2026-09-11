"use client";

import { useCallback, useRef } from "react";

// the site's solid step mark, in violet — same glyph WyMark and News's
// "Read article" use
function ReadMark() {
  return (
    <svg viewBox="0 0 40 40" aria-hidden="true">
      <path fill="#715BE4" d="M0 0 H40 V40 H26.667 V26.667 H13.333 V13.333 H0 Z" />
    </svg>
  );
}

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

// Desktop shows the row as a static 3-up grid — this only drives the mobile
// carousel, where the row becomes a horizontally scrolling strip of
// full-width cards and the arrows below step it one card at a time.
export default function CspMoreRow({ stories }) {
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
      <div className="csp-more-row" ref={rowRef}>
        {stories.map((i) => (
          <a className="csp-moreCard" href="/#deepdive" key={i}>
            <span className="csp-moreShot">
              <img src="/selected/c.png" alt="" loading="lazy" />
            </span>
            <span className="csp-moreBrand">
              Curious<em>Jr</em>
            </span>
            <span className="csp-moreStat">
              <b>10x</b> ROI
            </span>
            <p className="csp-moreDesc">
              We rebuilt the acquisition funnel from the ground up, focusing on regional
              influencers and hyper-local performance creatives.
            </p>
            <span className="csp-moreRead">
              Read full story
              <ReadMark />

            </span>
          </a>
        ))}
      </div>

      <div className="csp-more-nav">
        <button
          type="button"
          className="csp-more-navBtn csp-more-navBtn--prev"
          aria-label="Previous story"
          onClick={() => step(-1)}
        >
          <NavArrow />
        </button>
        <button
          type="button"
          className="csp-more-navBtn csp-more-navBtn--next"
          aria-label="Next story"
          onClick={() => step(1)}
        >
          <NavArrow />
        </button>
      </div>
    </>
  );
}
