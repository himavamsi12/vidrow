import "./globals.css";

export const metadata = {
  title: "Vidrow - Marketing partner behind fastest growing startups",
};
import SmoothScrolling from "./components/SmoothScrolling";
// import PageLoader from "./components/PageLoader";

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <SmoothScrolling>
          {/* the page loader is switched off for now; put <PageLoader />
              back here to turn it on again */}
          {children}
        </SmoothScrolling>
      </body>
    </html>
  );
}
