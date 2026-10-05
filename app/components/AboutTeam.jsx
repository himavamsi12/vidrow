import TagMark from "./TagMark";

// photo n is /about us/team/team{n}.png, in this order. bg fills behind the
// photos cut out on a transparent ground (the rest carry their own).
// linkedin: profile URL — the icon shows either way, linked only with one.
const TEAM = [
  { name: "Nipun Angrish", role: "Director - Brand & Content", bg: "#B78F85", linkedin: "https://www.linkedin.com/in/nipun-angrish/" },
  { name: "Yash Choudhary", role: "Director - Performance & Ad Ops", bg: "#8E916D", linkedin: "https://www.linkedin.com/in/yash-choudhary-iim-iit/" },
  { name: "Aaryan Mehar", role: "Creative Manager - Performance", bg: "#F7ECE1", linkedin: "https://www.linkedin.com/in/aaryan-mehar" },
  { name: "Narottam", role: "Creative Manager - Performance", bg: "#809181", linkedin: "https://www.linkedin.com/in/narottam-kumar-pankaj-b5101b239/" },
  { name: "Shruthy Suvarna", role: "Creative Manager - Socials", bg: "#7891B9", linkedin: "https://www.linkedin.com/in/shruthysuvarna/" },
  { name: "Prathamesh Wankar", role: "Creative Manager - Performance", bg: "#A5B5C4", linkedin: "https://www.linkedin.com/in/prathamesh026" },
  { name: "Hashvith Naik", role: "Creative Associate - Performance", bg: "#F9DC9A", linkedin: "https://www.linkedin.com/in/hashvith-naik-b3732a2a1" },
  { name: "Shivani Agrawal", role: "Content Ops - Performance", bg: "#7992B5", linkedin: "https://www.linkedin.com/in/shivani-agrawal-2107a9229/" },
  { name: "Radhika Dhoot", role: "Founders Office", bg: "#2C3441", linkedin: "https://www.linkedin.com/in/radhika-dhoot-5117a82a6" },
  { name: "Bably Dutta", role: "Post Production Manager - Performance", bg: "#D7CBCD", linkedin: "https://www.linkedin.com/in/bably-d-89aa84206/" },
  { name: "Ayush Harsh", role: "Post Production Manager - Performance", bg: "#CF8480", linkedin: "https://www.linkedin.com/in/ayush-harsh-3ab0631ab" },
  { name: "Kiran Goud", role: "Content Ops - Performance", bg: "#C39941", linkedin: "https://www.linkedin.com/in/kiran-goud333" },
  { name: "Ekansh Johar", role: "Associate - Brand & Content", bg: "#B78F85", linkedin: "https://www.linkedin.com/in/ekanshh-johar-05aa76295" },
  { name: "Anil Siyak", role: "Content Ops - Performance", bg: "#B78F85", linkedin: "https://www.linkedin.com/in/anil-siyak-939b202aa" },
  { name: "Anil Kushwah", role: "Creative Associate - Performance", bg: "#C39941", linkedin: "https://www.linkedin.com/in/anil-kushwah-0167bb256/" },
  { name: "Sneha Das", role: "Creative Writer - Performance", bg: "#537596", linkedin: "https://www.linkedin.com/in/sneha-das-67a482247/" },
  { name: "Utkarsh Kumar", role: "Post Production Associate - Performance", bg: "#C39941", linkedin: "https://www.linkedin.com/in/utkarsh-kumar-0906833a3" },
  { name: "Sandeep", role: "Post Production Associate - Brand", bg: "#8796AC", linkedin: "https://www.linkedin.com/in/sandeeps123/" },
  { name: "Anshika Bhatnagar", role: "Creative Associate - Social", bg: "#F3B1BD", linkedin: "https://www.linkedin.com/in/anshika-b-698ba842a" },
].map((m, i) => ({ ...m, photo: `/about%20us/team/team${i + 1}.png` }));

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect width="24" height="24" rx="2" fill="#121212" />
      <path
        fill="var(--acid)"
        d="M5.3 9.2h2.9V19H5.3zM6.75 4.6a1.68 1.68 0 1 1 0 3.36 1.68 1.68 0 0 1 0-3.36zM10 9.2h2.78v1.34h.04c.39-.73 1.33-1.5 2.74-1.5 2.93 0 3.47 1.93 3.47 4.43V19h-2.9v-4.92c0-1.17-.02-2.68-1.63-2.68-1.64 0-1.89 1.28-1.89 2.6V19H10z"
      />
    </svg>
  );
}

// "The Whole Team": heading on the left, the blurb on the right, then a grid
// of portrait cards, each photo stepping down into a yellow name plate
export default function AboutTeam() {
  return (
    <section className="abt">
      <div className="abt-head">
        <div className="abt-title">
          <div className="ab-tagwrap">
            <span className="ab-tag">The Whole Team</span>
            <TagMark />
          </div>
          <h2 className="abt-h">A hub of Left-Brain creatives.</h2>
        </div>
        <p className="abt-blurb">
          Most creative teams will tell you they&rsquo;re data-driven. Ours didn&rsquo;t have to
          learn that &mdash; it&rsquo;s just how they&rsquo;re wired. The team is largely IIT Kanpur
          alumni, which means systems thinking, first-principles reasoning, and an almost
          inconvenient obsession with how things actually work aren&rsquo;t values we had to
          instill. They came standard.
        </p>
      </div>

      <div className="abt-grid">
        {TEAM.map((m) => (
          <article className="abt-card" key={m.name}>
            <div className="abt-shot" style={{ background: m.bg }}>
              <img src={m.photo} alt={m.name} loading="lazy" />
              <span className="abt-step abt-step--1" aria-hidden="true" />
              <span className="abt-step abt-step--2" aria-hidden="true" />
            </div>
            <div className="abt-plate">
              <h3 className="abt-name">{m.name}</h3>
              <p className="abt-role">{m.role}</p>
              {m.linkedin ? (
                <a
                  className="abt-in"
                  href={m.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${m.name} on LinkedIn`}
                >
                  <LinkedInIcon />
                </a>
              ) : (
                <span className="abt-in">
                  <LinkedInIcon />
                </span>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
