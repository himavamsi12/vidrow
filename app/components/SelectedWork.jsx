"use client";

import { useState } from "react";
import Mark from "./Mark";
import Reveal from "./Reveal";
import { SW_FILTERS, SW_ITEMS } from "../data/selectedWork";

export default function SelectedWork() {
  const [activeCat, setActiveCat] = useState("all");

  return (
    <section className="sw" id="work">
      <div className="sw-in">
        <Reveal className="sw-head">
          <div className="sw-headL">
            <div className="sw-tagwrap">
              <span className="sw-tag">Selected Work</span>
              <Mark />
            </div>
            <div className="sw-titleRow">
              <h2 className="sw-h">
                Our Selected
                <br className="sw-hBreak" />
                Works
              </h2>
              <a className="sw-viewAll" href="#work">
                View all
              </a>
            </div>
          </div>
          <div className="sw-filters" role="group" aria-label="Filter work by industry">
            {SW_FILTERS.map((f) => (
              <button
                key={f.cat}
                className="sw-filter"
                aria-pressed={activeCat === f.cat}
                onClick={() => setActiveCat(f.cat)}
              >
                {f.label}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="sw-field">
          <div className="sw-grid">
            {SW_ITEMS.map((item, i) => (
              <a
                key={item.title + i}
                className="sw-item"
                href="#work"
                data-cat={item.cat}
                hidden={activeCat !== "all" && item.cat !== activeCat}
                style={{ "--ar": item.ar }}
              >
                <span className="sw-shot">
                  <img
                    src={item.img}
                    alt={item.alt}
                    loading="lazy"
                    width="492"
                    height="298"
                  />
                  {item.tag && (
                    <img className="sw-brandTag" src={item.tag} alt="" aria-hidden="true" />
                  )}
                </span>
                <span className="sw-meta">
                  <span className="sw-title">{item.title}</span>
                  <span className="sw-client">{item.credit}</span>
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
