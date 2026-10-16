import Footer from "../../components/Footer";
import SiteNav from "../../components/SiteNav";
import { DeepDiveCards } from "../../components/CaseStudies";
import CspSectionNav from "../../components/CspSectionNav";
import SeekhoFilms from "../../components/SeekhoFilms";
import { CAMPAIGNS } from "../../data/campaigns";

export const metadata = {
  title: "Masai - Case Study | Vidrow",
};

const SECTIONS = [
  { id: "csp-sec-hero", label: "Overview" },
  { id: "csp-sec-aoc", label: "The Audience" },
  { id: "csp-sec-mid", label: "Where It Landed" },
  { id: "csp-sec-how", label: "How We Did It" },
  { id: "csp-sec-celeb", label: "What We Won" },
  { id: "csp-sec-ads", label: "Ads" },
  { id: "csp-sec-more", label: "More Stories" },
];

// the first four films of the Masai campaign page (/campaign/masai_Ads)
const ADS = CAMPAIGNS.masai_Ads.frames.slice(0, 4);

const AOC = [
  {
    n: "01",
    title: "Window",
    head: "6 Months",
    desc: "First 3 months for testing and 3 months scaling.",
  },
  {
    n: "02",
    title: "Scope",
    head: "9 Different Courses",
    desc: "AI & ML, product management, analytics, MBA and more.",
  },
  {
    n: "03",
    title: "Reach",
    head: "3 Languages",
    desc: "Hindi-English, Tamil and Telugu.",
  },
  {
    n: "04",
    title: "Output",
    head: "~700 Ads made",
    desc: "Each shipped with multiple hooks into the account across the six months.",
  },
];

export default function PlatinumRxCaseStudy() {
  return (
    <>
    <main className="csp csp--masai">
      <header className="hx-bar hx-bar--page">
        <SiteNav logoHref="/" />
      </header>
      <div className="hx-bar-gap" aria-hidden="true" />

      <CspSectionNav sections={SECTIONS} />

      <div className="csp-in" id="csp-sec-hero">
        <div className="csp-head">
          <h1 className="csp-h">
            Masai reduced dependence on
            <br />
            Influencer marketing for scaling
          </h1>
          <p className="csp-note">
            Masai&apos;s performance came from influencer marketing on Instagram, Twitter and
            LinkedIn. It did not scale, and growth stagnated. The job: scale performance
            marketing with cost per booking under control, and creative costs low.
          </p>
        </div>

        <div className="csp-banner">
          <img
            src="/casestudy%20images/masai-hero.png"
            alt="Masai - India's fastest growing career school"
          />
          <span className="csp-bannerTag">
            <img src="/casestudy%20images/masai-lockup.png" alt="Vidrow x Masai" />
          </span>
        </div>

        <p className="csp-bannerCaption">
          <b>~700 creator led ads in a period of 6 months</b>{" "}
          <span style={{ fontSize: "0.8em" }}>
            each ad with different hook and communication unlocking different audience cohort
          </span>
        </p>

        <div className="csp-meta">
          <div className="csp-metaItem">
            <span className="csp-metaLabel">Client</span>
            <span className="csp-metaValue">Masai</span>
          </div>
          <div className="csp-metaItem">
            <span className="csp-metaLabel">Timeline</span>
            <span className="csp-metaValue">6 Months</span>
          </div>
          <div className="csp-metaItem">
            <span className="csp-metaLabel">Result</span>
            <span className="csp-metaValue">5x Scale, at same CAC</span>
          </div>
        </div>
      </div>

      <div className="csp-in">
        <section className="csp-aoc" id="csp-sec-aoc">
          <div className="csp-aoc-head">
            <div>
              <div className="csp-eyebrow2">
                <span className="csp-eyebrow2-dot" aria-hidden="true" />
                <b>01</b>
                <span className="csp-eyebrow2-sep">·</span>
                THE SETUP
              </div>
              <h2 className="csp-aoc-h">Creative Volume</h2>
            </div>
            <p className="csp-aoc-copy">
              Masai runs online tech courses. Nobody buys one off an ad, they book a paid slot
              for Masai&apos;s entrance test first, so every ad in this account is bought and
              judged on test bookings. Masai already ran a large Meta engine with creative
              arriving from several sources, and Meta funds whatever performs.
            </p>
          </div>

          <div className="csp-aoc-cols csp-aoc-cols--4">
            {AOC.map((item) => (
              <div className="csp-aoc-col" key={item.n}>
                <div className="csp-aoc-colHead">
                  <span className="csp-aoc-num">{item.n}</span>
                  <span className="csp-aoc-tag">{item.title}</span>
                </div>
                <h3 className="csp-aoc-title">{item.head}</h3>
                <p className="csp-aoc-desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </div>

      <div className="csp-in">
        <section className="csp-mid" id="csp-sec-mid">
          <div className="csp-mid-left">
            <div className="csp-eyebrow2">
              <span className="csp-eyebrow2-dot" aria-hidden="true" />
              <b>02</b>
              <span className="csp-eyebrow2-sep">·</span>
              THE GROWTH
            </div>
            <h2 className="csp-mid-h">
              Growth scaled 5x
              <br />
              in six months.
            </h2>
            <p className="csp-mid-copy">
              We partnered with Masai from Dec&apos;25. Since then we&apos;ve scaled Masai
              performance marketing engine to nearly five times while sustaining the CAC, and
              reducing the reliance on expensive influencer marketing.
            </p>
            <p className="csp-mid-copy">
              Creator led performance marketing helped open new audience cohorts for Masai along
              with predictability on CAC
            </p>
          </div>

          <div className="csp-mid-right">
            <div className="csp-statCol">
              <div className="csp-statGrid csp-statGrid--sm" style={{ "--rows": 1 }}>
                <span className="csp-statVal">1X</span>
                <span className="csp-cell" />
                <span className="csp-cell" />
              </div>
              <span className="csp-statLabel">Dec 2025</span>
            </div>
            <div className="csp-statCol">
              <div className="csp-statGrid csp-statGrid--lg" style={{ "--rows": 5 }}>
                <span className="csp-statVal">5X</span>
                <span className="csp-cell" />
                <span className="csp-cell" />
                <span className="csp-cell" />
                <span className="csp-cell" />
                <span className="csp-cell" />
                <span className="csp-cell" />
                <span className="csp-cell" />
                <span className="csp-cell" />
                <span className="csp-cell" />
                <span className="csp-cell" />
              </div>
              <span className="csp-statLabel">July 2026</span>
            </div>
          </div>
        </section>
      </div>

      <div className="csp-in">
        <section className="csp-flow" id="csp-sec-how">
          <div className="csp-flow-top">
            <div>
              <div className="csp-eyebrow2">
                <span className="csp-eyebrow2-dot" aria-hidden="true" />
                <b>03</b>
                <span className="csp-eyebrow2-sep">·</span>
                HOW WE DO IT
              </div>
              <h2 className="csp-flow-h">Our Creative Strategy</h2>
            </div>
            <p className="csp-flow-copy">
              Three sources feed the meta ads, the right creator carries it, and every
              concept ships with three different hooks as three separate ads. Meta decides which
              of them survive, and that answer sets the next batch.
            </p>
          </div>

          <div className="csp-flow-diagram">
            <div className="csp-flow-stack">
              <div className="csp-flow-box csp-flow-box--yellow">Instagram trends</div>
              <div className="csp-flow-box csp-flow-box--yellow">New concepts</div>
              <div className="csp-flow-box csp-flow-box--yellow" id="csp-flow-doubledown">
                Winner Double down
              </div>
            </div>

            <div className="csp-flow-connector">
              <svg viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
                <path d="M0,17 H50 V50 M0,50 H50 M0,83 H50 V50 M50,50 H100" />
              </svg>
              <span className="csp-flow-arrowhead" style={{ top: "50%" }} />
            </div>

            <div className="csp-flow-box csp-flow-box--violet">
              <h3>Right Creator</h3>
              <p>
                We keep the creators who convert and drop the ones who do not. Right face meant who
                would look as an edtech expert
              </p>
            </div>

            <div className="csp-flow-connector">
              <svg viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
                <path d="M0,50 H100" />
              </svg>
              <span className="csp-flow-arrowhead" style={{ top: "50%" }} />
            </div>

            <div className="csp-flow-box csp-flow-box--violet">
              <h3>Hook</h3>
              <p>Every concept goes out with three different hooks, each as its own ad.</p>
            </div>

            <div className="csp-flow-connector">
              <svg viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
                <path d="M0,50 H50 V17 H100 M50,50 V83 H100 M50,50 H0" />
              </svg>
              <span className="csp-flow-arrowhead" style={{ top: "17%" }} />
              <span className="csp-flow-arrowhead" style={{ top: "83%" }} />
            </div>

            <div className="csp-flow-outcomes">
              <div className="csp-flow-box csp-flow-box--yellow csp-flow-box--outcome">
                Did not work → Discard
              </div>
              <span className="csp-flow-metaLabel">
                Meta decides which ad is winning and which doesnt scale
              </span>
              <div className="csp-flow-box csp-flow-box--yellow csp-flow-box--outcome" id="csp-flow-worked">
                Worked → Double down
              </div>
            </div>
          </div>

          <div className="csp-flow-loop">
            <svg viewBox="0 0 1000 90" preserveAspectRatio="none" aria-hidden="true">
              <path d="M910,0 V70 H105 V0" />
            </svg>
            <span className="csp-flow-arrowhead csp-flow-arrowhead--up" style={{ left: "10.5%" }} />
            <span className="csp-flow-loopLabel">
              every result, win or loss, goes straight back into next week&apos;s batch
            </span>
          </div>

          <p className="csp-howNote">
            First 3 months went into deciding which are the winning communication angles across
            different courses and audiences. Next 3 months were spent in scaling it
          </p>
        </section>
      </div>

      <div className="csp-in">
        <section className="csp-out" id="csp-sec-celeb">
          <div className="csp-out-left">
            <div className="csp-eyebrow2">
              <span className="csp-eyebrow2-dot" aria-hidden="true" />
              <b>04</b>
              <span className="csp-eyebrow2-sep">·</span>
              WHAT WE WON
            </div>
            <h2 className="csp-out-h">The Outcome</h2>
            <p className="csp-out-note">
              Even with scaling the CAC didn&apos;t increase in fact even at scale we
              <br />
              were able to lower the cost per enrolment by 27%
            </p>
          </div>
          <div className="csp-out-stair">
            <span className="csp-out-val">-27%</span>
            <span className="csp-out-label">Lower Cost per Enrolment</span>
          </div>
        </section>
      </div>

      <div className="csp-in">
        <section className="csk-sec" id="csp-sec-ads">
          <div className="csp-eyebrow2">
            <span className="csp-eyebrow2-dot" aria-hidden="true" />
            <b>05</b>
            <span className="csp-eyebrow2-sep">·</span>
            WORKS
          </div>
          <h2 className="cst-secH">Ads</h2>
          <SeekhoFilms films={ADS} className="cms-ads" />
        </section>
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

          <DeepDiveCards embed exclude="/case-study/masai" />
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
