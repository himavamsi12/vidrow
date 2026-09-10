"use client";

import { useState } from "react";
import Mark from "./Mark";
import Reveal from "./Reveal";
import ReadArrow from "./ReadArrow";
import { FEATURED_WORK } from "../data/featuredWork";

// hover should only open a row on devices that actually have hover (mouse/
// trackpad) — on touch, the same mouseenter fires right before the tap's
// click, so relying on it makes opening feel accidental/inconsistent
// instead of a deliberate tap. The hover media feature alone isn't a
// reliable enough signal (some emulated/hybrid environments report
// hover:hover at narrow widths), so it's paired with the same 900px
// breakpoint the rest of the mobile layout switches on
const canHover = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(hover: hover)").matches &&
  window.innerWidth > 900;

export default function FeaturedWork() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="fw" id="featured">
      <div className="fw-in">
        <Reveal className="fw-head">
          <div className="fw-tagwrap">
            <span className="fw-tag">Featured work</span>
            <Mark />
          </div>
          <h2 className="fw-h">Featured Work</h2>
        </Reveal>

        <Reveal
          className="fw-list"
          onMouseLeave={() => {
            if (canHover()) setOpenIndex(0);
          }}
        >
          {FEATURED_WORK.map((item, i) => (
            <a
              key={item.id}
              className={`fw-row${openIndex === i ? " is-open" : ""}`}
              href={item.href || "#featured"}
              onMouseEnter={() => {
                if (canHover()) setOpenIndex(i);
              }}
              onFocus={() => setOpenIndex(i)}
              onClick={(e) => {
                if (!canHover()) {
                  // on touch, tapping the row only expands it — the case
                  // study is reached deliberately, through "read full story"
                  // inside the open row. (Tapping an <a> fires focus before
                  // click, and focus already opened the row, so an
                  // "is it open yet?" test would let the very first tap
                  // through to the link.)
                  if (!item.href || !e.target.closest(".fw-read")) e.preventDefault();
                  setOpenIndex(i);
                  return;
                }
                // with a pointer, hover has already opened the row — only a
                // deliberate second click follows the link
                if (openIndex !== i || !item.href) e.preventDefault();
                setOpenIndex(i);
              }}
            >
              <span className="fw-top">
                <span className="fw-brand">
                  <span className="fw-logo">
                    {item.logo.type === "text" ? (
                      <b>{item.logo.value}</b>
                    ) : (
                      <svg viewBox="0 0 32 32" aria-hidden="true">
                        <path
                          fill="#121212"
                          d="M7.6 24.4 20.2 11.8h-8.9V7h17.1v17.1h-4.8v-8.9L11 26.8z"
                        />
                      </svg>
                    )}
                  </span>
                  <span className="fw-id">
                    <span className="fw-name">{item.name}</span>
                    <span className="fw-cat">{item.category}</span>
                  </span>
                </span>

                <span className="fw-mini" aria-hidden="true">
                  <ReadArrow className="fw-arw fw-arwMini" />
                </span>
              </span>

              <div className="fw-extra" aria-hidden="true">
                {item.photos.map((p) => (
                  <figure className={`fw-ph ${p.cls}`} key={p.src}>
                    <img src={p.src} alt="" loading="lazy" width="276" height="238" />
                  </figure>
                ))}
                {item.plates.map((p) => (
                  <span className={`fw-plate ${p.cls}`} key={p.name}>
                    <b>{p.name}</b>
                    <span>{p.role}</span>
                  </span>
                ))}
              </div>

              <span className="fw-say">
                <span className="fw-line">{item.line}</span>
                <span className="fw-read">
                  Read full story <ReadArrow />
                </span>
              </span>

              {/* sibling of .fw-say rather than a child of .fw-extra so mobile
                  can stack it after the acid band; on desktop it still lands in
                  the same place, since .fw-extra is just inset:0 on the row */}
              <p className="fw-quote" aria-hidden="true">
                &ldquo; {item.quote} &rdquo;
              </p>
            </a>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
