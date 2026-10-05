import Mark from "./Mark";
import Reveal from "./Reveal";

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
  },
  {
    kind: "ma",
    title: "Masai\u2019s Performance marketing scaled by 20x in 10 months.",
    img: "/deep drives/masai.png",
    logo: "/partnership/MASAI.svg",
    logoAlt: "Masai",
    logoFx: "none", // already a white mark
  },
  {
    kind: "cu",
    title: "CuriousJr observed a dip of 23% in CAC with UGC creatives",
    img: "/deep drives/curious js.png",
    logo: "/testimonial-logos/casestudy-logo-1.png",
    logoAlt: "CuriousJr",
    logoFx: "dark",
  },
  {
    kind: "ap",
    title: "Apnamart is running the marketing effort without an inhouse marketing team",
    img: "/deep drives/apnamart.png",
    logo: "/partnership/apnamart.svg",
    logoAlt: "Apnamart",
    logoFx: "none",
  },
  {
    kind: "vy",
    title: "Vyapar built it\u2019s category authority through it\u2019s businessmen first brand narratives",
    img: "/deep drives/vyapar.png",
    logo: "/partnership/vyapar.svg",
    logoAlt: "Vyapar",
    logoFx: "none",
  },
  {
    kind: "gs",
    title: "Goodscore reduced creative costs by 75% with celebrity performance assets",
    img: "/deep drives/goodscore.png",
    logo: "/partnership/goodscore.svg",
    logoAlt: "Goodscore",
  },
  {
    kind: "se",
    title: "Seekho achieves 30% dip in CAC with celebrity performance Marketing",
    img: "/deep drives/seekho.png",
    logo: "/partnership/seekho.svg",
    logoAlt: "Seekho",
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
const CARDS = Array.from({ length: REPEAT }, () => DEEP_DIVES).flat();

export default function CaseStudies() {
  return (
    <section className="cs" id="deepdive">
      <Reveal className="cs-head">
        <div className="cs-tagwrap">
          <span className="cs-tag">Case study</span>
          <Mark />
        </div>
        <h2 className="cs-h">Deep Dives</h2>
        <p className="cs-sub">The latest stories, ideas, and shifts worth paying attention to.</p>
      </Reveal>

      {/* the cards drift sideways on a loop, pausing while one is hovered —
          two copies back to back so the seam never shows */}
      <div className="cs-row">
        <div className="cs-rtrack">
          {[0, 1].map((copy) => (
            <div className="cs-rset" key={copy} aria-hidden={copy === 1 || undefined}>
              {CARDS.map((d, i) => {
                const Tag = d.href ? "a" : "article";
                // only the first pass of the first copy is announced and
                // tabbable; the repeats are there for the loop
                const repeat = copy === 1 || i >= DEEP_DIVES.length;
                const link = d.href ? { href: d.href, tabIndex: repeat ? -1 : undefined } : {};
                return (
                  <Tag key={i} className={`cs-card cs-card-${d.kind}`} {...link}>
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
              })}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
