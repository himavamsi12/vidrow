import TagMark from "./TagMark";
import Reveal from "./Reveal";
import CsRow from "./CsRow";
import CsThree from "./CsThree";

// the four story cards. Each image is a cut-out that sits on the card's
// coloured panel; the brand sits at the top, as a white logo or plain text,
// with the title under it.
const DEEP_DIVES = [
  {
    kind: "he",
    title: "Helium sold 500 ACs a day within a month of launch",
    img: "/deepdrive-new/image 294.webp",
    logo: "/deepdrive-new/logos/helium.webp",
    logoAlt: "Helium",
    logoFx: "none",
    href: "/case-study/helium",
  },
  {
    kind: "px",
    title: "PlatinumRx leveraged celebrity and UGC assets to increase reach 3x in 3 months",
    img: "/deepdrive-new/2.webp?v=2",
    logo: "/deepdrive-new/logos/platinumrx.webp",
    logoAlt: "PlatinumRx",
    logoFx: "none",
    href: "/case-study/platinumrx",
  },
  {
    kind: "st",
    title: "0 to 300k paid users in 80 days",
    img: "/deepdrive-new/3.webp",
    name: "Stealth App",
    href: "/case-study/stealth-app",
  },
  {
    kind: "ma",
    title: "Masai\u2019s performance marketing scaled by 20x in 10 months",
    img: "/deepdrive-new/4.webp",
    logo: "/deepdrive-new/masai-logo.webp",
    logoAlt: "Masai",
    logoFx: "none",
    href: "/case-study/masai",
  },
  {
    kind: "cu",
    title: "CuriousJr observed a dip of 25% in CAC with UGC creatives",
    img: "/deepdrive-new/5.webp",
    logo: "/deep%20drives/curious%20jr.webp",
    logoAlt: "CuriousJr",
    logoFx: "none", // the supplied two-tone logo, shown as is
    href: "/case-study/curiousjr",
  },
  {
    kind: "ap",
    title: "ApnaMart builds absolute category authority in staples category",
    img: "/deep drives/apnamart deep drive.webp",
    logo: "/partnership/apnamart.svg",
    logoAlt: "ApnaMart",
    logoFx: "none", // the wordmark's own white and violet; a white filter fills its letters in
    href: "/case-study/apnamart",
  },
  {
    kind: "vy",
    title: "Vyapar built its category authority through its businessman-first brand narratives",
    img: "/deepdrive-new/7.webp",
    logo: "/deepdrive-new/logos/vyapar.webp",
    logoAlt: "Vyapar",
    logoFx: "none",
    href: "/case-study/vyapar",
  },
  {
    kind: "gs",
    title: "GoodScore reduced creative costs by 75% with celebrity performance assets",
    img: "/deepdrive-new/8.webp",
    logo: "/partnership/goodscore.svg",
    logoAlt: "GoodScore",
    href: "/case-study/goodscore",
  },
  {
    kind: "ao",
    title: "ApnaMart lifted online delivery adoption 4.2x with offline and online marketing",
    img: "/deepdrive-new/6.webp",
    logo: "/partnership/apnamart.svg",
    logoAlt: "ApnaMart",
    logoFx: "none", // the wordmark's own white and violet; a white filter fills its letters in
    href: "/case-study/apnamart-online-offline",
  },
  {
    kind: "se",
    title: "Seekho achieves 23% dip in CAC with celebrity performance marketing",
    img: "/deepdrive-new/9.webp",
    logo: "/deepdrive-new/seekho-logo.webp",
    logoAlt: "Seekho",
    href: "/case-study/seekho",
    logoFx: "none",
  },
  {
    kind: "ng",
    title: "NeuralGarage is cracking global marketing at Indian costs",
    img: "/deepdrive-new/10.webp",
    logo: "/deepdrive-new/neuralgarage-logo.webp",
    logoAlt: "NeuralGarage",
    logoFx: "none",
    href: "/case-study/visual-dub",
  },
];

// each copy of the loop repeats the four cards this many times, so one copy
// is always wider than even a very wide screen and the loop never shows a
// gap before it wraps
const REPEAT = 2;

// one story card: the title on top, the cut-out, the brand along the foot
// every image has its alt text; a repeat (there for the sideways loop) is
// hidden from screen readers as a whole instead, so it isn't read twice
function DiveCard({ d, repeat = false }) {
  const Tag = d.href ? "a" : "article";
  const link = d.href ? { href: d.href, tabIndex: repeat ? -1 : undefined } : {};
  const brand = d.logoAlt || d.name;
  return (
    <Tag className={`cs-card cs-card-${d.kind}`} {...link} aria-hidden={repeat || undefined}>
      {d.logo ? (
        <img
          className={`cs-logo${d.logoFx === "none" ? "" : d.logoFx === "dark" ? " cs-logo--dark" : " cs-logo--white"}`}
          src={d.logo}
          alt={d.logoAlt}
          loading="lazy"
        />
      ) : (
        <span className="cs-name">{d.name}</span>
      )}
      <h3 className="cs-title">{d.title}</h3>
      <img className="cs-person" src={d.img} alt={`From the ${brand} case study`} loading="lazy" />
    </Tag>
  );
}

/** The Deep Dives cards. On the homepage they loop sideways; `embed` (the
 *  foot of a case study page) shows three still cards, a random three on
 *  every visit. `exclude` is the href of a case study to leave out: a page
 *  doesn't offer itself. */
export function DeepDiveCards({ exclude, embed = false }) {
  const dives = exclude ? DEEP_DIVES.filter((d) => d.href !== exclude) : DEEP_DIVES;

  if (embed) {
    return (
      <CsThree>
        {dives.map((d) => (
          <DiveCard key={d.kind} d={d} />
        ))}
      </CsThree>
    );
  }

  const cards = Array.from({ length: REPEAT }, () => dives).flat();
  return (
    <CsRow>
      <div className="cs-rtrack">
        {[0, 1].map((copy) => (
          <div className="cs-rset" key={copy} aria-hidden={copy === 1 || undefined}>
            {cards.map((d, i) => (
              // only the first pass of the first copy is announced and
              // tabbable; the repeats are there for the loop
              <DiveCard key={i} d={d} repeat={copy === 1 || i >= dives.length} />
            ))}
          </div>
        ))}
      </div>
    </CsRow>
  );
}

export default function CaseStudies() {
  return (
    <section className="cs" id="deepdive" data-nav-gap>
      <Reveal className="cs-head">
        <div className="cs-tagwrap">
          <span className="cs-tag">Case Study</span>
          <TagMark />
        </div>
        <h2 className="cs-h">Deep Dives</h2>
        <p className="cs-sub">The latest stories, ideas, and shifts worth paying attention to.</p>
      </Reveal>

      {/* the cards drift sideways on a loop, pausing while one is hovered —
          two copies back to back so the seam never shows */}
      <DeepDiveCards />
    </section>
  );
}
