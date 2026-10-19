import Footer from "../../components/Footer";
import SiteNav from "../../components/SiteNav";
import CspSectionNav from "../../components/CspSectionNav";
import { DeepDiveCards } from "../../components/CaseStudies";
import SeekhoFilms from "../../components/SeekhoFilms";
import { CAMPAIGNS } from "../../data/campaigns";

export const metadata = {
  title: "PW CuriousJr - Case Study | Vidrow",
};

// what PW CuriousJr wanted the campaign to do
// the rail flips light-on-dark over the Impact band
const DARK_SECTIONS = ["csp-sec-impact"];

const GOALS = ["Reduce their CPL", "Generate Quality Leads"];

// what parents weigh up when choosing an education platform
const FACTORS = [
  "Trust on the Education Institute",
  "Quality of Education",
  "Affordability",
  "Monitor Children\u2019s Education",
];

// the three things the campaign videos had to say
const COMMS = [
  {
    main: "We included a feeling of pride for the parents by talking about scenarios where children would face tests and questions from friends, relatives or family friends.",
  },
  {
    main: "We discussed how CuriousJr enabled parents to monitor their children\u2019s lectures and track their performances.",
    sub: "This was important since both the parents were mostly working and, hence, did not have enough time to check their children\u2019s performance.",
  },
  {
    main: "One thing that was kept common in the communication in all the videos: Physicswallah and Alakh Pandey sir\u2019s names.",
    sub: "This brought a factor of trust, high quality of education and affordability for the parents.",
  },
];

// the four video styles, each played from the CuriousJr campaign page's films
const STYLE_FILMS = CAMPAIGNS.pw_cjr_ads.frames.slice(0, 4);
const STYLES = ["Street Interview", "Direct-to-Camera", "Testimonial", "Expert\u2019s Opinion"];

// the numbers: the square beside each label is yellow or lilac
const STATS = [
  { label: "FATIGUE DURATION", val: "7 Weeks", desc: "even after 7 Weeks the campaign did not stop bringing good conversion rates", tone: "acid" },
  { label: "CPL", val: "25% \u2193", desc: "for the first week", tone: "lilac" },
  { label: "MAINTAINED A STEADY CPL", val: "15-20% \u2193", desc: "of 15-20% after the first week", tone: "acid" },
];

// CPL against time: a drop of about 24% in week 1, then settling near -12%.
// (y: 61 is 0%, 4.3 units to each 1%)
const CPL_X = [59, 115, 163, 222, 278, 333, 389, 445];
const CPL_Y = [61, 164, 138, 119, 130, 125, 119, 113];
const CPL_GRID = [["0 %", 61], ["-10 %", 104], ["-20 %", 147], ["-30 %", 190]];

function CplChart() {
  return (
    <figure className="ccj-chart">
      <svg viewBox="0 0 466 266" role="img" aria-label="Impact of this campaign: CPL falls about 24 percent in week 1, then holds between 12 and 18 percent below the start through week 7">
        <text x="15" y="22" className="ccj-cTitle">Impact of this Campaign</text>
        <circle cx="19" cy="38" r="3.5" fill="#F5FA5E" />
        <text x="28" y="41" className="ccj-cKey">Avg. CPL for our Campaign</text>
        <circle cx="146" cy="38" r="3.5" fill="#9A9A9A" className="ccj-key2" />
        <text x="155" y="41" className="ccj-cKey ccj-key2">Avg. CPL for Normal Performance Campaign</text>
        {CPL_GRID.map(([label, y]) => (
          <g key={label}>
            <line x1="59" x2="450" y1={y} y2={y} stroke="#3A3A3A" strokeWidth="1" />
            <text x="48" y={y + 3} textAnchor="end" className="ccj-cTick">{label}</text>
          </g>
        ))}
        <line x1="59" x2="450" y1="228" y2="228" stroke="#8A8A8A" strokeWidth="1" />
        <polyline points={CPL_X.map((x, i) => `${x},${CPL_Y[i]}`).join(" ")} fill="none" stroke="#F5FA5E" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round" />
        {CPL_X.map((x, w) => (
          <text key={w} x={x} y="243" textAnchor="middle" className={`ccj-cTick${w % 2 ? " csk-tickOdd" : ""}`}>
            {w === 0 ? "0 Week" : w === 1 ? "1 Week" : `${w} Weeks`}
          </text>
        ))}
        <text x="250" y="260" textAnchor="middle" className="ccj-cAxis">Time (in weeks)</text>
        <text transform="translate(12 150) rotate(-90)" textAnchor="middle" className="ccj-cAxis">CPL</text>
      </svg>
      <figcaption>(The Avg. CPL mentioned here are for the entire campaign and not for a single video)</figcaption>
    </figure>
  );
}

// the four factors overlap as circles: yellow, violet, lilac and grey
function FactorsVenn() {
  return (
    <svg className="ccj-venn" viewBox="0 0 418 426" role="img" aria-label="Four overlapping circles: Trust on the Education Institute, Quality of Education, Affordability and Monitor Children's Education">
      <circle cx="208" cy="119" r="119" fill="#F5FA5E" opacity=".85" />
      <circle cx="118" cy="214" r="119" fill="#C5BEFA" opacity=".85" style={{ mixBlendMode: "multiply" }} />
      <circle cx="298" cy="214" r="119" fill="#E1DDF8" opacity=".9" style={{ mixBlendMode: "multiply" }} />
      <circle cx="208" cy="307" r="119" fill="#D9D9D9" opacity=".9" style={{ mixBlendMode: "multiply" }} />
      <text x="208" y="38" textAnchor="middle">Trust on the</text>
      <text x="208" y="59" textAnchor="middle">Education Institute</text>
      <text x="58" y="208" textAnchor="middle">Quality of</text>
      <text x="58" y="229" textAnchor="middle">Education</text>
      <text x="358" y="218" textAnchor="middle">Affordability</text>
      <text x="208" y="378" textAnchor="middle">Monitor Children&rsquo;s</text>
      <text x="208" y="399" textAnchor="middle">Education</text>
    </svg>
  );
}

const SECTIONS = [
  { id: "csp-sec-hero", label: "PW CuriousJr" },
  { id: "csp-sec-problem", label: "Problem Statement" },
  { id: "csp-sec-factors", label: "Parent Insights" },
  { id: "csp-sec-creative", label: "Creative Solution" },
  { id: "csp-sec-styles", label: "Video Styles" },
  { id: "csp-sec-impact", label: "Impact" },
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

export default function CuriousJrCaseStudy() {
  return (
    <>
    <main className="csp csp--seekho csp--cjr">
      <header className="hx-bar hx-bar--page">
        <SiteNav logoHref="/" />
      </header>
      <div className="hx-bar-gap" aria-hidden="true" />

      <CspSectionNav sections={SECTIONS} darkSectionIds={DARK_SECTIONS} />

      <div className="csp-in" id="csp-sec-hero">
        <div className="csk-top">
          <h1 className="cst-h">
            Reduce their CPL.
            <br />
            Generate Quality Leads.
          </h1>
          <p className="csk-note">
            PW CuriousJr is an online education platform that resembles a modern way of the
            traditional tuition classes in India.
          </p>
        </div>

        <div className="csp-banner csk-banner">
          <img fetchPriority="high"
            className="csk-hero"
            src="/casestudy-curios-jr/hero.webp"
            alt="PW CuriousJr performance videos: four presenters explaining everyday lessons"
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
            <span className="csp-metaValue">PW CuriousJr</span>
          </div>
          <div className="csp-metaItem">
            <span className="csp-metaLabel">Students</span>
            <span className="csp-metaValue">Classes 3 to 10</span>
          </div>
          <div className="csp-metaItem">
            <span className="csp-metaLabel">Campaign</span>
            <span className="csp-metaValue">Performance Videos</span>
          </div>
        </div>
      </div>

      <div className="csp-in">
        <section className="csk-problem" id="csp-sec-problem">
          <div className="csk-problemTop">
            <div>
              <div className="csp-eyebrow2">
                <span className="csp-eyebrow2-dot" aria-hidden="true" />
                <b>01</b>
                PW CURIOUSJR &times; VIDROW &middot; CASE STUDY
              </div>
              <h2 className="cst-secH">Problem Statement</h2>
            </div>
            <p className="csk-problemCopy">
              PW CuriousJr is an online education platform that resembles a modern way of the
              traditional tuition classes in India. PW CuriousJr allows live lectures and
              recorded lectures for students studying from classes 3 to 10.
            </p>
          </div>

          <div className="csk-split csk-split--face">
            <div className="csk-prose">
              <p>
                Being founded back in 2020 during the Covid-19 times, when online education
                became the sole way of education, the platform was an instant hit. However, since
                then the CPL has been on a constant rise.
              </p>
              <p>
                PW CuriousJr also wanted to scale their marketing while avoiding cannibalization
                and quick fatigue.
              </p>
            </div>
            <div className="ccj-wanted">
              <h3>PW CuriousJr wanted a Performance Video Campaign that could cater to the following:</h3>
              <ol className="csk-traits">
                {GOALS.map((g, i) => (
                  <li className="csk-trait" key={g}>
                    <span className="cst-reqNum">{String(i + 1).padStart(2, "0")}</span>
                    <p>{g}</p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>
      </div>

      <div className="csp-in">
        <section className="csk-sec" id="csp-sec-factors">
          <div className="csp-eyebrow2">
            <span className="csp-eyebrow2-dot" aria-hidden="true" />
            <b>02</b>
            UNDERSTANDING THE PROBLEM
          </div>
          <h2 className="cst-secH">
            There are 4 factors that are really important when
            <br className="csk-brD" />{" "}
            it comes to children&rsquo;s education for parents
          </h2>

          <div className="csk-split ccj-factors">
            <div className="csk-prose">
              <p>
                To get the desired results, it was important to understand what mattered the most
                to parents in general and why parents choose PW CuriousJr.
              </p>
              <p>Conducting the Parent Research provided the following insights:</p>
              <ol className="csk-traits ccj-list">
                {FACTORS.map((f, i) => (
                  <li className="csk-trait" key={f}>
                    <span className="cst-reqNum">{String(i + 1).padStart(2, "0")}</span>
                    <p>{f}</p>
                  </li>
                ))}
              </ol>
              <p className="ccj-after">
                Hence, it was important that the campaign conveyed this very clearly to the
                parents.
              </p>
            </div>
            <FactorsVenn />
          </div>
        </section>
      </div>

      <div className="csp-in">
        <section className="csk-sec" id="csp-sec-creative">
          <div className="csp-eyebrow2">
            <span className="csp-eyebrow2-dot" aria-hidden="true" />
            <b>03</b>
            CREATIVE SOLUTION
          </div>
          <h2 className="cst-secH">
            We now had to showcase the requirements of parents
            <br className="csk-brD" />{" "}
            with our communication in the Campaign videos.
          </h2>

          <p className="ccj-commsLabel">MAJOR COMMUNICATION OF THE CAMPAIGN:</p>
          <ol className="ccj-comms">
            {COMMS.map((c, i) => (
              <li className="ccj-comm" key={i}>
                <span className="cst-reqNum">{String(i + 1).padStart(2, "0")}</span>
                <p className="ccj-commMain">{c.main}</p>
                {c.sub && <p className="ccj-commSub">{c.sub}</p>}
              </li>
            ))}
          </ol>
        </section>
      </div>

      <div className="csp-in">
        <section className="csk-sec" id="csp-sec-styles">
          <div className="csp-eyebrow2">
            <span className="csp-eyebrow2-dot" aria-hidden="true" />
            <b>04</b>
            CREATIVE SOLUTION
          </div>

          <div className="ccj-stylesTop">
            <h2 className="cst-secH">
              Here are the different video styles we finalised for the campaign
            </h2>
            <div className="ccj-stylesCopy">
              <p>
                For performance videos, the most essential component is the relatability. While
                PW and Alakh sir brought in trust, quality and affordability, it was equally
                important to choose the right video style to convey the communication in a
                relatable manner: such that the communication did not feel forced, manipulative
                or incorrect.
              </p>
              <p>
                The scripts made sure that the characters were only Parents, Teachers or some
                Experts. This helped in providing more impact and trust to the viewers.
              </p>
            </div>
          </div>

          <SeekhoFilms films={STYLE_FILMS} captions={STYLES} className="ccj-films" />
        </section>
      </div>

      <div className="cst-outputBand csk-band">
        <div className="csp-in">
          <section className="cst-output csk-impact" id="csp-sec-impact">
            <div className="csp-eyebrow2">
              <span className="csp-eyebrow2-dot" aria-hidden="true" />
              <b>05</b>
              IMPACT
            </div>
            <h2 className="cst-secH csk-impactH ccj-impactH">Impact of this Campaign</h2>

            <div className="ccj-impactRow">
              <div className="ccj-stats">
                {STATS.map((st) => (
                  <div className="ccj-stat" key={st.label}>
                    <p className="ccj-statLabel">
                      <i className={`ccj-sq ccj-sq--${st.tone}`} aria-hidden="true" />
                      {st.label}
                    </p>
                    <span className="ccj-statVal">{st.val}</span>
                    <p className="ccj-statDesc">{st.desc}</p>
                  </div>
                ))}
              </div>
              <CplChart />
            </div>
          </section>
        </div>
      </div>

      <div className="csp-in">
        <section className="csp-more" id="csp-sec-more">
          <div className="csp-more-head">
            <h2 className="csp-more-h">More founder journeys.</h2>
            <a className="csp-more-cta csp-more-cta--desktop" href="/#deepdive">
              <span className="csp-more-cta-label">See all case studies</span>
              <span className="csp-more-cta-i" aria-hidden="true">
                <svg viewBox="0 0 40 40" aria-hidden="true">
                  <path fill="var(--violet)" d="M0 0 H40 V40 H26.667 V26.667 H13.333 V13.333 H0 Z" />
                </svg>
              </span>
            </a>
          </div>

          <DeepDiveCards embed exclude="/case-study/curiousjr" />
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
