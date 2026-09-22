"use client";

import { useState } from "react";
import Mark from "./Mark";
import Reveal from "./Reveal";
import { SW_FILTERS, SW_ITEMS } from "../data/selectedWork";

// deal the filtered items into groups of six; each group fills one bento
// block (two across the top, then two + a wide tile beside a tall one)
function toGroups(items) {
  const groups = [];
  for (let at = 0; at < items.length; at += 6) groups.push(items.slice(at, at + 6));
  return groups;
}

export default function SelectedWork() {
  const [activeCat, setActiveCat] = useState(SW_FILTERS[0].cat);
  // phones have no hover, so a tap shows a tile's logo + name overlay (and
  // a second tap, or a tap on another tile, hides it)
  const [tapped, setTapped] = useState(null);
  const groups = toGroups(SW_ITEMS.filter((item) => item.cats.includes(activeCat)));

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
              <h2 className="sw-h">Our Selected Works</h2>
            </div>
          </div>
          <div className="sw-filters" role="group" aria-label="Filter work by service">
            {SW_FILTERS.map((f) => (
              <button
                key={f.cat}
                className="sw-filter"
                aria-pressed={activeCat === f.cat}
                onClick={() => {
                  setActiveCat(f.cat);
                  setTapped(null);
                }}
              >
                {f.label}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="sw-field">
          <div className="sw-grid">
            {groups.map((group, g) => (
              <div className="sw-group" key={g}>
                {group.map((item, i) => (
                  <a
                    key={item.img + i}
                    className={`sw-item${tapped === item.img + i ? " is-open" : ""}`}
                    href="#work"
                    onClick={(e) => {
                      if (!window.matchMedia("(max-width: 640px)").matches) return;
                      e.preventDefault();
                      setTapped((t) => (t === item.img + i ? null : item.img + i));
                    }}
                  >
                    <span className="sw-shot">
                      <img
                        src={item.img}
                        alt={item.alt}
                        loading="lazy"
                        style={item.pos ? { objectPosition: item.pos } : undefined}
                      />
                      <span className="sw-over">
                        <img
                          className="sw-logo"
                          src={item.logo}
                          alt=""
                          aria-hidden="true"
                          style={item.logoScale ? { "--ls": item.logoScale } : undefined}
                        />
                        <span className="sw-overLine">
                          <span>{item.title}</span>
                          <span className="sw-dash" aria-hidden="true" />
                          <span>{item.client}</span>
                        </span>
                      </span>
                    </span>
                  </a>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
