"use client";

import { useRef } from "react";

/** The Deep Dives loop. Hovering it shows a left and a right arrow that step
 *  the drifting track back or forward by one card (by moving the CSS
 *  animation's own clock, so the loop keeps wrapping seamlessly). */
export default function CsRow({ children }) {
  const rowRef = useRef(null);
  const busy = useRef(false);

  const step = (dir) => {
    const row = rowRef.current;
    const track = row?.querySelector(".cs-rtrack");
    const card = row?.querySelector(".cs-card");
    const anim = track?.getAnimations()[0];
    if (!anim || !card || busy.current) return;
    const timing = anim.effect.getComputedTiming();
    const dur = timing.duration;
    const gap = parseFloat(getComputedStyle(card.parentElement).columnGap) || 0;
    // the loop travels half the track (one copy of the cards) per cycle
    const px = card.getBoundingClientRect().width + gap;
    const delta = (px / (track.scrollWidth / 2)) * dur * dir;
    const from = anim.currentTime;
    const t0 = performance.now();
    busy.current = true;
    const tick = (now) => {
      const p = Math.min(1, (now - t0) / 450);
      const e = 1 - Math.pow(1 - p, 3);
      let t = from + delta * e;
      anim.currentTime = ((t % dur) + dur) % dur;
      if (p < 1) requestAnimationFrame(tick);
      else busy.current = false;
    };
    requestAnimationFrame(tick);
  };

  return (
    <div className="cs-row" ref={rowRef}>
      {children}
      <button type="button" className="cs-arrow cs-arrow--l" aria-label="Previous stories" onClick={() => step(-1)}>
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 12H5M11 5l-7 7 7 7" /></svg>
      </button>
      <button type="button" className="cs-arrow cs-arrow--r" aria-label="Next stories" onClick={() => step(1)}>
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 12h15M13 5l7 7-7 7" /></svg>
      </button>
    </div>
  );
}
