import SiteNav from "./components/SiteNav";
import Footer from "./components/Footer";

export const metadata = {
  title: "Page not found | Vidrow",
  // a missing page is never one to index
  robots: { index: false, follow: true },
};

// any address that isn't a page on the site: the site's own header and
// footer, a short note, and the ways back in
export default function NotFound() {
  return (
    <>
      <main className="nf">
        <header className="hx-bar hx-bar--page">
          <SiteNav logoHref="/" />
        </header>
        <div className="hx-bar-gap" aria-hidden="true" />

        <section className="nf-in">
          <p className="nf-code">404</p>
          <h1 className="nf-h">This page doesn&rsquo;t exist.</h1>
          <p className="nf-sub">
            The link may be old or mistyped. Our work, case studies and team are all a click away.
          </p>
          <div className="nf-ctas">
            <a className="nf-cta" href="/">
              Back to home
              <svg viewBox="0 0 40 40" aria-hidden="true">
                <path d="M10 10 H30 V30 H23.333 V23.333 H16.667 V16.667 H10 Z" />
              </svg>
            </a>
            <a className="nf-cta nf-cta--ghost" href="/#deepdive">
              See case studies
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
