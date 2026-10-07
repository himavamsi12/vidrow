import Footer from "../../components/Footer";
import SiteNav from "../../components/SiteNav";
import CspHooksRow from "../../components/CspHooksRow";
import CspMoreRow from "../../components/CspMoreRow";
import CspSectionNav from "../../components/CspSectionNav";
import CspCoverflow from "../../components/CspCoverflow";
import Mark from "../../components/Mark";

export const metadata = {
  title: "Helium — Case Study | Vidrow",
};

const SECTIONS = [
  { id: "csp-sec-hero", label: "Overview" },
  { id: "csp-sec-results", label: "90 Days" },
  { id: "csp-sec-selling", label: "The Product" },
  { id: "csp-sec-challenge", label: "The Challenge" },
  { id: "csp-sec-belief", label: "The Belief Gap" },
  { id: "csp-sec-flip", label: "The Flip" },
  { id: "csp-sec-brief", label: "The Brief" },
  { id: "csp-sec-buy", label: "How They Buy" },
  { id: "csp-sec-under", label: "The Underdog" },
  { id: "csp-sec-msg", label: "The Message" },
  { id: "csp-sec-hooks", label: "Brand Ads" },
  { id: "csp-sec-reasons", label: "Five Reasons" },
  { id: "csp-sec-chan", label: "The Channels" },
  { id: "csp-sec-cast", label: "The Casting" },
  { id: "csp-sec-focus", label: "The Focus" },
  { id: "csp-sec-founder", label: "The Founder" },
  { id: "csp-sec-recap", label: "Where We Are" },
  { id: "csp-sec-ads", label: "Ten Ads" },
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


// the four headline numbers under "What happened in just 90 days?" — the
// last is the one called out in acid
const RESULTS = [
  { val: "2%", label: "of every AC sold online in India" },
  { val: "3.5%", label: "market share on Amazon" },
  { val: "500", label: "ACs a day from their own website" },
  { val: "\u20b940 Cr", label: "revenue scaled in one season", hi: true },
];

// the three Ps that were already fixed before we came in — the fourth,
// promotion, is the acid banner underneath them
const FOUR_PS = [
  {
    tag: "Product",
    val: "0.8 ton",
    desc: "A size the category had never bothered to market.",
  },
  {
    tag: "Price",
    val: "₹16,999",
    desc: "Low enough to be read as cheap, which is the danger.",
  },
  {
    tag: "Place",
    val: "D2C website",
    desc: "A purchase people had only ever made in a shop or on a marketplace.",
  },
];

const CHALLENGES = [
  "No one bought a ‘cheap’ AC.",
  "No one bought a 0.8 ton AC.",
  "No one bought an AC from a D2C website.",
];

// the same three objections read twice: first as the reason nobody believed
// (04), then flipped into the line we ran on (05)
const OBJECTIONS = [
  {
    claim: "No one bought a cheap AC",
    why: "because cheap means bad quality.",
    flip: "but everyone will buy a great AC at a great price.",
  },
  {
    claim: "No one bought a 0.8 ton AC",
    why: "because no brand ever marketed one.",
    flip: "because no one told them 0.8 ton is all they need.",
  },
  {
    claim: "No one bought an AC from a D2C site",
    why: "because it is an AC, not sunscreen.",
    flip: "because no one built a buying experience they could trust.",
  },
];

const BRIEF_POINTS = [
  {
    n: "01",
    tag: "The temptation",
    desc: "A low price, and the easiest ad in the category to make.",
  },
  {
    n: "02",
    tag: "The trap",
    desc: "Win on price in year one and you are the cheap brand forever.",
  },
  {
    n: "03",
    tag: "The brief",
    desc: "Make people want the product. Never the discount.",
  },
];

// the five moments a purchase is actually made across — the last one is the
// only one that ends in money, so it carries the acid quote
const BUY_STEPS = [
  {
    stage: "Discovery",
    title: "They see the brand",
    desc: "Scrolling Instagram or YouTube. Not shopping for an AC. The brand finds them.",
    quote: "“Never heard of this.”",
  },
  {
    stage: "Consideration",
    title: "They search about it",
    desc: "First proper look at the product. The question is whether this brand looks real.",
    quote: "“Is this a serious company?”",
  },
  {
    stage: "Conviction",
    title: "Convinced about value",
    desc: "A performance ad makes a single value proposition land. Now there is a reason to want it.",
    quote: "“Okay, but why this one?”",
  },
  {
    stage: "Validation",
    title: "They go looking for proof",
    desc: "YouTube reviews, Instagram profile, in someone else’s words, from people the brand does not pay.",
    quote: "“Does anyone independent back this?”",
  },
  {
    stage: "Purchase",
    title: "They order",
    desc: "Back to the same website, this time with the doubt already dealt with.",
    quote: "“Fine. Buying it.”",
    hi: true,
  },
];

const INCUMBENTS = ["Voltas", "LG", "Haier", "Daikin"];

const UNDERDOG_MOVES = [
  {
    n: "01",
    title: "Build something they remember.",
    desc: "A new brand gets one line in someone’s head, if that. It has to be repeatable, and it has to be worth repeating.",
  },
  {
    n: "02",
    title: "Fix what the category got wrong.",
    desc: "Every old industry has habits nobody defends. Oversized units. Jargon. Service sold upfront. Free material.",
  },
  {
    n: "03",
    title: "Then run straight at the giants.",
    desc: "A new entrant that names the incumbent gets something the incumbent cannot buy: people who want it to win.",
  },
];

const UNDERDOG_BRANDS = [
  {
    name: "The Whole Truth",
    vs: "vs legacy protein brands",
    desc: "Made the ingredient label the entire argument.",
  },
  {
    name: "Mamaearth",
    vs: "vs personal care giants",
    desc: "Toxin-free, in a category nobody read the back of.",
  },
  {
    name: "boAt",
    vs: "vs imported audio",
    desc: "The aspiration, without the imported price tag.",
  },
  {
    name: "Zerodha",
    vs: "vs full-service brokers",
    desc: "Flat fees, against a percentage everyone accepted.",
  },
];

// the five messages read across: the habit of the category on one side,
// where Helium stood on the other
const MESSAGES = [
  {
    n: "01",
    title: "It is the right size",
    category: "A 1.5 ton unit pushed as the safe default, into Indian rooms that never needed one.",
    helium: "0.8 ton, sized for the room. You stop paying to cool air you never use.",
  },
  {
    n: "02",
    title: "Anti-incumbent",
    category: "Sold on star ratings, inverter grades and compressor jargon a buyer cannot decode.",
    helium: "No jargon. The product explained in the words the buyer would use.",
  },
  {
    n: "03",
    title: "Service you actually need",
    category: "Annual contracts and extended cover sold upfront, before anything has broken.",
    helium: "You pay to fix what broke. Nothing sold before it is needed.",
  },
  {
    n: "04",
    title: "Built for your weather",
    category: "One national specification. The same machine for a humid coast and a dry desert.",
    helium: "It adjusts. Mumbai is humid, Jaisalmer is dry, and the AC knows the difference.",
  },
  {
    n: "05",
    title: "₹30 a day to run",
    category: "Compete on sticker price and festive discounts. The running cost is your problem.",
    helium: "The cheapest AC to own is the cheapest to run. ₹30 a day.",
  },
];

// the channels split by one rule: could we read what came back from it
const CHANNELS_IN = [
  {
    name: "Instagram Ads",
    desc: "Cost per click, cost per order, readable in the same week you spent it.",
  },
  {
    name: "Google Ads",
    desc: "The intent is already there. You see the search, the click and the sale.",
  },
  {
    name: "YouTube Reviews",
    desc: "Placed with creators, tracked on links. Third-party proof you can still count.",
  },
];

const CHANNELS_OUT = [
  {
    name: "Billboards",
    desc: "No way to tie a rupee spent to a rupee that came back.",
  },
  {
    name: "TV ads",
    desc: "Large minimums, and an answer that arrives a quarter late.",
  },
];

// how the casting call was made, as four steps and then the two things a
// known face actually buys you
const CASTING = [
  { n: "01", title: "A known\nface", desc: "The only thing that fixes trust fast." },
  { n: "02", title: "Budget\ncapped", desc: "Before any name is discussed." },
  { n: "03", title: "Audience\nsurveyed", desc: "A shortlist, measured." },
  { n: "04", title: "Sumeet\nVyas", desc: "Survey-picked, not guessed." },
];

const CASTING_WHY = [
  {
    n: "01",
    tag: "Credibility",
    desc: "A known person lends the brand belief it has not earned yet.",
  },
  {
    n: "02",
    tag: "Decent attention",
    desc: "A recognisable face buys the first three seconds.",
  },
];

const FOUNDER_POINTS = [
  {
    n: "01",
    tag: "It cannot be copied",
    desc: "A hired face is available to anyone with a budget. The person who built the product is not. It made the ads unmistakably ours.",
  },
  {
    n: "02",
    tag: "It puts someone on the hook",
    desc: "Putting your own face on a claim means you carry the consequence of it being wrong. Buyers read that, even if they never say it.",
  },
  {
    n: "03",
    tag: "People back the underdog",
    desc: "Building in public reads as confidence. For a four-month-old brand, a founder on camera is the cheapest version of it.",
  },
];

// the ten performance films — five across, the last one standing alone
// underneath at full size
const PERF_ADS = [
  { src: "/casestudy%20images/casestudy-helium/ad-1.png", alt: "Hi Bata Delta Hai, India" },
  { src: "/casestudy%20images/casestudy-helium/ad-2.png", alt: "Ab IITians ne banaya hai" },
  { src: "/casestudy%20images/casestudy-helium/ad-3.png", alt: "Ashish Sharma and Aman Munka" },
  { src: "/casestudy%20images/casestudy-helium/ad-4.png", alt: "Up to 10 years warranty on compressor" },
  { src: "/casestudy%20images/casestudy-helium/ad-5.png", alt: "The founder interview cut" },
];

const PERF_AD_HERO = {
  src: "/casestudy%20images/casestudy-helium/ad-6.png",
  alt: "Agar — the closing performance film",
};

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
    desc: "We picked the winning message on the test results.",
  },
  {
    n: "04",
    title: "Top 5\ncommunications",
    desc: "That actually landed.",
  },
];




export default function HeliumCaseStudy() {
  return (
    <>
    <main className="csp">
      <header className="hx-bar hx-bar--page">
        <SiteNav logoHref="/" />
      </header>
      <div className="hx-bar-gap" aria-hidden="true" />

      <CspSectionNav sections={SECTIONS} darkSectionIds={["csp-sec-focus", "csp-sec-films"]} />

      <div className="csp-in" id="csp-sec-hero">
        <div className="csp-hl-head">
          <div>
            <h1 className="csp-hl-h">Helium Smart Air</h1>
            <p className="csp-hl-kicker">Case Study</p>
          </div>
          <p className="csp-hl-note">
            A 0.8 ton AC at &#8377;16,999, sold online, in a category that has not changed in
            thirty years.
          </p>
        </div>

        <div className="csp-hl-banner">
          <img
            src="/casestudy%20images/casestudy-helium/img-hero.png"
            alt="Helium Smart Air on an iceberg"
          />
        </div>

        <div className="csp-hl-meta">
          <span>Helium Smart Air Case Study</span>
          <span>90 Days</span>
        </div>
      </div>

      <div className="csp-in">
        <section className="csp-hl-results" id="csp-sec-results">
          <div className="csp-hl-eyebrow">
            <span className="csp-hl-eyebrowDot" aria-hidden="true" />
            <b>01</b>
            Helium Smart Air Case Study
          </div>
          <h2 className="csp-hl-rh">What happened in just 90 days?</h2>
          <p className="csp-hl-rsub">
            A brand that did not exist in March. These are the numbers it was doing by the end of
            the season.
          </p>

          <div className="csp-hl-stats">
            {RESULTS.map((r) => (
              <div className={`csp-hl-stat${r.hi ? " hi" : ""}`} key={r.val}>
                <b>{r.val}</b>
                <span>{r.label}</span>
              </div>
            ))}
          </div>
        </section>
      </div>

      <div className="csp-in">
        <section className="csp-ps" id="csp-sec-selling">
          <div className="csp-hl-eyebrow">
            <span className="csp-hl-eyebrowDot" aria-hidden="true" />
            <b>02</b>
            Helium Smart Air Case Study
          </div>
          <h2 className="csp-hl-rh">What was Helium actually selling?</h2>
          <p className="csp-hl-rsub">
            A 0.8 ton AC at &#8377;16,999, sold online, in a category that has not changed in
            thirty years.
          </p>

          <div className="csp-psCards">
            {FOUR_PS.map((p) => (
              <div className="csp-psCard" key={p.tag}>
                <span className="csp-psTag">{p.tag}</span>
                <b className="csp-psVal">{p.val}</b>
                <p className="csp-psDesc">{p.desc}</p>
              </div>
            ))}
          </div>

          <div className="csp-psBanner">
            <span className="csp-psTag">Promotion</span>
            <p>
              Three of the four Ps were already locked. The whole brand had to be won on the
              fourth.
            </p>
          </div>
        </section>
      </div>

      <div className="csp-in">
        <section className="csp-chal" id="csp-sec-challenge">
          <div className="csp-hl-eyebrow">
            <span className="csp-hl-eyebrowDot" aria-hidden="true" />
            <b>03</b>
            Helium Smart Air Case Study
          </div>
          <h2 className="csp-hl-rh">Why was it a challenge?</h2>

          <ol className="csp-chalList">
            {CHALLENGES.map((c, i) => (
              <li className="csp-chalRow" key={c}>
                <span className="csp-chalNum">{`0${i + 1}`}</span>
                <p className="csp-chalText">{c}</p>
              </li>
            ))}
          </ol>
        </section>
      </div>

      <div className="csp-in">
        <section className="csp-belief" id="csp-sec-belief">
          <div className="csp-hl-eyebrow">
            <span className="csp-hl-eyebrowDot" aria-hidden="true" />
            <b>04</b>
            Helium Smart Air Case Study
          </div>
          <h2 className="csp-hl-rh">But why did no one believe in it?</h2>

          <div className="csp-objList">
            {OBJECTIONS.map((o) => (
              <div className="csp-objRow csp-objRow--why" key={o.claim}>
                <p className="csp-objClaim">{o.claim}</p>
                <p className="csp-objAnswer">{o.why}</p>
              </div>
            ))}
          </div>

          <p className="csp-beliefAsk">So how do you even position it?</p>
        </section>
      </div>

      <div className="csp-in">
        <section className="csp-flip" id="csp-sec-flip">
          <div className="csp-hl-eyebrow">
            <span className="csp-hl-eyebrowDot" aria-hidden="true" />
            <b>05</b>
            Helium Smart Air Case Study
          </div>
          <h2 className="csp-hl-rh">So we flipped the narrative.</h2>

          <div className="csp-objList">
            {OBJECTIONS.map((o) => (
              <div className="csp-objRow csp-objRow--flip" key={o.claim}>
                <p className="csp-objClaim">{o.claim}</p>
                <p className="csp-objAnswer">
                  <mark className="csp-objMark">{o.flip}</mark>
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>

      <div className="csp-in">
        <section className="csp-brief" id="csp-sec-brief">
          <div className="csp-brief-head">
            <div>
              <div className="csp-hl-eyebrow">
                <span className="csp-hl-eyebrowDot" aria-hidden="true" />
                <b>06</b>
                Helium Smart Air Case Study
              </div>
              <h2 className="csp-hl-rh">The Brief</h2>
            </div>
            <p className="csp-brief-copy">
              Helium Air came to us with a 0.8 ton AC priced at &#8377;16,999 in a highly
              competitive and established category. They had raised $2M in seed funding. The
              challenge was to make the brand feel aspirational and credible without competing on
              discounts or low pricing, while scaling revenue through the peak summer season.
            </p>
          </div>

          <div className="csp-briefPoints">
            {BRIEF_POINTS.map((b) => (
              <div className="csp-briefPoint" key={b.n}>
                <span className="csp-briefNum">{b.n}</span>
                <span className="csp-briefTag">{b.tag}</span>
                <p className="csp-briefDesc">{b.desc}</p>
              </div>
            ))}
          </div>

          <p className="csp-briefClock">
            And the clock: <b>90 days.</b> An Indian AC brand earns its entire year between April
            and July.
          </p>
        </section>
      </div>

      <div className="csp-in">
        <section className="csp-buy" id="csp-sec-buy">
          <div className="csp-hl-eyebrow">
            <span className="csp-hl-eyebrowDot" aria-hidden="true" />
            <b>07</b>
            Helium Smart Air Case Study
          </div>
          <h2 className="csp-hl-rh">How someone actually buys an AC.</h2>
          <p className="csp-hl-rsub">
            Nobody decides in one sitting. Five separate moments, spread over days, mostly on a
            phone.
          </p>

          <ol className="csp-buySteps">
            {BUY_STEPS.map((s, i) => (
              <li className={`csp-buyStep${s.hi ? " hi" : ""}`} key={s.stage}>
                <span className="csp-buyStage">{s.stage}</span>
                <span className="csp-buyDot">{i + 1}</span>
                <h3 className="csp-buyTitle">{s.title}</h3>
                <p className="csp-buyDesc">{s.desc}</p>
                <p className="csp-buyQuote">{s.quote}</p>
              </li>
            ))}
          </ol>

          <p className="csp-buyNote">You need to be present everywhere the customer is.</p>
        </section>
      </div>

      <div className="csp-in">
        <section className="csp-under" id="csp-sec-under">
          <div className="csp-underChip">
            Helium Smart Air Case Study
            <Mark className="csp-underMark" />
          </div>

          <div className="csp-under-head">
            <h2 className="csp-under-h">
              Nobody roots for the giant, so you
              <br />
              become the underdog.
            </h2>
            <p className="csp-under-copy">
              The category was decided long before Helium existed. So we did not enter it. We
              positioned against it.
            </p>
          </div>

          <p className="csp-underLabel">The market was already captured</p>
          <div className="csp-underGiants">
            {INCUMBENTS.map((b) => (
              <span className="csp-underGiant" key={b}>
                {b}
              </span>
            ))}
            <span className="csp-underGiantsNote">and thirty years of being the default answer.</span>
          </div>

          <div className="csp-underMoves">
            {UNDERDOG_MOVES.map((m) => (
              <div className="csp-underMove" key={m.n}>
                <span className="csp-underNum">{m.n}</span>
                <span className="csp-underMoveH">{m.title}</span>
                <p className="csp-underMoveDesc">{m.desc}</p>
              </div>
            ))}
          </div>

          <p className="csp-underLabel csp-underLabel--muted">Indian brands built on exactly this</p>
          <div className="csp-underBrands">
            {UNDERDOG_BRANDS.map((b) => (
              <div className="csp-underBrand" key={b.name}>
                <h3>{b.name}</h3>
                <span>{b.vs}</span>
                <p>{b.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* the stepped black band — the notch on each side is cut with a
            clip-path, inside the same content column as the cards above */}
        <div className="csp-underBand">
          <p>
            &ldquo;Don&rsquo;t pay for <em>Marketing</em>. Pay for <i>Cooling</i>.&rdquo;
          </p>
        </div>
      </div>

      <div className="csp-in">
        <section className="csp-msg" id="csp-sec-msg">
          <div className="csp-underChip">
            Helium Smart Air Case Study
            <Mark className="csp-underMark" />
          </div>

          <div className="csp-under-head">
            <h2 className="csp-under-h">
              How do you communicate
              <br />
              the positioning?
            </h2>
            <p className="csp-under-copy">
              None of the five were features. Each one named a habit of the category and put Helium
              on the other side of it.
            </p>
          </div>

          <div className="csp-msgTable">
            <div className="csp-msgHead">
              <span className="csp-msgCol">The message</span>
              <span className="csp-msgCol">What the category does</span>
              <span className="csp-msgCol csp-msgCol--hi">Where Helium stood instead</span>
            </div>

            {MESSAGES.map((m) => (
              <div className="csp-msgRow" key={m.n}>
                <p className="csp-msgName">
                  <span className="csp-msgNum">{m.n}</span>
                  {m.title}
                </p>
                <p className="csp-msgCat">{m.category}</p>
                <p className="csp-msgHelium">{m.helium}</p>
              </div>
            ))}
          </div>

          <p className="csp-buyNote">
            Five messages. Five habits of the category, each one turned into a reason to switch.
          </p>
        </section>
      </div>


      <div className="csp-in">
        <section className="csp-hooks" id="csp-sec-hooks">
          <div className="csp-underChip">
            Helium Smart Air Case Study
            <Mark className="csp-underMark" />
          </div>

          <h2 className="csp-hooks-h">
            We built the message before
            <br />
            building the ad.
          </h2>
          <p className="csp-hooks-copy">A smaller AC isn&apos;t a cheaper AC. It&apos;s a smarter one.</p>

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
        <section className="csp-chan" id="csp-sec-chan">
          <div className="csp-underChip">
            Helium Smart Air Case Study
            <Mark className="csp-underMark" />
          </div>

          <div className="csp-under-head">
            <h2 className="csp-under-h">How do you pick a channel?</h2>
            <p className="csp-under-copy">
              One rule. If we could not measure what came back, we did not buy it.
            </p>
          </div>

          <div className="csp-chanCols">
            <div>
              <p className="csp-underLabel csp-underLabel--muted">What we bought</p>
              {CHANNELS_IN.map((c) => (
                <div className="csp-chanCard" key={c.name}>
                  <h3>{c.name}</h3>
                  <p>{c.desc}</p>
                </div>
              ))}
            </div>

            <div>
              <p className="csp-underLabel csp-underLabel--muted">What we did not</p>
              {CHANNELS_OUT.map((c) => (
                <div className="csp-chanCard csp-chanCard--out" key={c.name}>
                  <h3>{c.name}</h3>
                  <p>{c.desc}</p>
                </div>
              ))}

              <div className="csp-chanNote">
                <span>Not a judgement on the channel</span>
                <p>
                  Both work at scale, for brands that can afford to wait. We had ninety days and
                  one summer.
                </p>
              </div>
            </div>
          </div>

          <p className="csp-buyNote">
            An early-stage startup cannot wait months to find out whether something worked.
          </p>
        </section>
      </div>

      <div className="csp-in">
        <section className="csp-cast" id="csp-sec-cast">
          <div className="csp-hl-eyebrow">
            <span className="csp-hl-eyebrowDot" aria-hidden="true" />
            <b>08</b>
            Helium Smart Air Case Study
          </div>
          <h2 className="csp-hl-rh">We had a message. We still had no trust.</h2>
          <p className="csp-castSub">A stranger with a good line is still a stranger.</p>

          <div className="csp-hooks-row csp-castRow">
            {CASTING.map((c) => (
              <div className="csp-hookCard" key={c.n}>
                <span className="csp-hookNum">{c.n}</span>
                <h3 className="csp-hookTitle">{c.title}</h3>
                <p className="csp-hookDesc">{c.desc}</p>
              </div>
            ))}
          </div>

          <div className="csp-castWhy">
            {CASTING_WHY.map((w) => (
              <div className="csp-castPoint" key={w.n}>
                <span className="csp-underNum">{w.n}</span>
                <span className="csp-underMoveH">{w.tag}</span>
                <p className="csp-castPointDesc">{w.desc}</p>
              </div>
            ))}
          </div>

          <div className="csp-castQuote">
            <img
              src="/casestudy%20images/casestudy-helium/casting-still.png"
              alt="A superstar endorsement, the option Helium did not take"
            />
            <p>
              &lsquo;Bhai would bring attention, but he would also have taken all our
              funding&rsquo;
            </p>
          </div>

          <p className="csp-buyNote">
            Casting a known face is a data decision. <em>Not just a taste decision.</em>
          </p>
        </section>
      </div>

      <div className="csp-in">
        <section className="csp-focus" id="csp-sec-focus">
          <div className="csp-hl-eyebrow">
            <span className="csp-hl-eyebrowDot" aria-hidden="true" />
            <b>09</b>
            Helium Smart Air Case Study
          </div>

          <h2 className="csp-focus-h">
            The <em>ad</em> can be forgettable.
            <br />
            The face can be forgettable.
            <br />
            The <i>brand</i> cannot.
          </h2>

          <p className="csp-focus-copy">
            Traditional advertising sells the film. People remember the face, the joke, the line
            &mdash; and forget whose product it was. We built every frame the other way round: the
            only thing you carry out of it is Helium.
          </p>

          <div className="csp-focusLine">
            <span>Campaign &rsaquo; Positioning</span>
            <p>&ldquo;Don&rsquo;t pay for marketing. Pay for cooling.&rdquo;</p>
          </div>
        </section>
      </div>

      <div className="csp-in">
        <section className="csp-founder" id="csp-sec-founder">
          <div className="csp-hl-eyebrow">
            <span className="csp-hl-eyebrowDot" aria-hidden="true" />
            <b>10</b>
            Helium Smart Air Case Study
          </div>
          <h2 className="csp-hl-rh">We put the founder up front.</h2>
          <p className="csp-castSub">Nobody else can rent your founder.</p>

          <div className="csp-founderRow">
            <div className="csp-founderCard">
              <h3>
                The Founder
                <br />
                on Camera
              </h3>
              <p>No fee, no contract, and nobody can outbid you for him.</p>
            </div>

            {FOUNDER_POINTS.map((f) => (
              <div className="csp-founderPoint" key={f.n}>
                <span className="csp-underNum">{f.n}</span>
                <span className="csp-underMoveH">{f.tag}</span>
                <p className="csp-castPointDesc">{f.desc}</p>
              </div>
            ))}
          </div>

          <p className="csp-buyNote">
            A celebrity buys attention and trust. <em>A founder buys belief.</em>
          </p>
        </section>
      </div>

      {/* the five moments again, this time with the story's own position
          marked: everything past consideration is still ahead */}
      <div className="csp-in">
        <section className="csp-recap" id="csp-sec-recap">
          <div className="csp-hl-eyebrow">
            <span className="csp-hl-eyebrowDot" aria-hidden="true" />
            <b>11</b>
            Helium Smart Air Case Study
          </div>

          <ol className="csp-buySteps csp-recapSteps">
            {BUY_STEPS.map((s, i) => (
              <li
                className={`csp-buyStep${s.hi ? " hi" : ""}${i > 1 ? " ahead" : ""}${
                  i === 2 ? " here" : ""
                }`}
                key={s.stage}
              >
                {i === 2 && <span className="csp-recapHere">We&rsquo;re here</span>}
                <span className="csp-buyStage">{s.stage}</span>
                <span className="csp-buyDot">{i + 1}</span>
                <h3 className="csp-buyTitle">{s.title}</h3>
                <p className="csp-buyDesc">{s.desc}</p>
                <p className="csp-buyQuote">{s.quote}</p>
              </li>
            ))}
          </ol>
        </section>
      </div>

      <div className="csp-in">
        <section className="csp-ads" id="csp-sec-ads">
          <div className="csp-hl-eyebrow">
            <span className="csp-hl-eyebrowDot" aria-hidden="true" />
            <b>12</b>
            Helium Smart Air Case Study
          </div>
          <h2 className="csp-hl-rh">
            Ten ads about nothing but
            <br />
            features and value
          </h2>

          <div className="csp-adsRow">
            {PERF_ADS.map((a) => (
              <figure className="csp-adCard" key={a.src}>
                <img src={a.src} alt={a.alt} />
                <span className="csp-adPlay" aria-hidden="true" />
              </figure>
            ))}
          </div>

          <figure className="csp-adCard csp-adCard--hero">
            <img src={PERF_AD_HERO.src} alt={PERF_AD_HERO.alt} />
            <span className="csp-adPlay" aria-hidden="true" />
          </figure>
        </section>
      </div>

      <div className="csp-in">
        <section className="csp-films" id="csp-sec-films">
          <div className="csp-films-head">
            <div className="csp-eyebrow2">
              <span className="csp-eyebrow2-dot" aria-hidden="true" />
              <b>13</b>
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
                <b>14</b>
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
                <b>15</b>
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
          <div className="csp-hl-eyebrow">
            <span className="csp-hl-eyebrowDot" aria-hidden="true" />
            <b>16</b>
            Helium Smart Air Case Study
          </div>
          <h2 className="csp-hl-rh">One last leg of convincing was left.</h2>

          <div className="csp-reviews-body">
            <div className="csp-reviews-copy">
              <p className="csp-reviews-lead">
                We seeded &lsquo;organic&rsquo; reviews on YouTube before we even hit the market.
              </p>
              <p>
                In April, a buyer had nothing to go on. No ratings to read. Nobody in the building
                who owned one. Nothing to search.
              </p>
              <p>
                So we placed the product with two channels this audience already trusts, for
                hands-on reviews in their own words. Outside our control &mdash; which is exactly
                why it works.
              </p>

              <div className="csp-reviewStat">
                <b>186k+</b>
                <span>
                  views, all high-intent. This is a review, not content &mdash; views climbed as
                  sales climbed, which is the correlation.
                </span>
              </div>

              <p className="csp-buyNote">
                We built the story. <em>Someone else made it believable.</em>
              </p>
            </div>

            <figure className="csp-reviewShot">
              <img
                src="/casestudy%20images/casestudy-helium/helium%20thumbnail.png"
                alt="Gadget Masala's YouTube review of the Helium Air 0.8 ton smart AC"
              />
              <figcaption>
                <b>Gadget Masala</b>
                <span>YouTube Creator</span>
              </figcaption>
            </figure>
          </div>
        </section>
      </div>

      <div className="csp-in">
        <section className="csp-social" id="csp-sec-social">
          <div className="csp-aoc-head csp-headRight">
            <div>
              <div className="csp-eyebrow2">
                <span className="csp-eyebrow2-dot" aria-hidden="true" />
                <b>17</b>
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
