import Footer from "../../components/Footer";
import SiteNav from "../../components/SiteNav";
import CspHooksRow from "../../components/CspHooksRow";
import CampaignFrame from "../../components/CampaignFrame";
import SeekhoFilms from "../../components/SeekhoFilms";
import { CAMPAIGNS } from "../../data/campaigns";
import { DeepDiveCards } from "../../components/CaseStudies";
import CspSectionNav from "../../components/CspSectionNav";

export const metadata = {
  title: "PlatinumRx - Case Study | Vidrow",
  description:
    "How PlatinumRx scaled through UGC and celebrity performance ads, built with Vidrow to explain substitute medicines and medicine savings.",
};

// the side rail's sections (this page has no celebrity-ads or CAC sections)
const SECTIONS = [
  { id: "csp-sec-hero", label: "Overview" },
  { id: "csp-sec-aoc", label: "The Audience" },
  { id: "csp-sec-mid", label: "Where It Landed" },
  { id: "csp-sec-how", label: "How We Did It" },
  { id: "csp-sec-hooks", label: "The Hooks" },
  { id: "csp-sec-reel1", label: "Celebrity Performance" },
  { id: "csp-sec-reel2", label: "Performance Ads" },
  { id: "csp-sec-more", label: "More Stories" },
];
const NO_DARK = [];

const AOC = [
  {
    n: "01",
    title: "The Audience",
    head: "The monthly refill",
    desc: "Diabetes, BP, thyroid and cardiac patients, people who buy the same medicine every month, for years.",
  },
  {
    n: "02",
    title: "The Objective",
    head: "Win them onto the app",
    desc: "Acquire that patient, move them onto the app, and become the default place they reorder.",
  },
  {
    n: "03",
    title: "The Constraint",
    head: "CAC that holds",
    desc: "All of it while the spend scaled. Volume bought by paying more per customer is a bill, not growth.",
  },
];

const HOOKS = [
  {
    n: "01",
    title: "One objection\nper ad",
    desc: "Every film answers a single reason not to switch.",
  },
  {
    n: "02",
    title: "Hinglish and\nregional",
    desc: "Written in the language the refill actually happens in.",
  },
  {
    n: "03",
    title: "Three hooks\neach",
    desc: "Every script shot three ways, batched weekly.",
  },
  {
    n: "04",
    title: "Test before\nscale",
    desc: "A hook reached the scale campaigns only after a test campaign paid for it.",
  },
];

// films from the PlatinumRx campaign pages: one celebrity film each from
// the Anup Soni and Anupam Kher campaigns (plus a second Anup Soni film), and
// the four performance films
const CELEB_ADS = [
  CAMPAIGNS["platinumrx-anup-soni"].frames[1],
  CAMPAIGNS["platinumrx-anup-soni"].frames[0],
  CAMPAIGNS["platinumrx-anupam-kher"].frames[2],
];

const PERF_ADS = CAMPAIGNS["platinumrx-performance-ads"].frames;

export default function PlatinumRxCaseStudy() {
  return (
    <>
    <main className="csp csp--prx">
      <header className="hx-bar hx-bar--page">
        <SiteNav logoHref="/" />
      </header>
      <div className="hx-bar-gap" aria-hidden="true" />

      <CspSectionNav sections={SECTIONS} darkSectionIds={NO_DARK} />

      <div className="csp-in" id="csp-sec-hero">
        <div className="csp-head">
          <h1 className="csp-h">
            PlatinumRx scaled 3X times in 2 months{" "}
            <br />
            through UGC &amp; Celebrity Performance
          </h1>
          <p className="csp-note">
            A chronic-medicine app already spending on acquisition. Three months. One question: how
            much further could the same money go, and who had to be on screen when it did?
          </p>
        </div>

        <div className="csp-banner">
          <img fetchPriority="high"
            src="/casestudy%20images/hero-image.webp"
            alt="PlatinumRx: Healthcare App - Start Your Monthly Savings Journey"
          />
          <span className="csp-bannerTag">
            <img src="/casestudy%20images/platinumrx-lockup.webp" alt="Vidrow x PlatinumRx" />
          </span>
        </div>

        <div className="csp-meta">
          <div className="csp-metaItem">
            <span className="csp-metaLabel">Client</span>
            <span className="csp-metaValue">PlatinumRx</span>
          </div>
          <div className="csp-metaItem">
            <span className="csp-metaLabel">Timeline</span>
            <span className="csp-metaValue">June – August</span>
          </div>
          <div className="csp-metaItem">
            <span className="csp-metaLabel">Result</span>
            <span className="csp-metaValue">3x scale in Reach</span>
          </div>
        </div>
      </div>

      <div className="csp-in">
        <section className="csp-aoc" id="csp-sec-aoc">
          <div className="csp-aoc-head">
            <div>
              <div className="csp-eyebrow2">
                <span className="csp-eyebrow2-dot" aria-hidden="true" />
                <b>01</b>
                <span className="csp-eyebrow2-sep">·</span>
                THE PROBLEM
              </div>
              <h2 className="csp-aoc-h">
                The audience.
                <br className="cprx-brD" />
                <span className="cprx-brM"> </span>
                The objective.
                <br />
                The constraint.
              </h2>
            </div>
            <p className="csp-aoc-copy">
              Vidrow joined PlatinumRx with one goal: reach more chronic medicine users and make
              PlatinumRx their go-to app for monthly medicines. The challenge was to turn its
              strong substitute-medicine proposition into awareness, app installs, and repeat
              monthly purchases.
            </p>
          </div>

          <div className="csp-aoc-cols">
            {AOC.map((item) => (
              <div className="csp-aoc-col" key={item.n}>
                <div className="csp-aoc-colHead">
                  <span className="csp-aoc-num">{item.n}</span>
                  <span className="csp-aoc-tag">{item.title}</span>
                </div>
                <h3 className="csp-aoc-title">{item.head}</h3>
                <p className="csp-aoc-desc">{item.desc}</p>
              </div>
            ))}
          </div>

          <p className="csp-aoc-note">
            Acquire one badly and you carry that cost through every refill that follows.
          </p>
        </section>
      </div>

      <div className="csp-in">
        <section className="csp-mid" id="csp-sec-mid">
          <div className="csp-mid-left">
            <div className="csp-eyebrow2">
              <span className="csp-eyebrow2-dot" aria-hidden="true" />
              <b>02</b>
              <span className="csp-eyebrow2-sep">·</span>
              WHERE IT ENDED UP
            </div>
            <h2 className="csp-mid-h">
              This is what
              <br />
              happened in between.
            </h2>
            <p className="csp-mid-copy">
              PlatinumRx was already spending when we arrived. What changed was how far the same
              money went, and who was on screen when it did.
            </p>
          </div>

          <div className="csp-mid-right">
            <div className="csp-statCol">
              <div className="csp-statGrid csp-statGrid--sm" style={{ "--rows": 1 }}>
                <span className="csp-statVal">1X</span>
                <span className="csp-cell" />
                <span className="csp-cell" />
              </div>
              <span className="csp-statLabel">June</span>
            </div>
            <div className="csp-statCol">
              <div className="csp-statGrid csp-statGrid--lg" style={{ "--rows": 3 }}>
                <span className="csp-statVal">3X</span>
                <span className="csp-cell" />
                <span className="csp-cell" />
                <span className="csp-cell" />
                <span className="csp-cell" />
                <span className="csp-cell" />
                <span className="csp-cell" />
              </div>
              <span className="csp-statLabel">August</span>
            </div>
          </div>
        </section>
      </div>

      <div className="csp-in">
        <section className="csp-how" id="csp-sec-how">
          <div className="csp-how-top">
            <div className="csp-eyebrow2">
              <span className="csp-eyebrow2-dot" aria-hidden="true" />
              <b>03</b>
              <span className="csp-eyebrow2-sep">·</span>
              HOW WE DID IT
            </div>
            <h2 className="csp-how-h">
              Nobody searches for a substitute.
              <br />
              You have to earn the switch.
            </h2>
            <p className="csp-how-copy">
              A chronic patient has taken the same brand for years, on a doctor&apos;s word.
              Changing that is a trust decision, not a price one. So we built two engines and
              pointed both at the same number.
            </p>
          </div>

          <div className="csp-how-row csp-how-row--portrait">
            <div className="csp-how-left">
              <div className="csp-howBlock">
                <span className="csp-howTag">Performance Ads</span>
                <h3 className="csp-howSub">One objection per ad</h3>
                <p className="csp-howDesc">
                  Hinglish and regional scripts, batched weekly, each shot in three hooks. Every
                  hook had to earn its budget in a test campaign before it went near the scale
                  campaigns.
                </p>
              </div>
              <hr className="csp-howDiv" />

              <div className="csp-howBlock">
                <span className="csp-howTag">Celebrity Performance</span>
                <h3 className="csp-howSub">Borrowed credibility</h3>
                <p className="csp-howDesc">
                  A known face, written into the same script formats and run through the same
                  conversion campaigns as everything else.
                </p>
              </div>
              <hr className="csp-howDiv" />

              <p className="csp-howNote">No awareness budget. Both engines answered to the same CAC.</p>
            </div>

            <div className="csp-how-right">
              {/* the generic-medicines performance ad itself, playable in place */}
              <CampaignFrame frame={PERF_ADS[0]} title="PlatinumRx performance ad on generic medicines" />
            </div>
          </div>
        </section>
      </div>

      <div className="csp-in">
        <section className="csp-hooks" id="csp-sec-hooks">
          <h2 className="csp-hooks-h">Every hook had to earn its budget.</h2>

          <CspHooksRow hooks={HOOKS} />
        </section>
      </div>

      <div className="csp-in">
        <section className="csp-reel" id="csp-sec-reel1">
          <div className="csp-eyebrow2">
            <span className="csp-eyebrow2-dot" aria-hidden="true" />
            <b>04</b>
            <span className="csp-eyebrow2-sep">·</span>
            CELEBRITY PERFORMANCE ADS
          </div>
          <h2 className="csp-reel-h">
            Celebrity Performance Ads
            <br />
            for PlatinumRx.
          </h2>

          <SeekhoFilms films={CELEB_ADS} className="cprx-films cprx-films--3" />
        </section>
      </div>

      <div className="csp-in">
        <section className="csp-reel" id="csp-sec-reel2">
          <div className="csp-eyebrow2">
            <span className="csp-eyebrow2-dot" aria-hidden="true" />
            <b>05</b>
            <span className="csp-eyebrow2-sep">·</span>
            PERFORMANCE ADS
          </div>
          <h2 className="csp-reel-h">
            Performance Ads
            <br />
            for PlatinumRx.
          </h2>

          <SeekhoFilms films={PERF_ADS} className="cprx-films" />
        </section>
      </div>

      <div className="csp-in">
        <section className="csp-more" id="csp-sec-more">
          <div className="csp-more-head">
            <h2 className="csp-more-h">More deep dives.</h2>
            <a className="csp-more-cta csp-more-cta--desktop" href="/#deepdive">
              <span className="csp-more-cta-label">See all case studies</span>
              <span className="csp-more-cta-i" aria-hidden="true">
                <svg viewBox="0 0 40 40" aria-hidden="true">
                  <path fill="var(--violet)" d="M0 0 H40 V40 H26.667 V26.667 H13.333 V13.333 H0 Z" />
                </svg>
              </span>
            </a>
          </div>

          <DeepDiveCards embed exclude="/case-study/platinumrx" />
          <div className="csp-more-ctaMobile">
            <a className="csp-more-cta csp-more-cta--mobile" href="/#deepdive">
              <span className="csp-more-cta-label">See all case studies</span>
              <span className="csp-more-cta-i" aria-hidden="true">
                <svg viewBox="0 0 40 40" aria-hidden="true">
                  <path fill="var(--violet)" d="M0 0 H40 V40 H26.667 V26.667 H13.333 V13.333 H0 Z" />
                </svg>
              </span>
            </a>
          </div>
        </section>
      </div>
    </main>
    <Footer />
    </>
  );
}
