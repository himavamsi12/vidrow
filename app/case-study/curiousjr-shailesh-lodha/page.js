import Footer from "../../components/Footer";
import SiteNav from "../../components/SiteNav";
import CspSectionNav from "../../components/CspSectionNav";
import { DeepDiveCards } from "../../components/CaseStudies";
import SeekhoFilms from "../../components/SeekhoFilms";

export const metadata = {
  title: "CuriousJr × Shailesh Lodha - Case Study | Vidrow",
  description:
    "How one celebrity shoot with Shailesh Lodha beat CuriousJr's mature ad engine on cost per enrolment: 32% of the enrolments from 27% of the spend.",
};

// the production system: one shoot day to forty-three live ads
const SYSTEM = [
  { val: "1", label: "Shoot day", desc: "modular shoot architecture, built for variants" },
  { val: "14", label: "Scripts", desc: "8 objection-led concepts + 6 short awareness scripts" },
  { val: "2–3", label: "Hooks per concept", desc: "h1 / h2 / h3 openings tested independently" },
  { val: "43", label: "Live ad assets", desc: "full-length, 15-second, 6-second and internal cuts" },
];

// the Shailesh Lodha ads' share of the video cohort (bar width is the value)
const SHARES = [
  { val: 27, label: "share of spend", tone: "grey" },
  { val: 32, label: "share of enrolments", tone: "violet" },
  { val: 40, label: "share of completed views", tone: "violet" },
];

const CHEAPER = [
  { val: "−22%", desc: "cost per enrolment" },
  { val: "−44%", desc: "cost per completed view" },
];

// Meta cost indexed to the rest of the account (= 100)
const COSTS = [
  { title: "cost / enrolment", note: "indexed · 10 delivering assets of 43", rest: 100, celeb: 78 },
  { title: "cost / completed view", note: "indexed · steepest gap", rest: 100, celeb: 56 },
];

// how the celebrity ads did against the rest, stage by stage
const FUNNEL = [
  { stage: "STOP", title: "Hook rate · 3-sec plays / impressions", sub: "A recognised face earns the pause in-feed.", val: "+55%" },
  { stage: "WATCH", title: "ThruPlays per impression", sub: "More impressions became finished views, not just stops.", val: "+61%" },
  { stage: "HOLD", title: "Completion rate · ThruPlays / 3-sec plays", sub: "Those who stopped stayed: the script held them.", val: "+4%" },
  { stage: "BUY", title: "CPM · cost per 1,000 impressions", sub: "Meta priced the creative cheaper because people watched it.", val: "−10%" },
  { stage: "PAY", title: "Cost per enrolment", sub: "Attention converted into paid enrolments, not just views.", val: "−22%" },
];

// the hero ad against the account
const HERO_STATS = [
  { val: "−21%", desc: "cost per enrolment vs. account average, while running as the most-scaled ad on the platform." },
  { val: "−25%", desc: "cheaper per enrolment than the biggest non-celebrity ad, at comparable spend." },
];

// why it worked
const WHY = [
  {
    title: "Credibility transfer",
    desc: "For a product sold to anxious parents, we cast the face India already codes as the calm, reasonable head of the household. The trust bought the pause: a 55% higher hook rate and 44% cheaper attention.",
  },
  {
    title: "Objection-led scripting",
    desc: "14 scripts mapped to the real parent objections (play-time vs. study-time, ratta-maar learning, Olympiad ambition, personal attention, practical concepts), so every segment met the celebrity in its own argument.",
  },
  {
    title: "Hooks tested like UGC",
    desc: "Three hooks per concept, launched and killed on data. 31 of 43 assets never cleared 1.7% of spend between them; the winner was allowed to absorb 63%. Strip that winner out and the rest ran near parity, which is the point. The system exists to find the one and fund it hard.",
  },
  {
    title: "Length earned its place",
    desc: "Full-length narrative indexed at 100 on cost per enrolment; 15-second awareness cuts 118, 6-second cuts 135, internal re-cuts 199. Trust needs room to land, so we scaled the long cut and stopped funding the short ones.",
  },
];

// the takeaway, three blocks stepping down: yellow, lilac, yellow
const TAKEAWAY = [
  { val: "−22%", label: "CPO", tone: "lemon" },
  { val: "−44%", label: "cost / view", tone: "lilac" },
  { val: "32%", label: "of enrolments", sub: "from 27% of spend", tone: "lemon" },
];

// the rail flips light-on-dark over the two dark bands
const DARK_SECTIONS = ["csp-sec-funnel", "csp-sec-takeaway"];

// the Shailesh Lodha campaign films, played from Cloudflare Stream
const FILMS = [
  { video: "351cd09ee38157cfd25e09215919ff93" },
  { video: "ee84edad0b99305a3d3e174205f42308", thumb: 12 },
  { video: "662f5ba1a718d377d41393dc55d9e6a3", thumb: 12 },
  { video: "baa263ac2c1a736815f043b930b2bcb8" },
  { video: "c1ddd80321567e29cea22c4d154a6d58", thumb: 1 },
].map((f, i) => ({ ...f, alt: `CuriousJr × Shailesh Lodha campaign film ${i + 1}` }));

const SECTIONS = [
  { id: "csp-sec-hero", label: "Curious Jr" },
  { id: "csp-sec-setup", label: "The Setup" },
  { id: "csp-sec-headline", label: "The Headline" },
  { id: "csp-sec-efficiency", label: "Efficiency" },
  { id: "csp-sec-funnel", label: "Full-Funnel" },
  { id: "csp-sec-hero-ad", label: "The Hero Ad" },
  { id: "csp-sec-why", label: "Why It Worked" },
  { id: "csp-sec-takeaway", label: "The Takeaway" },
  { id: "csp-sec-films", label: "Campaign Videos" },
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

// scale usually taxes efficiency: the typical ad's cost climbs with spend,
// the hero ad's stays nearly flat (illustrative, from the design)
function ScaleChart() {
  return (
    <figure className="cjs-scale">
      <svg viewBox="0 0 662 400" role="img" aria-label="Illustrative chart: a typical ad's cost per enrolment climbs as spend scales, while the hero ad's stays nearly flat">
        <rect width="662" height="400" fill="#F4F4F4" />
        <text x="24" y="36" className="cjs-sTitle">Scale usually taxes efficiency. This didn&rsquo;t.</text>
        <circle cx="29" cy="69" r="5" fill="#8A8A8A" />
        <text x="42" y="73" className="cjs-sKey">typical ad: cost per enrolment climbs as spend scales</text>
        <circle cx="29" cy="99" r="5" fill="#715BE4" />
        <text x="42" y="103" className="cjs-sKey">the hero ad: cheapest in its three largest ad sets</text>
        {[124, 166, 209, 251, 294].map((y) => (
          <line key={y} x1="44" x2="638" y1={y} y2={y} stroke="#E4E4E4" strokeWidth="1" />
        ))}
        <line x1="44" x2="638" y1="336" y2="336" stroke="#D0D0D0" strokeWidth="3" />
        <line x1="44" x2="639" y1="271" y2="170" stroke="#8A8A8A" strokeWidth="2" />
        <line x1="44" x2="639" y1="255" y2="237" stroke="#715BE4" strokeWidth="2.5" />
        <text transform="translate(26 278) rotate(-90)" textAnchor="middle" className="cjs-sAxis">CPO &uarr;</text>
        <text x="341" y="388" textAnchor="middle" className="cjs-sAxis">spend &rarr;</text>
      </svg>
      <figcaption>Illustrative: actual values indexed.</figcaption>
    </figure>
  );
}

export default function CuriousJrShaileshLodhaCaseStudy() {
  return (
    <>
    <main className="csp csp--seekho csp--gs csp--cjs">
      <header className="hx-bar hx-bar--page">
        <SiteNav logoHref="/" />
      </header>
      <div className="hx-bar-gap" aria-hidden="true" />

      <CspSectionNav sections={SECTIONS} darkSectionIds={DARK_SECTIONS} />

      <div className="csp-in" id="csp-sec-hero">
        <div className="csk-top">
          <h1 className="cst-h cgs-h">
            Can one celebrity beat that engine
            <br className="csk-brD" />{" "}
            on cost per enrolment?
          </h1>
          <p className="csk-note">
            Curious Jr already runs a mature engine of UGC, faculty-led, creator and AI ads: 400
            ads live in the window, 357 of them non-celebrity.
          </p>
        </div>

        <div className="csp-banner csk-banner">
          <img fetchPriority="high"
            className="csk-hero"
            src="/casestudy-curiousjr-shailesh/hero-shailesh.webp"
            alt="Shailesh Lodha in a portrait and two CuriousJr campaign films"
          />
          <span className="csp-bannerTag">
            <span className="csp-lockup">
              <VidrowMark />
              <i aria-hidden="true" />
              <img src="/deep%20drives/curious%20jr.webp" alt="CuriousJr" />
            </span>
          </span>
        </div>

        <div className="csk-meta">
          <div className="csp-metaItem">
            <span className="csp-metaLabel">Client</span>
            <span className="csp-metaValue">Curious Jr</span>
          </div>
          <div className="csp-metaItem">
            <span className="csp-metaLabel">Celebrity</span>
            <span className="csp-metaValue">Shailesh Lodha</span>
          </div>
          <div className="csp-metaItem">
            <span className="csp-metaLabel">Window</span>
            <span className="csp-metaValue">Jun 1 &ndash; Aug 11</span>
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
                One shoot day,
                <br />
                built like a system.
              </h2>
            </div>
            <p className="csk-problemCopy cgs-setupCopy">
              Curious Jr already runs a mature engine of UGC, faculty-led, creator and AI ads: 400
              ads live in the window, 357 of them non-celebrity. The question: can one celebrity
              beat that engine on cost per enrolment, not on reach?
            </p>
          </div>

          <ol className="cgs-flow cjs-flow">
            {SYSTEM.map((st, i) => (
              <li className="cgs-step" key={st.label}>
                <span className="cjs-stepNo">STEP {String(i + 1).padStart(2, "0")}</span>
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
            The celebrity got no exemption from testing discipline: every hook launched, measured
            and killed on the same data as the UGC engine.{" "}
            <span className="cjs-calloutRest">
              31 of the 43 assets never took more than 1.7% of celebrity spend between them.
            </span>
          </p>
        </section>
      </div>

      <div className="csp-in">
        <section className="csk-sec" id="csp-sec-headline">
          <div className="csp-eyebrow2">
            <span className="csp-eyebrow2-dot" aria-hidden="true" />
            <b>02</b>
            THE HEADLINE, QUANTIFIED
          </div>
          <h2 className="cst-secH">
            27% of the money.
            <br />
            32% of the enrolments.
          </h2>

          <div className="cjs-cols">
            <div>
              <p className="cgs-sharesLabel">SHARE OF VIDEO COHORT &middot; META</p>
              {SHARES.map((sh) => (
                <div className="cgs-share" key={sh.label}>
                  <span className={`cgs-bar cgs-bar--${sh.tone}`} style={{ "--v": sh.val }}>
                    {sh.val}%
                  </span>
                  <span className="cgs-shareLabel">{sh.label}</span>
                </div>
              ))}
              <p className="cjs-note">
                Shailesh Lodha ads vs. every other video ad in the account, Jun 1 &ndash; Aug 11.
              </p>
            </div>

            <div>
              <p className="cgs-sharesLabel">AND THE RESULTS CAME CHEAPER</p>
              <div className="cjs-pair">
                {CHEAPER.map((c) => (
                  <div className="cgs-gStat" key={c.desc}>
                    <span className="cgs-gVal">{c.val}</span>
                    <p>{c.desc}</p>
                  </div>
                ))}
              </div>
              <p className="cgs-callout">
                A bigger share of results than of budget, at a lower cost per result, and a far
                bigger share of attention than of spend.
              </p>
            </div>
          </div>

          <p className="cjs-note cjs-source">
            Sources &middot; Meta Ads Manager. Enrolments = pixel-tracked transaction &amp;
            batch-enrolment success.
          </p>
        </section>
      </div>

      <div className="csp-in">
        <section className="csk-sec" id="csp-sec-efficiency">
          <div className="csp-eyebrow2">
            <span className="csp-eyebrow2-dot" aria-hidden="true" />
            <b>03</b>
            META &middot; EFFICIENCY
          </div>
          <h2 className="cst-secH">
            Enrolments 22% cheaper.
            <br />
            Attention 44% cheaper.
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
                    <span>rest of account</span>
                    <span>Shailesh Lodha ads</span>
                  </div>
                  <figcaption>
                    {c.title}
                    <small>{c.note}</small>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>

          <div className="cjs-cols">
            <p className="cjs-body">
              The attention gap is the tell: a face India codes as the reasonable, un-hysterical
              parent earns the stop before the pitch, so the same media money buys far more
              watched seconds and a 10% cheaper CPM.
            </p>
            <div>
              <p className="cgs-callout cjs-calloutTop">
                The single biggest ad in the whole account carried Shailesh Lodha&rsquo;s face.
              </p>
              <p className="cjs-note">
                Blended vs. all non-celebrity video in the same conversion cohort, same period.
              </p>
            </div>
          </div>
        </section>
      </div>

      <div className="cst-outputBand csk-band">
        <div className="csp-in">
          <section className="cst-output csk-impact" id="csp-sec-funnel">
            <div className="csp-eyebrow2">
              <span className="csp-eyebrow2-dot" aria-hidden="true" />
              <b>04</b>
              META &middot; FULL-FUNNEL
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
              Not a top-of-funnel novelty spike. The lift compounds from first impression through
              to the paid enrolment at the end of it.
            </p>
            <p className="cjs-note cjs-note--dark">
              Relative deltas vs. non-celebrity video &middot; same cohort, same period &middot;
              blended across all celebrity video, including the scaled winner
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
                <b>05</b>
                THE HERO AD
              </div>
              <h2 className="cst-secH">
                One script became the
                <br />
                biggest ad in the account.
              </h2>
            </div>
            <p className="csk-problemCopy cgs-heroCopy">
              One ad (the &ldquo;khelna-koodna band&rdquo; narrative, hook 1) absorbed 10% of all
              account spend and returned 13% of all enrolments, running across 13 ad sets.
            </p>
          </div>

          <div className="cjs-heroRow">
            <div className="cjs-heroStats">
              {HERO_STATS.map((h) => (
                <div className="cgs-gStat" key={h.val}>
                  <span className="cgs-gVal">{h.val}</span>
                  <p>{h.desc}</p>
                </div>
              ))}
            </div>
            <ScaleChart />
          </div>

          <p className="cgs-callout">
            In its three biggest audiences it ran 9&ndash;16% below even its own blended cost per
            enrolment.{" "}
            <span className="cjs-calloutRest">
              Concentrating budget behind it made it cheaper, not dearer.
            </span>
          </p>
        </section>
      </div>

      <div className="csp-in">
        <section className="csk-sec" id="csp-sec-why">
          <div className="csp-eyebrow2">
            <span className="csp-eyebrow2-dot" aria-hidden="true" />
            <b>06</b>
            WHY IT WORKED
          </div>
          <h2 className="cst-secH">
            Celebrity as a performance asset,
            <br />
            not a billboard.
          </h2>

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

      <div className="cst-outputBand csk-band">
        <div className="csp-in">
          <section className="cst-output csk-impact" id="csp-sec-takeaway">
            <div className="cjs-takeTop">
              <div>
                <div className="csp-eyebrow2">
                  <span className="csp-eyebrow2-dot" aria-hidden="true" />
                  <b>07</b>
                  THE TAKEAWAY
                </div>
                <h2 className="cst-secH csk-impactH ccj-impactH">Trust converts.</h2>
              </div>
              <p className="cjs-takeCopy">
                Celebrity creative is usually bought for brand and forgiven on performance. Run
                through a performance system (objection-mapped scripts, tested hooks, modular
                cuts, ruthless kill rules), it beat a mature 357-ad engine on its own scoreboard,
                in the same auctions, on the same days.
              </p>
            </div>

            <div className="cjs-stairs">
              {TAKEAWAY.map((t) => (
                <div className={`cjs-stair cjs-stair--${t.tone}`} key={t.label}>
                  <span className="cjs-stairVal">{t.val}</span>
                  <p>
                    {t.label}
                    {t.sub && <small>{t.sub}</small>}
                  </p>
                </div>
              ))}
            </div>

            <p className="cjs-note cjs-note--dark">
              Sources &middot; Meta Ads Manager, Jun 1 &ndash; Aug 11 2026
            </p>
          </section>
        </div>
      </div>

      <div className="csp-in">
        <section className="csp-reel" id="csp-sec-films">
          <div className="csp-eyebrow2">
            <span className="csp-eyebrow2-dot" aria-hidden="true" />
            <b>08</b>
            SHAILESH LODHA
          </div>
          <h2 className="csp-reel-h">Campaign Videos</h2>

          <SeekhoFilms films={FILMS} className="ccj-celeb cjs-films" />
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

          <DeepDiveCards embed exclude="/case-study/curiousjr-shailesh-lodha" />
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
