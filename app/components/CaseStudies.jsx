import TagMark from "./TagMark";
import Reveal from "./Reveal";
import CsRow from "./CsRow";

// the four story cards. Each image is a cut-out that sits on the card's
// coloured panel; the brand runs along the foot, as a white logo or plain text.
const DEEP_DIVES = [
  {
    kind: "he",
    title: "Helium sold 500 ACs a day within a month of launch.",
    img: "/deep drives/helium.png",
    logo: "/partnership/helium.svg",
    logoAlt: "Helium",
    href: "/case-study/helium",
  },
  {
    kind: "px",
    title: "PlatinumRx leveraged Celebrity and UGC assets to increase reach 3x in 2 months",
    img: "/deep drives/platinumrx.png",
    logo: "/partnership/platinumRx.svg",
    logoAlt: "PlatinumRx",
    href: "/case-study/platinumrx",
  },
  {
    kind: "st",
    title: "0 to 300k paid users in 80 days",
    img: "/deep drives/stealth app.png",
    name: "Stealth App",
    href: "/case-study/stealth-app",
  },
  {
    kind: "ma",
    title: "Masai\u2019s Performance marketing scaled by 20x in 10 months.",
    img: "/deep drives/masai.png",
    logo: "/partnership/MASAI.svg",
    logoAlt: "Masai",
    logoFx: "none", // already a white mark
    href: "/case-study/masai",
  },
  {
    kind: "cu",
    title: "CuriousJr observed a dip of 23% in CAC with UGC creatives",
    img: "/deep drives/curious js.png",
    logo: "/deep%20drives/curious%20jr.png",
    logoAlt: "CuriousJr",
    logoFx: "none", // the supplied two-tone logo, shown as is
    href: "/case-study/curiousjr",
  },
  {
    kind: "ap",
    title: "ApnaMart builds absolute category authority in staples category",
    img: "/deep drives/apnamart deep drive.png",
    logo: "/partnership/apnamart.svg",
    logoAlt: "ApnaMart",
    logoFx: "none",
    href: "/case-study/apnamart",
  },
  {
    kind: "vy",
    title: "Vyapar built its category authority through its businessman-first brand narratives",
    img: "/deep drives/vyapar.png",
    logo: "/partnership/vyapar.svg",
    logoAlt: "Vyapar",
    logoFx: "none",
    href: "/case-study/vyapar",
  },
  {
    kind: "gs",
    title: "Goodscore reduced creative costs by 75% with celebrity performance assets",
    img: "/deep drives/goodscore.png",
    logo: "/partnership/goodscore.svg",
    logoAlt: "Goodscore",
    href: "/case-study/goodscore",
  },
  {
    kind: "se",
    title: "Seekho achieves 30% dip in CAC with celebrity performance marketing",
    img: "/deep drives/seekho.png",
    logo: "/partnership/seekho.svg",
    logoAlt: "Seekho",
    href: "/case-study/seekho",
    logoFx: "none",
  },
  {
    kind: "ng",
    title: "NeuralGarage is cracking global marketing at Indian costs",
    img: "/deep drives/neuralgarage.png",
    logo: "/partnership/neuralgarage.svg",
    logoAlt: "NeuralGarage",
  },
];

// each copy of the loop repeats the four cards this many times, so one copy
// is always wider than even a very wide screen and the loop never shows a
// gap before it wraps
const REPEAT = 2;

// one story card: the title on top, the cut-out, the brand along the foot
function DiveCard({ d, repeat = false }) {
  const Tag = d.href ? "a" : "article";
  const link = d.href ? { href: d.href, tabIndex: repeat ? -1 : undefined } : {};
  return (
    <Tag className={`cs-card cs-card-${d.kind}`} {...link}>
      <h3 className="cs-title">{d.title}</h3>
      <img className="cs-person" src={d.img} alt="" loading="lazy" />
      {d.logo ? (
        <img
          className={`cs-logo${d.logoFx === "none" ? "" : d.logoFx === "dark" ? " cs-logo--dark" : " cs-logo--white"}`}
          src={d.logo}
          alt={repeat ? "" : d.logoAlt}
          loading="lazy"
        />
      ) : (
        <span className="cs-name">{d.name}</span>
      )}
    </Tag>
  );
}

// three of the stories, a different three on each page: the list (minus the
// page's own story) is started at a point worked out from the page's address
const pickThree = (list, seed = "") => {
  let h = 0;
  for (const c of seed) h = (h * 31 + c.charCodeAt(0)) % 9973;
  const start = h % list.length;
  return [0, 1, 2].map((i) => list[(start + i) % list.length]);
};

/** The Deep Dives cards. On the homepage they loop sideways; `embed` (a case
 *  study page) shows three still cards instead. `exclude` is the href of a
 *  case study to leave out: a page doesn't offer itself. */
export function DeepDiveCards({ exclude, embed = false }) {
  const dives = exclude ? DEEP_DIVES.filter((d) => d.href !== exclude) : DEEP_DIVES;

  if (embed) {
    return (
      <div className="cs-three">
        {pickThree(dives, exclude).map((d) => (
          <DiveCard key={d.kind} d={d} />
        ))}
      </div>
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
    <section className="cs" id="deepdive">
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
