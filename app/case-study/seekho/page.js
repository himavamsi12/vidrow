import Footer from "../../components/Footer";
import SiteNav from "../../components/SiteNav";
import CspSectionNav from "../../components/CspSectionNav";
import { DeepDiveCards } from "../../components/CaseStudies";
import SeekhoFilms from "../../components/SeekhoFilms";
import { CAMPAIGNS } from "../../data/campaigns";
import SeekhoFaces from "../../components/SeekhoFaces";

export const metadata = {
  title: "Seekho - Case Study | Vidrow",
};

// the three things wrong with Seekho's ads before this campaign
const PROBLEMS = [
  {
    title: "Quick Fatigue",
    desc: "With very high monthly ad spends, the fatigue duration of ads was very low. All ads would stop giving results in about 2 weeks.",
  },
  {
    title: "Low Scalability",
    desc: "The creatives were not unlocking newer audience.",
  },
  {
    title: "High CAC",
    desc: "As a result of these, Seekho had a high CAC.",
  },
];

// the two options Seekho had before this campaign
const OPTIONS = [
  {
    title: "Brand Marketing",
    desc: "While Brand Videos help in establishing trust and in CAC reduction over a long time, they are not an effective solution for bringing quick conversion.",
  },
  {
    title: "New formats of Creator-led Marketing",
    desc: "Before Vidrow, Seekho always betted on Creator-led videos. Their performance in short duration were good, however, the performance deteriorated when active for over 2 weeks, and they were not scalable.",
  },
];

// why Mandar: what he stood for with Seekho's audience
const TRAITS = [
  "there is high value for money",
  "the content is explained to the audience by a person who belongs to the same socio-economic class and mindset",
  "a teacher is explaining to them about the courses which would increase the significance of Seekho\u2019s courses significantly",
];

// the five films of the Seekho campaign page, played in place
const FILMS = CAMPAIGNS.seekho_mandar.frames;

// the numbers behind the campaign
const NUMBERS = [
  { val: "10x ROI" },
  { val: "9 weeks", desc: "Ads ran for 9 weeks straight with high performance" },
  { val: "23%", desc: "Reduced CAC by 23%" },
  { val: "1/5th", desc: "Nearly 1/5th of their total monthly ad spend was spent on only this Campaign for 2 months" },
];

// the other faces the campaign was repeated with. `video` is a Cloudflare
// Stream id; faces without one show an empty frame until their film is added.
const FACES = [
  { name: "Anup Soni", video: "27d821612014a64fe4c2818bdd798f85" },
  { name: "Mandar Chandwadkar 2" },
  { name: "Himani Shivpuri" },
  { name: "Manoj Joshi", video: "5892a5659d9d6b84b47781adc7664991" },
  { name: "Rohitashv Gour" },
  { name: "Naveen Kasturia", video: "79be8b74182f5a492e9dffaff4774126" },
  { name: "Mandar Chandwadkar 3" },
];

// CAC over time, as drawn in the chart: points are [week, y] with y in the
// chart's own units (0 at the top gridline)
const WEEK_X = (w) => 18 + w * 46;
const BRAND_LINE = [[0, 68], [1, 68], [2, 68], [3, 70], [4, 72], [5, 74], [6, 76], [7, 76], [8, 76], [9, 78]];
const PERF_LINE = [[0, 68], [1, 93], [2, 99], [3, 81], [4, 72], [4.8, 69]];
const GRID_Y = [68, 102, 136, 169, 203, 236];
const pts = (line) => line.map(([w, y]) => `${WEEK_X(w)},${y}`).join(" ");

// CAC falling to about -26% by week 4, then drifting back to -20% by week 9
// (y is in the impact chart's own units: 93 is 0%, 61 units to each 10%)
const IMPACT_Y = [93, 165, 212, 232, 251, 244, 237, 230, 223, 212];
const IMPACT_X = (w) => 75 + w * 54.7;
const IMPACT_GRID = [["0 %", 93], ["-10 %", 154], ["-20 %", 215], ["-30 %", 276]];

function ImpactChart() {
  return (
    <figure className="csk-impactChart">
      <svg viewBox="0 0 590 400" role="img" aria-label="Effects of this campaign: CAC falls to about 26 percent below the starting level by week 4, then settles near 20 percent below by week 9">
        <text x="24" y="36" className="csk-icTitle">Effects of this Campaign</text>
        <circle cx="29" cy="67" r="5" fill="#F5FA5E" />
        <text x="42" y="72" className="csk-icKey">CAC</text>
        {IMPACT_GRID.map(([label, y]) => (
          <g key={label}>
            <line x1="75" x2="570" y1={y} y2={y} stroke="#3A3A3A" strokeWidth="1" />
            <text x="68" y={y + 4} textAnchor="end" className="csk-icTick">{label}</text>
          </g>
        ))}
        <line x1="75" x2="570" y1="336" y2="336" stroke="#8A8A8A" strokeWidth="1" />
        <polyline
          points={IMPACT_Y.map((y, w) => `${IMPACT_X(w)},${y}`).join(" ")}
          fill="none"
          stroke="#F5FA5E"
          strokeWidth="2.5"
          strokeLinejoin="round"
          strokeLinecap="round"
        />
        {IMPACT_Y.map((_, w) => (
          <text key={w} x={IMPACT_X(w)} y="360" textAnchor="middle" className={`csk-icTick${w % 2 ? " csk-tickOdd" : ""}`}>
            {w === 0 ? "0 Week" : w === 1 ? "1 Week" : `${w} Weeks`}
          </text>
        ))}
        <text x="322" y="389" textAnchor="middle" className="csk-icAxis">Time (in weeks)</text>
        <text transform="translate(17 215) rotate(-90)" textAnchor="middle" className="csk-icAxis">CAC</text>
      </svg>
    </figure>
  );
}

function CacChart() {
  return (
    <figure className="csk-chart">
      <svg viewBox="0 0 450 284" role="img" aria-label="Effect of video on CAC over nine weeks: brand video stays flat while performance video dips and then rises">
        <text x="18" y="27" className="csk-chartTitle">Effect of Video on CAC</text>
        <circle cx="21" cy="47" r="3" fill="#C9B830" />
        <text x="32" y="50" className="csk-chartKey">CAC after Brand Video</text>
        <circle cx="156" cy="47" r="3" fill="#6F57D9" />
        <text x="167" y="50" className="csk-chartKey">CAC after Performance Videos</text>
        {GRID_Y.map((y, i) => (
          <line key={y} x1="18" x2="432" y1={y} y2={y} stroke={i === GRID_Y.length - 1 ? "#8A8A8A" : "#E4E4E4"} strokeWidth="1" />
        ))}
        <polyline points={pts(BRAND_LINE)} fill="none" stroke="#C9B830" strokeWidth="2" strokeLinejoin="round" />
        <polyline points={pts(PERF_LINE)} fill="none" stroke="#6F57D9" strokeWidth="2" strokeLinejoin="round" />
        {Array.from({ length: 10 }, (_, w) => (
          <text key={w} x={WEEK_X(w)} y="252" textAnchor="middle" className={`csk-chartTick${w % 2 ? " csk-tickOdd" : ""}${w === 0 ? " csk-tick0" : ""}`}>
            {w === 0 ? "0 Week" : w === 1 ? "1 Week" : `${w} Weeks`}
          </text>
        ))}
        <text x="225" y="273" textAnchor="middle" className="csk-chartAxis">Time (in weeks)</text>
      </svg>
      <figcaption>How Creator-led and Brand Videos would have impacted Seekho&rsquo;s Campaign</figcaption>
    </figure>
  );
}

// performance ads and brand ads overlap into celebrity performance ads
function Venn() {
  return (
    <svg className="csk-venn" viewBox="0 0 340 510" role="img" aria-label="Performance Ads and Brand Ads overlap as Celebrity Performance Ads">
      <circle cx="170" cy="170" r="170" fill="#F5FA5E" opacity=".85" />
      <circle cx="170" cy="340" r="170" fill="#C9C5FB" opacity=".95" style={{ mixBlendMode: "multiply" }} />
      <text x="170" y="103" textAnchor="middle">Performance Ads</text>
      <text x="170" y="249" textAnchor="middle" className="csk-vennMid">Celebrity</text>
      <text x="170" y="273" textAnchor="middle" className="csk-vennMid">Performance Ads</text>
      <text x="170" y="444" textAnchor="middle">Brand Ads</text>
    </svg>
  );
}

const SECTIONS = [
  { id: "csp-sec-hero", label: "Seekho" },
  { id: "csp-sec-problem", label: "Problem Statement" },
  { id: "csp-sec-solution", label: "Possible Solution" },
  { id: "csp-sec-creative", label: "Creative Solution" },
  { id: "csp-sec-face", label: "Finding the Face" },
  { id: "csp-sec-final", label: "Final Campaign" },
  { id: "csp-sec-impact", label: "Impact" },
  { id: "csp-sec-faces", label: "Success Story" },
  { id: "csp-sec-more", label: "More Stories" },
];

// the rail flips light-on-dark over the Impact band
const DARK_SECTIONS = ["csp-sec-impact"];

export default function SeekhoCaseStudy() {
  return (
    <>
    <main className="csp csp--seekho csp--sk">
      <header className="hx-bar hx-bar--page">
        <SiteNav logoHref="/" />
      </header>
      <div className="hx-bar-gap" aria-hidden="true" />

      <CspSectionNav sections={SECTIONS} darkSectionIds={DARK_SECTIONS} />

      <div className="csp-in" id="csp-sec-hero">
        <div className="csk-top">
          <h1 className="cst-h">
            A Completely New Solution
            <br />
            of Performance Marketing.
          </h1>
          <p className="csk-note">
            We decided a combination of celebrity and performance videos: Celebrity Performance
            Video, a combination that was never used before by anyone.
          </p>
        </div>

        <div className="csp-banner csk-banner">
          <img fetchPriority="high"
            className="csk-hero"
            src="/casestudy-seekho/hero.webp"
            alt="Mandar Chandwadkar in five Seekho celebrity performance videos"
          />
          <span className="csp-bannerTag">
            <img src="/casestudy-seekho/lockup.webp" alt="Vidrow x Seekho" />
          </span>
        </div>

        <div className="csk-meta">
          <div className="csp-metaItem">
            <span className="csp-metaLabel">Client</span>
            <span className="csp-metaValue">Seekho</span>
          </div>
          <div className="csp-metaItem">
            <span className="csp-metaLabel">Face</span>
            <span className="csp-metaValue">Mandar Chandwadkar</span>
          </div>
          <div className="csp-metaItem">
            <span className="csp-metaLabel">Format</span>
            <span className="csp-metaValue">Celebrity Performance Video</span>
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
                SEEKHO &times; VIDROW &middot; CASE STUDY
              </div>
              <h2 className="cst-secH">Problem Statement</h2>
            </div>
            <p className="csk-problemCopy">
              Seekho wanted a solution that would improve the ad fatigue duration while
              consistently achieving low CAC.
            </p>
          </div>

          <ol className="csk-cards">
            {PROBLEMS.map((p, i) => (
              <li className="csk-card" key={p.title}>
                <span className="cst-reqNum">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="csk-chip">{p.title}</h3>
                <p>{p.desc}</p>
              </li>
            ))}
          </ol>
        </section>
      </div>

      <div className="csp-in">
        <section className="csk-sec" id="csp-sec-solution">
          <div className="csp-eyebrow2">
            <span className="csp-eyebrow2-dot" aria-hidden="true" />
            <b>02</b>
            UNDERSTANDING THE PROBLEM
          </div>
          <h2 className="cst-secH">Possible Solution</h2>

          <div className="csk-split">
            <ol className="csk-options">
              {OPTIONS.map((o, i) => (
                <li className="csk-card" key={o.title}>
                  <span className="cst-reqNum">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="csk-chip">{o.title}</h3>
                  <p>{o.desc}</p>
                </li>
              ))}
            </ol>
            <CacChart />
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
          <h2 className="cst-secH">For quick conversions, performance videos are essential!</h2>

          <div className="csk-split csk-split--venn">
            <div className="csk-prose">
              <p>
                To overcome the problem of trust, either a brand video or a known face is
                important. Using a known and relatable face also brings higher conversions.
              </p>
              <p>
                We decided a combination of celebrity and performance videos: Celebrity
                Performance Video- a combination that was never used before by anyone; A
                Completely New Solution Of Performance Marketing.
              </p>
              <p>
                Now, the problem was to find a face and a personality that would resonate with
                Seekho&rsquo;s audience.
              </p>
            </div>
            <Venn />
          </div>
        </section>
      </div>

      <div className="csp-in">
        <section className="csk-sec" id="csp-sec-face">
          <div className="csp-eyebrow2">
            <span className="csp-eyebrow2-dot" aria-hidden="true" />
            <b>04</b>
            FINDING THE FACE
          </div>
          <h2 className="cst-secH">What Mandar meant to Seekho&rsquo;s audience</h2>

          <div className="csk-split csk-split--face">
            <div className="csk-prose">
              <p>
                We listed out the personality traits that were relatable for Seekho&rsquo;s TG and
                shortlisted celebrities. To test the best face from this list, we did an internal
                survey and performed online A/B Testing.
              </p>
              <p>
                Mandar Chandwadkar is a highly recognised face for his portrayal of Atmaram
                Tukaram Bhide from Taarak Mehta ka Ooltah Chashmah - a small-town middle class
                teacher who values education highly.
              </p>
            </div>
            <ol className="csk-traits">
              {TRAITS.map((t, i) => (
                <li className="csk-trait" key={i}>
                  <span className="cst-reqNum">{String(i + 1).padStart(2, "0")}</span>
                  <p>{t}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>
      </div>

      <div className="csp-in">
        <section className="csk-sec" id="csp-sec-final">
          <div className="csp-eyebrow2">
            <span className="csp-eyebrow2-dot" aria-hidden="true" />
            <b>05</b>
            MANDAR CHANDWADKAR
          </div>
          <h2 className="cst-secH">Final Campaign</h2>
          <SeekhoFilms films={FILMS} />
        </section>
      </div>

      <div className="cst-outputBand csk-band">
        <div className="csp-in">
          <section className="cst-output csk-impact" id="csp-sec-impact">
            <div className="csp-eyebrow2">
              <span className="csp-eyebrow2-dot" aria-hidden="true" />
              <b>06</b>
              IMPACT
            </div>
            <h2 className="cst-secH csk-impactH">
              This campaign helped Seekho with unlocking new geographies including Gujarat,
              Maharashtra and Madhya Pradesh.
            </h2>

            <div className="csk-impactRow">
              <div>
                <p className="csk-numbersLabel">THE NUMBERS</p>
                <div className="csk-numbers">
                  {NUMBERS.map((n) => (
                    <div className="csk-number" key={n.val}>
                      <span className="csk-numVal">{n.val}</span>
                      {n.desc && <p>{n.desc}</p>}
                    </div>
                  ))}
                </div>
              </div>
              <ImpactChart />
            </div>
          </section>
        </div>
      </div>

      <div className="csp-in">
        <section className="csk-sec" id="csp-sec-faces">
          <div className="csp-eyebrow2">
            <span className="csp-eyebrow2-dot" aria-hidden="true" />
            <b>07</b>
            CONTINUING THE SUCCESS STORY
          </div>
          <h2 className="cst-secH">
            On the same hypothesis, we repeated
            <br className="csk-brD" />{" "}
            the campaign with other popular faces.
          </h2>
          <SeekhoFaces faces={FACES} />
        </section>
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

          <DeepDiveCards embed exclude="/case-study/seekho" />
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
