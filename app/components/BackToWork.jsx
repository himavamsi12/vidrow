"use client";

// the campaign page's back link. Opened from the homepage's Work section, it
// steps back in history, so the homepage reopens on the same tab and at the
// same card (see SmoothScrolling and SelectedWork); arriving any other way
// (a shared link, a new tab), it opens the homepage on the Work section.
export default function BackToWork({ className }) {
  const onClick = (e) => {
    try {
      const ref = document.referrer && new URL(document.referrer);
      if (ref && ref.origin === window.location.origin && ref.pathname === "/" && window.history.length > 1) {
        e.preventDefault();
        window.history.back();
      }
    } catch {}
  };

  return (
    <a className={className} href="/#work" onClick={onClick}>
      <span aria-hidden="true">&larr;</span> Back to Work
    </a>
  );
}
