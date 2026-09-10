// the logo + contact button pair shared by the homepage hero bar and the
// case study page nav — each page supplies its own wrapper (.hx-bar /
// .csp-nav) for positioning, this just renders the two elements
export default function SiteNav({ logoHref = "/" }) {
  return (
    <>
      <a className="hx-logo" href={logoHref} aria-label="Vidrow">
        <img src="/Logo.svg" alt="Vidrow" />
      </a>
      <a className="hx-contact" href="#contact">
        <span>Contact us</span>
        <span className="hx-contact-i" aria-hidden="true">
          <svg viewBox="0 0 40 40" aria-hidden="true">
            <g fill="var(--acid)">
              <rect x="10" y="10" width="6" height="6" />
              <rect x="17" y="10" width="6" height="6" />
              <rect x="24" y="10" width="6" height="6" />
              <rect x="17" y="17" width="6" height="6" />
              <rect x="24" y="17" width="6" height="6" />
              <rect x="24" y="24" width="6" height="6" />
            </g>
          </svg>
        </span>
      </a>
    </>
  );
}
