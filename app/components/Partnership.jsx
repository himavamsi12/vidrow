"use client";

import { useState } from "react";
import Mark from "./Mark";
import Reveal from "./Reveal";
import { PR_FILTERS, PR_NODES, PR_STAGES } from "../data/partnership";

// the hexagon, in the stage's 1440×1120 frame: a yellow band between the
// outer and inner outline, the six funding stages printed along it, and
// thin spokes from a small centre hexagon out to the band's inner corners
const OUTER = "M1260,560 L990,1027.7 L450,1027.7 L180,560 L450,92.3 L990,92.3 Z";
const INNER = "M1221.4,560 L970.7,994.2 L469.3,994.2 L218.6,560 L469.3,125.8 L970.7,125.8 Z";
const CORE = "M747,560 L733.5,583.4 L706.5,583.4 L693,560 L706.5,536.6 L733.5,536.6 Z";
const CORNERS = [
  [1221.4, 560],
  [970.7, 994.2],
  [469.3, 994.2],
  [218.6, 560],
  [469.3, 125.8],
  [970.7, 125.8],
];
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

        <div className={`pr-stage${filtered ? " filtered" : ""}`}>
          <svg className="pr-web" viewBox="0 0 1440 1120" aria-hidden="true">
            <path className="band" d={`${OUTER} ${INNER}`} fillRule="evenodd" />
            {CORNERS.map(([x, y], i) => (
              <line key={i} className="spoke" x1="720" y1="560" x2={x} y2={y} />
            ))}
            <path className="core" d={CORE} />
            {PR_STAGES.map((stage, i) => {
              const [x, y, r] = LABELS[i];
              return (
                <text key={stage} x={x} y={y} transform={`rotate(${r} ${x} ${y})`}>
                  {stage}
                </text>
              );
            })}
          </svg>
          {PR_NODES.map((node, i) => (
            <a
              key={`${node.label}-${i}`}
              className={`pr-node${activeCat === node.cat ? " on" : ""}`}
              href="#work"
              data-cat={node.cat}
              style={{ "--x": node.x, "--y": node.y, "--w": node.w, "--h": node.h }}
              aria-label={node.label}
            >
              <img src={node.logo} alt={node.label} loading="lazy" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
