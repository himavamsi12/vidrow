"use client";

import { useEffect, useRef, useState } from "react";

/**
 * True once the element has come within `margin` of the screen (and from
 * then on). Used to hold back a section's heavy images until the visitor
 * is close to it, rather than downloading them with the page.
 */
export default function useNear(margin = "1200px") {
  const ref = useRef(null);
  const [near, setNear] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || near) return;
    if (!("IntersectionObserver" in window)) {
      setNear(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setNear(true);
          io.disconnect();
        }
      },
      { rootMargin: `${margin} 0px ${margin} 0px` }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [margin, near]);

  return [ref, near];
}
