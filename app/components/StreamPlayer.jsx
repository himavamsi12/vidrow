"use client";

import "@videojs/react/video/skin.css";
import { Gesture, Hotkey } from "@videojs/react";
import { VideoPlayer, VideoSkin } from "@videojs/react/video";
import { CloudflareVideo } from "@videojs/react/media/cloudflare-video";
import { HlsJsVideo } from "@videojs/react/media/hlsjs-video";

const STREAM = "https://customer-np97ccync4jeshuk.cloudflarestream.com";

// the Video.js player for one Cloudflare Stream video. It's imported lazily
// (React.lazy) by the frames that show a video's still, so the player's code
// only downloads once someone presses play
export default function StreamPlayer({ video, poster, useHls = false, muted = false, hotkey = false }) {
  return (
    <VideoPlayer poster={poster}>
      <VideoSkin style={{ width: "100%", height: "100%" }}>
        {useHls ? (
          <HlsJsVideo src={`${STREAM}/${video}/manifest/video.m3u8`} autoPlay muted={muted} playsInline />
        ) : (
          <CloudflareVideo src={`${STREAM}/${video}/watch`} autoPlay playsInline />
        )}
        {/* on a phone a tap anywhere on the film plays or pauses it (the
            skin's own touch tap only shows and hides the controls); a mouse
            click anywhere already does */}
        <Gesture type="tap" action="togglePaused" pointer="touch" />
        {/* the spacebar plays and pauses the open film from anywhere on
            the page, not only once the player has focus */}
        {hotkey && <Hotkey keys="Space" action="togglePaused" target="document" />}
      </VideoSkin>
    </VideoPlayer>
  );
}
