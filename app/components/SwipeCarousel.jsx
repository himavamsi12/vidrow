"use client";

import { useEffect, useRef } from "react";

const STEP_MS = 3500; // time each card stays before the next slides in
const RESUME_MS = 6000; // after a swipe, how long before auto-advance resumes

// A row of cards that the page's CSS can turn into a sideways, snap-scrolling
// strip (overflow-x + scroll-snap). Whenever it actually overflows sideways
// (on phones), it advances one card at a time on its own while on screen,
// and a swipe takes over and pauses it for a moment. Where the CSS lays the
// cards out as a normal grid (desktop), nothing overflows and it stays still.
export default function SwipeCarousel({ className, children }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let visible = false;
    let pausedUntil = 0;
    const pause = () => {
      pausedUntil = Date.now() + RESUME_MS;
    };

    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
    }, { threshold: 0.5 });
    io.observe(el);

    const tick = setInterval(() => {
      if (!visible || Date.now() < pausedUntil) return;
      const max = el.scrollWidth - el.clientWidth;
      if (max <= 1) return; // laid out as a grid: nothing to scroll
      const card = el.firstElementChild;
      const step = card ? card.getBoundingClientRect().width + parseFloat(getComputedStyle(el).columnGap || 0) : el.clientWidth;
      const next = el.scrollLeft + step > max + 1 ? 0 : el.scrollLeft + step;
      el.scrollTo({ left: next, behavior: "smooth" });
    }, STEP_MS);

    el.addEventListener("pointerdown", pause, { passive: true });
    el.addEventListener("touchstart", pause, { passive: true });
    el.addEventListener("wheel", pause, { passive: true });

    return () => {
      io.disconnect();
      clearInterval(tick);
      el.removeEventListener("pointerdown", pause);
      el.removeEventListener("touchstart", pause);
      el.removeEventListener("wheel", pause);
    };
  }, []);

  return (
    <div className={className} ref={ref}>
      {children}
    </div>
  );
}
