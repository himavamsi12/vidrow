import Footer from "../../components/Footer";
import SiteNav from "../../components/SiteNav";
import CspHooksRow from "../../components/CspHooksRow";
import CspReelRow from "../../components/CspReelRow";
import CspMoreRow from "../../components/CspMoreRow";
import CspSectionNav from "../../components/CspSectionNav";

export const metadata = {
  title: "PlatinumRx — Case Study | Vidrow",
};

const MORE_STORIES = [1, 2, 3];

const AOC = [
  {
    n: "01",
    title: "The Audience",
    head: "The monthly refill",
    desc: "Diabetes, BP, thyroid and cardiac patients — people who buy the same medicine every month, for years.",
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

const CELEB_ADS = [
  { label: "Delivery, done" },
  { label: "Anup Soni" },
  { label: "Anupam Kher" },
];

const PERF_ADS = [
  { label: "Generic medicines" },
  { label: "At the counter" },
  { label: "Same salt" },
  { label: "The reorder" },
];

const CELEB_POINTS = [
  {
    title: "The first three seconds",
    desc: "A known face buys the opening of the ad. Nobody hears a message they scrolled past.",
  },
  {
    title: "Same scripts, same rules",
    desc: "Celebrity films used the same script formats and ran in the same conversion campaigns as everything else.",
  },
  {
    title: "Judged on cost, not reach",
    desc: "No awareness budget. Every film answered to cost per new chronic customer.",
  },
];

export default function PlatinumRxCaseStudy() {
  return (
    <>
    <main className="csp">
      <header className="csp-nav">
        <SiteNav logoHref="/" />
      </header>

      <CspSectionNav />

      <div className="csp-in" id="csp-sec-hero">
        <div className="csp-head">
          <h1 className="csp-h">
            3x in 3 Months June to
            <br />
            August At a Controlled CAC.
          </h1>
          <p className="csp-note">
            A premium AC brand. A 90-day window. One bold question: could the right pieces,
            assembled correctly, sell 500 units a day — entirely from a website?
          </p>
        </div>

        <div className="csp-banner">
          <img
            src="/casestudy%20images/hero-image.png"
            alt="PlatinumRx: Healthcare App — Start Your Monthly Savings Journey"
          />
          <span className="csp-bannerTag">
            <img src="/casestudy%20images/platinumrx-lockup.png" alt="Vidrow x PlatinumRx" />
          </span>
        </div>

        <div className="csp-meta">
          <div className="csp-metaItem">
            <span className="csp-metaLabel">Client</span>
            <span className="csp-metaValue">PlatinumRX</span>
          </div>
          <div className="csp-metaItem">
            <span className="csp-metaLabel">Timeline</span>
            <span className="csp-metaValue">June - August</span>
          </div>
          <div className="csp-metaItem">
            <span className="csp-metaLabel">Result</span>
            <span className="csp-metaValue">3x at a flat CAC</span>
          </div>
        </div>
      </div>

      <div className="csp-in">
        <section className="csp-aoc" id="csp-sec-aoc">
          <div className="csp-aoc-head">
            <h2 className="csp-aoc-h">
              The audience.
              <br />
              The Objective. The contraint.
            </h2>
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
              money went — and who was on screen when it did.
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
              You have to <em>earn the switch.</em>
            </h2>
            <p className="csp-how-copy">
              A chronic patient has taken the same brand for years, on a doctor&apos;s word.
              Changing that is a trust decision, not a price one. So we built two engines and
              pointed both at the same number.
            </p>
          </div>

          <div className="csp-how-row">
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
              <img src="/casestudy%20images/image.png" alt="They Saw It — PlatinumRx spokesperson" />
            </div>
          </div>
        </section>
      </div>

      <div className="csp-in">
        <section className="csp-hooks" id="csp-sec-hooks">
          <h2 className="csp-hooks-h">
            Every hook had to
            <br />
            earn its budget.
          </h2>

          <CspHooksRow hooks={HOOKS} />
        </section>
      </div>

      <div className="csp-in">
        <section className="csp-celeb" id="csp-sec-celeb">
          <h2 className="csp-celeb-h">
            A stranger&apos;s cheaper medicine is a risk.
            <br />
            A familiar face <em>is not.</em>
          </h2>
          <p className="csp-celeb-copy">
            Anup Soni, Anupam Kher and Bhide closed the gap between &quot;cheaper&quot; and
            &quot;safe&quot; in the first three seconds. Nobody switches a lifelong prescription
            on a stranger&apos;s word.
          </p>

          <div className="csp-celeb-body">
            <div className="csp-celeb-points">
              {CELEB_POINTS.map((p) => (
                <div className="csp-celebPoint" key={p.title}>
                  <div className="csp-celebPoint-h">
                    <img className="csp-celebBars" src="/casestudy%20images/bar-icon.png" alt="" />
                    <h3>{p.title}</h3>
                  </div>
                  <p>{p.desc}</p>
                </div>
              ))}
            </div>

            <div className="csp-quoteWrap">
              <img className="csp-quoteMark" src="/casestudy%20images/quote-mark.svg" alt="" aria-hidden="true" />
              <div className="csp-quoteCard">
                <div className="csp-quoteInner">
                  <span className="csp-quoteEyebrow">Campaign positioning</span>
                  <p className="csp-quoteText">
                    Celebrity was not the expensive option here. It was the one that worked hardest.
                  </p>
                  <p className="csp-quoteSub">
                    Meta charged us less to show it — the auction rewards what people watch.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="csp-celebStats">
            <div className="csp-celebStatBlock csp-celebStatBlock--yellow">
              <span className="csp-celebStatVal">~16%</span>
              <div className="csp-celebStatRow">
                <span className="csp-celebStatVal">below</span>
                <span className="csp-celebStatLabel">Every other producer&apos;s video</span>
              </div>
            </div>
            <div className="csp-celebStatBlock csp-celebStatBlock--violet">
              <span className="csp-celebStatVal">~33%</span>
              <div className="csp-celebStatRow">
                <span className="csp-celebStatVal">below</span>
                <span className="csp-celebStatLabel">Cost per impression</span>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="csp-in">
        <section className="csp-cac" id="csp-sec-cac">
          <div className="csp-cac-head">
            <div className="csp-cac-headL">
              <div className="csp-eyebrow2">
                <span className="csp-eyebrow2-dot" aria-hidden="true" />
                <b>05</b>
                <span className="csp-eyebrow2-sep">·</span>
                CONTROLLED CAC
              </div>
              <h2 className="csp-cac-h">
                Volume is easy.
                <br />
                Volume at a <em>stable CAC</em> is the job.
              </h2>
            </div>
            <p className="csp-cac-copy">
              Several producers&apos; creative ran side by side in this account — same targeting,
              same conversion event, same bidding. As the spend opened up, this is whose cost per
              new customer held and whose did not.
            </p>
          </div>

          <div className="csp-cac-plot">
            <div className="csp-cac-plotL">
              <span className="csp-cac-caption">Cost per new customer (July = 100)</span>

              <div className="csp-cacChart">
                <svg viewBox="0 0 1160 420" preserveAspectRatio="none" aria-hidden="true">
                  <line className="csp-cacGrid" x1="0" y1="80" x2="1160" y2="80" />
                  <line className="csp-cacGrid" x1="0" y1="180" x2="1160" y2="180" />
                  <line className="csp-cacGrid" x1="0" y1="280" x2="1160" y2="280" />
                  <line className="csp-cacAxis" x1="0" y1="380" x2="1160" y2="380" />

                  <line className="csp-cacLine csp-cacLine--dark" x1="40" y1="280" x2="1120" y2="80" />
                  <line className="csp-cacLine csp-cacLine--violet" x1="40" y1="280" x2="1120" y2="253" />

                  <circle className="csp-cacDot csp-cacDot--dark" cx="40" cy="280" r="9" />
                  <circle className="csp-cacDot csp-cacDot--dark" cx="1120" cy="80" r="9" />
                  <circle className="csp-cacDot csp-cacDot--violet" cx="1120" cy="253" r="9" />

                  {/* real SVG text, not an HTML overlay positioned by percentage —
                      its gap above each dot is in the same coordinate space as the
                      dot itself, so it scales exactly with the chart at every
                      width instead of drifting close enough to overlap on narrow
                      screens */}
                  <text className="csp-cacVal csp-cacVal--start" x="40" y="242" textAnchor="middle">
                    100
                  </text>
                  <text className="csp-cacVal csp-cacVal--darkEnd" x="1120" y="42" textAnchor="middle">
                    135
                  </text>
                  <text className="csp-cacVal csp-cacVal--violetEnd" x="1120" y="215" textAnchor="middle">
                    106
                  </text>
                </svg>

                <div className="csp-cacAxisLabels">
                  <span>July = 100</span>
                  <span>As spend scaled</span>
                </div>
              </div>
            </div>

            <aside className="csp-cacCard">
              <span className="csp-cacCard-val">92%</span>
              <div className="csp-cacCard-foot">
                <b>Of new chronic customers</b>
                <span>
                  Acquired on a creative
                  <br />
                  Vidrow built
                </span>
              </div>
            </aside>
          </div>

          <div className="csp-cacLegend">
            <span className="csp-cacLegendItem">
              <i className="csp-cacSwatch csp-cacSwatch--violet" />
              Vidrow creative
            </span>
            <span className="csp-cacLegendItem">
              <i className="csp-cacSwatch csp-cacSwatch--dark" />
              Every other producer
            </span>
          </div>

          <p className="csp-howNote">That gap is the whole case study.</p>
        </section>
      </div>

      <div className="csp-in">
        <section className="csp-reel" id="csp-sec-reel1">
          <div className="csp-eyebrow2">
            <span className="csp-eyebrow2-dot" aria-hidden="true" />
            <b>06</b>
            <span className="csp-eyebrow2-sep">·</span>
            CELEBRITY PERFORMANCE ADS
          </div>
          <h2 className="csp-reel-h">
            Celebrity Performance Ads
            <br />
            for PlatinumRx.
          </h2>

          <CspReelRow ads={CELEB_ADS} />
        </section>
      </div>

      <div className="csp-in">
        <section className="csp-reel" id="csp-sec-reel2">
          <div className="csp-eyebrow2">
            <span className="csp-eyebrow2-dot" aria-hidden="true" />
            <b>07</b>
            <span className="csp-eyebrow2-sep">·</span>
            PERFORMANCE ADS
          </div>
          <h2 className="csp-reel-h">
            Performance Ads
            <br />
            for PlatinumRx.
          </h2>

          <CspReelRow ads={PERF_ADS} four />
        </section>
      </div>

      <div className="csp-in">
        <section className="csp-more" id="csp-sec-more">
          <div className="csp-more-head">
            <h2 className="csp-more-h">More founder journeys.</h2>
          </div>

          <CspMoreRow stories={MORE_STORIES} />
        </section>
      </div>
    </main>
    <Footer />
    </>
  );
}
