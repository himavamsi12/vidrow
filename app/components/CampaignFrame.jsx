"use client";

import { useEffect, useState } from "react";
import "@videojs/react/video/skin.css";
import { VideoPlayer, VideoSkin } from "@videojs/react/video";
import { CloudflareVideo } from "@videojs/react/media/cloudflare-video";

const STREAM = "https://customer-np97ccync4jeshuk.cloudflarestream.com";

// only one video plays at a time: the frame currently playing registers its
// stop callback here, and starting another one calls it
let stopActive = null;

// one frame on a campaign page: a still, or — when the frame carries a
// Cloudflare Stream `video` id — the video's own thumbnail with a play mark
// on it, swapped for the Video.js player (Cloudflare Stream engine) once it's
// clicked
export default function CampaignFrame({ frame, title }) {
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

  return (
    <div className="cmp-video">
      {playing ? (
        <VideoPlayer poster={`${STREAM}/${frame.video}/thumbnails/thumbnail.jpg?time=2s&height=900`}>
          <VideoSkin style={{ width: "100%", height: "100%" }}>
            <CloudflareVideo src={`${STREAM}/${frame.video}/watch`} autoPlay playsInline />
          </VideoSkin>
        </VideoPlayer>
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
