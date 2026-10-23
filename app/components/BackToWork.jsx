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
      {/* the stroke follows the text colour, so it turns violet on hover too */}
      <svg width="13" height="11" viewBox="0 0 13 11" fill="none" aria-hidden="true">
        <path
          d="M11.9286 5.5L0.500002 5.5M5.5 0.499999L0.500002 5.5L5.5 10.5"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      Back to Work
    </a>
  );
}
