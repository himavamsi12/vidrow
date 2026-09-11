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
            <path className="hex" d="M1260.0,560.0 L990.0,74.0 L450.0,74.0 L180.0,560.0 L450.0,1046.0 L990.0,1046.0 Z" />
            <line className="spoke" x1="720" y1="560" x2="1260.0" y2="560.0" />
            <line className="spoke" x1="720" y1="560" x2="990.0" y2="1046.0" />
            <line className="spoke" x1="720" y1="560" x2="450.0" y2="1046.0" />
            <line className="spoke" x1="720" y1="560" x2="180.0" y2="560.0" />
            <line className="spoke" x1="720" y1="560" x2="450.0" y2="74.0" />
            <line className="spoke" x1="720" y1="560" x2="990.0" y2="74.0" />
            <path className="ring" d="M825.8,560.0 L772.9,651.6 L667.1,651.6 L614.2,560.0 L667.1,468.4 L772.9,468.4 Z" />
            <text x="720.0" y="468.4" transform="rotate(0 720.0 468.4)">PRE-SEED</text>
            <text x="799.4" y="514.2" transform="rotate(60 799.4 514.2)">SEED</text>
            <text x="799.4" y="605.8" transform="rotate(-60 799.4 605.8)">SERIES A</text>
            <text x="720.0" y="651.6" transform="rotate(0 720.0 651.6)">SERIES B</text>
            <text x="640.6" y="605.8" transform="rotate(60 640.6 605.8)">SERIES C</text>
            <text x="640.6" y="514.2" transform="rotate(-60 640.6 514.2)">SERIES D+</text>
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
