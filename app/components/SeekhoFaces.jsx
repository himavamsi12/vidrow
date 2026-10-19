"use client";

import { lazy, Suspense, useEffect, useState } from "react";

// the player downloads only once a video is played (see StreamPlayer.jsx)
const StreamPlayer = lazy(() => import("./StreamPlayer"));

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

  const still = poster ? (
    <button type="button" className="csk-filmPlay" onClick={() => setPlaying(true)} aria-label={`Play video: ${face.name}`}>
      <img src={poster} alt={face.name} loading="lazy" decoding="async" />
      <span className="csk-filmMark csk-filmMark--s" aria-hidden="true">
        <i />
      </span>
    </button>
  ) : null;

  return (
    <figure className="csk-face">
      <div className="csk-faceFrame">
        {playing ? (
          <Suspense fallback={still}>
            <StreamPlayer video={face.video} poster={poster} />
          </Suspense>
        ) : (
          still
        )}
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
