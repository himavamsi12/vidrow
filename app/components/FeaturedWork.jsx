"use client";

import { useEffect, useRef } from "react";
import { useLenis } from "lenis/react";
import TagMark from "./TagMark";
import Reveal from "./Reveal";
import { FEATURED_WORK } from "../data/featuredWork";

// the founders in a card's photo, for its alt text: "Ashish Sharma and Aman
// Munka, Helium Smart Air"
const founderAlt = (item) =>
  `${(item.plates || []).map((p) => p.name).join(" and ")}${item.plates?.length ? ", " : ""}${item.name}`;

// the heavy block quote mark that opens each testimonial
function QuoteMark() {
  return (
    <svg className="fw2-mark" viewBox="0 0 160 100" aria-hidden="true">
      <path
        fill="#0B0B0D"
        d="M0 0h64v24H32v24h32v52H0zM96 0h64v24h-32v24h32v52H96z"
      />
    </svg>
  );
}

// **bold** runs inside a testimonial paragraph
function Rich({ text }) {
  return text
    .split(/(\*\*[^*]+\*\*)/)
    .filter(Boolean)
    .map((part, i) =>
      part.startsWith("**") ? <b key={i}>{part.slice(2, -2)}</b> : <span key={i}>{part}</span>
    );
}

// the white tetris ground of every card, measured off the 1440×640 design.
// Drawn as one SVG stretched over the card, so the pieces butt together
// with no hairline seams at any width.
const GROUND = [
  [362, 72, 194, 97],
  [246, 131, 310, 38],
  [246, 169, 194, 59],
  [440, 180, 54, 48],
  [494, 206, 97, 22],
  [300, 228, 291, 27],
  [615, 158, 98, 119],
  [300, 255, 413, 22],
  [397, 277, 316, 26],
  [322, 303, 194, 96],
  [576, 303, 137, 48],
  [576, 351, 98, 97],
  [0, 362, 86, 96],
  [0, 458, 172, 62],
  [0, 520, 258, 32],
  [852, 106, 588, 534], // quote panel (its top sits 65px under the chip's)
  [662, 552, 190, 88], // step off the panel's bottom-left
];

function Ground() {
  return (
    <svg
      className="fw2-ground"
      viewBox="0 0 1440 640"
      preserveAspectRatio="none"
      shapeRendering="crispEdges"
      aria-hidden="true"
    >
      {GROUND.map(([x, y, w, h], i) => (
        <rect key={i} x={x} y={y} width={w} height={h} />
      ))}
    </svg>
  );
}

/**
 * Featured work: one acid card per company, each a tetris
 * arrangement of white blocks — logo, founder cut-out, headline, and the
 * full testimonial with its author down the right. The heading sticks at
 * the top of the section; each card rests as its row and grows into the
 * full card while the one above it sinks away under the heading.
 */
export default function FeaturedWork() {
  const stackRef = useRef(null);
  const updateRef = useRef(null);
  // run the layout pass inside Lenis's own frame, straight after it moves
  // the page, so the cards never trail the smooth scroll by a frame
  useLenis(() => updateRef.current?.());

  // a stacking deck: every card is a full screen pinned under the sticky
  // heading, and each next card slides up over the one before it, all on
  // plain CSS sticky. The only thing measured is the heading's height, which
  // the cards pin under (--headH). That runs once per Lenis frame (above),
  // and only writes when the height has actually changed, so a fast scroll
  // through the deck never forces the browser to redo layout mid-frame.
  useEffect(() => {
    const stack = stackRef.current;
    if (!stack) return;
    const head = stack.parentElement.querySelector(".fw2-head");

    let lastH = -1;
    let frame = 0;
    const update = () => {
      frame = 0;
      const headH = head ? head.offsetHeight : 0;
      if (headH === lastH) return;
      lastH = headH;
      stack.style.setProperty("--headH", `${headH}px`);
    };
    const onResize = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    updateRef.current = update;

    update();
    const ro = head ? new ResizeObserver(onResize) : null;
    ro?.observe(head);
    window.addEventListener("resize", onResize);
    return () => {
      if (frame) cancelAnimationFrame(frame);
      updateRef.current = null;
      ro?.disconnect();
      window.removeEventListener("resize", onResize);
    };
  }, []);

  // the longest testimonials (ApnaMart's, say) run past their panel. Rather
  // than letting one card scroll while the rest don't, each quote's type is
  // stepped down until it fits its own panel — the shorter ones keep the
  // design's size untouched.
  useEffect(() => {
    const stack = stackRef.current;
    if (!stack) return;
    const quotes = [...stack.querySelectorAll(".fw2-quoteText")];

    const fit = () => {
      quotes.forEach((q) => {
        q.style.fontSize = "";
        const start = parseFloat(getComputedStyle(q).fontSize);
        let size = start;
        // 12px is the floor: below that the quote stops being readable and
        // it stops there rather than shrinking further
        while (q.scrollHeight > q.clientHeight + 1 && size > 12) {
          size -= 0.5;
          q.style.fontSize = `${size}px`;
        }
      });
    };

    fit();
    window.addEventListener("resize", fit);
    // re-run once webfonts land, since they change the wrapping
    document.fonts?.ready.then(fit).catch(() => {});
    return () => window.removeEventListener("resize", fit);
  }, []);

  return (
    <section className="fw2">
      <Reveal className="fw2-head">
        <div className="fw2-tagwrap">
          <span className="fw2-tag">Testimonials</span>
          <TagMark />
        </div>
        <h2 className="fw2-h">Founders who partnered with us</h2>
      </Reveal>

      <div className="fw2-stack" ref={stackRef}>
        {FEATURED_WORK.map((item) => {
          const founder = item.plates[0];
          const photo = item.photos[0];
          // testimonials carry their paragraph breaks as blank lines
          const paras = item.quote.split(/\n{2,}/);

          return (
            <article className="fw2-card" key={item.id} style={{ "--lwn": ((item.deskLogo || item.logo).w ?? 68) / 100 }}>
              <div className="fw2-full">
                <div className="fw2-frame">
                  <Ground />
                  <span className="fw2-brand" aria-hidden="true" />

                  <span className={`fw2-logo${(item.deskLogo || item.logo).sq ? " fw2-logo--sq" : ""}`} style={{ "--lw": `${(item.deskLogo || item.logo).w ?? 68}%` }}>
                    <img loading="lazy" decoding="async" src={(item.deskLogo || item.logo).src} alt={(item.deskLogo || item.logo).alt} />
                  </span>

                  <figure className="fw2-photo">
                    {/* loaded up front and decoded off the main thread, so no
                        card's photo is fetched and decoded mid-scroll as it
                        slides in */}
                    <img src={photo.src} alt={founderAlt(item)} loading="eager" decoding="async" />
                  </figure>

                  <h3 className="fw2-headline">{item.line}</h3>

                  <span className="fw2-chip">
                    <QuoteMark />
                  </span>

                  <div className="fw2-quote">
                    <div className="fw2-quoteText">
                      {paras.map((p, i) => (
                        <p key={i}><Rich text={p} /></p>
                      ))}
                    </div>
                    <div className="fw2-by">
                      <b>{founder.name}</b>
                      {founder.role && <span>{founder.role}{founder.company && `, ${founder.company}`}</span>}
                    </div>
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
