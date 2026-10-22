import Footer from "../../components/Footer";
import SiteNav from "../../components/SiteNav";
import CspSectionNav from "../../components/CspSectionNav";
import { DeepDiveCards } from "../../components/CaseStudies";

export const metadata = {
  title: "GoodScore - Case Study | Vidrow",
  description:
    "How celebrity performance ads helped GoodScore scale: one shoot, tested hook by hook, competing on cost per conversion in the same account and auction.",
};

// the production system: one shoot to eighteen live ads
const SYSTEM = [
  { val: "1", label: "shoot day", desc: "an 8-hour shoot, designed for maximum output" },
  { val: "6", label: "scripts", desc: "each mapped to a real user intent and structures derived from winning ad formats" },
  { val: "3", label: "hooks per script", desc: "openings tested independently" },
  { val: "18", label: "live ad assets", desc: "cut for Meta feed + YouTube, 16:9 and vertical", hi: true },
];

// the celebrity ads' share of the top-50 cohort (bar width is the value)
const SHARES = [
  { val: 27, label: "share of spend", tone: "grey" },
  { val: 30, label: "share of conversions", tone: "violet" },
  { val: 34, label: "share of app installs", tone: "violet" },
];

// Meta cost indexed to the rest of the account (= 100)
const COSTS = [
  { title: "cost / conversion", rest: 100, celeb: 85 },
  { title: "cost / install", rest: 100, celeb: 59 },
];

// how the celebrity ads did against the rest, stage by stage
const FUNNEL = [
  { stage: "STOP", title: "Hook rate", sub: "a recognised face earns the pause", val: "+13%" },
  { stage: "WATCH", title: "Completion rate", sub: "viewers stay through the message", val: "+27%" },
  { stage: "ACT", title: "Click \u2192 conversion", sub: "clicks arrive pre-sold", val: "+15%" },
  { stage: "COMMIT", title: "Install \u2192 registration", sub: "higher-intent users stick", val: "65% vs 57%" },
];

// Google: three numbers
const GOOGLE = [
  { val: "4 of 5", desc: "top assets by investment were celebrity cuts: the auction voted with budget." },
  { val: "37%", desc: "of channel spend absorbed at cost-per-conversion parity. Scale that normally degrades efficiency didn\u2019t." },
  { val: "2.2\u00d7", desc: "the click-through rate of non-celebrity assets." },
];

// why it worked
const WHY = [
  { title: "Credibility transfer", desc: "a face the audience already trusts, matched to a product built on trust" },
  { title: "Performance-first scripting", desc: "scripts mapped to real user intents, not brand monologues" },
  { title: "Hooks tested like UGC", desc: "launched and killed on data, no celebrity exemption" },
  { title: "Channel-role split", desc: "efficiency on Meta, scale on Google, from one shoot" },
];

// the rail flips light-on-dark over the full-funnel band
const DARK_SECTIONS = ["csp-sec-funnel"];

const SECTIONS = [
  { id: "csp-sec-hero", label: "GoodScore" },
  { id: "csp-sec-setup", label: "The Setup" },
  { id: "csp-sec-system", label: "The System" },
  { id: "csp-sec-headline", label: "The Headline" },
  { id: "csp-sec-cheaper", label: "Cheaper, Too" },
  { id: "csp-sec-funnel", label: "Full-Funnel" },
  { id: "csp-sec-hero-ad", label: "The Hero Ad" },
  { id: "csp-sec-google", label: "The Other Channel" },
  { id: "csp-sec-why", label: "Why It Worked" },
  { id: "csp-sec-more", label: "More Stories" },
];

// the Vidrow step mark, for the co-brand tag on the hero image
function VidrowMark() {
  return (
    <svg viewBox="0 0 40 40" aria-hidden="true">
      <path fill="#0B0B0D" d="M0 0 H40 V40 H26.667 V26.667 H13.333 V13.333 H0 Z" />
    </svg>
  );
}

export default function GoodscoreCaseStudy() {
  return (
    <>
    <main className="csp csp--seekho csp--gs">
      <header className="hx-bar hx-bar--page">
        <SiteNav logoHref="/" />
      </header>
      <div className="hx-bar-gap" aria-hidden="true" />

      <CspSectionNav sections={SECTIONS} darkSectionIds={DARK_SECTIONS} />

      <div className="csp-in" id="csp-sec-hero">
        <div className="csk-top">
          <h1 className="cst-h">
            How Celebrity Performance
            <br />
            Ads Helped GoodScore Scale
          </h1>
          <p className="csk-note">
            Same account. Same auction. Same scoreboard: cost per conversion. The celebrity won.
          </p>
        </div>

        <div className="csp-banner csk-banner">
          <img fetchPriority="high"
            className="csk-hero"
            src="/casestudy-goodscore/hero.webp"
            alt="Goodscore: Trusted by 5 Crore+ Indians, with a celebrity holding the app"
          />
          <span className="csp-bannerTag">
            <span className="csp-lockup">
              <VidrowMark />
              <i aria-hidden="true" />
              <img src="/partnership/goodscore.svg" alt="Goodscore" />
            </span>
          </span>
        </div>

        <div className="csk-meta">
          <div className="csp-metaItem">
            <span className="csp-metaLabel">Client</span>
            <span className="csp-metaValue">GoodScore</span>
          </div>
          <div className="csp-metaItem">
            <span className="csp-metaLabel">Timeline</span>
            <span className="csp-metaValue">90 Days</span>
          </div>
          <div className="csp-metaItem">
            <span className="csp-metaLabel">Outcome</span>
            <span className="csp-metaValue">50X spend</span>
          </div>
        </div>
      </div>

      <div className="csp-in">
        <section className="csk-problem" id="csp-sec-setup">
          <div className="csk-problemTop">
            <div>
              <div className="csp-eyebrow2">
                <span className="csp-eyebrow2-dot" aria-hidden="true" />
                <b>01</b>
                THE SETUP
              </div>
              <h2 className="cst-secH">
                Goodscore already
                <br />
                had a creative machine.
              </h2>
            </div>
            <div className="csk-problemCopy cgs-setupCopy">
              <p>
                A fast-growing fintech app, running hundreds of UGC, POV and AI-led ads, one of
                the most aggressive testing programs in the category. But the next challenge was
                to find scale efficiently.
              </p>
              <p>So the question wasn&rsquo;t &ldquo;can a celebrity get reach?&rdquo;</p>
            </div>
          </div>

          <p className="cgs-callout">
            It was: can one trusted face beat a mature performance engine on cost per conversion?
          </p>
          <p className="cgs-caps">REACH IS EASY. EFFICIENCY IS THE TEST.</p>
        </section>
      </div>

      <div className="csp-in">
        <section className="csk-sec" id="csp-sec-system">
          <div className="csp-eyebrow2">
            <span className="csp-eyebrow2-dot" aria-hidden="true" />
            <b>02</b>
            THE SYSTEM
          </div>
          <h2 className="cst-secH">Data-Backed Face and Script Selection</h2>

          <ol className="cgs-flow">
            {SYSTEM.map((st, i) => (
              <li className={`cgs-step${st.hi ? " cgs-step--hi" : ""}`} key={st.label}>
                <span className="cgs-stepVal">{st.val}</span>
                <span className="cgs-stepLabel">{st.label}</span>
                <p>{st.desc}</p>
                {i < SYSTEM.length - 1 && (
                  <svg className="cgs-arrow" viewBox="0 0 16 16" aria-hidden="true">
                    <path d="M2 8h11M9 4l4 4-4 4" fill="none" stroke="#8A8A8A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
              </li>
            ))}
          </ol>

          <p className="cgs-callout">
            The celebrity got no exemption from testing discipline. Every hook launched,
            measured, killed on data.
          </p>
        </section>
      </div>

      <div className="csp-in">
        <section className="csk-sec" id="csp-sec-headline">
          <div className="csp-eyebrow2">
            <span className="csp-eyebrow2-dot" aria-hidden="true" />
            <b>03</b>
            THE HEADLINE
          </div>

          <div className="cgs-headRow">
            <h2 className="cst-secH cgs-bigH">
              27% of ad spend.
              <br />
              30% of the conversions.
            </h2>

            <div className="cgs-shares">
              <p className="cgs-sharesLabel">CELEBRITY ADS&rsquo; SHARE OF THE TOP-50 COHORT</p>
              {SHARES.map((sh) => (
                <div className="cgs-share" key={sh.label}>
                  <span className={`cgs-bar cgs-bar--${sh.tone}`} style={{ "--v": sh.val }}>
                    {sh.val}%
                  </span>
                  <span className="cgs-shareLabel">{sh.label}</span>
                </div>
              ))}
              <p className="cgs-callout cgs-callout--r">
                A bigger share of results than of budget, on both platforms at once.
              </p>
            </div>
          </div>
        </section>
      </div>

      <div className="csp-in">
        <section className="csk-sec" id="csp-sec-cheaper">
          <div className="csp-eyebrow2">
            <span className="csp-eyebrow2-dot" aria-hidden="true" />
            <b>04</b>
            AND CHEAPER, TOO
          </div>
          <h2 className="cst-secH">
            Creative costs down 75%.
            <br />
            Conversions and installs cost less, too.
          </h2>

          <div className="cgs-panel">
            <p className="cgs-panelLabel">META &middot; COST INDEXED, REST OF ACCOUNT = 100</p>
            <div className="cgs-charts">
              {COSTS.map((c) => (
                <figure className="cgs-chart" key={c.title}>
                  <div className="cgs-bars">
                    {[
                      { v: c.rest, name: "rest", tone: "grey" },
                      { v: c.celeb, name: "celebrity", tone: "violet" },
                    ].map((b) => (
                      <div className="cgs-col" key={b.name}>
                        <span className="cgs-colVal">{b.v}</span>
                        <span className={`cgs-colBar cgs-colBar--${b.tone}`} style={{ "--v": b.v }} />
                      </div>
                    ))}
                  </div>
                  <div className="cgs-names">
                    <span>rest</span>
                    <span>celebrity</span>
                  </div>
                  <figcaption>{c.title}</figcaption>
                </figure>
              ))}
            </div>
          </div>

          <p className="cgs-callout">
            The install-cost gap is the tell: trust pre-sells before the click.
          </p>
        </section>
      </div>

      <div className="cst-outputBand csk-band">
        <div className="csp-in">
          <section className="cst-output csk-impact" id="csp-sec-funnel">
            <div className="csp-eyebrow2">
              <span className="csp-eyebrow2-dot" aria-hidden="true" />
              <b>05</b>
              FULL-FUNNEL
            </div>
            <h2 className="cst-secH csk-impactH ccj-impactH">The advantage held at every stage.</h2>

            <ol className="cgs-funnel">
              {FUNNEL.map((f) => (
                <li className="cgs-fRow" key={f.stage}>
                  <span className="cgs-fStage">{f.stage}</span>
                  <span className="cgs-fText">
                    <b>{f.title}</b>
                    <i>{f.sub}</i>
                  </span>
                  <span className="cgs-fVal">{f.val}</span>
                </li>
              ))}
            </ol>

            <p className="cgs-callout cgs-callout--dark">
              Not a novelty spike at the top of the funnel. The lift compounds all the way to a
              registered account.
            </p>
          </section>
        </div>
      </div>

      <div className="csp-in">
        <section className="csk-problem" id="csp-sec-hero-ad">
          <div className="csk-problemTop">
            <div>
              <div className="csp-eyebrow2">
                <span className="csp-eyebrow2-dot" aria-hidden="true" />
                <b>06</b>
                THE HERO AD
              </div>
              <h2 className="cst-secH">
                One script took the #1
                <br />
                slot on both platforms.
              </h2>
            </div>
            <p className="csk-problemCopy cgs-heroCopy">
              Scaling an ad usually taxes efficiency. This one absorbed the account&rsquo;s highest
              single-ad spend of the quarter, and still converted cheaper than everything around
              it.
            </p>
          </div>

          <div className="cgs-heroRow">
            <div className="cgs-lemon">
              <span className="cgs-lemonVal">&minus;28%</span>
              <p>
                cost per conversion vs. the account average, in its launch month, while running as
                the single most-scaled ad on the platform.
              </p>
            </div>
            <p className="cgs-callout cgs-callout--mid">
              Then the same script was re-cut for YouTube, and became that channel&rsquo;s
              most-invested asset too.
            </p>
          </div>
        </section>
      </div>

      <div className="csp-in">
        <section className="csk-sec" id="csp-sec-google">
          <div className="csp-eyebrow2">
            <span className="csp-eyebrow2-dot" aria-hidden="true" />
            <b>07</b>
            THE OTHER CHANNEL
          </div>
          <h2 className="cst-secH">On Google, the win was scale without decay.</h2>

          <div className="cgs-gStats">
            {GOOGLE.map((g) => (
              <div className="cgs-gStat" key={g.val}>
                <span className="cgs-gVal">{g.val}</span>
                <p>{g.desc}</p>
              </div>
            ))}
          </div>

          <p className="cgs-callout">
            Meta became the efficiency lever. Google became the scale lever. One shoot, both jobs.
          </p>
        </section>
      </div>

      <div className="csp-in">
        <section className="csk-sec" id="csp-sec-why">
          <div className="csp-eyebrow2">
            <span className="csp-eyebrow2-dot" aria-hidden="true" />
            <b>08</b>
            WHY IT WORKED
          </div>
          <h2 className="cst-secH">Celebrity as a performance asset, not an awareness asset.</h2>

          <ol className="cgs-why">
            {WHY.map((w, i) => (
              <li className="csk-card" key={w.title}>
                <span className="cst-reqNum">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="csk-chip">{w.title}</h3>
                <p>{w.desc}</p>
              </li>
            ))}
          </ol>
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

          <DeepDiveCards embed exclude="/case-study/goodscore" />
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
