"use client";

import { useEffect, useRef, useState } from "react";

/** The partnership logo table: once most of it is on screen, each stage's tiles
 *  drop in and fade up in turn. The page keeps scrolling freely while they do. */
export default function PrTable({ children }) {
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
      ([entry]) => {
        if (!entry.isIntersecting) return;
        io.disconnect();
        setInView(true);
      },
      // fires once the table's top is up near the top quarter of the screen,
      // under the heading, so the whole table is in view as it plays
      { rootMargin: "0px 0px -73% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} className={`pr-table${inView ? " in" : ""}`}>
      {children}
    </div>
  );
}
