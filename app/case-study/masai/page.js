import Footer from "../../components/Footer";
import SiteNav from "../../components/SiteNav";
import CspMoreRow from "../../components/CspMoreRow";
import CspSectionNav from "../../components/CspSectionNav";

export const metadata = {
  title: "Masai — Case Study | Vidrow",
};

const SECTIONS = [
  { id: "csp-sec-hero", label: "Overview" },
  { id: "csp-sec-aoc", label: "The Audience" },
  { id: "csp-sec-mid", label: "Where It Landed" },
  { id: "csp-sec-how", label: "How We Did It" },
  { id: "csp-sec-celeb", label: "What We Won" },
  { id: "csp-sec-cac", label: "Scale" },
  { id: "csp-sec-programme", label: "By Programme" },
  { id: "csp-sec-more", label: "More Stories" },
];

// "our ads carried the biggest bets" chart — a cumulative share-of-budget
// curve read at nine ad-count checkpoints (1, top 5, top 10, ...all). The
// checkpoints aren't evenly spaced on a real number line, but the chart
// treats them as categorical ticks (even spacing), which is what lets a
// span running from "1" to "all" fit legibly on one axis.
const SCALE_X = [90, 226, 362, 498, 634, 770, 906, 1042, 1178];
const SCALE_TICKS = ["1", "5", "10", "25", "50", "100", "200", "400", "all"];
const SCALE_Y_TICKS = [0, 10, 20, 30, 40, 50, 60];
const VIDROW_PCT = [3, 8, 18, 28, 38, 45, 51, 54, 56];
const REST_PCT = [2, 6, 13, 22, 30, 37, 41, 43, 45];

const yForPct = (pct) => 380 - pct * 6;
const VIDROW_PTS = SCALE_X.map((x, i) => [x, yForPct(VIDROW_PCT[i])]);
const REST_PTS = SCALE_X.map((x, i) => [x, yForPct(REST_PCT[i])]);

// each segment curves through the midpoint between consecutive points
// (the point itself as the quadratic's control), so the line reads smooth
// at every joint instead of kinking at each data point
function smoothPath(points) {
  let d = `M${points[0][0]},${points[0][1]}`;
  for (let i = 1; i < points.length; i++) {
    const [px, py] = points[i - 1];
    const [x, y] = points[i];
    d += ` Q${px},${py} ${(px + x) / 2},${(py + y) / 2}`;
  }
  const [lx, ly] = points[points.length - 1];
  d += ` L${lx},${ly}`;
  return d;
}

const MORE_STORIES = [
  {
    key: "platinumrx",
    href: "/case-study/platinumrx",
    image: "/casestudy%20images/casestudy-recommendations/platinumx.png",
    imageAlt: "PlatinumRx",
    brand: "PlatinumRx",
    stat: "10x",
    statLabel: "ROI",
    desc: "We rebuilt the acquisition funnel from the ground up, focusing on regional influencers and hyper-local performance creatives.",
  },
  {
    key: "helium",
    href: "/#featured",
    image: "/casestudy%20images/casestudy-recommendations/helium.png",
    imageAlt: "Helium",
    logoType: "image",
    logoSrc: "/casestudy%20images/casestudy-recommendations/helium-logo.png",
    logoAlt: "Helium",
    stat: "10x",
    statLabel: "ROI",
    desc: "We rebuilt the acquisition funnel from the ground up, focusing on regional influencers and hyper-local performance creatives.",
  },
  {
    key: "vyapar",
    href: "/#featured",
    image: "/casestudy%20images/casestudy-recommendations/vyapar.png",
    imageAlt: "Vyapar",
    logoType: "image",
    logoSrc: "/logos/vyapar.png",
    logoAlt: "Vyapar",
    stat: "10x",
    statLabel: "ROI",
    desc: "We rebuilt the acquisition funnel from the ground up, focusing on regional influencers and hyper-local performance creatives.",
  },
];

const PROGRAMMES = [
  {
    area: "MBA",
    programme: "Executive & PGPM programmes",
    val: "-83%",
    desc: "The account's weakest area became its strongest.",
  },
  {
    area: "PM",
    programme: "Product management",
    val: "-32%",
    desc: "A top-volume programme, materially re-priced.",
  },
  {
    area: "TAMIL",
    programme: "AI & ML, regional language",
    val: "-21%",
    desc: "Written natively for the audience, not dubbed into it.",
  },
  {
    area: "DM",
    programme: "Digital marketing",
    val: "-19%",
    desc: "Sharper openings on a crowded, price-led course.",
  },
  {
    area: "DA",
    programme: "Data analytics",
    val: "-4%",
    desc: "A modest gain on an already-efficient programme.",
  },
];

const AOC = [
  {
    n: "01",
    title: "Window",
    head: "6 Months",
    desc: "January to June 2026, judged continuously.",
  },
  {
    n: "02",
    title: "Scope",
    head: "9 Programmes",
    desc: "AI & ML, product management, analytics, MBA and more.",
  },
  {
    n: "03",
    title: "Reach",
    head: "3 Languages",
    desc: "Hindi-English, Tamil and Telugu.",
  },
  {
    n: "04",
    title: "Output",
    head: "~306 Ads made",
    desc: "Each shipped with multiple hooks into the account across the six months.",
  },
];

export default function PlatinumRxCaseStudy() {
  return (
    <>
    <main className="csp">
      <header className="csp-nav">
        <SiteNav logoHref="/" />
      </header>

      <CspSectionNav sections={SECTIONS} />

      <div className="csp-in" id="csp-sec-hero">
        <div className="csp-head">
          <h1 className="csp-h">
            Spends Scaled 5x in 6
            <br />
            Months. At a Sustained CAC.
          </h1>
          <p className="csp-note">
            Masai&apos;s performance came from influencer marketing on Instagram, Twitter and
            LinkedIn. It did not scale, and growth stagnated. The job: scale performance
            marketing with cost per booking under control — and creative costs low.
          </p>
        </div>

        <div className="csp-banner">
          <img
            src="/casestudy%20images/masai-hero.png"
            alt="Masai — India's fastest growing career school"
          />
          <span className="csp-bannerTag">
            <img src="/casestudy%20images/masai-lockup.png" alt="Vidrow x Masai" />
          </span>
        </div>

        <p className="csp-bannerCaption">
          <b>~306 ads</b> one tile each — every ad we shipped into the account across the six
          months, each with multiple hooks.
        </p>

        <div className="csp-meta">
          <div className="csp-metaItem">
            <span className="csp-metaLabel">Client</span>
            <span className="csp-metaValue">Masai</span>
          </div>
          <div className="csp-metaItem">
            <span className="csp-metaLabel">Timeline</span>
            <span className="csp-metaValue">Jan - Jun 2026</span>
          </div>
          <div className="csp-metaItem">
            <span className="csp-metaLabel">Result</span>
            <span className="csp-metaValue">5x spend, CAC held</span>
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
                THE SETUP
              </div>
              <h2 className="csp-aoc-h">Total Vidrow Output</h2>
            </div>
            <p className="csp-aoc-copy">
              Masai runs online tech courses. Nobody buys one off an ad — they book a paid slot
              for Masai&apos;s entrance test first, so every ad in this account is bought and
              judged on test bookings. Masai already ran a large Meta engine with creative
              arriving from several sources, and Meta funds whatever performs.
            </p>
          </div>

          <div className="csp-aoc-cols csp-aoc-cols--4">
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
        </section>
      </div>

      <div className="csp-in">
        <section className="csp-mid" id="csp-sec-mid">
          <div className="csp-mid-left">
            <div className="csp-eyebrow2">
              <span className="csp-eyebrow2-dot" aria-hidden="true" />
              <b>02</b>
              <span className="csp-eyebrow2-sep">·</span>
              THE GROWTH
            </div>
            <h2 className="csp-mid-h">
              Spends scaled 5x
              <br />
              in six months.
            </h2>
            <p className="csp-mid-copy">
              December was the last month before we took the creative over. Since then we&apos;ve
              scaled Masai to nearly five times while sustaining the CAC — and not one month has
              dropped back below where we started.
            </p>
          </div>

          <div className="csp-mid-right">
            <div className="csp-statCol">
              <div className="csp-statGrid csp-statGrid--sm" style={{ "--rows": 1 }}>
                <span className="csp-statVal">1X</span>
                <span className="csp-cell" />
                <span className="csp-cell" />
              </div>
              <span className="csp-statLabel">Dec 2025</span>
            </div>
            <div className="csp-statCol">
              <div className="csp-statGrid csp-statGrid--lg" style={{ "--rows": 5 }}>
                <span className="csp-statVal">5X</span>
                <span className="csp-cell" />
                <span className="csp-cell" />
                <span className="csp-cell" />
                <span className="csp-cell" />
                <span className="csp-cell" />
                <span className="csp-cell" />
                <span className="csp-cell" />
                <span className="csp-cell" />
                <span className="csp-cell" />
                <span className="csp-cell" />
              </div>
              <span className="csp-statLabel">July 2026</span>
            </div>
          </div>
        </section>
      </div>

      <div className="csp-in">
        <section className="csp-flow" id="csp-sec-how">
          <div className="csp-flow-top">
            <div>
              <div className="csp-eyebrow2">
                <span className="csp-eyebrow2-dot" aria-hidden="true" />
                <b>03</b>
                <span className="csp-eyebrow2-sep">·</span>
                HOW WE DO IT
              </div>
              <h2 className="csp-flow-h">Our Creative Strategy</h2>
            </div>
            <p className="csp-flow-copy">
              Three sources feed the batch, the right creator carries it, and every concept
              ships with three different hooks as three separate ads. Meta decides which of them
              survive — and that answer sets the next batch.
            </p>
          </div>

          <div className="csp-flow-diagram">
            <div className="csp-flow-stack">
              <div className="csp-flow-box csp-flow-box--yellow">Instagram trends</div>
              <div className="csp-flow-box csp-flow-box--yellow">New concepts</div>
              <div className="csp-flow-box csp-flow-box--yellow" id="csp-flow-doubledown">
                Double down
              </div>
            </div>

            <div className="csp-flow-connector">
              <svg viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
                <path d="M0,17 H50 V50 M0,50 H50 M0,83 H50 V50 M50,50 H100" />
              </svg>
              <span className="csp-flow-arrowhead" style={{ top: "50%" }} />
            </div>

            <div className="csp-flow-box csp-flow-box--violet">
              <h3>Right Creator</h3>
              <p>We keep the creators who convert and drop the ones who do not.</p>
            </div>

            <div className="csp-flow-connector">
              <svg viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
                <path d="M0,50 H100" />
              </svg>
              <span className="csp-flow-arrowhead" style={{ top: "50%" }} />
            </div>

            <div className="csp-flow-box csp-flow-box--violet">
              <h3>Hook</h3>
              <p>Every concept goes out with three different hooks, each as its own ad.</p>
            </div>

            <div className="csp-flow-connector">
              <svg viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
                <path d="M0,50 H50 V17 H100 M50,50 V83 H100 M50,50 H0" />
              </svg>
              <span className="csp-flow-arrowhead" style={{ top: "17%" }} />
              <span className="csp-flow-arrowhead" style={{ top: "83%" }} />
            </div>

            <div className="csp-flow-outcomes">
              <div className="csp-flow-box csp-flow-box--yellow csp-flow-box--outcome">
                Did not work → Discard
              </div>
              <span className="csp-flow-metaLabel">Meta decides which</span>
              <div className="csp-flow-box csp-flow-box--yellow csp-flow-box--outcome" id="csp-flow-worked">
                Worked → Double down
              </div>
            </div>
          </div>

          <div className="csp-flow-loop">
            <svg viewBox="0 0 1000 90" preserveAspectRatio="none" aria-hidden="true">
              <path d="M910,0 V70 H105 V0" />
            </svg>
            <span className="csp-flow-arrowhead csp-flow-arrowhead--up" style={{ left: "10.5%" }} />
            <span className="csp-flow-loopLabel">
              every result — win or loss — goes straight back into next week&apos;s batch
            </span>
          </div>

          <p className="csp-howNote">
            36% of our ads with a real budget beat the account&apos;s average cost — against 27%
            of everything else running.
          </p>
        </section>
      </div>

      <div className="csp-in">
        <section className="csp-celeb csp-won" id="csp-sec-celeb">
          <div className="csp-eyebrow2">
            <span className="csp-eyebrow2-dot" aria-hidden="true" />
            <b>04</b>
            <span className="csp-eyebrow2-sep">·</span>
            WHAT WE WON
          </div>

          <div className="csp-won-layout">
            <h2 className="csp-celeb-h">
              Vidrow ads
              <br />
              vs others.
            </h2>
            <p className="csp-won-copy">
              Meta was never told to favour our ads. It moved the money there because they
              converted — and it moved more of it than the share of ads we made.
            </p>

            <div className="csp-won-left">
              <span className="csp-won-label">Our share of the spends</span>
              <div className="csp-won-grid">
                <div className="csp-won-col">
                  <div className="csp-won-card csp-won-card--gray">
                    <span className="csp-won-val">52%</span>
                    <span className="csp-won-cardLabel">of all the ads that ran</span>
                  </div>
                  <div className="csp-won-card csp-won-card--acid">
                    <span className="csp-won-val">56%</span>
                    <span className="csp-won-cardLabel">of all the money spent</span>
                  </div>
                </div>
                <div className="csp-won-card csp-won-card--pale">
                  <span className="csp-won-val">55%</span>
                  <span className="csp-won-cardLabel">of all the test bookings</span>
                </div>
              </div>
            </div>

            <div className="csp-won-right">
              <span className="csp-won-label">Why that matters</span>
              <div className="csp-won-stack">
                <div className="csp-won-statCard">
                  <span className="csp-won-statVal">-27%</span>
                  <span className="csp-won-statLabel">Lower cost per test booking</span>
                </div>
                <div className="csp-won-note">
                  <p>
                    We made just over half the ads — and took a bigger share of the bookings and
                    a bigger share of the budget than that.
                  </p>
                </div>
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
                SCALE
              </div>
              <h2 className="csp-cac-h">
                Our ads carried the
                <br />
                account&apos;s biggest bets.
              </h2>
            </div>
            <p className="csp-cac-copy">
              Line up every ad in the account by the budget it carried and add them up one at a
              time. Our ads are ahead of the rest at the top, in the middle and at the bottom.
            </p>
          </div>

          <div className="csp-cac-plot">
            <div className="csp-cac-plotL">
              <span className="csp-cac-caption">Share of the account&apos;s budget, added up ad by ad</span>

              <div className="csp-scaleChart">
                <svg viewBox="0 0 1200 420" preserveAspectRatio="none" aria-hidden="true">
                  {SCALE_Y_TICKS.map((pct) => (
                    <line
                      key={pct}
                      className={pct === 0 ? "csp-scaleAxis" : "csp-scaleGrid"}
                      x1="70"
                      y1={yForPct(pct)}
                      x2="1200"
                      y2={yForPct(pct)}
                    />
                  ))}

                  {SCALE_Y_TICKS.map((pct) => (
                    <text
                      key={pct}
                      className="csp-scaleYLabel"
                      x="52"
                      y={yForPct(pct) + 6}
                      textAnchor="end"
                    >
                      {pct}%
                    </text>
                  ))}

                  <path className="csp-scaleLine csp-scaleLine--dark" d={smoothPath(REST_PTS)} />
                  <path className="csp-scaleLine csp-scaleLine--violet" d={smoothPath(VIDROW_PTS)} />

                  <circle
                    className="csp-scaleDot csp-scaleDot--dark"
                    cx={REST_PTS[REST_PTS.length - 1][0]}
                    cy={REST_PTS[REST_PTS.length - 1][1]}
                    r="9"
                  />
                  <circle
                    className="csp-scaleDot csp-scaleDot--violet"
                    cx={VIDROW_PTS[VIDROW_PTS.length - 1][0]}
                    cy={VIDROW_PTS[VIDROW_PTS.length - 1][1]}
                    r="9"
                  />

                  <text
                    className="csp-scaleVal csp-scaleVal--violet"
                    x={VIDROW_PTS[VIDROW_PTS.length - 1][0]}
                    y={VIDROW_PTS[VIDROW_PTS.length - 1][1] - 20}
                    textAnchor="end"
                  >
                    56%
                  </text>
                  <text
                    className="csp-scaleVal csp-scaleVal--dark"
                    x={REST_PTS[REST_PTS.length - 1][0]}
                    y={REST_PTS[REST_PTS.length - 1][1] - 20}
                    textAnchor="end"
                  >
                    45%
                  </text>

                  {SCALE_X.map((x, i) => (
                    <text key={SCALE_TICKS[i]} className="csp-scaleXLabel" x={x} y="410" textAnchor="middle">
                      {SCALE_TICKS[i]}
                    </text>
                  ))}
                </svg>
              </div>
            </div>

            <aside className="csp-cacCard">
              <span className="csp-cacCard-val">4 of 5</span>
              <div className="csp-cacCard-foot">
                <b>Top spending ads</b>
                <span>were Vidrow ads.</span>
              </div>
            </aside>
          </div>

          <div className="csp-cacLegend">
            <span className="csp-cacLegendItem">
              <i className="csp-cacSwatch csp-cacSwatch--violet" />
              Vidrow ads
            </span>
            <span className="csp-cacLegendItem">
              <i className="csp-cacSwatch csp-cacSwatch--dark" />
              Rest of account
            </span>
          </div>

          <p className="csp-howNote">
            Reading left to right: the biggest single ad, then the biggest five, and so on to all
            of them. The Vidrow line never drops below the rest — so this is not one runaway
            winner flattering an average.
          </p>
        </section>
      </div>

      <div className="csp-in">
        <section className="csp-prog" id="csp-sec-programme">
          <div className="csp-prog-head">
            <div>
              <div className="csp-eyebrow2">
                <span className="csp-eyebrow2-dot" aria-hidden="true" />
                <b>06</b>
                <span className="csp-eyebrow2-sep">·</span>
                BY PROGRAMME
              </div>
              <h2 className="csp-prog-h">
                Biggest gains
                <br />
                where it was hardest.
              </h2>
            </div>
            <p className="csp-prog-copy">
              Each row compares our ad against other video selling the same programme, in the
              same language.
            </p>
          </div>

          <div className="csp-prog-table">
            <div className="csp-prog-row csp-prog-row--head">
              <span className="csp-prog-th">Area</span>
              <span className="csp-prog-th">Programme</span>
              <span className="csp-prog-th">Vs. rest</span>
              <span className="csp-prog-th">What it means</span>
            </div>
            {PROGRAMMES.map((p) => (
              <div className="csp-prog-row" key={p.area}>
                <span className="csp-prog-area">{p.area}</span>
                <span className="csp-prog-programme">{p.programme}</span>
                <span className="csp-prog-val">{p.val}</span>
                <span className="csp-prog-desc">{p.desc}</span>
              </div>
            ))}
          </div>
        </section>
      </div>

      <div className="csp-in">
        <section className="csp-more" id="csp-sec-more">
          <div className="csp-more-head">
            <h2 className="csp-more-h">More founder journeys.</h2>
            <a className="csp-more-cta csp-more-cta--desktop" href="/#featured">
              <span className="csp-more-cta-label">See all case studies</span>
              <span className="csp-more-cta-i" aria-hidden="true">
                <svg viewBox="0 0 40 40" aria-hidden="true">
                  <path fill="var(--violet)" d="M0 0 H40 V40 H26.667 V26.667 H13.333 V13.333 H0 Z" />
                </svg>
              </span>
            </a>
          </div>

          <CspMoreRow
            stories={MORE_STORIES}
            cta={
              <a className="csp-more-cta csp-more-cta--mobile" href="/#featured">
                <span className="csp-more-cta-label">See all case studies</span>
                <span className="csp-more-cta-i" aria-hidden="true">
                  <svg viewBox="0 0 40 40" aria-hidden="true">
                    <path fill="var(--violet)" d="M0 0 H40 V40 H26.667 V26.667 H13.333 V13.333 H0 Z" />
                  </svg>
                </span>
              </a>
            }
          />
        </section>
      </div>
    </main>
    <Footer />
    </>
  );
}
