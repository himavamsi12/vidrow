"use client";

import { useState } from "react";
import Mark from "./Mark";
import Reveal from "./Reveal";
import { PR_FILTERS, PR_NODES, PR_STAGES } from "../data/partnership";

// the hexagon, in the stage's 1440×1120 frame: a yellow band between the
// outer and inner outline, the six funding stages printed along it, and
// thin spokes from a small centre hexagon out to the band's inner corners.
// Corners run clockwise from the right-hand point.
const CENTER = [720, 560];
const OUTER_CORNERS = [
  [1260, 560],
  [990, 1027.7],
  [450, 1027.7],
  [180, 560],
  [450, 92.3],
  [990, 92.3],
];
const CORNERS = [
  [1221.4, 560],
  [970.7, 994.2],
  [469.3, 994.2],
  [218.6, 560],
  [469.3, 125.8],
  [970.7, 125.8],
];
// the small centre hexagon, its corners lined up with the outer ones
const CORE_CORNERS = [
  [747, 560],
  [733.5, 583.4],
  [706.5, 583.4],
  [693, 560],
  [706.5, 536.6],
  [733.5, 536.6],
];
const CORE = `M${CORE_CORNERS.map(([x, y]) => `${x},${y}`).join(" L")} Z`;

const pts = (list) => list.map(([x, y]) => `${x},${y}`).join(" ");
// segment s (in PR_STAGES order, clockwise from the top edge) is the edge
// between corners 4+s and 5+s: its stretch of the band, and its wedge from
// the centre hexagon's matching side out to that edge — stopping at the
// centre hexagon rather than running to a sharp point across it
const edge = (s) => [(4 + s) % 6, (5 + s) % 6];
const bandPiece = (s) => {
  const [a, b] = edge(s);
  return pts([OUTER_CORNERS[a], OUTER_CORNERS[b], CORNERS[b], CORNERS[a]]);
};
const wedge = (s) => {
  const [a, b] = edge(s);
  return pts([CORE_CORNERS[a], CORNERS[a], CORNERS[b], CORE_CORNERS[b]]);
};
// which segment a logo sits in, from its angle round the centre: the top
// edge (segment 0) spans 240°–300° in screen coordinates, each next one 60°
// further clockwise
const segmentOf = (node) => {
  const deg = ((Math.atan2(node.y, node.x) * 180) / Math.PI + 360) % 360;
  return Math.floor(((deg - 240 + 360) % 360) / 60);
};
// each stage label sits midway across the band on its edge, turned to run
// along it — clockwise from the top edge, matching PR_STAGES
const LABELS = [
  [720, 109.1, 0],
  [1110.5, 334.5, 60],
  [1110.5, 785.5, -60],
  [720, 1010.9, 0],
  [329.5, 785.5, 60],
  [329.5, 334.5, -60],
];

export default function Partnership() {
  const [activeCat, setActiveCat] = useState("all");
  const filtered = activeCat !== "all";
  // the segment under the pointer: it lifts out of the hexagon while every
  // other segment, its band stretch, label and logos, greys back
  const [hoverSeg, setHoverSeg] = useState(null);

  return (
    <section className="pr" id="partnership">
      <div className="pr-in">
        <Reveal className="pr-top">
          <div className="pr-head">
            <div className="pr-tagwrap">
              <span className="pr-tag">Inside the partnership</span>
              <Mark />
            </div>
            <h2 className="pr-h">
              A playbook that works <br />
              across industries
            </h2>
          </div>
          <div className="pr-filters" role="group" aria-label="Filter partners by industry">
            {PR_FILTERS.map((f) => (
              <button
                key={f.cat}
                className="pr-filter"
                aria-pressed={activeCat === f.cat}
                onClick={() => setActiveCat(f.cat)}
              >
                {f.label}
              </button>
            ))}
          </div>
        </Reveal>

        <div
          className={`pr-stage${filtered ? " filtered" : ""}${hoverSeg !== null ? " seg-hover" : ""}`}
          onMouseLeave={() => setHoverSeg(null)}
        >
          <svg className="pr-web" viewBox="0 0 1440 1120" aria-hidden="true">
            {/* the hover targets: one wedge per segment, out to the band */}
            {PR_STAGES.map((stage, s) => (
              <polygon
                key={`hit-${stage}`}
                className="hit"
                points={pts([CENTER, OUTER_CORNERS[edge(s)[0]], OUTER_CORNERS[edge(s)[1]]])}
                onMouseEnter={() => setHoverSeg(s)}
              />
            ))}
            {PR_STAGES.map((stage, s) => (
              <polygon key={`band-${stage}`} className="band" points={bandPiece(s)} />
            ))}
            {CORNERS.map(([x, y], i) => (
              <line key={i} className="spoke" x1={CENTER[0]} y1={CENTER[1]} x2={x} y2={y} />
            ))}
            <path className="core" d={CORE} />
            {PR_STAGES.map((stage, s) => {
              const [x, y, r] = LABELS[s];
              return (
                <text key={stage} x={x} y={y} transform={`rotate(${r} ${x} ${y})`}>
                  {stage}
                </text>
              );
            })}

            {/* the hovered segment, redrawn on top as a raised white piece
                with its own yellow band stretch and label */}
            {hoverSeg !== null && (
              <g className="lift" key={hoverSeg}>
                <polygon className="lift-face" points={wedge(hoverSeg)} />
                <polygon className="band on" points={bandPiece(hoverSeg)} />
                <text
                  className="on"
                  x={LABELS[hoverSeg][0]}
                  y={LABELS[hoverSeg][1]}
                  transform={`rotate(${LABELS[hoverSeg][2]} ${LABELS[hoverSeg][0]} ${LABELS[hoverSeg][1]})`}
                >
                  {PR_STAGES[hoverSeg]}
                </text>
              </g>
            )}
          </svg>
          {PR_NODES.map((node, i) => {
            const seg = segmentOf(node);
            return (
              <a
                key={`${node.label}-${i}`}
                className={`pr-node${activeCat === node.cat ? " on" : ""}${hoverSeg === seg ? " lit" : ""}`}
                href="#work"
                data-cat={node.cat}
                style={{ "--x": node.x, "--y": node.y, "--w": node.w, "--h": node.h }}
                aria-label={node.label}
                onMouseEnter={() => setHoverSeg(seg)}
              >
                <img src={node.logo} alt={node.label} loading="lazy" />
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
