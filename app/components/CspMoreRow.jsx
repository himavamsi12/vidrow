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
//
// `stories` takes either the legacy shape (plain numbers — falls back to
// the placeholder CuriousJr card) or real story objects:
// { key, href, image, imageAlt, logoType: "image" | "text", logoSrc,
//   logoAlt, brand, stat, statLabel, desc }
//
// `cta` is the same "see all case studies" element the header shows on
// desktop — passed through here too because on the mobile carousel it
// moves down next to the step arrows instead (see .csp-more-nav's
// max-width:760px rule); .csp-more-nav itself stays hidden above that
// width, so there's no separate visibility toggle needed for its copy.
export default function CspMoreRow({ stories, cta }) {
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
        {stories.map((s, i) => {
          const story = typeof s === "object" ? s : null;
          const key = story?.key ?? s;

          return (
            <a className="csp-moreCard" href={story?.href ?? "/#deepdive"} key={key}>
              <span className={`csp-moreShot${story ? " csp-moreShot--wide" : ""}`}>
                <img src={story?.image ?? "/selected/c.png"} alt={story?.imageAlt ?? ""} loading="lazy" />
              </span>

              {story?.logoType === "image" ? (
                <span className="csp-moreBrand csp-moreBrand--img">
                  <img src={story.logoSrc} alt={story.logoAlt ?? story.brand ?? ""} />
                </span>
              ) : (
                <span className="csp-moreBrand">
                  {story ? (
                    story.brand
                  ) : (
                    <>
                      Curious<em>Jr</em>
                    </>
                  )}
                </span>
              )}

              <span className="csp-moreStat">
                <b>{story?.stat ?? "10x"}</b> {story?.statLabel ?? "ROI"}
              </span>
              <p className="csp-moreDesc">
                {story?.desc ??
                  "We rebuilt the acquisition funnel from the ground up, focusing on regional influencers and hyper-local performance creatives."}
              </p>
              <span className="csp-moreRead">
                Read full story
                <ReadMark />
              </span>
            </a>
          );
        })}
      </div>

      <div className="csp-more-nav">
        {cta}
        <div className="csp-more-navBtns">
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
      </div>
    </>
  );
}
