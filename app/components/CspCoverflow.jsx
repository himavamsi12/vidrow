"use client";

import { useCallback, useEffect, useRef, useState } from "react";

// A small coverflow: the active slide sits flat and large in the middle, its
// neighbours angle away on either side with the edges of the page cutting
// them off. Clicking a side slide (or the arrow keys, or a swipe) brings it
// to the centre, and the row wraps round so there's always one each side.
export default function CspCoverflow({ slides }) {
  const [active, setActive] = useState(0);
  const n = slides.length;
  const touchX = useRef(null);

  const go = useCallback((dir) => setActive((a) => (a + dir + n) % n), [n]);

  // nudge along every few seconds until someone interacts with it
  const [auto, setAuto] = useState(true);
  useEffect(() => {
    if (!auto || n < 2) return;
    const reduce = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    const t = setInterval(() => go(1), 4500);
    return () => clearInterval(t);
  }, [auto, go, n]);

  const pick = (dir) => {
    setAuto(false);
    go(dir);
  };

  return (
    <div
      className="csp-cover"
      tabIndex={0}
      role="group"
      aria-roledescription="carousel"
      onKeyDown={(e) => {
        if (e.key === "ArrowLeft") pick(-1);
        if (e.key === "ArrowRight") pick(1);
      }}
      onTouchStart={(e) => {
        touchX.current = e.touches[0].clientX;
      }}
      onTouchEnd={(e) => {
        if (touchX.current === null) return;
        const dx = e.changedTouches[0].clientX - touchX.current;
        if (Math.abs(dx) > 40) pick(dx < 0 ? 1 : -1);
        touchX.current = null;
      }}
    >
      {slides.map((s, i) => {
        // position relative to the active slide, wrapped into -half..+half
        let rel = i - active;
        if (rel > n / 2) rel -= n;
        if (rel < -n / 2) rel += n;
        const pos = rel === 0 ? "is-center" : rel === -1 ? "is-left" : rel === 1 ? "is-right" : "is-away";

        return (
          <button
            type="button"
            key={s.src}
            className={`csp-coverSlide ${pos}`}
            aria-label={s.alt}
            aria-current={rel === 0 ? "true" : undefined}
            tabIndex={-1}
            onClick={() => {
              if (rel !== 0) pick(rel);
            }}
          >
            <img src={s.src} alt="" draggable="false" />
          </button>
        );
      })}
    </div>
  );
}
