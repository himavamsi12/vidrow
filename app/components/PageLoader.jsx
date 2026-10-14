"use client";

import { useEffect, useRef, useState } from "react";
import { useLenis } from "lenis/react";
import { usePathname } from "next/navigation";

const KEY = "vidrow-loader-played";
const FADE_MS = 500;
// never hold the site behind the loader longer than this, whatever happens
const MAX_MS = 10000;

// The Vidrow loader: a white screen playing the Vidrow logo animation
// when a visit opens on the homepage. The first load in a browser session
// plays the whole video; later loads show at least its first 5 seconds.
// Either way it also waits for the page itself to finish loading, then
// fades away.
const REPEAT_MS = 5000;
// once the video has played to its last frame, its logo shrinks and glides
// up onto the navbar logo while the white fades off the page, then the two
// crossfade so the navbar's own logo is left in place
const FLY_MS = 1100;
const LAND_MS = 350;
// where the logo sits in the video's last frame, as fractions of the frame
// (measured from the 1920x1080 file: a 438px square from 741,321)
const FRAME_LOGO = { x: 741 / 1920, y: 321 / 1080, w: 438 / 1920 };

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
  const [state, setState] = useState(() => (pathname === "/" ? "show" : "gone")); // show | flying | landing | fading | gone
  const videoRef = useRef(null);
  const lenis = useLenis();

  useEffect(() => {
    if (state === "gone") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setState("gone");
      return;
    }
    let seen = false;
    try {
      seen = sessionStorage.getItem(KEY) === "1";
    } catch {}

    let videoDone = false;
    let pageDone = document.readyState === "complete";
    let finished = false;
    const finish = () => {
      if (finished) return;
      finished = true;
      try {
        sessionStorage.setItem(KEY, "1");
      } catch {}
      if (fly()) {
        setState("flying");
        setTimeout(() => setState("landing"), FLY_MS);
        setTimeout(() => setState("gone"), FLY_MS + LAND_MS);
        return;
      }
      setState("fading");
      setTimeout(() => setState("gone"), FADE_MS);
    };

    // pins the video where it is, then transforms it so the logo in its last
    // frame lands exactly on the navbar logo. Only when the video really
    // reached its end (so that frame is what's showing) and the navbar logo
    // is on screen; otherwise the loader just fades
    const fly = () => {
      const v = videoRef.current;
      const logo = document.querySelector(".hx-logo img");
      if (!v || !v.ended || !logo) return false;
      const vr = v.getBoundingClientRect();
      const nr = logo.getBoundingClientRect();
      if (!vr.width || !nr.width || nr.bottom < 0) return false;
      const lx = vr.left + FRAME_LOGO.x * vr.width;
      const ly = vr.top + FRAME_LOGO.y * vr.height;
      const s = nr.width / (FRAME_LOGO.w * vr.width);
      Object.assign(v.style, {
        transition: "none",
        left: `${vr.left}px`,
        top: `${vr.top}px`,
        width: `${vr.width}px`,
        transformOrigin: "0 0",
        transform: "none",
      });
      v.getBoundingClientRect(); // commit the start before transitioning
      v.style.transition = `transform ${FLY_MS}ms cubic-bezier(.65, 0, .35, 1), opacity ${LAND_MS}ms ease`;
      const tx = nr.left - vr.left - (lx - vr.left) * s;
      const ty = nr.top - vr.top - (ly - vr.top) * s;
      v.style.transform = `translate(${tx}px, ${ty}px) scale(${s})`;
      return true;
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
      v.src = hevc ? SRC_HEVC : SRC_WEBM;
      v.play()?.catch(onFail);
      if (!hevc && !v.canPlayType('video/webm; codecs="vp9"')) onFail();
    }
    // already seen this session: 5 seconds of it is enough
    const short = seen ? setTimeout(onEnded, REPEAT_MS) : 0;

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
      clearTimeout(short);
    };
  }, []);

  // the page behind can't be scrolled while the loader is up, and the
  // navbar logo stays hidden until the flying logo has landed on it
  useEffect(() => {
    const root = document.documentElement;
    if (state === "gone" || state === "landing") {
      root.classList.remove("is-loading");
      lenis?.start();
      return;
    }
    root.classList.add("is-loading");
    lenis?.stop();
  }, [state, lenis]);

  if (state === "gone") return null;

  return (
    <div className={`page-loader${state === "fading" ? " is-fading" : ""}${state === "flying" || state === "landing" ? " is-flying" : ""}${state === "landing" ? " is-landing" : ""}`} aria-hidden="true">
      <video ref={videoRef} muted playsInline autoPlay preload="auto" />
    </div>
  );
}
