import SiteNav from "../components/SiteNav";
import Footer from "../components/Footer";
import TagMark from "../components/TagMark";
import AboutFounders from "../components/AboutFounders";
import AboutTeam from "../components/AboutTeam";
import AboutProof from "../components/AboutProof";
import AboutHow from "../components/AboutHow";
import Reveal from "../components/Reveal";
import { ABOUT_ROWS, ABOUT_ROWS_MOBILE, ABOUT_PHOTOS } from "../data/about";

export const metadata = {
  title: "About Us | Vidrow",
};

// flatten the rows into one run of cells (row-major), so the same markup lays
// out as 17 columns on a desktop and re-flows to 6 on a phone
function buildCells(rows = ABOUT_ROWS) {
  let photo = 0;
  return rows.flatMap((row) =>
    [...row].map((code) =>
      code === "P" ? { code, src: `/about%20us/hero/${ABOUT_PHOTOS[photo++]}.png` } : { code }
    )
  );
}

// the black band of four proof cards
const PROOF = [
  {
    tag: "Recognition",
    title: "Forbes 30 Under 30 Asia",
    body: "Vidrow received recognition from Forbes Asia for entrepreneurship and impact in the startup ecosystem.",
  },
  {
    tag: "First Startup",
    title: "HPF Films \u2192 Acquired by ShareChat, 2020",
    body: "Aditya and Anushank built a content company producing 2,000 titles/month across 12 languages. Both founders have been through the full startup journey of their own.",
  },
  {
    tag: "Foundation",
    title: "IIT Kanpur: Engineering-First Team",
    body: "Both founders and the core team built from IIT Kanpur and equivalent engineering backgrounds. Analytical rigour is the baseline.",
  },
  {
    tag: "Success",
    title: "90% of Startups raise their next round with us",
    body: "90% of Vidrow clients raise their next round while being actively engaged with us.",
  },
];

// "We invest in startups": three cards that step up, each with its own yellow
// corner (a grid of w x h units and the filled [col, row] cells)
const INVEST = [
  {
    title: "Not a Gesture. A way to mean it.",
    body:
      "Not as a gesture, and not as a hook. We do it because the word partner gets thrown around a lot in this industry, and we wanted a way to mean it. When we believe in what you\u2019re building, we put money behind it, which means our incentives sit exactly where yours do. We\u2019re not billing hours and moving on. We\u2019re in the round with you, watching the same metrics, thinking about the same milestones, and just as invested in what happens at the next raise.",
    corner: { w: 2, h: 2, cells: [[1, 0], [0, 1], [1, 1]] },
  },
  {
    title: "Real Skin In The Game.",
    body:
      "Because founders don\u2019t need another vendor. They need someone with real skin in the game. They don\u2019t want to execute briefs. We want to solve problems. That only happens when the founder or the leadership team is directly involved, when someone on the client side actually cares about the outcome the way we do.",
    corner: { w: 3, h: 2, cells: [[1, 0], [0, 1], [1, 1], [2, 1]] },
  },
  {
    title: "A Deliberate Constraint",
    body:
      "So we made a choice: startups only. Seed to Series B. Funded, product-focused, founder-led. That constraint is what allows us to go deep instead of wide, to know what a PMF-stage startup actually needs versus a Series B brand build, and to have a real opinion about the difference.",
    corner: { w: 3, h: 2, cells: [[0, 0], [1, 0], [1, 1], [2, 1]] },
  },
];

// "How Vidrow works": four grey cards around a 2 x 2 yellow block
const HOW = [
  {
    title: "Your out-of-house marketing team.",
    body: "We act as your marketing function, not a supplier to it. When a problem appears (a new channel, a pivot, a fundraise deadline that changes everything), we engage like a team member, not a vendor waiting for a brief. The scope expands and contracts with where you are.",
  },
  {
    title: "We say no to transactional work.",
    body: "If you come to us with \u201c20 videos, one week, here\u2019s the money\u201d, we\u2019ll pass. Not because we can\u2019t. Because that\u2019s not how meaningful work happens. We want the problem first. Every engagement starts with a conversation about where you are and what you\u2019re trying to unlock.",
  },
  {
    title: "Engineering mindset, creative output.",
    body: "The team thinks in numbers first. Creativity is built on top of that. Most of our team comes from engineering and analytical backgrounds, IIT and equivalent. What that means in practice: every creative decision is tied to an outcome it\u2019s supposed to produce.",
  },
  {
    title: "Deep over wide, always.",
    body: "We\u2019d rather work deeply with five clients than superficially with fifty. Our client base is intentionally small. When you work with us, you get senior attention, not a junior team handling your account while the principals are elsewhere.",
  },
];

function Corner({ corner }) {
  return (
    <svg
      className="ab-corner"
      aria-hidden="true"
      viewBox={`0 0 ${corner.w} ${corner.h}`}
      style={{ width: `calc(${corner.w} * var(--cu))` }}
      shapeRendering="crispEdges"
    >
      {corner.cells.map(([c, r]) => (
        <rect key={`${c}-${r}`} x={c} y={r} width="1.01" height="1.01" fill="#F5F978" />
      ))}
    </svg>
  );
}

export default function AboutPage() {
  const cells = buildCells();
  const mobileCells = buildCells(ABOUT_ROWS_MOBILE);
  return (
    <>
      <header className="hx-bar hx-bar--page">
        <SiteNav logoHref="/" />
      </header>
      <div className="hx-bar-gap" aria-hidden="true" />

      <main className="ab">
        <div className="ab-head">
          <div className="ab-tagwrap">
            <span className="ab-tag">About Us</span>
            <TagMark />
          </div>
          <h1 className="ab-h">
            Where Ideas Become Brands <br className="ab-br" />
            That Matter
          </h1>
        </div>

        <div className="ab-grid ab-grid--d">
          {cells.map((c, i) =>
            c.src ? (
              <img key={i} className="ab-cell ab-photo" src={c.src} alt="" />
            ) : (
              <span key={i} className={`ab-cell ab-${c.code.toLowerCase()}`} />
            )
          )}
        </div>

        {/* phones get a mosaic of their own: 11 x 12, per the mobile mock */}
        <div className="ab-grid ab-grid--m">
          {mobileCells.map((c, i) =>
            c.src ? (
              <img key={i} className="ab-cell ab-photo" src={c.src} alt="" />
            ) : (
              <span key={i} className={`ab-cell ab-m${c.code.toLowerCase()}`} />
            )
          )}
        </div>
      </main>

      <section className="ab-why">
        <div className="ab-opening">
          <div className="ab-tagwrap">
            <span className="ab-tag">Why Vidrow</span>
            <TagMark />
          </div>
          <h2 className="ab-openingH">
            We exist because founders deserve
            <br />
            better marketing in early stages
          </h2>

          <div className="ab-openingCopy">
            <div className="ab-openingColumn">
              <p className="ab-openingPara--separated">
                Most startups get handed a generic marketing playbook — hire a growth team, find
                production houses, start Meta-Google and that&apos;s it. It looks like marketing. It
                rarely works like marketing.
              </p>
              <p>
                We work with startups from Seed to Series C — the window where brand and growth
                decisions compound the most. The choices made in this phase don&apos;t just drive
                this quarter&apos;s pipeline. They shape how investors see you, how talent thinks
                about joining, and how customers decide whether to trust you with their money.
              </p>
              <p className="ab-openingPara--separated">
                We come in as the marketing team most early-stage companies can&apos;t afford to
                hire full-time — one that thinks in systems, not campaigns. We help build the
                complete customer journey — the architecture of how a stranger becomes a lead, a lead
                becomes a customer, and a customer becomes someone who tells others. We stay close
                to revenue. We measure pipeline, conversion, CAC, and retention, and make sure you
                achieve your next fundraise goal months early.
              </p>
            </div>
            <div className="ab-openingColumn">
              <p className="ab-openingPara--separated">
                Neither option was built for the way startups actually work — pivoting every three
                months, building and validating simultaneously, needing a partner who thinks like a
                founder, not like a contractor.
              </p>
              <p>
                We built Vidrow because we had been founders ourselves and we knew that gap was
                real. And nobody was filling it right.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="ab-proof">
        <AboutProof cards={PROOF} />
      </section>

      <section className="ab-invest">
        <div className="ab-whyIn">
          <div className="ab-tagwrap">
            <span className="ab-tag">Not an agency, but a partner</span>
            <TagMark />
          </div>
          <h2 className="ab-whyH">We Invest In Startups We Work With</h2>
        </div>

        <Reveal className="ab-stairs" replay resetOnExit rootMargin="0px" threshold={0.3}>
          {INVEST.map((c, i) => (
            <article className={`ab-stair ab-stair--${i + 1}`} key={c.title}>
              <h3>{c.title}</h3>
              <p>{c.body}</p>
              <Corner corner={c.corner} />
            </article>
          ))}
        </Reveal>
      </section>

      <section className="ab-how">
        <div className="ab-howHead">
          <div className="ab-tagwrap">
            <span className="ab-tag">How Vidrow Works</span>
            <TagMark />
          </div>
          <h2 className="ab-whyH">
            Your problems become our problems. <br className="ab-br" />
            That&rsquo;s the only kind of partnership we build.
          </h2>
        </div>

        <AboutHow cards={HOW} />
      </section>

      <AboutFounders />

      <AboutTeam />

      <Footer />
    </>
  );
}
