import SiteNav from "../components/SiteNav";
import Footer from "../components/Footer";
import TagMark from "../components/TagMark";
import AboutFounders from "../components/AboutFounders";
import AboutTeam from "../components/AboutTeam";
import AboutProof from "../components/AboutProof";
import AboutHow from "../components/AboutHow";
import Reveal from "../components/Reveal";
import { ABOUT_ROWS, ABOUT_ROWS_MOBILE, ABOUT_PHOTOS, ABOUT_PHOTOS_MOBILE, ABOUT_PHOTO_ZOOM_MOBILE } from "../data/about";

export const metadata = {
  title: "About Us | Vidrow",
  description:
    "Meet the founders and the largely IIT Kanpur team behind Vidrow, a marketing partner that invests in the startups it works with and plans each stage of growth with founders.",
};

// flatten the rows into one run of cells (row-major), so the same markup lays
// out as 17 columns on a desktop and re-flows to 6 on a phone
function buildCells(rows = ABOUT_ROWS, photos = ABOUT_PHOTOS) {
  let photo = 0;
  return rows.flatMap((row) =>
    [...row].map((code) => {
      if (code !== "P") return { code };
      const name = photos[photo++];
      return { code, src: `/about%20us/hero/${name}.webp`, zoom: ABOUT_PHOTO_ZOOM_MOBILE[name] };
    })
  );
}

// the black band of four proof cards
const PROOF = [
  {
    tag: "Recognition",
    title: "Forbes 30 Under 30 Asia",
    body: "Vidrow\u2019s co-founder Aditya Raj Somani was named to the Forbes 30 Under 30 Asia 2025 list in the Social Media, Marketing & Advertising category.",
  },
  {
    tag: "First Startup",
    title: "HPF Films \u2192 Acquired by ShareChat, 2020",
    body: "Aditya and Anushank built and ran HPF Films to a million-dollar revenue mark before its acquisition by ShareChat in 2020.",
  },
  {
    tag: "Foundation",
    title: "IIT Kanpur Engineering-First Team",
    body: "Both founders and the core team come from IIT Kanpur. Ex-Drama and Films Club members of IIT Kanpur, they bring the best blend of creativity, analytics and strategy.",
  },
  {
    tag: "Success",
    title: "90% of partnering Startups successfully raise their next round while working with us",
    body: "9 out of 10 startups we work with raise their next round while they\u2019re with us. That isn\u2019t luck. It\u2019s what happens when marketing is built around the metrics investors actually care about, and when the team running it wants your next round as badly as you do.",
  },
];

const SUCCESS = PROOF.find((c) => c.tag === "Success");

// "We invest in startups": three cards that step up, each with its own yellow
// corner (a grid of w x h units and the filled [col, row] cells)
const INVEST = [
  {
    title: "Why are we investing?",
    body: [
      "We want our work to help you raise the next round faster and bigger.",
      "Our investment ties our upside to your valuation, not our service invoice. We chase business targets rather than vanity metrics. This is our way of saying that we believe in the founder and we want to build alongside them. This is real skin in the game.",
    ],
    corner: { w: 2, h: 2, cells: [[1, 0], [0, 1], [1, 1]] },
  },
  {
    title: "Who Are We Investing In?",
    body: [
      "We back startups from pre-seed to Series C, led by founders with aggressive ambitions. We look for products where marketing can make a real difference to growth: categories where sharper positioning, better creative and smarter performance marketing can change the trajectory of a company.",
      "If marketing can be your unfair advantage, we\u2019d like to talk.",
    ],
    corner: { w: 3, h: 2, cells: [[1, 0], [0, 1], [1, 1], [2, 1]] },
  },
  {
    title: "What Does It Mean For Founders?",
    body: [
      "We build the traction founders take into investor meetings: user growth, lower CAC and the revenue that makes the next round happen. As investors, that next round matters just as much to us as it does to the founders.",
      "With our investment, founders get more than capital. They get a marketing partner for the whole journey, through thick and thin. When they launch a new product, enter a new market, pivot completely or prepare for the next raise, they will always have an experienced marketing team in their corner.",
    ],
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
  const mobileCells = buildCells(ABOUT_ROWS_MOBILE, ABOUT_PHOTOS_MOBILE);
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
              <img key={i} className="ab-cell ab-photo" src={c.src} alt="A member of the Vidrow team" />
            ) : (
              <span key={i} className={`ab-cell ab-${c.code.toLowerCase()}`} />
            )
          )}
        </div>

        {/* phones get a mosaic of their own: 11 x 12, per the mobile mock */}
        <div className="ab-grid ab-grid--m">
          {mobileCells.map((c, i) =>
            c.src ? (
              <span
                key={i}
                className="ab-cell ab-photo ab-photo--m"
                style={{
                  backgroundImage: `url(${c.src})`,
                  backgroundSize: `${(c.zoom?.[0] || 1) * 100}%`,
                  backgroundPosition: c.zoom ? `${c.zoom[1]}% ${c.zoom[2]}%` : undefined,
                }}
              />
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
            We exist because founders deserve{" "}
            <br className="ab-openingBr" />
            better marketing in early stages
          </h2>

          <div className="ab-openingCopy">
            <div className="ab-openingColumn">
              <p className="ab-openingPara--separated">
                Most startups get handed a generic marketing playbook, hire a growth team, find
                production houses, start running Meta and Google ads and that&apos;s it. It looks like marketing. It
                rarely works like marketing.
              </p>
              <p>
                We work with startups from Seed to Series C, the window where brand and growth
                decisions compound the most. The choices made in this phase don&apos;t just drive
                this quarter&apos;s pipeline. They shape how investors see you, how talent thinks
                about joining, and how customers decide whether to trust you with their money.
              </p>
              <p className="ab-openingPara--separated">
                We come in as the marketing team most early-stage companies can&apos;t afford to
                hire full-time, one that thinks in systems, not campaigns. We help build the
                complete customer journey, the architecture of how a stranger becomes a lead, a lead
                becomes a customer, and a customer becomes someone who tells others. We stay close
                to revenue. We measure pipeline, conversion, CAC, and retention, and make sure you
                reach your next fundraise goal sooner.
              </p>
            </div>
            <div className="ab-openingColumn">
              <p className="ab-openingPara--separated">
                Neither option was built for the way startups actually work, pivoting every three
                months, building and validating simultaneously, needing a partner who thinks like a
                founder, not like a contractor.
              </p>
              <p>
                We built Vidrow because we had been founders ourselves and we knew that gap was
                real. And nobody was filling it right.
              </p>
              {/* the Success proof card lives here, under the copy, as a light
                  outlined card with its tag on the top edge (not in the black
                  band, which keeps the other three) */}
              <article className="ab-whyCard">
                <span className="ab-tagwrap ab-whyCardTag">
                  <span className="ab-tag">{SUCCESS.tag}</span>
                  <TagMark />
                </span>
                <h3>{SUCCESS.title}</h3>
                <p>{SUCCESS.body}</p>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section className="ab-proof">
        <AboutProof cards={PROOF.filter((c) => c !== SUCCESS)} />
      </section>

      <section className="ab-invest">
        <div className="ab-whyIn">
          <div className="ab-tagwrap">
            <span className="ab-tag">Not an agency, but a partner</span>
            <TagMark />
          </div>
          <h2 className="ab-whyH">
            We invest capital in
            <br className="ab-investHeadingBreak" />
            {" "}the startups we work with
          </h2>
        </div>

        <Reveal className="ab-stairs" replay resetOnExit rootMargin="0px" threshold={0.3}>
          {INVEST.map((c, i) => (
            <article className={`ab-stair ab-stair--${i + 1}`} key={c.title}>
              <h3>{c.title}</h3>
              {c.body.map((para, k) => (
                <p key={k}>{para}</p>
              ))}
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
