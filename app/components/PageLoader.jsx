"use client";

import { useEffect, useRef, useState } from "react";
import { useLenis } from "lenis/react";

const KEY = "vidrow-loader-played";
const FADE_MS = 500;
// never hold the site behind the loader longer than this, whatever happens
const MAX_MS = 10000;

// The Vidrow loader: a white screen playing /vidrow-loader.webm on every page
// load. The first load in a browser session plays the whole video; later
// loads show at least its first 5 seconds. Either way it also waits for the
// page itself to finish loading, then fades away.
const REPEAT_MS = 5000;
export default function PageLoader() {
  const [state, setState] = useState("show"); // show | fading | gone
  const videoRef = useRef(null);
  const lenis = useLenis();

  useEffect(() => {
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
    v?.play()?.catch(onFail);
    if (v && !v.canPlayType('video/webm; codecs="vp9"')) onFail();
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
      <video ref={videoRef} src="/vidrow-loader.webm" muted playsInline autoPlay preload="auto" />
    </div>
  );
}
