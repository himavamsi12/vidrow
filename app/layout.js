import "./globals.css";
import { Inter } from "next/font/google";

export const metadata = {
  title: "Vidrow - Marketing partner behind fastest growing startups",
};
import SmoothScrolling from "./components/SmoothScrolling";
import PageLoader from "./components/PageLoader";
import NoOrphans from "./components/NoOrphans";

// Inter is served from the site itself (no trip to Google before the first
// paint) and preloaded; globals.css reads it through --font-inter
const inter = Inter({ subsets: ["latin"], display: "swap", variable: "--font-inter" });

// starts downloading the loader's logo animation the moment the browser
// reads the <head>. An inline script would wait for the site's stylesheet
// to arrive first (seconds on a slow connection); an async script doesn't,
// and as a data: URL it needs no request of its own. The video is fetched
// whole, at high priority so the homepage's images don't hold it up, into a
// blob URL that LOADER_START plays. Skipped where the loader
// won't play: other pages, reduced motion, or a browser that's seen it
const VIDEO_PICK = `var u=navigator.userAgent,ios=/iPad|iPhone|iPod/.test(u)||(navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1),saf=/Safari/.test(u)&&!/Chrome|Chromium|Edg|OPR|Android/.test(u),src=ios||saf?"/video-loader-960.mov":"/video-loader-960.webm";`;
const LOADER_FETCH = `(function(){try{if(location.pathname!=="/"||matchMedia("(prefers-reduced-motion: reduce)").matches)return;try{if(localStorage.getItem("vidrow-loader-played")==="1")return}catch(e){}${VIDEO_PICK}window.__vlSrc=src;if(!window.fetch||!window.URL||!URL.createObjectURL)return;window.__vl=fetch(src,{priority:"high"}).then(function(r){if(!r.ok)throw r.status;return r.blob()}).then(function(b){return URL.createObjectURL(b)})}catch(e){}})()`;
const LOADER_FETCH_SRC = `data:text/javascript;base64,${Buffer.from(LOADER_FETCH).toString("base64")}`;

// starts the loader's logo animation as soon as the browser reaches it in
// the HTML, rather than once the site's scripts have downloaded and started.
// It plays the copy LOADER_FETCH already downloaded (or waits for it), and
// only fetches the video itself if that early download never started.
// window.__vlStarted tells PageLoader.jsx this is handled; a failed start is
// passed on to it as the video's "error" event
const LOADER_START = `(function(){try{var d=document.documentElement;if(d.classList.contains("loader-played")||matchMedia("(prefers-reduced-motion: reduce)").matches)return;var v=document.querySelector(".page-loader video");if(!v)return;${VIDEO_PICK}v.muted=true;v.defaultMuted=true;window.__vlStarted=true;var fail=function(){window.__vlFailed=true;v.dispatchEvent(new Event("error"))};var go=function(x){v.src=x;var p=v.play();if(p&&p.catch)p.catch(fail)};if(window.__vl)window.__vl.then(go,function(){go(window.__vlSrc||src)});else go(src)}catch(e){}})()`;

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <head>
        {/* the loader plays once per browser: if it already has, mark the page
            before first paint so the loader never shows, not even for a frame.
            "Already played" needs both the localStorage flag and the cached
            copy of /loader-state (see its route), so clearing either the
            site data or the cache brings the loader back. The script waits
            for the stylesheet above it before it runs. A loader that will
            play locks scrolling from the first paint, long before the site's
            scripts arrive, so the page behind it can't be scrolled away */}
        <script async src={LOADER_FETCH_SRC} />
        <link rel="stylesheet" href="/loader-state" />
        <script
          dangerouslySetInnerHTML={{
            __html: `try{var d=document.documentElement;if(localStorage.getItem("vidrow-loader-played")==="1"&&getComputedStyle(d).getPropertyValue("--loader-cached").trim()==="1")d.classList.add("loader-played");else if(location.pathname==="/"&&!matchMedia("(prefers-reduced-motion: reduce)").matches)d.classList.add("is-loading")}catch(e){}`,
          }}
        />
      </head>
      <body>
        <SmoothScrolling>
          <PageLoader />
          <script dangerouslySetInnerHTML={{ __html: LOADER_START }} />
          <NoOrphans />
          {children}
        </SmoothScrolling>
      </body>
    </html>
  );
}
