import Mark from "./Mark";
import Reveal from "./Reveal";
import { CASE_STUDIES } from "../data/caseStudies";

// the four story cards across the top — the mock pairs each person shot with
// its brand lockup, two stories repeated to fill the row
const DEEP_DIVES = [
  {
    title: "Vyapar Helps 1.5 Cr+ Businesses Manage Their Finances Smarter",
    img: "/deep drives/Group 1686553688.png",
    logo: "/testimonial-logos/casestudy-logo-6.png",
    logoAlt: "Chhota Stock",
    kind: "vy",
  },
  {
    title: "PlatinumRx Helps Customers Save Up To 60% On Medicines",
    img: "/deep drives/Group 1686553689.png",
    logo: "/deep drives/platinumrx-logo.png",
    logoAlt: "PlatinumRx",
    kind: "px",
    href: "/case-study/platinumrx",
  },
  {
    title: "Vyapar Helps 1.5 Cr+ Businesses Manage Their Finances Smarter",
    img: "/deep drives/Group 1686553688.png",
    logo: "/testimonial-logos/casestudy-logo-6.png",
    logoAlt: "Chhota Stock",
    kind: "vy",
  },
  {
    title: "PlatinumRx Helps Customers Save Up To 60% On Medicines",
    img: "/deep drives/Group 1686553689.png",
    logo: "/deep drives/platinumrx-logo.png",
    logoAlt: "PlatinumRx",
    kind: "px",
    href: "/case-study/platinumrx",
  },
];

// each copy of a loop repeats its list this many times, so one copy is
// always wider than even a very wide screen and the loop never shows a gap
// before it wraps
const REPEAT = 3;
const CARDS = Array.from({ length: REPEAT }, () => DEEP_DIVES).flat();
const LOGOS = Array.from({ length: REPEAT }, () => CASE_STUDIES).flat();

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

      {/* the cards drift sideways on a loop like the client strip below,
          pausing while a card is hovered — two copies back to back so the
          seam never shows */}
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
                    <img className="cs-logo" src={d.logo} alt={repeat ? "" : d.logoAlt} loading="lazy" />
                    <img className="cs-person" src={d.img} alt="" loading="lazy" />
                  </Tag>
                );
              })}
            </div>
          ))}
        </div>
      </div>

      {/* the client strip drifts sideways on a loop — two copies back to back
          so the seam never shows */}
      <div className="cs-strip">
        <div className="cs-track">
          {[0, 1].map((copy) => (
            <div className="cs-set" key={copy} aria-hidden={copy === 1 || undefined}>
              {LOGOS.map((c, i) => (
                <img
                  key={i}
                  src={c.logo}
                  alt={copy === 0 && i < CASE_STUDIES.length ? c.logoAlt : ""}
                  loading="lazy"
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
