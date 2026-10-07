"use client";

import { useState } from "react";

const STREAM = "https://customer-np97ccync4jeshuk.cloudflarestream.com";

// one frame on a campaign page: a still, or — when the frame carries a
// Cloudflare Stream `video` id — the video's own thumbnail with a play mark
// on it, swapped for the player once it's clicked
export default function CampaignFrame({ frame, title }) {
  const [playing, setPlaying] = useState(false);

  if (!frame.video) {
    return <img className="cmp-frame" src={frame.src} alt={frame.alt} />;
  }

  return (
    <div className="cmp-video">
      {playing ? (
        <iframe
          className="cmp-videoPlayer"
          src={`${STREAM}/${frame.video}/iframe?autoplay=true&poster=${encodeURIComponent(
            `${STREAM}/${frame.video}/thumbnails/thumbnail.jpg?time=2s`,
          )}`}
          title={title}
          allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture; fullscreen"
          allowFullScreen
        />
      ) : (
        <button type="button" className="cmp-videoPlay" onClick={() => setPlaying(true)} aria-label={`Play video: ${title}`}>
          <img
            className="cmp-videoPoster"
            src={`${STREAM}/${frame.video}/thumbnails/thumbnail.jpg?time=2s&height=900`}
            alt={frame.alt}
          />
          <span className="cmp-videoMark" aria-hidden="true">
            <img src="/play-step.png" alt="" />
          </span>
        </button>
      )}
    </div>
  );
}
