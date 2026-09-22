"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Mirrors the original global `.rv` scroll-reveal IntersectionObserver:
 * fades an element in the first time it crosses into view, then stops watching it.
 * With `replay`, it keeps watching instead: once the element has dropped fully
 * below the screen again it resets, so it plays again on the next way down.
 */
export default function useReveal(replay = false) {
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
          if (entry.isIntersecting) {
            setInView(true);
            if (!replay) io.unobserve(entry.target);
          } else if (replay && entry.boundingClientRect.top > 0) {
            // only once it's back below the fold — scrolling on past it
            // (off the top) leaves it shown
            setInView(false);
          }
        });
      },
      { rootMargin: "0px 0px -12% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [replay]);

  return [ref, inView];
}
