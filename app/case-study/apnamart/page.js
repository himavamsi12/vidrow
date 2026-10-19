import Footer from "../../components/Footer";
import SiteNav from "../../components/SiteNav";
import CspSectionNav from "../../components/CspSectionNav";
import { DeepDiveCards } from "../../components/CaseStudies";

export const metadata = {
  title: "ApnaMart - Case Study | Vidrow",
};

// what was already fixed, and what the ads still had to do
const CONSTRAINTS = [
  "Campaign idea and Celebrity (Mandar Chandwadkar) was finalized",
  "But communication lacked clarity",
  "The final ads needed strong regional resonance",
  "It was essential for the ads to work across Social Media Channel (organically) while also bringing in low CAC through paid distribution",
];

// what matters most to an ApnaMart customer
const OBSERVATIONS = [
  {
    title: "Savings",
    desc: "Customers actively look to maximize discounts and save money. There are high chances that they buy from somewhere else based on price",
  },
  {
    title: "Quality",
    desc: "When it comes to food items, the customers of ApnaMart (mostly married women) value Quality very highly",
  },
  {
    title: "Trust",
    desc: "Trust is an essential aspect for the customers. They inspect grocery items carefully before purchase",
  },
  {
    title: "Variety",
    desc: "Variety across the SKUs becomes a point of attraction by creating a value of aspiration in their minds",
  },
];

// 03: what the ads put front and centre, and how the scripts were written
const PILLARS = [
  "Careful Item Inspection",
  "Highlighting the Diverse range of Products at ApnaMart",
  "Hunting Discounts and avail various offers at ApnaMart",
];

const SCRIPT_CHOICES = [
  {
    title: "Social-media-first storytelling",
    desc: "To make our scripts Social-Media-First and avoid hard-selling of Staples.",
  },
  {
    title: "Character-driven storytelling",
    desc: "Use nuances and created situations that Bhide would often experience",
  },
  {
    title: "Situational humor",
    desc: "To improve the engagement on our ads, we made the scripts fun to watch and added humor",
  },
  { title: "Cultural familiarity", desc: "with the people in ApnaMart\u2019s Operating Regions" },
];

// 04: the five films, each poster cropped from its panel of the hero image
// (the five scenes sit side by side in it); they open the campaign page
const FILMS = [
  "High Quality",
  "Hunting Discounts",
  "Huge Variety",
  "Free Delivery by ApnaMart",
  "Quality Obsession and Inspection",
];

// 05: the results, swatches alternating acid / lilac
const RESULTS = [
  { tag: "Organic views", val: "3.7M+", desc: "From ApnaMart\u2019s Social Media Pages" },
  { tag: "Organic shares", val: "17.8K+", desc: "From ApnaMart\u2019s Social Media Pages" },
  { tag: "In the CPM", val: "50% \u2193", desc: "As compared to their BAU Campaigns" },
  { tag: "In the completion rate", val: "2x \u2191", desc: "As compared to their BAU Campaigns" },
];

// the side rail flips light-on-dark over the results band
const DARK_SECTIONS = ["csp-sec-result"];

const SECTIONS = [
  { id: "csp-sec-hero", label: "ApnaMart" },
  { id: "csp-sec-context", label: "Context & Challenge" },
  { id: "csp-sec-customers", label: "Understanding Customers" },
  { id: "csp-sec-strategy", label: "Creative Strategy" },
  { id: "csp-sec-films", label: "Campaign" },
  { id: "csp-sec-result", label: "Result" },
  { id: "csp-sec-more", label: "More Stories" },
];

// the Vidrow step mark, for the co-brand plate in the banner's corner
function VidrowMark() {
  return (
    <svg viewBox="0 0 40 40" aria-hidden="true">
      <path fill="#0B0B0D" d="M0 0 H40 V40 H26.667 V26.667 H13.333 V13.333 H0 Z" />
    </svg>
  );
}

export default function ApnamartCaseStudy() {
  return (
    <>
    <main className="csp csp--apna">
      <header className="hx-bar hx-bar--page">
        <SiteNav logoHref="/" />
      </header>
      <div className="hx-bar-gap" aria-hidden="true" />

      <CspSectionNav sections={SECTIONS} darkSectionIds={DARK_SECTIONS} />

      <div className="csp-in" id="csp-sec-hero">
        <div className="csp-head">
          <h1 className="csp-h">
            Strengthen brand recall{" "}
            <br className="cap-br" />
            around Staples.
          </h1>
          <p className="csp-note cap-note">
            An everyday grocery retail chain and quick commerce platform expanding rapidly across
            Eastern India. To actively engage with their customers and stay on top of minds,
            ApnaMart runs various Sale Events and Offers.
          </p>
        </div>

        <div className="cst-banner">
          <img fetchPriority="high"
            className="cst-bannerImg cst-bannerImg--full"
            src="/casestudy%20images/apnamart%20hero.webp"
            alt="Mandar Chandwadkar in five scenes from the ApnaMart campaign"
          />
          <span className="cst-plate">
            <VidrowMark />
            <i aria-hidden="true" />
            <img className="cst-appLogo cap-logo" src="/casestudy%20images/casestudy-apnamart-online/apnamart-badge.svg" alt="ApnaMart" />
          </span>
        </div>

        <div className="cst-meta cap-meta">
          <div className="csp-metaItem">
            <span className="csp-metaLabel">Client</span>
            <span className="csp-metaValue">ApnaMart</span>
          </div>
          <div className="csp-metaItem">
            <span className="csp-metaLabel">Celebrity</span>
            <span className="csp-metaValue">Mandar Chandwadkar</span>
          </div>
          <div className="csp-metaItem">
            <span className="csp-metaLabel">Category</span>
            <span className="csp-metaValue">Staples</span>
          </div>
        </div>
      </div>

      <div className="csp-in">
        <section className="cst-problem cst-problem--reqs cap-context" id="csp-sec-context">
          <div className="cst-problemTop">
            <div>
              <div className="csp-eyebrow2">
                <span className="csp-eyebrow2-dot" aria-hidden="true" />
                <b>01</b>
                APNAMART RETAIL &amp; QUICK COMMERCE
              </div>
              <h2 className="cst-secH">Context &amp; Challenge</h2>
            </div>
            <div className="cst-problemCopy">
              <p>
                An everyday grocery retail chain and quick commerce platform expanding rapidly
                across Eastern India. To actively engage with their customers and stay on top of
                minds, ApnaMart runs various Sale Events and Offers.
              </p>
              <p>
                While analysing the data, ApnaMart figured that for their customers, they had
                built a unique selling point around being the best place for getting the best
                staples around.
              </p>
              <p>
                Now, they wanted to leverage their strongest category strategically by
                strengthening brand recall around Staples.
              </p>
            </div>
          </div>

          <span className="cst-pmfCap cst-pmfCap--violet cap-cap">The constraint</span>
          <ol className="cst-reqs cap-reqs">
            {CONSTRAINTS.map((r, i) => (
              <li className="cst-req" key={r}>
                <span className="cst-reqNum">{String(i + 1).padStart(2, "0")}</span>
                <p>{r}</p>
              </li>
            ))}
          </ol>
        </section>
      </div>

      <div className="csp-in">
        <section className="cap-customers" id="csp-sec-customers">
          <div className="cst-problemTop">
            <div>
              <div className="csp-eyebrow2">
                <span className="csp-eyebrow2-dot" aria-hidden="true" />
                <b>02</b>
                UNDERSTANDING CUSTOMERS
              </div>
              <h2 className="cst-secH">
                Customer Behaviour{" "}
                <br />
                Observations
              </h2>
            </div>
            <p className="cst-problemCopy">
              We started by breaking down what matters most to ApnaMart customers. Then we started
              finding those insights that matched perfectly with Mandar&rsquo;s iconic character
              &lsquo;Bhide&rsquo; from Taarak Mehta Ka Ooltah Chashmah.
            </p>
          </div>

          <ol className="cst-steps cap-obs">
            {OBSERVATIONS.map((o, i) => (
              <li className="cst-step cap-ob" key={o.title}>
                <span className="cst-stepNum">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="cap-obTitle">{o.title}</h3>
                <p className="cst-stepDesc">{o.desc}</p>
              </li>
            ))}
          </ol>
        </section>
      </div>

      <div className="csp-in">
        <section className="cap-strategy" id="csp-sec-strategy">
          <div className="csp-eyebrow2">
            <span className="csp-eyebrow2-dot" aria-hidden="true" />
            <b>03</b>
            CREATIVE STRATEGY
          </div>
          <h2 className="cst-secH">
            Character-driven storytelling.{" "}
            <br />
            Situational humor. Cultural familiarity.
          </h2>

          <div className="cap-stratRow">
            <div>
              <p className="cap-stratIntro">
                The following aspects became the communication pillars for the campaign and the
                following customer motivations were highlighted across our ads:
              </p>
              <ol className="cap-pillars">
                {PILLARS.map((t, i) => (
                  <li key={t}>
                    <span className="cst-reqNum">{String(i + 1).padStart(2, "0")}</span>
                    <span>{t}</span>
                  </li>
                ))}
              </ol>
            </div>

            <div>
              <span className="cst-pmfCap cst-pmfCap--violet cap-chooseCap">
                While developing the scripts, we chose
              </span>
              <ol className="cap-choices">
                {SCRIPT_CHOICES.map((c, i) => (
                  <li key={c.desc}>
                    <span className="cst-reqNum">{String(i + 1).padStart(2, "0")}</span>
                    {c.title && <b className="cap-choiceTitle">{c.title}</b>}
                    <p>{c.desc}</p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>
      </div>

      <div className="csp-in">
        <section className="cap-films" id="csp-sec-films">
          <div className="csp-eyebrow2">
            <span className="csp-eyebrow2-dot" aria-hidden="true" />
            <b>04</b>
            CAMPAIGN
          </div>
          <h2 className="cst-secH">
            Here are the Films from our campaign along{" "}
            <br />
            with the highlighted Qualities and Services
          </h2>

          <div className="cap-filmRow">
            {FILMS.map((label, i) => (
              <a className="cap-film" href="/campaign/fayda-uthaao" key={label}>
                <span className="cap-filmShot" style={{ "--i": i }} role="img" aria-label={`${label} film`}>
                  <span className="cvd-play" aria-hidden="true" />
                </span>
                <span className="cap-filmLabel">{label}</span>
              </a>
            ))}
          </div>
        </section>
      </div>

      <div className="cst-outputBand">
        <div className="csp-in">
          <section className="cst-output cap-result" id="csp-sec-result">
            <div className="csp-eyebrow2">
              <span className="csp-eyebrow2-dot" aria-hidden="true" />
              <b>05</b>
              RESULT
            </div>
            <h2 className="cst-secH">
              The Films in the campaign were made in a Social-Media First and, hence, brought
              great results over both Social Media and Paid Channels.
            </h2>

            <div className="cst-outStats">
              {RESULTS.map((r, i) => (
                <div className="cst-outStat" key={r.tag}>
                  <span className={`cst-outTag${i % 2 ? " cst-outTag--lilac" : ""}`}>{r.tag}</span>
                  <span className="cst-outVal">{r.val}</span>
                  <p className="cst-outDesc">{r.desc}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
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

          <DeepDiveCards embed exclude="/case-study/apnamart" />
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
