"use client";

import { useEffect, useRef, useState } from "react";
import { useLenis } from "lenis/react";

// timings for the three acts: the staircase growing to cover the screen,
// a short hold while the page jumps to Featured Work behind it (invisible),
// then the curtain lifting off upward to reveal it
const CLOSE_MS = 750; // the bars' .65s rise plus a small settle
const HOLD_MS = 100;
const FADE_MS = 600; // matches .hero-curtain's lift-off transform transition
const TAG_GAP = 24; // px left above the Featured Work tag once revealed

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
    if (reduce) return;

    // the curtain is a desktop-only reveal. The width is checked again when
    // the gesture actually fires rather than only here, so a window that
    // becomes narrow after load (or a device that reports its width late)
    // can't leave the listeners armed and play it on mobile
    const desktop = () => window.innerWidth > 900;
    if (!desktop()) return;

    // a page load that already targets a section (e.g. a nav link from the
    // case study page landing on /#partnership) means the user never saw
    // the hero to begin with — the jump SmoothScrolling performs to get
    // there is not the "user scrolled past the hero" gesture this curtain
    // exists for, and the onScroll fallback below must not mistake it for
    // one. Scrolling back up near the top still re-arms it normally, same
    // as it does mid-session.
    if (window.location.hash) {
      firedRef.current = true;
    }

    let touchStartY = 0;

    const trigger = () => {
      if (firedRef.current || !desktop()) return;
      firedRef.current = true;

      lenis?.stop();
      document.body.style.overflow = "hidden";
      setMounted(true);

      setTimeout(() => {
        // fully covered now — jump the real page to Featured Work while it
        // can't be seen. Lenis is stopped, so `force: true` is required —
        // without it, scrollTo is a no-op while stopped.
        // it lands with the "Featured work" tag just under the top edge,
        // rather than at the section's own top, which would leave its full
        // top padding showing above the heading. Measured from the heading's
        // padding, not the tag's rect — the heading is still offset by its
        // not-yet-played fade-up at this point.
        const section = document.getElementById("featured");
        const head = section?.querySelector(".fw2-head");
        if (section) {
          const pad = head ? parseFloat(getComputedStyle(head).paddingTop) : 0;
          const top =
            section.getBoundingClientRect().top + window.scrollY + Math.max(pad - TAG_GAP, 0);
          if (lenis) {
            lenis.scrollTo(top, { immediate: true, force: true });
          } else {
            const prevBehavior = document.documentElement.style.scrollBehavior;
            document.documentElement.style.scrollBehavior = "auto";
            window.scrollTo(0, top);
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
      if (document.documentElement.dataset.navScrolling) return;
      // scrolling back up into the hero re-arms the curtain, so scrolling
      // down through it again replays the same reveal instead of doing
      // nothing the second time
      if (window.scrollY < 40) {
        firedRef.current = false;
        return;
      }
      if (armed && window.scrollY > 0) trigger();
    };

    // a click on any in-page hash link (nav, footer, "read full story", …)
    // is a deliberate jump to a specific section, not the "scrolling past
    // the hero" gesture this curtain exists for — the resulting scroll
    // must not be mistaken for that by the onScroll fallback below, or the
    // link's own destination gets hijacked and replaced with Featured Work
    const onClickCapture = (e) => {
      const link = e.target.closest?.('a[href*="#"]');
      if (link) firedRef.current = true;
    };

    window.addEventListener("wheel", onWheel, { passive: true });
    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchmove", onTouchMove, { passive: true });
    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("scroll", onScroll, { passive: true });
    document.addEventListener("click", onClickCapture, true);

    return () => {
      clearTimeout(armTimer);
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("click", onClickCapture, true);
      document.body.style.overflow = "";
    };
  }, [lenis]);

  if (!mounted) return null;

  return (
    <div
      className={`hero-curtain${closed ? " is-closed" : ""}${fading ? " hero-curtain--fading" : ""}`}
      aria-hidden="true"
    >
      <div className={`hx-stair${closed ? " closed" : ""}`}>
        {/* just the hero's four staircase blocks, each rising straight up from its step */}
        <div className="hx-step hc-b1 hx-y" />
        <div className="hx-step hc-b2 hx-v" />
        <div className="hx-step hc-b3 hx-y" />
        <div className="hx-step hc-b4 hx-v" />
      </div>
    </div>
  );
}
