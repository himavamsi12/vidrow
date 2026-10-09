"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Mirrors the original global `.rv` scroll-reveal IntersectionObserver:
 * fades an element in the first time it crosses into view, then stops watching it.
 * With `replay`, it keeps watching; `resetOnExit` resets on every viewport exit.
 */
export default function useReveal(
  replay = false,
  resetOnExit = false,
  rootMargin = "0px 0px -12% 0px",
  threshold = 0
) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (!("IntersectionObserver" in window)) {
      setInView(true);
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio >= threshold) {
            setInView(true);
            if (!replay) io.unobserve(entry.target);
          } else if (replay && (resetOnExit || entry.boundingClientRect.top > 0)) {
            setInView(false);
          }
        });
      },
      { rootMargin, threshold }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [replay, resetOnExit, rootMargin, threshold]);

  return [ref, inView];
}
