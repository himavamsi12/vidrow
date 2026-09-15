"use client";

import { useEffect, useRef, useState } from "react";
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
  // which card's full testimonial is showing in the slide-in panel — null
  // when it's closed
  const [panelItem, setPanelItem] = useState(null);
  // on touch, focus (from tapping the <a>) fires before click and already
  // opens the row, so a plain "is it open yet?" check in onClick can't tell
  // a row's very first tap from a deliberate second one — this remembers
  // whether the row was already open before the tap that's about to focus it
  const wasOpenRef = useRef(true);

  // Escape closes the panel, and the page can't scroll behind it while
  // it's open — same two behaviors the mobile nav's own full-screen panel
  // uses
  useEffect(() => {
    if (!panelItem) return;
    const onKey = (e) => {
      if (e.key === "Escape") setPanelItem(null);
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [panelItem]);

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
              onFocus={() => {
                wasOpenRef.current = openIndex === i;
                setOpenIndex(i);
              }}
              onClick={(e) => {
                if (!canHover()) {
                  // on touch, the row's first tap only expands it; a second,
                  // deliberate tap on an already-open row follows the link
                  if (!item.href || !wasOpenRef.current) e.preventDefault();
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
                    {item.logo.type === "image" ? (
                      <img className="fw-logoTile" src={item.logo.src} alt={item.logo.alt} />
                    ) : item.logo.type === "text" ? (
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
                    {item.category && <span className="fw-cat">{item.category}</span>}
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
                    {p.role && <span>{p.role}</span>}
                  </span>
                ))}
              </div>

              <span className="fw-say">
                <span className="fw-line">{item.line}</span>
              </span>

              {/* sibling of .fw-say rather than a child of .fw-extra so mobile
                  can stack it after the acid band; on desktop it still lands in
                  the same place, since .fw-extra is just inset:0 on the row */}
              <div className="fw-quote">
                <p className="fw-quoteText">&ldquo; {item.quote} &rdquo;</p>
                <button
                  type="button"
                  className="fw-readCase"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setPanelItem(item);
                  }}
                >
                  <span>Read more</span>
                  <svg viewBox="0 0 40 40" aria-hidden="true">
                    <path fill="var(--violet)" d="M0 0 H40 V40 H26.667 V26.667 H13.333 V13.333 H0 Z" />
                  </svg>
                </button>
              </div>
            </a>
          ))}
        </Reveal>
      </div>

      <div
        className={`fw-panelOverlay${panelItem ? " is-open" : ""}`}
        onClick={() => setPanelItem(null)}
        aria-hidden={!panelItem}
      >
        <aside
          className="fw-panel"
          role="dialog"
          aria-modal="true"
          aria-label={panelItem ? `${panelItem.plates.map((p) => p.name).join(" & ")} on ${panelItem.name}` : undefined}
          onClick={(e) => e.stopPropagation()}
        >
          <button type="button" className="fw-panelClose" aria-label="Close" onClick={() => setPanelItem(null)}>
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path
                d="M5 5l14 14M19 5 5 19"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
              />
            </svg>
          </button>

          {panelItem && (
            <>
              <svg className="fw-panelMark" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fill="#0B0B0D"
                  d="M0 0h7v7H0zM8.5 0h7v7h-7zM17 0h7v7h-7zM8.5 8.5h7v7h-7zM17 8.5h7v7h-7zM17 17h7v7h-7z"
                />
              </svg>
              <p className="fw-panelQuote" data-lenis-prevent>
                {panelItem.quote}
              </p>

              {/* founders along the bottom edge: a pair overlaps left/right,
                  a single founder sits bottom-right — same cut-out + white
                  name plate as the row itself */}
              <div className={`fw-panelPeople${panelItem.photos.length > 1 ? " is-pair" : " is-solo"}`}>
                {panelItem.photos.map((ph, i) => (
                  <img
                    className={`fw-panelPh fw-panelPh${i + 1}`}
                    src={ph.src}
                    alt=""
                    key={ph.src}
                  />
                ))}
                {panelItem.plates.map((pl, i) => (
                  <span className={`fw-panelPlate fw-panelPlate${i + 1}`} key={pl.name}>
                    <b>{pl.name}</b>
                    {pl.role && <span>{pl.role}</span>}
                  </span>
                ))}
              </div>
            </>
          )}
        </aside>
      </div>
    </section>
  );
}
