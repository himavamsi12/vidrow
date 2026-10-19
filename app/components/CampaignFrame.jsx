"use client";

import { lazy, Suspense, useEffect, useState } from "react";

// the player downloads only once a video is played (see StreamPlayer.jsx)
const StreamPlayer = lazy(() => import("./StreamPlayer"));

const STREAM = "https://customer-np97ccync4jeshuk.cloudflarestream.com";

// only one video plays at a time: the frame currently playing registers its
// stop callback here, and starting another one calls it
let stopActive = null;

// one frame on a campaign page: a still, or — when the frame carries a
// Cloudflare Stream `video` id — the video's own thumbnail with a play mark
// on it, swapped for the Video.js player (Cloudflare Stream engine) once it's
// clicked
export default function CampaignFrame({ frame, title, muted = false, useHls = false }) {
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    if (!playing) return;
    const stop = () => setPlaying(false);
    if (stopActive && stopActive !== stop) stopActive();
    stopActive = stop;
    return () => {
      if (stopActive === stop) stopActive = null;
    };
  }, [playing]);

  if (!frame.video) {
    return <img className="cmp-frame" src={frame.src} alt={frame.alt} />;
  }

  const poster = `${STREAM}/${frame.video}/thumbnails/thumbnail.jpg?time=${frame.thumb || 2}s&height=900`;
  const still = (
    <button type="button" className="cmp-videoPlay" onClick={() => setPlaying(true)} aria-label={`Play video: ${title}`}>
      <img loading="lazy" decoding="async" className="cmp-videoPoster" src={poster} alt={frame.alt} />
      <span className="cmp-videoMark" aria-hidden="true">
        <img loading="lazy" decoding="async" src="/play-step.webp" alt="" />
      </span>
    </button>
  );

  return (
    <div className={`cmp-video${frame.wide ? " cmp-video--wide" : ""}`}>
      {playing ? (
        <Suspense fallback={still}>
          <StreamPlayer video={frame.video} poster={poster} useHls={useHls} muted={muted} hotkey />
        </Suspense>
      ) : (
        still
      )}
    </div>
  );
}
