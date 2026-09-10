"use client";

import { useState } from "react";
import Mark from "./Mark";
import Reveal from "./Reveal";
import { PR_FILTERS, PR_NODES } from "../data/partnership";

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
            <h2 className="pr-h">This is what a real growth partnership looks like.</h2>
          </div>
          <div className="pr-filters" role="group" aria-label="Filter partners by industry">
            {PR_FILTERS.map((f) => (
              <button
                key={f.cat}
                className="pr-filter"
                aria-pressed={activeCat === f.cat}
                onClick={() => setActiveCat(f.cat)}
              >
                <span className="pr-filter-n">{f.n}</span>
                <span className="pr-filter-l">{f.label}</span>
              </button>
            ))}
          </div>
        </Reveal>

        <div className={`pr-stage${filtered ? " filtered" : ""}`}>
          <svg className="pr-web" viewBox="0 0 1440 1120" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
            <path className="hex" d="M1320.0,560.0 L1020.0,20.0 L420.0,20.0 L120.0,560.0 L420.0,1100.0 L1020.0,1100.0 Z" />
            <line className="spoke" x1="720" y1="560" x2="1320.0" y2="560.0" />
            <line className="spoke" x1="720" y1="560" x2="1020.0" y2="1100.0" />
            <line className="spoke" x1="720" y1="560" x2="420.0" y2="1100.0" />
            <line className="spoke" x1="720" y1="560" x2="120.0" y2="560.0" />
            <line className="spoke" x1="720" y1="560" x2="420.0" y2="20.0" />
            <line className="spoke" x1="720" y1="560" x2="1020.0" y2="20.0" />
            <path className="ring" d="M882.75,560.0 L801.4,700.9 L638.6,700.9 L557.25,560.0 L638.6,419.1 L801.4,419.1 Z" />
            <text x="720.0" y="419.1" transform="rotate(0 720.0 419.1)">PRE-SEED</text>
            <text x="842.1" y="489.5" transform="rotate(60 842.1 489.5)">SEED</text>
            <text x="842.1" y="630.5" transform="rotate(-60 842.1 630.5)">SERIES A</text>
            <text x="720.0" y="700.9" transform="rotate(0 720.0 700.9)">SERIES B</text>
            <text x="597.9" y="630.5" transform="rotate(60 597.9 630.5)">SERIES C</text>
            <text x="597.9" y="489.5" transform="rotate(-60 597.9 489.5)">SERIES D+</text>
          </svg>
          {PR_NODES.map((node, i) => (
            <a
              key={`${node.label}-${i}`}
              className={`pr-node${activeCat === node.cat ? " on" : ""}`}
              href="#work"
              data-cat={node.cat}
              style={{ "--x": node.x, "--y": node.y }}
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
