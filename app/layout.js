import "./globals.css";

export const metadata = {
  title: "Vidrow - Marketing partner behind fastest growing startups",
};
import SmoothScrolling from "./components/SmoothScrolling";
import PageLoader from "./components/PageLoader";
import NoOrphans from "./components/NoOrphans";

// starts the loader's logo animation as soon as the browser reaches it in
// the HTML, rather than once the site's scripts have downloaded and started
// (on a slow connection that left the loader a blank white screen for
// seconds). Same video choice as PageLoader.jsx, which takes over from here
const LOADER_START = `(function(){try{var d=document.documentElement;if(d.classList.contains("loader-played")||matchMedia("(prefers-reduced-motion: reduce)").matches)return;var v=document.querySelector(".page-loader video");if(!v)return;var u=navigator.userAgent,ios=/iPad|iPhone|iPod/.test(u)||(navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1),saf=/Safari/.test(u)&&!/Chrome|Chromium|Edg|OPR|Android/.test(u);v.muted=true;v.defaultMuted=true;v.src=ios||saf?"/video-loader-transparent.mov":"/video-loader-transparent.webm";var p=v.play();if(p&&p.catch)p.catch(function(){})}catch(e){}})()`;

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* the loader plays once per browser: if it already has, mark the page
            before first paint so the loader never shows, not even for a frame.
            "Already played" needs both the localStorage flag and the cached
            copy of /loader-state (see its route), so clearing either the
            site data or the cache brings the loader back. The script waits
            for the stylesheet above it before it runs. A loader that will
            play locks scrolling from the first paint, long before the site's
            scripts arrive, so the page behind it can't be scrolled away */}
        <link rel="stylesheet" href="/loader-state" />
        <script
          dangerouslySetInnerHTML={{
            __html: `try{var d=document.documentElement;if(localStorage.getItem("vidrow-loader-played")==="1"&&getComputedStyle(d).getPropertyValue("--loader-cached").trim()==="1")d.classList.add("loader-played");else if(location.pathname==="/"&&!matchMedia("(prefers-reduced-motion: reduce)").matches)d.classList.add("is-loading")}catch(e){}`,
          }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap"
          rel="stylesheet"
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
