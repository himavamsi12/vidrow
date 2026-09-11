"use client";

import { useEffect, useState } from "react";
import Mark from "./Mark";
import Reveal from "./Reveal";
import { CASE_STUDIES } from "../data/caseStudies";

const AUTOPLAY_MS = 4000;

// the wall is a 16 x 2 cell grid; these turn cell counts into lengths along
// it, accounting for the gap that sits between every pair of cells. Each
// takes an inward px offset `d` (0 for the tile's own outline, 1 for the
// fill drawn inside it) so the border shows as a 1px rim of the tile's own
// background peeking out from under the fill.
const edge = (n, d = 0) => `calc(${n} * (var(--cell) + var(--tgap)) + ${d}px)`; // left edge of cell n, nudged right by d
const run = (n, d = 0) => `calc(${n} * var(--cell) + ${n - 1} * var(--tgap) - ${d}px)`; // right edge of an n-cell run, nudged left by d
const rowA = (d = 0) => `calc(var(--rowh) - ${d}px)`; // bottom of the top row, nudged up by d
const rowB = (d = 0) => `calc(var(--rowh) + var(--tgap) + ${d}px)`; // top of the bottom row, nudged down by d
const top0 = (d = 0) => `${d}px`; // the wall's own top, nudged down by d
const bottom100 = (d = 0) => `calc(100% - ${d}px)`; // the wall's own bottom, nudged up by d

// A piece is the union of its top run and its bottom run, joined through the
// gap band wherever the two overlap — traced clockwise from the top-left.
// `d` insets every edge inward by that many px along its own normal (rather
// than shifting the whole shape diagonally), which is what makes the fill
// polygon (d=1) recede correctly from concave/reflex corners — a step-shaped
// tile's shoulder — and not just its convex outer corners.
function pieceClip({ top, bottom }, start, d = 0) {
  const bS = bottom[0] - start;
  const bE = bottom[1] - start + 1;
  if (!top) {
    return `polygon(${edge(bS, d)} ${rowB(d)}, ${run(bE, d)} ${rowB(d)}, ${run(bE, d)} ${bottom100(d)}, ${edge(bS, d)} ${bottom100(d)})`;
  }
  const tS = top[0] - start;
  const tE = top[1] - start + 1;
  const oS = Math.max(tS, bS);
  const oE = Math.min(tE, bE);
  return `polygon(
    ${edge(tS, d)} ${top0(d)},
    ${run(tE, d)} ${top0(d)},
    ${run(tE, d)} ${rowA(d)},
    ${run(oE, d)} ${rowA(d)},
    ${run(oE, d)} ${rowB(d)},
    ${run(bE, d)} ${rowB(d)},
    ${run(bE, d)} ${bottom100(d)},
    ${edge(bS, d)} ${bottom100(d)},
    ${edge(bS, d)} ${rowB(d)},
    ${edge(oS, d)} ${rowB(d)},
    ${edge(oS, d)} ${rowA(d)},
    ${edge(tS, d)} ${rowA(d)}
  )`;
}

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

export default function CaseStudies() {
  const [at, setAt] = useState(0);
  // bumped on every manual pick, so the timer restarts from the card the
  // user chose instead of advancing again a moment later
  const [restart, setRestart] = useState(0);

  // the deck advances on its own; picking a piece below just jumps it and
  // resets the clock from there
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(() => {
      setAt((i) => (i + 1) % CASE_STUDIES.length);
    }, AUTOPLAY_MS);
    return () => clearInterval(id);
  }, [restart]);

  const pick = (i) => {
    setAt(i);
    setRestart((n) => n + 1);
  };

  // mobile steps the deck with arrows instead of the tetris wall, which needs
  // its designed 16-column width to interlock
  const step = (dir) => pick((at + dir + CASE_STUDIES.length) % CASE_STUDIES.length);

  return (
    <section className="cs" id="deepdive">
      <div className="cs-deco" aria-hidden="true">
        <span className="cs-blk" style={{ left: "86.458%", top: 0 }} />
        <span className="cs-blk" style={{ left: "calc(86.458% + 72 * var(--k))", top: 0 }} />
        <span
          className="cs-blk"
          style={{ left: "calc(86.458% + 72 * var(--k))", top: "calc(72 * var(--k))" }}
        />
        <span className="cs-blk" style={{ left: "3.611%", bottom: 0 }} />
        <span
          className="cs-blk"
          style={{ left: "calc(3.611% + 72 * var(--k))", bottom: 0 }}
        />
        <span
          className="cs-blk"
          style={{ left: "calc(3.611% + 144 * var(--k))", bottom: 0 }}
        />
        <span
          className="cs-blk"
          style={{ left: "calc(3.611% + 72 * var(--k))", bottom: "calc(72 * var(--k))" }}
        />
      </div>

      <Reveal className="cs-head">
        <div className="cs-tagwrap">
          <span className="cs-tag">Case study</span>
          <Mark />
        </div>
        <h2 className="cs-h">Deep Dives</h2>
        <p className="cs-sub">The latest stories, ideas, and shifts worth paying attention to.</p>
      </Reveal>

      <div className="cs-deck" id="csDeck">
        {CASE_STUDIES.map((c, i) => (
          <article className={`cs-card${i === at ? " on" : ""}`} key={c.title}>
            <div className="cs-cardL">
              <div>
                <div className="cs-brand">
                  {c.brand}
                  {c.brandEm && <em>{c.brandEm}</em>}
                </div>
                <h3 className="cs-title">{c.title}</h3>
                <p className="cs-copy">{c.copy}</p>
              </div>
              <div className="cs-stats">
                <span className="cs-band cs-band-a" />
                <span className="cs-band cs-band-b" />
                <span className="cs-fig cs-fig-a">
                  <b>{c.figA.value}</b>
                  <span>{c.figA.label}</span>
                </span>
                <span className="cs-fig cs-fig-b">
                  <b>{c.figB.value}</b>
                  <span>{c.figB.label}</span>
                </span>
              </div>
            </div>
            <span className="cs-shot">
              <img src={c.img} alt="" loading="lazy" width="326" height="336" />
            </span>
          </article>
        ))}
      </div>

      <div className="cs-nav">
        <button type="button" className="prev" aria-label="Previous case study" onClick={() => step(-1)}>
          <NavArrow />
        </button>
        <button type="button" className="next" aria-label="Next case study" onClick={() => step(1)}>
          <NavArrow />
        </button>
      </div>

      <div className="cs-lgwrap">
        <div className="cs-loggrid" role="tablist" aria-label="Choose a case study">
          {CASE_STUDIES.map((c, i) => {
            const { top, bottom, logo } = c.tile;
            const start = Math.min(top ? top[0] : Infinity, bottom[0]);
            const end = Math.max(top ? top[1] : -Infinity, bottom[1]);
            const clipPath = pieceClip(c.tile, start);
            const fillClipPath = pieceClip(c.tile, start, 1);
            const lit = logo === "top" ? top : bottom;

            return (
              <button
                key={c.logoAlt}
                type="button"
                role="tab"
                aria-selected={i === at}
                className={`cs-logtile${i === at ? " on" : ""}`}
                style={{ gridColumn: `${start} / ${end + 1}`, gridRow: "1 / span 2", clipPath }}
                onClick={() => pick(i)}
              >
                <span className="cs-logtile-fill" style={{ clipPath: fillClipPath }} aria-hidden="true" />
                <img
                  src={c.logo}
                  alt={c.logoAlt}
                  style={{
                    left: edge(lit[0] - start),
                    width: run(lit[1] - lit[0] + 1),
                    top: logo === "top" ? 0 : rowB(),
                  }}
                />
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
