"use client";

import { useEffect, useState } from "react";
import "@videojs/react/video/skin.css";
import { VideoPlayer, VideoSkin } from "@videojs/react/video";
import { CloudflareVideo } from "@videojs/react/media/cloudflare-video";

const STREAM = "https://customer-np97ccync4jeshuk.cloudflarestream.com";

// only one film plays at a time
let stopActive = null;

function Face({ face }) {
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

  const poster = face.video ? `${STREAM}/${face.video}/thumbnails/thumbnail.jpg?time=2s&height=900` : null;

  return (
    <figure className="csk-face">
      <div className="csk-faceFrame">
        {playing ? (
          <VideoPlayer poster={poster}>
            <VideoSkin style={{ width: "100%", height: "100%" }}>
              <CloudflareVideo src={`${STREAM}/${face.video}/watch`} autoPlay playsInline />
            </VideoSkin>
          </VideoPlayer>
        ) : poster ? (
          <button type="button" className="csk-filmPlay" onClick={() => setPlaying(true)} aria-label={`Play video: ${face.name}`}>
            <img src={poster} alt={face.name} loading="lazy" />
            <span className="csk-filmMark csk-filmMark--s" aria-hidden="true">
              <i />
            </span>
          </button>
        ) : null}
      </div>
      <figcaption>{face.name}</figcaption>
    </figure>
  );
}

/** The other celebrity faces the campaign was repeated with: a still with a
 *  play button that becomes the player in place, and the name underneath. */
export default function SeekhoFaces({ faces }) {
  return (
    <div className="csk-faces">
      {faces.map((f) => (
        <Face key={f.name} face={f} />
      ))}
    </div>
  );
}
