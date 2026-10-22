"use client";
import { useLenis } from "lenis/react";

/** Under the Deep Dives cards: a way back to the top of the page and a cue
 *  that the page carries on below, so the section never reads as an end. */
export default function CsWayfind() {
  const lenis = useLenis();

  const go = (e, target) => {
    if (!lenis) return;
    e.preventDefault();
    lenis.scrollTo(target);
  };

  return (
    <div className="cs-way">
      <a className="cs-wayLink" href="#top" onClick={(e) => go(e, 0)}>
        <span className="cs-wayArrow" aria-hidden="true">&uarr;</span>
        Back to top
      </a>
      <a className="cs-wayLink cs-wayLink--down" href="#news" onClick={(e) => go(e, "#news")}>
        Keep scrolling
        <span className="cs-wayArrow" aria-hidden="true">&darr;</span>
      </a>
    </div>
  );
}
