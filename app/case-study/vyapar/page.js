import Footer from "../../components/Footer";
import SiteNav from "../../components/SiteNav";
import { DeepDiveCards } from "../../components/CaseStudies";
import CspCoverflow from "../../components/CspCoverflow";
import CspSectionNav from "../../components/CspSectionNav";
import SwipeCarousel from "../../components/SwipeCarousel";
import styles from "./page.module.css";

export const metadata = {
  title: "Vyapar - Case Study | Vidrow",
  description:
    "How Vidrow helped make Vyapar the name its category is known by, with brand films for small-business owners across India.",
};

const SECTIONS = [
  { id: "vyapar-problem", label: "Problem Statement" },
  { id: "vyapar-brief", label: "The Brief" },
  { id: "vyapar-approach", label: "The Approach" },
  { id: "vyapar-sequence", label: "The Sequence" },
  { id: "vyapar-difference", label: "The Difference" },
  { id: "vyapar-early-adopters", label: "Name It" },
  { id: "vyapar-trust", label: "Give It a Face" },
  { id: "vyapar-community", label: "Stand for Owner" },
  { id: "vyapar-proof", label: "The Proof" },
  { id: "vyapar-takeaway", label: "The Takeaway" },
  { id: "vyapar-testimonial", label: "In Their Words" },
];

const MANDATE = [
  "Build large Top of the funnel and grow the category itself",
  "Make Vyapar the name the category answers to.",
  "Build with one consistent voice from day one.",
  "Win mass India: small traders, retailers, wholesalers.",
];

const APPROACH = [
  {
    title: "Name it",
    copy: "The first campaign was a dozen films, each aimed at a different owner and emotion.",
    detail: "200 Mn+ impressions in 3 months, and the line still runs today.",
    note: "‘Har Business\nBanega Digital’",
  },
  {
    title: "Give it a face",
    copy: "To win the late majority without pushing CAC, the category needed a familiar face.",
    detail: "Across regional TV & digital in native languages. Brand impact grew multifold.",
    note: "Manoj Joshi played\ntrader, wholesaler &\nretailer",
  },
  {
    title: "Stand for the Owner",
    copy: "Leaders sell a product; authorities speak for the people who use it.",
    detail: "Relatable stories: funny, emotional, philosophical.",
    note: "Travelled organically\ninto family WhatsApp\ngroups.",
  },
  {
    title: "Never let go",
    copy: "Every Vyapar campaign since 2020 has been Vidrow’s.",
    detail: "Consistency turns a leader into the default category answer.",
    note: "6 years of one voice\n& one line.",
  },
];

const SEQUENCE = [
  {
    title: "Name the Category",
    copy: "We launched ‘Har Business Banega Digital’, a campaign of 12+ films, each targeting a different owner type and emotion. The line gave the category a name before any competitor could. It clocked 200 Mn+ views and still runs today.",
  },
  {
    title: "Give It a Face",
    copy: "To reach mass India without inflating CAC, we cast Manoj Joshi, a face the late majority trusted, playing trader, wholesaler, and retailer across regional TV and digital in native languages. Brand impact multiplied without the price tag of a Bollywood A-lister.",
  },
  {
    title: "Stand for the Owner",
    copy: "Category leaders speak for their community. We built relatable stories (funny, emotional, philosophical) that felt less like ads and more like a mirror. These films travelled organically into WhatsApp groups, earning reach no media buy could deliver.",
  },
  {
    title: "Never Let Go",
    copy: "Every Vyapar campaign since 2020 has been Vidrow’s. Six years, one voice, one line. Consistency is what turns a market leader into the default category answer. The brand didn’t just grow, it became the reference point.",
  },
];

const EARLY_FILMS = [
  { src: "/casestudy-vyapar/campaign-01.webp", alt: "Vyapar campaign film with a small-business owner" },
  { src: "/casestudy-vyapar/campaign-02.webp", alt: "Vyapar campaign film featuring a shop customer" },
  { src: "/casestudy-vyapar/campaign-03.webp", alt: "Vyapar campaign film featuring a business owner" },
];

const TRUST_FILMS = [
  { src: "/casestudy-vyapar/film-01.webp", alt: "Manoj Joshi in a Vyapar campaign film" },
  { src: "/casestudy-vyapar/film-02.webp", alt: "A character from the Vyapar business campaign" },
  { src: "/casestudy-vyapar/film-03.webp", alt: "A shop owner in a Vyapar campaign film" },
  { src: "/casestudy-vyapar/hero.webp", alt: "A family watches a Vyapar campaign film" },
];

const COMMUNITY_FILMS = [
  { src: "/casestudy-vyapar/story-01.webp", alt: "A woman in a Vyapar community campaign" },
  { src: "/casestudy-vyapar/story-02.webp", alt: "An older business owner in a Vyapar community campaign" },
  { src: "/casestudy-vyapar/story-03.webp", alt: "A young woman in a Vyapar community campaign" },
  { src: "/casestudy-vyapar/story-04.webp", alt: "A character in a Vyapar community campaign" },
  { src: "/casestudy-vyapar/story-05.webp", alt: "A bride in a Vyapar community campaign" },
  { src: "/casestudy-vyapar/story-06.webp", alt: "A woman reacts in a Vyapar community campaign" },
];

const AUTHORITY_STATS = [
  {
    label: "views",
    value: "400 Mn+",
    copy: "Brand marketing reach generated organically across campaigns.",
  },
  {
    label: "Businesses",
    value: "1 Mn → 1 Cr+",
    copy: "Massive scale achieved without performance spend dilution.",
  },
  {
    label: "now sell “vs Vyapar”",
    value: "9+ rivals",
    copy: "Challengers define themselves against the default category answer.",
  },
];

const PROOF = [
  {
    label: "Reach",
    value: "200 Mn+",
    copy: "Views on a single campaign video. Organically.",
  },
  {
    label: "Scale",
    value: "1 Cr+",
    copy: "Businesses on the platform. Up from 1 Mn at the start.",
  },
  {
    label: "Search",
    value: "#1",
    copy: "Vyapar ranks for “best GST billing software India”. Brand now equals category.",
  },
  {
    label: "Store",
    value: "4.8★",
    copy: "Google Play rating across 1.9 lakh reviews. Scale without dilution.",
  },
  {
    label: "Rivals",
    value: "9+",
    copy: "Competitors now run “Vyapar alternative” pages. They define themselves against Vyapar.",
  },
  {
    label: "Expansion",
    value: "2025",
    copy: "Vyapar acquired Suvit and relaunched as Vyapar TaxOne, and the name now stretches to CAs.",
  },
];

function SectionLabel({ number, children, light = false }) {
  return (
    <p className={`${styles.sectionLabel}${light ? ` ${styles.sectionLabelLight}` : ""}`}>
      <span aria-hidden="true" />
      <b>{number}</b>
      {children}
    </p>
  );
}

function FilmStrip({ films, className = "" }) {
  return (
    <div className={`${styles.filmStrip} ${className}`}>
      {films.map((film) => (
        <a
          className={styles.film}
          href="/campaign/vyapar"
          aria-label={`Watch ${film.alt}`}
          key={film.src}
        >
          <img src={film.src} alt={film.alt} loading="lazy" />
          <span className={styles.play} aria-hidden="true">
            <svg viewBox="0 0 40 40">
              <path d="M15 11.5 29 20 15 28.5z" />
            </svg>
          </span>
        </a>
      ))}
    </div>
  );
}

export default function VyaparCaseStudy() {
  return (
    <>
      <main className={`csp ${styles.page}`}>
        <header className="hx-bar hx-bar--page">
          <SiteNav logoHref="/" />
        </header>
        <div className="hx-bar-gap" aria-hidden="true" />

        <CspSectionNav
          sections={SECTIONS}
          darkSectionIds={["vyapar-early-adopters", "vyapar-proof"]}
        />

        <div className={`csp-in ${styles.heroWrap}`}>
          <section className={styles.hero} id="vyapar-hero">
            <h1 className={styles.heroTitle}>
              Make Vyapar the name the category is known by.
            </h1>
            <div className={styles.heroImage}>
              <img
                src="/casestudy-vyapar/hero.webp"
                alt="A family watches a Vyapar campaign film together"
                fetchPriority="high"
              />
              <span className={styles.brandPlate}>
                <svg className={styles.plateMark} viewBox="0 0 40 40" role="img" aria-label="Vidrow">
                  <path fill="#0B0B0D" d="M0 0 H40 V40 H26.667 V26.667 H13.333 V13.333 H0 Z" />
                </svg>
                <i aria-hidden="true" />
                <img className={styles.plateLogo} src="/partnership/vyapar.svg" alt="Vyapar" />
              </span>
            </div>
            <div className={styles.heroMeta}>
              <div>
                <span>Client</span>
                <b>Vyapar</b>
              </div>
              <div>
                <span>Timeline</span>
                <b>6+ Years</b>
              </div>
              <div className={styles.result}>
                <span>Result</span>
                <b>Vyapar builds its category authority by becoming the largest player</b>
              </div>
              <p>
                Vidrow was roped into Vyapar’s Journey 2020. The mandate for this work was
                brand marketing only, no performance spend.
              </p>
            </div>
          </section>
        </div>

        <div className={`csp-in ${styles.contentWrap}`}>
          <section className={styles.problem} id="vyapar-problem">
            <div>
              <SectionLabel number="01">Vyapar × Vidrow · Case Study</SectionLabel>
              <h2>Problem Statement</h2>
            </div>
            <p>
              Vidrow was roped into Vyapar’s Journey 2020. Vyapar had built a free billing
              and accounting app for small businesses and already had product-market fit.
              But accounting software in India still meant a desktop, a licence and a CA,
              there was no category a shop owner could see himself in. The mandate for this work
              was brand marketing only, no performance spend. <strong>The job we set ourselves: make
              Vyapar the name the category is known by.</strong>
            </p>
          </section>
        </div>

        <div className={`csp-in ${styles.contentWrap}`}>
          <section className={styles.brief} id="vyapar-brief">
            <SectionLabel number="02">The Brief · 2020</SectionLabel>
            <h2>Vyapar had the product.<br />India didn’t know the category existed.</h2>
            <div className={styles.situation}>
              <b>The Situation</b>
              <p>
                Vyapar had built a solid free billing &amp; accounting app for small
                businesses in India. Product-market fit: confirmed. But in 2020,
                “accounting software” still meant a desktop program, a CA, and a licence.
                The average kirana owner or manufacturer had never thought of a mobile app
                as their business tool. The category simply did not exist in the mind of
                the buyer.
              </p>
            </div>
            <div className={styles.mandate}>
              <h3>The Mandate</h3>
              <ol>
                {MANDATE.map((item, index) => (
                  <li key={item}>
                    <span>0{index + 1}</span>
                    <b>{item}</b>
                  </li>
                ))}
              </ol>
            </div>
            <p className={styles.briefNote}>
              Meanwhile, competitors were spending crores on celebrity endorsements.
              Vyapar chose a different path: research-driven content.
            </p>
          </section>
        </div>

        <div className={`csp-in ${styles.contentWrap}`}>
          <section className={styles.approach} id="vyapar-approach">
            <SectionLabel number="03">The Approach</SectionLabel>
            <h2>Vyapar didn’t just sell an app.<br />Vyapar built the CATEGORY.</h2>
            <SwipeCarousel className={styles.approachGrid}>
              {APPROACH.map((item) => (
                <article className={styles.approachCard} key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.copy}</p>
                  <p>{item.detail}</p>
                  <b className={styles.approachNote}>{item.note}</b>
                </article>
              ))}
            </SwipeCarousel>
          </section>
        </div>

        <div className={`csp-in ${styles.contentWrap}`}>
          <section className={styles.sequence} id="vyapar-sequence">
            <SectionLabel number="04">The Approach</SectionLabel>
            <h2>Four moves. Executed in sequence.<br />Over five years.</h2>
            <div className={styles.sequenceGrid}>
              {SEQUENCE.map((item, index) => (
                <article className={styles.sequenceCard} key={item.title}>
                  <div>
                    <span>0{index + 1}</span>
                    <h3>{item.title}</h3>
                  </div>
                  <p>{item.copy}</p>
                </article>
              ))}
            </div>
          </section>
        </div>

        <div className={`csp-in ${styles.contentWrap}`}>
          <section className={styles.difference} id="vyapar-difference">
            <SectionLabel number="05">What Made the Difference</SectionLabel>
            <h2>Not budget. Not celebrities.<br />Research-driven content wins categories.</h2>
            <div className={styles.comparison}>
              <article className={styles.competitors}>
                <span>Their Playbook</span>
                <h3>Competitors</h3>
                <ul>
                  <li>Crores spent on celebrity endorsements</li>
                  <li>Broad spray-and-pray advertising</li>
                  <li>No consistent voice or narrative</li>
                  <li>Result: smaller market share, no category authority</li>
                </ul>
              </article>
              <article className={styles.vidrowPlaybook}>
                <span>Our Playbook</span>
                <h3>Vidrow × Vyapar</h3>
                <ul>
                  <li>Deep research into the target audience</li>
                  <li>Naming and owning the category narrative</li>
                  <li>Celebrity chosen for relevance, not fame</li>
                  <li>Same partner, same voice, 6+ years</li>
                  <li>Result: Vyapar is the category</li>
                </ul>
              </article>
            </div>
          </section>
        </div>

        <div className={`csp-in ${styles.contentWrap}`}>
          <section className={styles.earlyAdopters} id="vyapar-early-adopters">
            <SectionLabel number="06" light>Name It</SectionLabel>
            <h2>Finding Early Adopters</h2>
            <p>
              In the first campaign, both teams agreed to do a bouquet of creatives with
              different communications. The idea was to understand what resonates best with
              their potential users. Vidrow created about a dozen videos to diversify the
              bets. Each creative targeted a different demographic with different emotions and
              different offerings. This is when the tagline - ‘Har Business Banega Digital’
              was conceptualised to bring the campaign under one umbrella. The tagline still
              sticks with the brand. As expected the results were amazing. The campaign
              reached more than 200 million impressions in a mere three months. We had achieved
              more awareness than we set out for.
            </p>
            <span className={styles.campaignCaption}>Click on the image below to view the campaign</span>
            <div className={styles.earlyCover}>
              <CspCoverflow slides={EARLY_FILMS} start={1} href="/campaign/vyapar" />
            </div>
          </section>
        </div>

        <div className={`csp-in ${styles.contentWrap}`}>
          <section className={styles.storySection} id="vyapar-trust">
            <div className={styles.storyHeading}>
              <div>
                <SectionLabel number="07">Give It a Face</SectionLabel>
                <h2>Building Brand Trust</h2>
              </div>
              <p>
                As Vyapar grew rapidly, we realised that to sustain the growth without
                pushing CAC, building brand trust is necessary. Early adopters had already
                been acquired, now was the time to sway the ‘Late Majority’. Both the teams
                thoroughly researched all the possible branding solutions and concluded
                that a known face should be associated with Vyapar’s brand. Keeping budget
                constraints in mind, a list of veteran TV and Film actors was created. We
                ranked them by their popularity and personality match and Mr. Manoj Joshi
                came out as an obvious choice. A multilingual campaign was conceptualised,
                where he played multiple characters displaying different user personas. The
                videos were a huge success on regional TV and digital ads - the brand impact
                grew multifold.
              </p>
            </div>
            <span className={styles.campaignCaption}>Click on the image below to view the campaign</span>
            <FilmStrip films={TRUST_FILMS} className={styles.trustFilms} />
          </section>
        </div>

        <div className={`csp-in ${styles.contentWrap}`}>
          <section className={styles.storySection} id="vyapar-community">
            <div className={styles.storyHeading}>
              <div>
                <SectionLabel number="08">Stand for Owner</SectionLabel>
                <h2>Building Loyal<br />Community</h2>
              </div>
              <p>
                The Vyapar brand grew and became the market leader. Now, it was time to build
                a community. A loyal community is any brand’s safe haven and it can be
                achieved only by standing for something beyond business. From the start
                Vyapar had only one vision: ‘Help the small Business Owner’. So we, at
                Vidrow, decided to make it the centre of our next campaign. We chose
                interesting stories about business-owners and communicated it with full
                conviction, be it fun, or emotional or philosophical. Here are some of the
                stories that went viral, found space in family WhatsApp groups and also in
                people’s hearts.
              </p>
            </div>
            <span className={styles.campaignCaption}>Click on the image below to view the campaign</span>
            <FilmStrip films={COMMUNITY_FILMS} className={styles.communityFilms} />
          </section>
        </div>

        <div className={`csp-in ${styles.contentWrap}`}>
          <section className={styles.proof} id="vyapar-proof">
            <SectionLabel number="09" light>The Proof · Where Vyapar Stands in 2026</SectionLabel>
            <h2>The market rearranged itself{" "}<br />around the brand we built.</h2>
            <div className={styles.proofGrid}>
              {PROOF.map((item) => (
                <article className={styles.proofCard} key={item.label}>
                  <span className={styles.proofLabel}>
                    <i aria-hidden="true" />
                    {item.label}
                  </span>
                  <b className={styles.proofValue}>
                    {/* the unit after the figure (Mn+, Cr+, the star) is its
                        own span so phones can set it smaller */}
                    {item.value.replace(/\s*(Mn\+|Cr\+|★)$/, "")}
                    {item.value.match(/\s*(Mn\+|Cr\+|★)$/) && (
                      <span className={`${styles.proofUnit}${item.value.endsWith("★") ? ` ${styles.proofStar}` : ""}`}>
                        {item.value.match(/\s*(Mn\+|Cr\+|★)$/)[0]}
                      </span>
                    )}
                  </b>
                  <p>{item.copy}</p>
                </article>
              ))}
            </div>
          </section>
        </div>

        <div className={`csp-in ${styles.contentWrap}`}>
          <section className={styles.takeaway} id="vyapar-takeaway">
            <div className={styles.takeawayHead}>
              <div>
                <SectionLabel number="10">The Takeaway</SectionLabel>
                <h2>Authority compounds.</h2>
              </div>
              <div className={styles.takeawayCopy}>
                <p>
                  This work was brand marketing only, not a rupee of performance spend. Built as a
                  sequence: name the category, give it a face, stand for the owner, never let
                  go. It did what reach alone can’t: make Vyapar the name the category answers
                  to.
                </p>
                <b>Six years on, the search engine, the app store and the competition all agree.</b>
              </div>
            </div>
            <div className={styles.authorityStats}>
              {AUTHORITY_STATS.map((item) => (
                <article className={styles.authorityCard} key={item.label}>
                  <b className={styles.authorityValue}>{item.value}</b>
                  <span className={styles.authorityLabel}>{item.label}</span>
                  <p>{item.copy}</p>
                </article>
              ))}
            </div>
          </section>
        </div>

        <div className={`csp-in ${styles.contentWrap}`}>
          <section className={styles.testimonial} id="vyapar-testimonial">
            <SectionLabel number="11">In Their Words</SectionLabel>
            <h2>“Vidrow has been our go-to partner{" "}<br />for any marketing efforts.”</h2>
            <div className={styles.testimonialGrid}>
              <blockquote className={styles.testimonialQuote}>
                <p>
                  Vyapar has been working with Vidrow since 2020 and the outcome has been
                  amazing. Be it brand or performance marketing, we have collaborated with
                  Vidrow to create relatable and creative campaigns. ‘Har Business Banega
                  Digital’, our tagline campaign, also came out of this collaboration.
                </p>
                <footer>
                  <b>Sumit Agrawal</b>
                  <span>CEO, Vyapar</span>
                </footer>
              </blockquote>
              <img
                className={styles.testimonialPortrait}
                src="/casestudy-vyapar/sumit-agrawal.webp"
                alt="Sumit Agrawal, CEO of Vyapar"
                loading="lazy"
              />
            </div>
          </section>
        </div>

        <div className={`csp-in ${styles.contentWrap}`}>
          <section className="csp-more" id="vyapar-more">
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
            <DeepDiveCards embed exclude="/case-study/vyapar" />
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
