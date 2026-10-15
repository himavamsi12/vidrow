"use client";

import { useEffect, useState } from "react";
import "@videojs/react/video/skin.css";
import { VideoPlayer, VideoSkin } from "@videojs/react/video";
import { CloudflareVideo } from "@videojs/react/media/cloudflare-video";

const STREAM = "https://customer-np97ccync4jeshuk.cloudflarestream.com";

// only one film plays at a time
let stopActive = null;

function Film({ film }) {
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

  const poster = `${STREAM}/${film.video}/thumbnails/thumbnail.jpg?time=${film.thumb || 2}s&height=900`;

  return (
    <div className="csk-film">
      {playing ? (
        <VideoPlayer poster={poster}>
          <VideoSkin style={{ width: "100%", height: "100%" }}>
            <CloudflareVideo src={`${STREAM}/${film.video}/watch`} autoPlay playsInline />
          </VideoSkin>
        </VideoPlayer>
      ) : (
        <button type="button" className="csk-filmPlay" onClick={() => setPlaying(true)} aria-label={`Play video: ${film.alt}`}>
          <img src={poster} alt={film.alt} loading="lazy" />
          <span className="csk-filmMark" aria-hidden="true">
            <i />
          </span>
        </button>
      )}
    </div>
  );
}

/** The Mandar Chandwadkar films from the Seekho campaign page. Each card shows the
 *  film's own still; clicking it plays the film in place. */
export default function SeekhoFilms({ films, captions, className = "" }) {
  return (
    <div className={`csk-films ${className}`.trim()}>
      {films.map((f, i) =>
        captions ? (
          <figure className="ccj-style" key={f.video}>
            <Film film={f} />
            <figcaption>{captions[i]}</figcaption>
          </figure>
        ) : (
          <Film key={f.video} film={f} />
        )
      )}
    </div>
  );
}
