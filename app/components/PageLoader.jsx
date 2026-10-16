"use client";

import { useEffect, useRef, useState } from "react";
import { useLenis } from "lenis/react";
import { usePathname } from "next/navigation";

const KEY = "vidrow-loader-played";
const FADE_MS = 500;
// the loader stays up until the page has finished loading, however slow the
// connection; this only stops a load that never finishes holding the site
// behind it for good
const MAX_MS = 30000;

// The Vidrow loader: a white screen playing the Vidrow logo animation
// on a browser's first visit to the homepage. It plays the whole video,
// waits for the page itself to finish loading, then fades away. After that
// it doesn't show again until the browser's cache or site data is cleared.
// Safari (and every browser on iPhone/iPad, which all run on Safari's
// engine) ignores the WebM's transparency and paints it black, so it gets
// the same animation as HEVC with alpha instead (same framing, 1280x720)
const SRC_WEBM = "/video-loader-transparent.webm";
const SRC_HEVC = "/video-loader-transparent.mov";
const needsHevc = () => {
  const ua = navigator.userAgent;
  const ios = /iPad|iPhone|iPod/.test(ua) || (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);
  const safari = /Safari/.test(ua) && !/Chrome|Chromium|Edg|OPR|Android/.test(ua);
  return ios || safari;
};
export default function PageLoader() {
  // only a page load that lands on the homepage plays the loader; every
  // other page opens straight away. Read once, so navigating to the
  // homepage later doesn't bring it up mid-visit
  const pathname = usePathname();
  const [state, setState] = useState(() => (pathname === "/" ? "show" : "gone")); // show | fading | gone
  const videoRef = useRef(null);
  const lenis = useLenis();
  // the one-off effect below reads Lenis when the loader finishes, by which
  // point it has long since been created
  const lenisRef = useRef(null);
  lenisRef.current = lenis;

  useEffect(() => {
    if (state === "gone") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setState("gone");
      return;
    }
    // already played in this browser (the flag and the cached /loader-state
    // both say so, checked before first paint in layout.js): not again
    if (document.documentElement.classList.contains("loader-played")) {
      setState("gone");
      return;
    }

    // saved as soon as it starts, so leaving early still counts as played
    // (a beat later, so a dev double-mount doesn't see its own flag)
    const mark = setTimeout(() => {
      try {
        localStorage.setItem(KEY, "1");
      } catch {}
      // and put the "played" copy of /loader-state in the HTTP cache
      fetch("/loader-state", { headers: { "x-loader-seen": "1" } }).catch(() => {});
    }, 300);

    let videoDone = false;
    let pageDone = document.readyState === "complete";
    let finished = false;
    const finish = () => {
      if (finished) return;
      finished = true;
      // whatever happened behind the loader (a scroll before the lock took
      // hold, the browser restoring an old position), the site opens at its
      // top, unless the address points at a section
      if (!window.location.hash) {
        window.scrollTo(0, 0);
        lenisRef.current?.scrollTo(0, { immediate: true, force: true });
      }
      setState("fading");
      setTimeout(() => setState("gone"), FADE_MS);
    };
    const check = () => {
      if (videoDone && pageDone) finish();
    };

    const v = videoRef.current;
    const onEnded = () => {
      videoDone = true;
      check();
    };
    // a browser that can't play the video (or blocks autoplay) gets a short
    // white hold instead of the full animation
    const onFail = () => {
      setTimeout(onEnded, 600);
    };
    v?.addEventListener("ended", onEnded);
    v?.addEventListener("error", onFail);
    const hevc = needsHevc();
    if (v) {
      if (!hevc && !v.canPlayType('video/webm; codecs="vp9"')) onFail();
      else if (!v.getAttribute("src")) {
        v.src = hevc ? SRC_HEVC : SRC_WEBM;
        v.play()?.catch(onFail);
      }
      // already started by the inline script in layout.js, which on a slow
      // connection can be long before this runs: pick up where it is
      else if (v.ended) onEnded();
      else if (v.error) onFail();
      else if (v.paused) v.play()?.catch(onFail);
    }
    const onLoad = () => {
      pageDone = true;
      check();
    };
    if (!pageDone) window.addEventListener("load", onLoad);
    const cap = setTimeout(finish, MAX_MS);

    return () => {
      v?.removeEventListener("ended", onEnded);
      v?.removeEventListener("error", onFail);
      window.removeEventListener("load", onLoad);
      clearTimeout(cap);
      clearTimeout(mark);
    };
  }, []);

  // the page behind can't be scrolled while the loader is up
  useEffect(() => {
    const root = document.documentElement;
    if (state === "gone") {
      root.classList.remove("is-loading");
      lenis?.start();
      return;
    }
    root.classList.add("is-loading");
    lenis?.stop();
  }, [state, lenis]);

  if (state === "gone") return null;

  return (
    <div className={`page-loader${state === "fading" ? " is-fading" : ""}`} aria-hidden="true">
      {/* its src is set before hydration by the script in layout.js */}
      <video ref={videoRef} muted playsInline autoPlay preload="auto" suppressHydrationWarning />
    </div>
  );
}
