import "./globals.css";

export const metadata = {
  title: "Vidrow - Marketing partner behind fastest growing startups",
};
import SmoothScrolling from "./components/SmoothScrolling";
import PageLoader from "./components/PageLoader";

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* the loader plays once per browser: if it already has, mark the page
            before first paint so the loader never shows, not even for a frame */}
        <script
          dangerouslySetInnerHTML={{
            __html: `try{if(localStorage.getItem("vidrow-loader-played")==="1")document.documentElement.classList.add("loader-played")}catch(e){}`,
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
          {children}
        </SmoothScrolling>
      </body>
    </html>
  );
}
