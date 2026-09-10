import ReadArrow from "../../components/ReadArrow";
import Footer from "../../components/Footer";
import SiteNav from "../../components/SiteNav";

export const metadata = {
  title: "PlatinumRx — Case Study | Vidrow",
};

const MORE_STORIES = [1, 2, 3];

const AOC = [
  {
    n: "01",
    title: "The Audience",
    desc: "Diabetes, BP, thyroid and cardiac patients — people who buy the same medicine every month, for years.",
  },
  {
    n: "02",
    title: "The Objective",
    desc: "Acquire that patient, move them onto the app, and become the default place they reorder.",
  },
  {
    n: "03",
    title: "The Constraint",
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

      <div className="csp-in">
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
            src="/casestudy%20images/platinum-rtx.png"
            alt="PlatinumRx: Healthcare App — Start Your Monthly Savings Journey"
          />
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
        <section className="csp-aoc">
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
                <p className="csp-aoc-desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </div>

      <div className="csp-in">
        <section className="csp-mid">
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
        <section className="csp-how">
          <div className="csp-how-left">
            <div className="csp-eyebrow2">
              <span className="csp-eyebrow2-dot" aria-hidden="true" />
              <b>03</b>
              <span className="csp-eyebrow2-sep">·</span>
              HOW WE DID IT
            </div>
            <h2 className="csp-how-h">
              Nobody searches
              <br />
              for a substitute.
              <br />
              You have to
              <br />
              <em>earn the switch.</em>
            </h2>
            <p className="csp-how-copy">
              A chronic patient has taken the same brand for years, on a doctor&apos;s word.
              Changing that is a trust decision, not a price one. So we built two engines and
              pointed both at the same number.
            </p>

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
        </section>
      </div>

      <div className="csp-in">
        <section className="csp-hooks">
          <h2 className="csp-hooks-h">
            Every hook had to
            <br />
            earn its budget.
          </h2>

          <div className="csp-hooks-row">
            <span className="csp-hooks-pin" aria-hidden="true">
              <span className="csp-hooks-pinDot">S</span>
            </span>
            {HOOKS.map((h) => (
              <div className="csp-hookCard" key={h.n}>
                <span className="csp-hookNum">{h.n}</span>
                <h3 className="csp-hookTitle">{h.title}</h3>
                <p className="csp-hookDesc">{h.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </div>

      <div className="csp-in">
        <section className="csp-celeb">
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

            <div className="csp-quoteCard">
              <img className="csp-quoteMark" src="/casestudy%20images/quote-mark.svg" alt="" aria-hidden="true" />
              <span className="csp-quoteEyebrow">Campaign positioning</span>
              <p className="csp-quoteText">
                Celebrity was not the expensive option here. It was the one that worked hardest.
              </p>
              <p className="csp-quoteSub">
                Meta charged us less to show it — the auction rewards what people watch.
              </p>
            </div>
          </div>

          <div className="csp-celebStats">
            <div className="csp-celebStat">
              <div className="csp-celebStatGrid csp-celebStatGrid--violet">
                <span className="csp-celebStatVal">~16% below</span>
                <span className="csp-cell" />
                <span className="csp-cell" />
                <span className="csp-cell" />
                <span className="csp-cell csp-cell--mid" />
              </div>
              <span className="csp-celebStatLabel">Every other producer&apos;s video</span>
            </div>
            <div className="csp-celebStat">
              <div className="csp-celebStatGrid csp-celebStatGrid--yellow">
                <span className="csp-celebStatVal">~33% below</span>
                <span className="csp-cell" />
                <span className="csp-cell" />
                <span className="csp-cell" />
              </div>
              <span className="csp-celebStatLabel">Cost per impression</span>
            </div>
          </div>
        </section>
      </div>

      <div className="csp-in">
        <section className="csp-cac">
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
                Volume at a <em>stable</em>
                <br />
                <em>CAC</em> is the job.
              </h2>
            </div>
            <p className="csp-cac-copy">
              Several producers&apos; creative ran side by side in this account — same targeting,
              same conversion event, same bidding. As the spend opened up, this is whose cost per
              new customer held and whose did not.
            </p>
          </div>

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
            </svg>

            <span className="csp-cacVal csp-cacVal--start">100</span>
            <span className="csp-cacVal csp-cacVal--darkEnd">135</span>
            <span className="csp-cacVal csp-cacVal--violetEnd">106</span>

            <div className="csp-cacAxisLabels">
              <span>July = 100</span>
              <span>As spend scaled</span>
            </div>
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
        <section className="csp-reel">
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

          <div className="csp-reel-row">
            {CELEB_ADS.map((ad) => (
              <div className="csp-reelCard" key={ad.label}>
                <span className="csp-reelPlaceholder" aria-hidden="true" />
                <span className="csp-reelPlay" aria-hidden="true">
                  <span />
                </span>
                <span className="csp-reelLabel">{ad.label}</span>
              </div>
            ))}
          </div>
        </section>
      </div>

      <div className="csp-in">
        <section className="csp-reel">
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

          <div className="csp-reel-row csp-reel-row--4">
            {PERF_ADS.map((ad) => (
              <div className="csp-reelCard" key={ad.label}>
                <span className="csp-reelPlaceholder" aria-hidden="true" />
                <span className="csp-reelPlay" aria-hidden="true">
                  <span />
                </span>
                <span className="csp-reelLabel">{ad.label}</span>
              </div>
            ))}
          </div>
        </section>
      </div>

      <div className="csp-in">
        <section className="csp-more">
          <div className="csp-more-head">
            <h2 className="csp-more-h">More founder journeys.</h2>
            <a className="csp-more-cta" href="/#deepdive">
              <span>See all case studies</span>
              <span className="csp-more-ctaIcon" aria-hidden="true" />
            </a>
          </div>

          <div className="csp-more-row">
            {MORE_STORIES.map((i) => (
              <a className="csp-moreCard" href="/#deepdive" key={i}>
                <span className="csp-moreShot">
                  <img src="/selected/c.png" alt="" loading="lazy" />
                </span>
                <span className="csp-moreBrand">
                  Curious<em>Jr</em>
                </span>
                <span className="csp-moreStat">
                  <b>10x</b> ROI
                </span>
                <p className="csp-moreDesc">
                  We rebuilt the acquisition funnel from the ground up, focusing on regional
                  influencers and hyper-local performance creatives.
                </p>
                <span className="csp-moreRead">
                  Read full story
                  <ReadArrow className="csp-moreArrow" />
                </span>
              </a>
            ))}
          </div>
        </section>
      </div>
    </main>
    <Footer />
    </>
  );
}
