import TagMark from "./TagMark";

// linkedin / x: profile URLs. Both icons always show, linked once they have a URL.
const FOUNDERS = [
  {
    name: "Aditya Raj Somani",
    role: "Co-Founder",
    photo: "/about%20us/team/aditya%20raipng.png",
    linkedin: "https://www.linkedin.com/in/adityarajasomani/",
    x: "https://x.com/adityarajsomani",
  },
  {
    name: "Anushank Jain",
    role: "Co-Founder",
    photo: "/about%20us/team/anushank%20jain.png",
    linkedin: "https://www.linkedin.com/in/anushank-jain-7390a696/",
    x: "https://x.com/anushankjain",
  },
];

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect width="24" height="24" rx="2" fill="#fff" />
      <path
        fill="#121212"
        d="M5.3 9.2h2.9V19H5.3zM6.75 4.6a1.68 1.68 0 1 1 0 3.36 1.68 1.68 0 0 1 0-3.36zM10 9.2h2.78v1.34h.04c.39-.73 1.33-1.5 2.74-1.5 2.93 0 3.47 1.93 3.47 4.43V19h-2.9v-4.92c0-1.17-.02-2.68-1.63-2.68-1.64 0-1.89 1.28-1.89 2.6V19H10z"
      />
    </svg>
  );
}

function XIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect width="24" height="24" rx="2" fill="#fff" />
      <path
        fill="#121212"
        d="M15.9 5.5h2.1l-4.6 5.25L18.8 18.5h-4.2l-3.3-4.3-3.77 4.3H5.42l4.92-5.62L5.2 5.5h4.3l2.98 3.94zm-.74 11.7h1.17L8.9 6.73H7.65z"
      />
    </svg>
  );
}

function Social({ href, label, children }) {
  return href ? (
    <a className="abf-social" href={href} target="_blank" rel="noopener noreferrer" aria-label={label}>
      {children}
    </a>
  ) : (
    <span className="abf-social">{children}</span>
  );
}

// "Built by founders": the two founders on violet cards, each with a yellow
// step block under the photo carrying their name and role. The second card's
// block is the first's mirrored.
export default function AboutFounders() {
  return (
    <section className="abf">
      <div className="abf-head">
        <div className="ab-tagwrap">
          <span className="ab-tag">The Founders</span>
          <TagMark />
        </div>
        <h2 className="abf-h">
          Built by founders who have <br className="ab-br" />
          already done this once.
        </h2>
      </div>

      <div className="abf-row">
        {FOUNDERS.map((f, i) => (
          <article className={`abf-card${i % 2 ? " abf-card--flip" : ""}`} key={f.name}>
            <img className="abf-photo" src={f.photo} alt={f.name} />
            <div className="abf-socials">
              <Social href={f.linkedin} label={`${f.name} on LinkedIn`}>
                <LinkedInIcon />
              </Social>
              <Social href={f.x} label={`${f.name} on X`}>
                <XIcon />
              </Social>
            </div>
            <span className="abf-block abf-block--name" aria-hidden="true" />
            <span className="abf-block abf-block--band" aria-hidden="true" />
            <span className="abf-block abf-block--role" aria-hidden="true" />
            <h3 className="abf-name">{f.name}</h3>
            <p className="abf-role">{f.role}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
