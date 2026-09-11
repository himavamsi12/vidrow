"use client";
import { useEffect, useRef } from "react";
import { ReactLenis } from "lenis/react";

export default function SmoothScrolling({ children }) {
  const lenisRef = useRef(null);

  // every load/reload should start at the top (the hero), regardless of
  // where the browser remembers the user last scrolled to — the browser's
  // own scroll restoration runs before React hydrates, so it has to be
  // turned off, not just overridden after. The one exception is an actual
  // #hash in the URL (e.g. a nav link from the case study page to a
  // homepage section): that still has to land on its target, not the top.
  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    const target = window.location.hash && document.querySelector(window.location.hash);
    if (target) {
      // give Lenis a tick to attach before handing it the jump, so it isn't
      // left thinking the page is still at 0 and fighting the next real
      // scroll — falls back to a plain jump if it isn't ready yet. A plain
      // timer, not requestAnimationFrame: rAF only fires on an actual paint
      // frame, which a backgrounded/throttled tab can withhold indefinitely,
      // leaving the page stuck at the top instead of landing on the target.
      setTimeout(() => {
        const lenis = lenisRef.current?.lenis;
        if (lenis) lenis.scrollTo(target, { immediate: true });
        else target.scrollIntoView();
      }, 0);
      return;
    }

    window.scrollTo(0, 0);
  }, []);

  return (
    <ReactLenis root ref={lenisRef}>
      {children}
    </ReactLenis>
  );
}
