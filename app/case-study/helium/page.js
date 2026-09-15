import Footer from "../../components/Footer";
import SiteNav from "../../components/SiteNav";
import CspHooksRow from "../../components/CspHooksRow";
import CspMoreRow from "../../components/CspMoreRow";
import CspSectionNav from "../../components/CspSectionNav";
import CspCoverflow from "../../components/CspCoverflow";

export const metadata = {
  title: "Helium — Case Study | Vidrow",
};

const SECTIONS = [
  { id: "csp-sec-hero", label: "Overview" },
  { id: "csp-sec-aoc", label: "The Brief" },
  { id: "csp-sec-how", label: "Customer Journey" },
  { id: "csp-sec-hooks", label: "Brand Ads" },
  { id: "csp-sec-reasons", label: "Five Reasons" },
  { id: "csp-sec-focus", label: "The Focus" },
  { id: "csp-sec-films", label: "One Reason Each" },
  { id: "csp-sec-bperf", label: "Brand Performance" },
  { id: "csp-sec-pads", label: "Performance Ads" },
  { id: "csp-sec-reviews", label: "The Reviews" },
  { id: "csp-sec-social", label: "Social" },
  { id: "csp-sec-more", label: "More Stories" },
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

const BRAND_STATS = [
  { val: "4 Mn+", label: "Impressions" },
  { val: "3 Mn+", label: "People Reached" },
  { val: "15%", label: "Cheaper Customer" },
];

const SEGMENTS = [
  {
    eyebrow: "Urban millennials: the second AC",
    title: "Already owns one",
    desc: "Wants another for a smaller space, and doesn\u2019t need 1.5 ton to cool it.",
  },
  {
    eyebrow: "The shopkeeper",
    title: "Runs a small shop",
    desc: "A big AC is money spent cooling a space that never needed it.",
  },
  {
    eyebrow: "The first upgrade",
    title: "Buying their first",
    desc: "Needs to know it is the right call before spending money.",
  },
];

const REASON_FILMS = [
  { src: "/casestudy%20images/casestudy-helium/reason-1.png", alt: "Service, honestly" },
  { src: "/casestudy%20images/casestudy-helium/reason-2.png", alt: "Built for your weather" },
  { src: "/casestudy%20images/casestudy-helium/reason-3.png", alt: "Helium brand film" },
];

// the five surviving reasons, scattered around the centred headline —
// x/y are percentages of the section's own box, lifted from the design
const REASONS = [
  { n: "01", tag: "It\u2019s the right size", desc: "0.8 ton. You stop paying to cool air you never use.", x: 7, y: 25 },
  { n: "02", tag: "Anti-incumbent", desc: "No industry jargon. No unnecessary complexity.", x: 40, y: 5 },
  { n: "03", tag: "Service you actually need", desc: "You pay to fix what broke. Nothing sold upfront.", x: 74, y: 22 },
  { n: "04", tag: "Built for your weather", desc: "Mumbai is humid. Jaisalmer is dry. It adjusts.", x: 17, y: 72 },
  { n: "05", tag: "\u20b930 a day to run", desc: "The cheapest AC to own is the cheapest to run.", x: 72, y: 71 },
];

const JOURNEY = [
  {
    tag: "Brand Films",
    desc: "Sumeet Vyas introduced Helium and built the first layer of trust.",
  },
  {
    tag: "Performance Ads",
    desc: "One sharp reason, while they were still deciding.",
  },
  {
    tag: "The Website",
    desc: "The same Sumeet Vyas presence made the brand feel familiar and consistent.",
  },
  {
    tag: "Youtube Review",
    desc: "When they looked for proof, Helium was already present in the reviews they found.",
  },
  {
    tag: "They Buy",
    desc: "The final step wasn't about convincing. It was about making the decision easy.",
  },
];

const AOC = [
  {
    n: "01",
    title: "The Temptation",
    desc: "A low price, and the easiest ad in the category to make.",
  },
  {
    n: "02",
    title: "The Trap",
    desc: "Win on price in year one and you are the cheap brand forever.",
  },
  {
    n: "03",
    title: "The Brief",
    desc: "Make users want the product. Never the discount.",
  },
];

const HOOKS = [
  {
    n: "01",
    title: "Every reason\nto buy",
    desc: "Written as its own ad.",
  },
  {
    n: "02",
    title: "Communication\ntesting ads",
    desc: "All of them, live, together.",
  },
  {
    n: "03",
    title: "The market\npicked",
    desc: "We ran the winning communication as per testing.",
  },
  {
    n: "04",
    title: "Top 5\ncommunications",
    desc: "That actually landed.",
  },
];



const CELEB_POINTS = [
  {
    title: "Sumeet Vyas",
    desc: "Survey-picked, not guessed. A known face buys the first three seconds, the hook rate. Nobody hears a message they scrolled past.",
  },
  {
    title: "The founder on camera",
    desc: "A new brand feels more established when the person behind it steps into the frame.",
  },
  {
    title: "15 days, brief to films",
    desc: "Summer was already running. Every day in production is demand you never get back.",
  },
];

export default function HeliumCaseStudy() {
  return (
    <>
    <main className="csp">
      <header className="csp-nav">
        <SiteNav logoHref="/" />
      </header>

      <CspSectionNav sections={SECTIONS} darkSectionIds={["csp-sec-films", "csp-sec-reviews"]} />

      <div className="csp-in" id="csp-sec-hero">
        <div className="csp-head">
          <h1 className="csp-h">
            500 ACs / Day
            <br />
            Within 1 Month of Launch
            <br />
            All from Website!
          </h1>
          <p className="csp-note">
            A premium AC brand. A 90-day window. One bold question: could the right pieces,
            assembled correctly, sell 500 units a day, entirely from a website?
          </p>
        </div>

        <div className="csp-banner">
          <img
            src="/casestudy%20images/casestudy-helium/helium%20hero.png"
            alt="Helium air conditioner"
          />
          {/* no ready-made Vidrow x Helium lockup file, so it's assembled here:
              the step mark, a rule, then Helium's own wordmark */}
          <span className="csp-bannerTag">
            <span className="csp-lockup" aria-label="Vidrow x Helium">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fill="#0B0B0D"
                  d="M0 0h7v7H0zM8.5 0h7v7h-7zM17 0h7v7h-7zM8.5 8.5h7v7h-7zM17 8.5h7v7h-7zM17 17h7v7h-7z"
                />
              </svg>
              <i aria-hidden="true" />
              <img src="/casestudy%20images/casestudy-recommendations/helium-logo.png" alt="" />
            </span>
          </span>
        </div>

        <div className="csp-meta">
          <div className="csp-metaItem">
            <span className="csp-metaLabel">Client</span>
            <span className="csp-metaValue">Helium Air</span>
          </div>
          <div className="csp-metaItem">
            <span className="csp-metaLabel">Timeline</span>
            <span className="csp-metaValue">90 Days</span>
          </div>
          <div className="csp-metaItem">
            <span className="csp-metaLabel">Result</span>
            <span className="csp-metaValue">500 ACs / Day</span>
          </div>
        </div>
      </div>

      <div className="csp-in">
        <section className="csp-aoc" id="csp-sec-aoc">
          <div className="csp-aoc-head">
            <h2 className="csp-aoc-h">
              The temptation.
              <br />
              The trap. The brief.
            </h2>
            <p className="csp-aoc-copy">
              Helium Air came to Vidrow with a 0.8-ton AC priced at &#8377;16,999 in a highly
              competitive, established category. The challenge: make the brand feel aspirational
              and credible without competing on discounts or low pricing, while scaling
              performance during the peak summer season.
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
        <section className="csp-how csp-journey" id="csp-sec-how">
          <div className="csp-how-row">
            <div className="csp-how-left">
              <div className="csp-how-top">
                <div className="csp-eyebrow2">
                  <span className="csp-eyebrow2-dot" aria-hidden="true" />
                  <b>02</b>
                  <span className="csp-eyebrow2-sep">·</span>
                  CUSTOMER JOURNEY
                </div>
                <h2 className="csp-how-h">
                  We engineered the entire
                  <br />
                  customer
                </h2>
                <p className="csp-how-copy">Five touchpoints. One story. No gap to fall through</p>
              </div>

              {JOURNEY.map((step) => (
                <div key={step.tag}>
                  <div className="csp-howBlock">
                    <span className="csp-howTag">{step.tag}</span>
                    <p className="csp-howDesc">{step.desc}</p>
                  </div>
                  <hr className="csp-howDiv" />
                </div>
              ))}
            </div>

            <div className="csp-how-right">
              <img
                src="/casestudy%20images/casestudy-helium/founder.png"
                alt="They saw it: Helium's founder on screen"
              />
            </div>
          </div>
        </section>
      </div>

      <div className="csp-in">
        <section className="csp-hooks" id="csp-sec-hooks">
          <div className="csp-hooks-head">
            <div>
              <div className="csp-eyebrow2">
                <span className="csp-eyebrow2-dot" aria-hidden="true" />
                <b>03</b>
                <span className="csp-eyebrow2-sep">·</span>
                BRAND ADS
              </div>
              <h2 className="csp-hooks-h">
                We built the message
                <br />
                before building the ad.
              </h2>
            </div>
            <p className="csp-hooks-copy">A smaller AC isn&apos;t a cheaper AC. It&apos;s a smarter one.</p>
          </div>

          <CspHooksRow hooks={HOOKS} />
        </section>
      </div>

      <div className="csp-in">
        <section className="csp-reasons" id="csp-sec-reasons">
          <h2 className="csp-reasons-h">
            Five reasons survived.
            <br />
            Not one of them was the price.
          </h2>
          {REASONS.map((r) => (
            <div className="csp-reason" key={r.n} style={{ "--x": `${r.x}%`, "--y": `${r.y}%` }}>
              <span className="csp-reason-num">{r.n}</span>
              <span className="csp-reason-tag">{r.tag}</span>
              <p className="csp-reason-desc">{r.desc}</p>
            </div>
          ))}
        </section>
      </div>

      <div className="csp-in">
        <section className="csp-focus" id="csp-sec-focus">
          <div className="csp-aoc-head csp-focus-head">
            <div>
              <div className="csp-eyebrow2">
                <span className="csp-eyebrow2-dot" aria-hidden="true" />
                <b>04</b>
                <span className="csp-eyebrow2-sep">·</span>
                THE FOCUS
              </div>
              <h2 className="csp-aoc-h">
                The AD can be forgettable.
                <br />
                The BRAND can&apos;t.
              </h2>
            </div>
            <p className="csp-aoc-copy">
              Traditional advertising sells the film. People remember the face, the joke, the
              line and forget whose product it was. We built every frame the other way round: the
              only thing you carry out of it is Helium.
            </p>
          </div>

          <div className="csp-focus-body">
            <div className="csp-focus-points">
              {CELEB_POINTS.map((p) => (
                <div className="csp-focusPoint" key={p.title}>
                  <div className="csp-focusPoint-h">
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                      <path
                        fill="#715BE4"
                        d="M0 0h7v7H0zM8.5 0h7v7h-7zM17 0h7v7h-7zM8.5 8.5h7v7h-7zM17 8.5h7v7h-7zM17 17h7v7h-7z"
                      />
                    </svg>
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
                    Don&apos;t pay for Marketing.
                    <br />
                    Pay for Cooling
                  </p>
                  <p className="csp-quoteSub">
                    People remembered the name Helium. That was the whole job.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="csp-in">
        <section className="csp-films" id="csp-sec-films">
          <div className="csp-films-head">
            <div className="csp-eyebrow2">
              <span className="csp-eyebrow2-dot" aria-hidden="true" />
              <b>05</b>
              <span className="csp-eyebrow2-sep">·</span>
              THE FIVE BRANDS EACH
            </div>
            <h2 className="csp-films-h">One Reason Each</h2>
          </div>

          <CspCoverflow slides={REASON_FILMS} />
        </section>
      </div>

      <div className="csp-in">
        <section className="csp-bperf" id="csp-sec-bperf">
          <div className="csp-aoc-head csp-headRight">
            <div>
              <div className="csp-eyebrow2">
                <span className="csp-eyebrow2-dot" aria-hidden="true" />
                <b>06</b>
                <span className="csp-eyebrow2-sep">·</span>
                BRAND PERFORMANCE
              </div>
              <h2 className="csp-aoc-h" style={{ textWrap: "balance" }}>
                Brand ads are traditionally run on Awareness, we ran ours on Conversion!
              </h2>
            </div>
            <p className="csp-aoc-copy">
              We judged the films on what a customer cost, under the same rules as every other ad
              in the account.
            </p>
          </div>

          {/* three blocks stepping down to the right, each one's top-left
              tab tucking over the previous block's bottom-right corner */}
          <div className="csp-stairs">
            {BRAND_STATS.map((st, i) => (
              <div className={`csp-stair csp-stair${i + 1}`} key={st.label}>
                <span className="csp-stairVal">{st.val}</span>
                <span className="csp-stairLabel">{st.label}</span>
              </div>
            ))}
          </div>
        </section>
      </div>

      <div className="csp-in">
        <section className="csp-pads" id="csp-sec-pads">
          <div className="csp-aoc-head csp-headRight">
            <div>
              <div className="csp-eyebrow2">
                <span className="csp-eyebrow2-dot" aria-hidden="true" />
                <b>07</b>
                <span className="csp-eyebrow2-sep">·</span>
                PERFORMANCE ADS
              </div>
              <h2 className="csp-aoc-h">
                Performance ads sold features,
                <br />
                not feelings.
              </h2>
            </div>
            <p className="csp-aoc-copy">
              Brand films told people who Helium was. Performance ads told them why they needed
              one. So we tested who actually buys not age brackets, but reasons.
            </p>
          </div>

          <div className="csp-segs">
            {SEGMENTS.map((sg) => (
              <div className="csp-seg" key={sg.title}>
                <span className="csp-segEyebrow">{sg.eyebrow}</span>
                <h3 className="csp-segTitle">{sg.title}</h3>
                <p className="csp-segDesc">{sg.desc}</p>
              </div>
            ))}
          </div>

          <div className="csp-padStats">
            <div className="csp-padStat csp-padStat--yellow">
              <span className="csp-padStatVal">
                3x
                <br />
                ROAS
              </span>
              <span className="csp-padStatLabel">Than the industry average</span>
            </div>
            <div className="csp-padStat csp-padStat--violet">
              <span className="csp-padStatVal">
                500 ACs
                <br />
                /day
              </span>
              <span className="csp-padStatLabel">AC run rate</span>
            </div>
          </div>
        </section>
      </div>

      <div className="csp-in">
        <section className="csp-reviews" id="csp-sec-reviews">
          <div className="csp-aoc-head csp-headRight">
            <div>
              <div className="csp-eyebrow2">
                <span className="csp-eyebrow2-dot" aria-hidden="true" />
                <b>08</b>
                <span className="csp-eyebrow2-sep">·</span>
                THE REVIEWS
              </div>
              <h2 className="csp-aoc-h">
                We built the narrative.
                <br />
                The reviews made it credible.
              </h2>
            </div>
            <p className="csp-aoc-copy">
              An independent validation layer: real reviews, from people we don&apos;t pay.
            </p>
          </div>

          <div className="csp-reviews-body">
            <figure className="csp-reviewShot">
              <img
                src="/casestudy%20images/casestudy-helium/helium%20thumbnail.png"
                alt="Gadget Masala's YouTube review of the Helium Air 0.8 ton smart AC"
              />
              <figcaption className="csp-reviewTag">
                <b>Gadget Masala</b>
                <span>YouTube | Creator</span>
              </figcaption>
            </figure>

            <div className="csp-reviews-copy">
              <p>
                In April, a buyer had nothing to go on. No ratings to read. Nobody in the building
                who owned one. Nothing to search.
              </p>
              <p>
                So we placed the product with two channels this audience already trusts, for
                hands-on reviews in their own words. Outside our control, which is exactly why it
                works.
              </p>
              <p className="csp-reviews-note">
                We built the story.
                <br />
                Someone else made it believable.
              </p>
            </div>
          </div>
        </section>
      </div>

      <div className="csp-in">
        <section className="csp-social" id="csp-sec-social">
          <div className="csp-aoc-head csp-headRight">
            <div>
              <div className="csp-eyebrow2">
                <span className="csp-eyebrow2-dot" aria-hidden="true" />
                <b>09</b>
                <span className="csp-eyebrow2-sep">·</span>
                SOCIAL
              </div>
              <h2 className="csp-aoc-h">
                Social took the brand
                <br />
                where the ads never ran.
              </h2>
            </div>
            <p className="csp-aoc-copy">
              Brand films built awareness. Performance ads ran where we targeted them. Social went
              everywhere else and the demand followed it there.
            </p>
          </div>

          {/* three same-colour blocks overlapping into one stepped band — the
              middle one drops down, each figure's label sits just below it */}
          <div className="csp-socialBand">
            <div className="csp-socialBlock csp-socialBlock1">
              <span>~33k+</span>
            </div>
            <div className="csp-socialBlock csp-socialBlock2">
              <span>~637k+</span>
            </div>
            <div className="csp-socialBlock csp-socialBlock3">
              <span>~1.8Mn+</span>
            </div>
            <p className="csp-socialLabel csp-socialLabel1">Followers, from a standing start, in one season</p>
            <p className="csp-socialLabel csp-socialLabel2">Top organic views on the brand ads</p>
            <p className="csp-socialLabel csp-socialLabel3">Top organic views on the creator collab</p>
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
