"use client";

import { useEffect, useRef, useState } from "react";
import { useLenis } from "lenis/react";

// the whole drop-in (last group's delay + its fall, see .pr-table.in in globals.css)
const PLAY_MS = 2000;

/** The partnership logo table: once most of it is on screen, each stage's tiles
 *  drop in and fade up in turn, and the page holds still until that finishes. */
export default function PrTable({ children }) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  const lenis = useLenis();
  const lenisRef = useRef(null);
  lenisRef.current = lenis;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!("IntersectionObserver" in window)) {
      setInView(true);
      return;
    }
    let timer;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        io.disconnect();
        setInView(true);
        const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        if (reduce) return;
        // hold the page still until the animation has played out
        lenisRef.current?.stop();
        timer = setTimeout(() => lenisRef.current?.start(), PLAY_MS);
      },
      // fires once the table's top is well up the screen, so it's mostly in view
      { rootMargin: "0px 0px -55% 0px" }
    );
    io.observe(el);
    return () => {
      io.disconnect();
      if (timer) {
        clearTimeout(timer);
        lenisRef.current?.start();
      }
    };
  }, []);

  return (
    <div ref={ref} className={`pr-table${inView ? " in" : ""}`}>
      {children}
    </div>
  );
}
