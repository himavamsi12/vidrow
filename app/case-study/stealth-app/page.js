import Footer from "../../components/Footer";
import SiteNav from "../../components/SiteNav";
import CspSectionNav from "../../components/CspSectionNav";
import CspMoreRow from "../../components/CspMoreRow";

export const metadata = {
  title: "Stealth App - Case Study | Vidrow",
};

// the eight steps from first ad to paying user — the last two (the trial
// converting, autopay switching on) are the ones that make money, in acid
const JOURNEY = [
  { tag: "The feature", title: "One feature", desc: "2\u20133 different ads. Different hooks. Same destination." },
  { tag: "The ad", title: "Sees Ad", desc: "Sees the feature in a way that speaks to them and clicks." },
  { tag: "The install", title: "Downloads", desc: "Downloads the app directly from that same ad." },
  { tag: "The set-up", title: "Set-up", desc: "Language & phone number. 2 taps and they are in." },
  { tag: "The landing", title: "Launches", desc: "Opens on that feature. No home screen, no searching." },
  { tag: "The \u20b91 trial", title: "Takes Trial", desc: "Takes the \u20b91 trial for a 3 days period." },
  { tag: "Conversion", title: "Trial Run", desc: "Experience the feature during trial. Product does the selling.", hi: true },
  { tag: "The autopay", title: "Paid User", desc: "Trial ends. Autopay activates automatically.", hi: true },
];

// test → measure → pick → scale, each card's number sitting in an acid step
const WINS = [
  {
    tag: "Test",
    val: "12",
    title: "Total Features to talk about",
    desc: "We tested ads across each feature. 10 ad sets were tried for each feature separately",
  },
  {
    tag: "Measure",
    val: "1",
    title: "Measure of Success",
    desc: "We only tracked final purchase event and nothing else",
  },
  {
    tag: "Pick",
    val: "3",
    title: "Features worth Backing",
    desc: "At the end 3 features came out as winners and very clear audience cohort emerged. We doubled down on scaling these features within the audience cohort",
    strong: true,
  },
  {
    tag: "Scale",
    val: "77%",
    title: "of All Paying Users came from these 3 features",
    desc: "came from these features where they started. They sold the details",
  },
];

// share of paying users that came from the three winning features, by month
const SHARES = [
  { month: "June", val: 19 },
  { month: "July", val: 56 },
  { month: "August", val: 77 },
];

// the scale-up phase in four numbers; the swatch alternates acid / lilac
const OUTPUT = [
  { tag: "Creative", val: "~600+", desc: "ad sets made for 3 features during scale up phase" },
  { tag: "Customer payback period", val: "~3 Months" },
  { tag: "Paying users acquired", val: "3,00,000" },
  { tag: "Daily acquisition rate achieved", val: "10,000", desc: "paid users / day" },
];

const MORE_STORIES = [
  {
    key: "masai",
    href: "/case-study/masai",
    image: "/casestudy%20images/casestudy-recommendations/masai.png",
    imageAlt: "Masai",
    logoType: "image",
    logoSrc: "/casestudy%20images/casestudy-recommendations/masai-logo.png",
    logoAlt: "Masai",
    stat: "10x",
    statLabel: "ROI",
    desc: "We rebuilt the acquisition funnel from the ground up, focusing on regional influencers and hyper-local performance creatives.",
  },
  {
    key: "helium",
    href: "/case-study/helium",
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

const SECTIONS = [
  { id: "csp-sec-hero", label: "Stealth App" },
  { id: "csp-sec-problem", label: "Problem Statement" },
  { id: "csp-sec-outcome", label: "The Outcome" },
  { id: "csp-sec-journey", label: "The User Journey" },
  { id: "csp-sec-how", label: "How We Did It" },
  { id: "csp-sec-pmf", label: "Product-Market Fit" },
  { id: "csp-sec-output", label: "The Output" },
  { id: "csp-sec-more", label: "More Stories" },
];

// the rail flips light-on-dark over The Output band
const DARK_SECTIONS = ["csp-sec-output"];

// the Vidrow step mark, for the co-brand plate in the banner's corner
function VidrowMark() {
  return (
    <svg viewBox="0 0 40 40" aria-hidden="true">
      <path fill="#0B0B0D" d="M0 0 H40 V40 H26.667 V26.667 H13.333 V13.333 H0 Z" />
    </svg>
  );
}

export default function StealthAppCaseStudy() {
  return (
    <>
    <main className="csp csp--stealth">
      <header className="hx-bar hx-bar--page">
        <SiteNav logoHref="/" />
      </header>
      <div className="hx-bar-gap" aria-hidden="true" />

      <CspSectionNav sections={SECTIONS} darkSectionIds={DARK_SECTIONS} />

      <div className="csp-in" id="csp-sec-hero">
        <h1 className="cst-h">Finding PMF in the paying user cohort</h1>

        <div className="cst-banner">
          <img
            className="cst-bannerImg"
            src="/casestudy%20images/stealth%20app.png"
            alt="Stealth App: 0 to 3 Lakh paying users, June to August"
          />
          <span className="cst-plate">
            <VidrowMark />
            <i aria-hidden="true" />
            <span className="cst-appIcon" aria-hidden="true">S</span>
            <span className="cst-appName">Stealth App</span>
          </span>
        </div>

        <div className="cst-meta">
          <div className="csp-metaItem">
            <span className="csp-metaLabel">Client</span>
            <span className="csp-metaValue">Stealth App</span>
          </div>
          <div className="csp-metaItem">
            <span className="csp-metaLabel">Timeline</span>
            <span className="csp-metaValue">June to August</span>
          </div>
          <div className="csp-metaItem">
            <span className="csp-metaLabel">Result</span>
            <span className="csp-metaValue">~3 Lakh paying users</span>
          </div>
          <p className="cst-metaNote">
            It was a brand-new content platform with no paying users till now. We had the
            responsibility to find the product-market fit and find the paying audience cohort
            where the CAC-LTV equation would make sense.
          </p>
        </div>
      </div>

      <div className="csp-in">
        <section className="cst-problem" id="csp-sec-problem">
          <div>
            <div className="csp-eyebrow2">
              <span className="csp-eyebrow2-dot" aria-hidden="true" />
              <b>01</b>
              STEALTH APP &times; VIDROW &middot; CASE STUDY
            </div>
            <h2 className="cst-secH">Problem Statement</h2>
          </div>
          <p className="cst-problemCopy">
            Stealth App is in the content space and had the app ready basis the earlier user
            research but it was unclear which features within the app and which audience cohort
            will be the power user. It was a brand-new content platform with no paying users till
            now. We had the responsibility to find the product-market fit and find the paying
            audience cohort where the CAC-LTV equation would make sense.
          </p>
        </section>
      </div>

      <div className="csp-in">
        <section className="cst-outcome" id="csp-sec-outcome">
          <div className="csp-eyebrow2">
            <span className="csp-eyebrow2-dot" aria-hidden="true" />
            <b>02</b>
            THE OUTCOME
          </div>
          <h2 className="cst-secH">Zero to ~3 Lakh paying users in 90 days</h2>

          <div className="cst-outcomeRow">
            <div className="cst-outcomeCopy">
              <p>
                When we arrived, product was ready but we had to find the right paying cohort
                for Stealth App. June was month one.
              </p>
              <p>
                We executed our playbook for PMF within content. Across June to August we
                increased the paid user acquisition from 0 to 10,000 paid users per day while
                holding the CAC-LTV equation.
              </p>
            </div>

            <figure className="cst-chart">
              <figcaption className="cst-chartCap">Paying users</figcaption>
              <div className="cst-plot">
                <span className="cst-zero">0</span>
                <svg className="cst-arrow" viewBox="0 0 160 160" preserveAspectRatio="none" aria-hidden="true">
                  <path d="M6 150 C 60 130, 110 95, 146 14" />
                  <path className="cst-arrowHead" d="M134 22 L146 12 L150 28" />
                </svg>
                <div className="cst-bar">
                  <span className="cst-barVal">3 Lakh</span>
                  <div className="cst-barGrid" aria-hidden="true">
                    {Array.from({ length: 8 }, (_, i) => (
                      <span key={i} className={i === 1 ? "is-top" : ""} />
                    ))}
                  </div>
                </div>
              </div>
              <div className="cst-axis">
                <span>June</span>
                <span className="cst-axisEnd">August</span>
              </div>
            </figure>
          </div>
        </section>
      </div>

      <div className="csp-in">
        <section className="cst-journey" id="csp-sec-journey">
          <div className="csp-eyebrow2">
            <span className="csp-eyebrow2-dot" aria-hidden="true" />
            <b>03</b>
            THE USER JOURNEY
          </div>
          <h2 className="cst-secH">We finalised the consumer journey and tested different price points</h2>

          <ol className="cst-steps">
            {JOURNEY.map((step, i) => (
              <li className={`cst-step${step.hi ? " cst-step--hi" : ""}`} key={step.title}>
                <span className="cst-stepNum">{String(i + 1).padStart(2, "0")}</span>
                <span className="cst-stepTag">{step.tag}</span>
                <h3 className="cst-stepTitle">{step.title}</h3>
                <p className="cst-stepDesc">{step.desc}</p>
              </li>
            ))}
          </ol>

          <p className="cst-journeyNote">
            <b>Every one of those ~3 lakh paying users came out of this flow.</b> Autopay switching
            on is the moment we counted.
          </p>
        </section>
      </div>

      <div className="csp-in">
        <section className="cst-how" id="csp-sec-how">
          <div className="csp-eyebrow2">
            <span className="csp-eyebrow2-dot" aria-hidden="true" />
            <b>04</b>
            HOW WE DID IT
          </div>
          <h2 className="cst-secH">We tested 12 features. Three came out as winners</h2>
          <p className="cst-howCopy">
            With nothing proven, backing one feature would have been a guess with a budget
            attached. So every feature on the shelf went out with its own batch of ads, all judged
            on the same paid event and the cost of a paying user decided which ones earned more
            budget.
          </p>

          <div className="cst-wins">
            {WINS.map((w) => (
              <article className={`cst-win${w.strong ? " cst-win--strong" : ""}`} key={w.tag}>
                <span className="cst-winTag">{w.tag}</span>
                <span className="cst-winVal">{w.val}</span>
                <h3 className="cst-winTitle">{w.title}</h3>
                <p className="cst-winDesc">{w.desc}</p>
              </article>
            ))}
          </div>
        </section>
      </div>

      <div className="csp-in">
        <section className="cst-pmf" id="csp-sec-pmf">
          <div className="csp-eyebrow2">
            <span className="csp-eyebrow2-dot" aria-hidden="true" />
            <b>05</b>
            THE PRODUCT-MARKET FIT
          </div>
          <h2 className="cst-secH">The Ads found the Product Market Fit</h2>

          <div className="cst-pmfRow">
            <div className="cst-pmfL">
              <span className="cst-pmfCap cst-pmfCap--violet">Share of paying users from those three features</span>
              <ul className="cst-shares">
                {SHARES.map((m, i) => (
                  <li key={m.month} className={`cst-share cst-share--${i + 1}`}>
                    <span className="cst-shareBar" style={{ "--v": m.val }}>
                      {m.val}%
                    </span>
                    <span className="cst-shareMonth">in {m.month}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="cst-pmfR">
              <span className="cst-pmfCap">What it unlocks</span>
              <span className="cst-ltv">LTV</span>
              <p className="cst-ltvSub">The number they can finally plan against</p>
              <p className="cst-ltvNote">
                Along with paying customers we also checked the paying cohort retention across
                different price points and arrived at a final product - price - audience fit.
              </p>
            </div>
          </div>
        </section>
      </div>

      <div className="cst-outputBand">
        <div className="csp-in">
          <section className="cst-output" id="csp-sec-output">
            <div className="csp-eyebrow2">
              <span className="csp-eyebrow2-dot" aria-hidden="true" />
              <b>06</b>
              THE OUTPUT
            </div>
            <h2 className="cst-secH">The scale up phase 3 months later</h2>
            <p className="cst-outputCopy">
              The paying users are the result. What Stealth App keeps is the machinery that
              produced them: every feature priced by what a customer costs, every audience
              mapped, and a weekly loop that re-ranks the shelf on results.
            </p>

            <div className="cst-outStats">
              {OUTPUT.map((o, i) => (
                <div className="cst-outStat" key={o.tag}>
                  <span className={`cst-outTag${i % 2 ? " cst-outTag--lilac" : ""}`}>{o.tag}</span>
                  <span className="cst-outVal">{o.val}</span>
                  {o.desc && <p className="cst-outDesc">{o.desc}</p>}
                </div>
              ))}
            </div>

            <p className="cst-outNote">
              Growing from here is no longer a guess. They know what to buy, and what it costs to
              buy it.
            </p>
          </section>
        </div>
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
