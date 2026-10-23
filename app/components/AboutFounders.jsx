import TagMark from "./TagMark";

// linkedin / x: profile URLs. Both icons always show, linked once they have a URL.
const FOUNDERS = [
  {
    name: "Aditya Raj Somani",
    role: "Co-founder",
    photo: "/about%20us/team/aditya%20raipng.webp",
    linkedin: "https://www.linkedin.com/in/adityarajasomani/",
    x: "https://x.com/adityarajsomani",
    // shown in the yellow block that grows up the card on hover; paragraphs
    // are separate entries
    bio: [
      "Aditya has been in content since his college days at IIT Kanpur, twelve years now, and in the startup world for just as long. While most of the industry, in 2016, was chasing YouTube and OTT, he built, scaled and sold his first startup, HPF Films, a short-format content engine that came way before TikTok and Reels and hence eventually got acquired by ShareChat.",
      "That blend of content instinct and founder experience is what eventually led to Vidrow. Having sat on both sides of the table for years, he understands what early-stage companies truly need from their marketing, and what they so often end up without.",
    ],
    // the shorter text written out under the card on phones
    mobileBio: [
      "Aditya has been in content since his college days at IIT Kanpur, twelve years now, and in the startup world for just as long. Having sat on both sides of the table for years, he understands what early-stage companies truly need from their marketing, and what they so often end up without.",
    ],
  },
  {
    name: "Anushank Jain",
    role: "Co-founder",
    photo: "/about%20us/team/anushank%20jain.webp",
    linkedin: "https://www.linkedin.com/in/anushank-jain-7390a696/",
    x: "https://x.com/anushankjain",
    bio: [
      "Anushank has been in content and marketing for the past 12 years and has been part of the Indian startup ecosystem for the past 9 years now. A 3x founder of HPF Films, Doeasily and Vidrow, Anushank sold his first startup HPF Films to ShareChat and built the ads engine for 30Mn users, which gave him an understanding of adtech, adding to his content and marketing background.",
      "Given his understanding of content, marketing and product, he's uniquely placed to understand what startups at different stages require for marketing and how to efficiently reach their next fundraising target.",
    ],
    mobileBio: [
      "Anushank has been in content and marketing for the past 12 years and has been part of the Indian startup ecosystem for the past 9 years now. Given his understanding of content, marketing and product, he's uniquely placed to understand what startups at different stages require for marketing and how to efficiently reach their next fundraising target.",
    ],
  },
];

// white squares on the photo; `dark` squares (yellow glyph) on the yellow bio
function LinkedInIcon({ dark }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect width="24" height="24" rx="2" fill={dark ? "#121212" : "#fff"} />
      <path
        fill={dark ? "var(--acid)" : "#121212"}
        d="M5.3 9.2h2.9V19H5.3zM6.75 4.6a1.68 1.68 0 1 1 0 3.36 1.68 1.68 0 0 1 0-3.36zM10 9.2h2.78v1.34h.04c.39-.73 1.33-1.5 2.74-1.5 2.93 0 3.47 1.93 3.47 4.43V19h-2.9v-4.92c0-1.17-.02-2.68-1.63-2.68-1.64 0-1.89 1.28-1.89 2.6V19H10z"
      />
    </svg>
  );
}

function XIcon({ dark }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect width="24" height="24" rx="2" fill={dark ? "#121212" : "#fff"} />
      <path
        fill={dark ? "var(--acid)" : "#121212"}
        d="M15.9 5.5h2.1l-4.6 5.25L18.8 18.5h-4.2l-3.3-4.3-3.77 4.3H5.42l4.92-5.62L5.2 5.5h4.3l2.98 3.94zm-.74 11.7h1.17L8.9 6.73H7.65z"
      />
    </svg>
  );
}

function Social({ href, label, className = "abf-social", children }) {
  return href ? (
    <a className={className} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}>
      {children}
    </a>
  ) : (
    <span className={className}>{children}</span>
  );
}

// "Built by founders": the two founders on violet cards, each with a yellow
// step block under the photo carrying their name and role (the same layout on
// both cards).
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
          <div className="abf-item" key={f.name}>
          <article className={`abf-card${f.bio ? " abf-card--bio" : ""}`}>
            <img loading="lazy" decoding="async" className="abf-photo" src={f.photo} alt={f.name} />
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
            {f.bio && (
              <div className="abf-bio">
                {/* headed with a small portrait, the founder's name and role,
                    and their LinkedIn and X on the right */}
                <div className="abf-bioHead">
                  <span className="abf-bioThumb" aria-hidden="true">
                    <img loading="lazy" decoding="async" src={f.photo} alt={f.name} />
                  </span>
                  <div aria-hidden="true">
                    <b>{f.name}</b>
                    <span>{f.role}</span>
                  </div>
                  <div className="abf-bioSocials">
                    <Social className="abf-bioSocial" href={f.linkedin} label={`${f.name} on LinkedIn`}>
                      <LinkedInIcon dark />
                    </Social>
                    <Social className="abf-bioSocial" href={f.x} label={`${f.name} on X`}>
                      <XIcon dark />
                    </Social>
                  </div>
                </div>
                {f.bio.map((para, j) => (
                  <p key={j}>{para}</p>
                ))}
              </div>
            )}
          </article>
          {f.bio && (
            <div className="abf-mbio">
              {(f.mobileBio || f.bio).map((para, j) => (
                <p key={j}>{para}</p>
              ))}
            </div>
          )}
          </div>
        ))}
      </div>
    </section>
  );
}
