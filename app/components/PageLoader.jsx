"use client";

import { useEffect, useRef, useState } from "react";
import { useLenis } from "lenis/react";
import { usePathname } from "next/navigation";
import { LOADER_POSTER } from "./loaderPoster";

const KEY = "vidrow-loader-played";
const FADE_MS = 500;
// the loader stays up until the page has finished loading, however slow the
// connection; this only stops a load that never finishes holding the site
// behind it for good
const MAX_MS = 30000;
// how long a site that has finished loading still waits for the logo
// animation to arrive and start, before opening with the still logo
const START_WAIT_MS = 10000;

// The Vidrow loader: a white screen playing the Vidrow logo animation
// on a browser's first visit to the homepage. The logo's first frame is on
// screen from the first paint (the poster, sent inside the page), the
// animation plays once it has downloaded and keeps looping while the site
// is still loading, and the loader fades away at the end of the loop in
// which the site finishes. After that
// it doesn't show again until the browser's cache or site data is cleared.
// Safari (and every browser on iPhone/iPad, which all run on Safari's
// engine) ignores the WebM's transparency and paints it black, so it gets
// the same animation as HEVC with alpha instead. Both are 960x540 (about 60-70KB),
// which is still sharper than the loader is ever shown
const SRC_WEBM = "/video-loader-960.webm";
const SRC_HEVC = "/video-loader-960.mov";
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
    let failed = false;
    let pageDone = document.readyState === "complete";
    let finished = false;
    // a loaded site waits for an animation that hasn't started yet (still
    // downloading) for up to START_WAIT_MS before it opens with only the
    // still logo shown
    let startWait = 0;
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
    const v = videoRef.current;
    const started = () => !!v && v.currentTime > 0;
    // the animation always plays through at least once; while the site is
    // still loading after that, it starts over
    const onEnded = () => {
      videoDone = true;
      if (pageDone) finish();
      else {
        v.currentTime = 0;
        v.play()?.catch(() => {});
      }
    };
    // a browser that can't play the video (or blocks autoplay) keeps the
    // still logo up until the site has loaded, and at least a short moment
    const onFail = () => {
      if (failed) return;
      failed = true;
      setTimeout(() => {
        videoDone = true;
        if (pageDone) finish();
      }, 600);
    };
    const onPlaying = () => clearTimeout(startWait);
    v?.addEventListener("ended", onEnded);
    v?.addEventListener("error", onFail);
    v?.addEventListener("playing", onPlaying);
    const hevc = needsHevc();
    if (v) {
      if (!hevc && !v.canPlayType('video/webm; codecs="vp9"')) onFail();
      else if (!window.__vlStarted) {
        v.src = hevc ? SRC_HEVC : SRC_WEBM;
        v.play()?.catch(onFail);
      }
      // already started by the inline script in layout.js, which on a slow
      // connection can be long before this runs: pick up where it is (it
      // may still be waiting on the download, in which case it plays when
      // that lands)
      else if (window.__vlFailed || v.error) onFail();
      else if (v.ended) onEnded();
      else if (v.paused && v.currentSrc) v.play()?.catch(onFail);
    }
    const onLoad = () => {
      pageDone = true;
      if (failed) {
        if (videoDone) finish();
      } else if (!started()) {
        // the site is ready but the animation hasn't begun: wait for it
        // (it then plays through), up to a limit, then open the site
        startWait = setTimeout(() => {
          if (!started()) finish();
        }, START_WAIT_MS);
      } else if (v.ended) finish();
      // otherwise the loop that's playing finishes it (onEnded)
    };
    if (pageDone) onLoad();
    else window.addEventListener("load", onLoad);
    const cap = setTimeout(finish, MAX_MS);

    return () => {
      v?.removeEventListener("ended", onEnded);
      v?.removeEventListener("error", onFail);
      v?.removeEventListener("playing", onPlaying);
      clearTimeout(startWait);
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
      {/* its src is set before hydration by the script in layout.js; the
          poster is the animation's first frame, shown until it plays */}
      <video ref={videoRef} muted playsInline autoPlay preload="auto" poster={LOADER_POSTER} suppressHydrationWarning />
    </div>
  );
}
