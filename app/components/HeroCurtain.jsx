"use client";

import { useEffect, useRef, useState } from "react";
import { useLenis } from "lenis/react";

// timings for the three acts: the staircase growing to cover the screen,
// a short hold while the page jumps to Featured Work behind it (invisible),
// then the curtain dissolving to reveal it
const CLOSE_MS = 1100; // matches the staggered CSS close transition
const HOLD_MS = 150;
const FADE_MS = 500;

/**
 * A fixed, viewport-covering overlay that plays the hero's staircase-close
 * animation as a genuine curtain: it is never part of the scrolling document,
 * so whatever it reveals underneath is whatever the page actually is at —
 * not whatever happens to be some scroll-distance below the hero.
 *
 * Sequence: the first deliberate scroll-down gesture -> blocks grow to fully
 * cover the screen -> the real page is jumped to Featured Work instantly
 * while hidden -> the curtain fades away, revealing Featured Work already
 * in place.
 */
export default function HeroCurtain() {
  const [mounted, setMounted] = useState(false);
  const [closed, setClosed] = useState(false);
  const [fading, setFading] = useState(false);
  const lenis = useLenis();
  const firedRef = useRef(false);

  // mount first with the resting staircase shape, then flip to "closed" a
  // couple of frames later so the browser actually has a starting point to
  // transition from
  useEffect(() => {
    if (!mounted) return;
    let raf1;
    let raf2;
    raf1 = requestAnimationFrame(() => {
      raf2 = requestAnimationFrame(() => setClosed(true));
    });
    return () => {
      cancelAnimationFrame(raf1);
      if (raf2) cancelAnimationFrame(raf2);
    };
  }, [mounted]);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || window.innerWidth <= 900) return;

    let touchStartY = 0;

    const trigger = () => {
      if (firedRef.current) return;
      firedRef.current = true;

      lenis?.stop();
      document.body.style.overflow = "hidden";
      setMounted(true);

      setTimeout(() => {
        // fully covered now — jump the real page to Featured Work while it
        // can't be seen. Lenis is stopped, so `force: true` is required —
        // without it, scrollTo is a no-op while stopped.
        const next = document.getElementById("featured");
        if (next) {
          if (lenis) {
            lenis.scrollTo(next, { immediate: true, force: true });
          } else {
            const prevBehavior = document.documentElement.style.scrollBehavior;
            document.documentElement.style.scrollBehavior = "auto";
            next.scrollIntoView({ block: "start" });
            document.documentElement.style.scrollBehavior = prevBehavior;
          }
        }

        setTimeout(() => {
          setFading(true);
          setTimeout(() => {
            document.body.style.overflow = "";
            lenis?.start();
            setMounted(false);
            setClosed(false);
            setFading(false);
          }, FADE_MS);
        }, HOLD_MS);
      }, CLOSE_MS);
    };

    // only ever respond to a genuine, deliberate scroll gesture — never a
    // bare native "scroll" event, since browsers can fire one on their own
    // (hydration reflow, scroll restoration, elastic overscroll) and that
    // must never be mistaken for the user asking to move on
    const onWheel = (e) => {
      if (e.deltaY > 0) trigger();
    };
    const onTouchStart = (e) => {
      touchStartY = e.touches[0].clientY;
    };
    const onTouchMove = (e) => {
      if (touchStartY - e.touches[0].clientY > 5) trigger();
    };
    const onKeyDown = (e) => {
      if (e.key === "ArrowDown" || e.key === "PageDown" || e.key === " ") trigger();
    };

    // a plain "scroll" listener catches inputs wheel/touch/key miss
    // (scrollbar dragging, some trackpads) — but it's only armed after a
    // short grace period so it can never fire on a load-time reflow blip
    let armed = false;
    const armTimer = setTimeout(() => {
      armed = true;
    }, 400);
    const onScroll = () => {
      // scrolling back up into the hero re-arms the curtain, so scrolling
      // down through it again replays the same reveal instead of doing
      // nothing the second time
      if (window.scrollY < 40) {
        firedRef.current = false;
        return;
      }
      if (armed && window.scrollY > 0) trigger();
    };

    window.addEventListener("wheel", onWheel, { passive: true });
    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchmove", onTouchMove, { passive: true });
    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      clearTimeout(armTimer);
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("scroll", onScroll);
      document.body.style.overflow = "";
    };
  }, [lenis]);

  if (!mounted) return null;

  return (
    <div className={`hero-curtain${fading ? " hero-curtain--fading" : ""}`} aria-hidden="true">
      <div className={`hx-stair${closed ? " closed" : ""}`}>
        <div className="hx-step hx-s5 hx-y" />
        <div className="hx-step hx-s6 hx-y" />
        <div className="hx-step hx-s1 hx-y" />
        <div className="hx-step hx-s3 hx-y" />
        <div className="hx-step hx-s2 hx-v" />
        <div className="hx-step hx-s4 hx-v" />
      </div>
    </div>
  );
}
