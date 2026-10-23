"use client";

import { lazy, Suspense, useEffect, useState } from "react";
import { useLenis } from "lenis/react";

// the player downloads only once a film is opened (see StreamPlayer.jsx)
const StreamPlayer = lazy(() => import("./StreamPlayer"));

const STREAM = "https://customer-np97ccync4jeshuk.cloudflarestream.com";

/** A film still that plays its film on the page itself: clicking it opens the
 *  film in a centred player over the page (as large as the screen allows,
 *  since a still's tile is often a different shape from the film), closed
 *  with the ✕, Esc or a click outside it. The still is whatever is passed as
 *  children; `tall` gives a vertical film a 9:16 player. */
export function PlayFilm({ video, label, tall = false, className, children }) {
  const [open, setOpen] = useState(false);
  const lenis = useLenis();

  useEffect(() => {
    if (!open) return;
    lenis?.stop();
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      lenis?.start();
    };
  }, [open, lenis]);

  return (
    <>
      <button type="button" className={`film-btn ${className || ""}`.trim()} onClick={() => setOpen(true)} aria-label={`Play video: ${label}`}>
        {children}
      </button>

      {open && (
        <div className="film-lb" role="dialog" aria-modal="true" aria-label={label} onClick={() => setOpen(false)}>
          <div className={`film-lb-box${tall ? " film-lb-box--tall" : ""}`} onClick={(e) => e.stopPropagation()}>
            <Suspense fallback={null}>
              <StreamPlayer
                video={video}
                poster={`${STREAM}/${video}/thumbnails/thumbnail.jpg?time=2s&height=720`}
                hotkey
              />
            </Suspense>
          </div>
          <button type="button" className="film-lb-close" onClick={() => setOpen(false)} aria-label="Close video">
            <svg viewBox="0 0 20 20" aria-hidden="true">
              <path d="M4 4l12 12M16 4L4 16" stroke="currentColor" strokeWidth="1.8" />
            </svg>
          </button>
        </div>
      )}
    </>
  );
}

/** A row of labelled film tiles that each play on the page (ApnaMart). `films`
 *  is [{ label, video }]; each tile's still is the `shotClass` span, given its
 *  index as --i (the ApnaMart tiles cut one hero image five ways). */
export default function FilmLightbox({ films, className, tileClass, shotClass, labelClass }) {
  return (
    <div className={className}>
      {films.map((f, i) => (
        <PlayFilm video={f.video} label={f.label} className={tileClass} key={f.video}>
          <span className={shotClass} style={{ "--i": i }}>
            <span className="cvd-play" aria-hidden="true" />
          </span>
          <span className={labelClass}>{f.label}</span>
        </PlayFilm>
      ))}
    </div>
  );
}
