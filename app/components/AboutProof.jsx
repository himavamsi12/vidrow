"use client";

import { useRef, useState } from "react";
import TagMark from "./TagMark";

// the black band of proof cards. On desktop the cards sit in a grid; on
// phones the track scrolls one card at a time, with arrows and a progress
// strip under it (hidden on desktop).
export default function AboutProof({ cards }) {
  const track = useRef(null);
  const [index, setIndex] = useState(0);

  const goTo = (i) => {
    const el = track.current;
    if (!el) return;
    const n = Math.max(0, Math.min(cards.length - 1, i));
    el.scrollTo({ left: el.children[n].offsetLeft - el.children[0].offsetLeft, behavior: "smooth" });
  };

  const onScroll = () => {
    const el = track.current;
    const step = el.children[1] ? el.children[1].offsetLeft - el.children[0].offsetLeft : el.clientWidth;
    setIndex(Math.max(0, Math.min(cards.length - 1, Math.round(el.scrollLeft / step))));
  };

  return (
    <div className="ab-proofRow">
      <div className="ab-proofTrack" ref={track} onScroll={onScroll}>
        {cards.map((c) => (
          <article className="ab-proofCard" key={c.tag}>
            <span className="ab-proofTab">
              <span className="ab-tagwrap">
                <span className="ab-tag">{c.tag}</span>
                <TagMark />
              </span>
            </span>
            <div className="ab-proofBody">
              <h3>{c.title}</h3>
              <p>{c.body}</p>
            </div>
          </article>
        ))}
      </div>

      <div className="ab-proofNav">
        <button type="button" className="ab-proofArrow" onClick={() => goTo(index - 1)} aria-label="Previous card">
          &larr;
        </button>
        <div className="ab-proofDots" aria-hidden="true">
          {cards.map((c, i) => (
            <span key={c.tag} className={i === index ? "is-on" : ""} />
          ))}
        </div>
        <button type="button" className="ab-proofArrow" onClick={() => goTo(index + 1)} aria-label="Next card">
          &rarr;
        </button>
      </div>
    </div>
  );
}
