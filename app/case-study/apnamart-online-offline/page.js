import Footer from "../../components/Footer";
import SiteNav from "../../components/SiteNav";
import CspSectionNav from "../../components/CspSectionNav";
import { DeepDiveCards } from "../../components/CaseStudies";

export const metadata = {
  title: "Apnamart (Online + Offline) - Case Study | Vidrow",
};

const ASSETS = "/casestudy%20images/casestudy-apnamart-online";

const SECTIONS = [
  { id: "csp-sec-hero", label: "Overview" },
  { id: "csp-sec-problem", label: "Problem Statement" },
  { id: "csp-sec-strategy", label: "Strategy" },
  { id: "csp-sec-phases", label: "The Phases" },
  { id: "csp-sec-phase1", label: "Phase 1" },
  { id: "csp-sec-phase2", label: "Phase 2" },
  { id: "csp-sec-phase3", label: "Phase 3" },
  { id: "csp-sec-results", label: "Results" },
  { id: "csp-sec-more", label: "More Stories" },
];

const END_GOALS = [
  "Awareness of its online presence",
  "Adoption rate of the online delivery service",
  "Increase total number of app downloads",
];

const CITY_FACTORS = [
  "We needed good penetration of Apnamart. Many cities checked this requirement",
  "The coverage of the stores should be at least 80% of the city’s population.",
  "The city should be in the top performing cities where Apnamart stores are available",
];

const CHANNELS = [
  ["Pamphlets", "Transit Ads (with Toto)"],
  ["Newspapers", "Billboards"],
  ["Digital Awareness Videos", "Digital Performance Videos"],
];

const PHASES = [
  { n: "01", label: "Phase 1", title: "Pamphlets and Transit Ads" },
  { n: "02", label: "Phase 2", title: "Newspapers and Billboards" },
  { n: "03", label: "Phase 3", title: "Digital Awareness and Performance Ads" },
  { n: "04", label: "Phase 4", title: "Combination of Everything", hi: true },
];

const PHASE_1 = {
  designing: [
    "Apnamart’s colours were used to design all the assets. The assets showed a delivery boy with Apnamart’s app and communication was quirky.",
    "Catchy Hindi Jingles were written to be played in the totos as part of the transit ads.",
  ],
  execution: [
    "Pamphlets were distributed with customers who visited the offline Apnamart stores and people who passed by the stores.",
    "Totos were fitted with speakers for playing jingles and these would roam around the 10 testing locations.",
  ],
};

const PHASE_2 = {
  designing: [
    "The Billboards were designed to show a delivery boy coming out of Apnamart’s app for delivering the orders establishing their online presence.",
    "Similarly, in the newspapers, mobile app and delivery boy were shown with varying communications.",
  ],
  execution: [
    "Locations with high footfalls were chosen, the dimensions of the billboard and billboard lights were chosen to overpower the competing billboards.",
    "Half-page slots were taken in various odd number pages of the newspaper as when the pages are flipped, the odd pages strike the eyes first.",
  ],
};

const PHASE_3_COMMS = [
  "The story was revolved around the decision-making lady of a middle class house in 3 scenarios - interacting with her maid, her husband and her child. These are seen by every customer of Apnamart and, hence, made the videos relatable for them.",
  "The scripts were quirky and the story was written to be fun-to-watch just like any content on TV or social media",
];

const RESULT_AFTER = [
  "Performance Ads",
  "Awareness Ads",
  "Billboards",
  "Newspapers",
  "Transit Ads",
  "Pamphlets",
];

function VidrowMark() {
  return (
    <svg viewBox="0 0 40 40" aria-hidden="true">
      <path fill="#0B0B0D" d="M0 0 H40 V40 H26.667 V26.667 H13.333 V13.333 H0 Z" />
    </svg>
  );
}

function Eyebrow({ n, children }) {
  return (
    <div className="cao-eyebrow">
      <span className="cao-eyebrowDot" aria-hidden="true" />
      <b>{n}</b>
      <span>{children}</span>
    </div>
  );
}

// a numbered chip with the copy sitting beside it, on a hairline
function ChipList({ items }) {
  return (
    <ul className="cao-list">
      {items.map((t, i) => (
        <li className="cao-listRow" key={t}>
          <span className="cao-chip">{`0${i + 1}`}</span>
          <p>{t}</p>
        </li>
      ))}
    </ul>
  );
}

function DesignExec({ data }) {
  return (
    <div className="cao-de">
      <div className="cao-deBlock">
        <h3 className="cao-tag">Designing</h3>
        <ChipList items={data.designing} />
      </div>
      <div className="cao-deBlock">
        <h3 className="cao-tag">Execution</h3>
        <ChipList items={data.execution} />
      </div>
    </div>
  );
}

export default function ApnamartOnlineOfflineCaseStudy() {
  return (
    <>
      <main className="csp csp--seekho cao">
        <header className="hx-bar hx-bar--page">
          <SiteNav logoHref="/" />
        </header>
        <div className="hx-bar-gap" aria-hidden="true" />

        <CspSectionNav sections={SECTIONS} />

        <div className="csp-in" id="csp-sec-hero">
          <div className="csk-top">
            <h1 className="cst-h">
              Increase the app downloads
              <br />
              and total order numbers.
            </h1>
            <p className="csk-note cao-note">
              Apnamart is an everyday grocery retail store chain operating in the eastern states of
              India (West Bengal, Jharkhand, Chhattisgarh). Apnamart also provides 10 minute
              delivery of items through their mobile app.
            </p>
          </div>

          <div className="csp-banner csk-banner">
            <img fetchPriority="high"
              className="csk-hero"
              src={`${ASSETS}/hero.jpg`}
              alt="Apnamart transit ad, billboard and ad film for the 15 minute delivery"
            />
            <span className="csp-bannerTag">
              <span className="csp-lockup">
                <VidrowMark />
                <i aria-hidden="true" />
                <img src={`${ASSETS}/apnamart-badge.svg`} alt="Apnamart" />
              </span>
            </span>
          </div>

          <div className="csk-meta">
            <div className="csp-metaItem">
              <span className="csp-metaLabel">Client</span>
              <span className="csp-metaValue">Apnamart</span>
            </div>
            <div className="csp-metaItem">
              <span className="csp-metaLabel">Testing location</span>
              <span className="csp-metaValue">Bilaspur</span>
            </div>
            <div className="csp-metaItem">
              <span className="csp-metaLabel">Channels</span>
              <span className="csp-metaValue">Offline + Online</span>
            </div>
          </div>
        </div>

        <div className="csp-in">
          <section className="cao-sec" id="csp-sec-problem">
            <div className="cao-head">
              <div className="cao-headL">
                <Eyebrow n="01">Apnamart &times; Vidrow &middot; Case Study</Eyebrow>
                <h2 className="cao-h">Problem Statement</h2>
              </div>
              <div className="cao-headR">
                <p>
                  Apnamart is an everyday grocery retail store chain operating in the eastern
                  states of India (West Bengal, Jharkhand, Chhattisgarh). Apnamart also provides 10
                  minute delivery of items through their mobile app.
                </p>
                <p>
                  Only a few months before this pilot project had Apnamart launched their online
                  delivery service enabled by the mobile app, and now wanted to increase the
                  awareness for the same.
                </p>
              </div>
            </div>

            <p className="cao-label">As end goals, Apnamart wanted to optimise on the following:</p>
            <div className="cao-goals">
              {END_GOALS.map((g, i) => (
                <div className="cao-goal" key={g}>
                  <span className="cao-chip">{`0${i + 1}`}</span>
                  <p>{g}</p>
                </div>
              ))}
            </div>

            <p className="cao-callout">
              With a mission to increase the app downloads and total order numbers, Apnamart
              reached out to Vidrow for the GTM plan.
            </p>
          </section>
        </div>

        <div className="csp-in">
          <section className="cao-sec" id="csp-sec-strategy">
            <Eyebrow n="02">Strategy</Eyebrow>
            <h2 className="cao-h cao-h--wide">
              Start from a small point and then scale those marketing channels that provide the
              best results.
            </h2>

            <div className="cao-cols">
              <div className="cao-col">
                <p className="cao-body">
                  Since the service was new and there was not much reference in terms of
                  competitors in Apnamart&rsquo;s cities, we decided to start from a small point and
                  then scale those marketing channels that provide the best results.
                </p>
                <p className="cao-body">
                  While deciding the location for testing, the following factors were taken into
                  consideration:
                </p>
                <ChipList items={CITY_FACTORS} />
                <p className="cao-callout cao-callout--sm">
                  These factors led to the finalisation of Bilaspur as the testing location.
                </p>
              </div>

              <div className="cao-col">
                <p className="cao-body">
                  With low penetration of online delivery services in these regions and high
                  dependence on offline channels, we decided that both offline and online channels
                  shall be utilised and tested. This was the first set and we wanted to experiment
                  as much as possible which would give us better insights and a greater
                  understanding.
                </p>
                <p className="cao-label">We decided the following marketing channels</p>
                <div className="cao-chips">
                  {CHANNELS.map((row) => (
                    <div className="cao-chipsRow" key={row[0]}>
                      {row.map((c) => (
                        <span className="cao-yChip" key={c}>
                          {c}
                        </span>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </div>

        <div className="csp-in">
          <section className="cao-sec" id="csp-sec-phases">
            <div className="cao-head">
              <div className="cao-headL">
                <Eyebrow n="03">Strategy</Eyebrow>
                <h2 className="cao-h">The entire testing was distributed into 3 phases.</h2>
              </div>
              <div className="cao-headR">
                <p>
                  Keeping in mind the costs for production and execution, and the time taken by the
                  marketing channels for generating results, the entire testing was distributed
                  into 3 phases.
                </p>
                <p>
                  To understand the possibility of scaling with all the assets together, another
                  phase was strategised where we included all the assets targeting the city of
                  Bilaspur.
                </p>
              </div>
            </div>

            <div className="cao-phases">
              {PHASES.map((p, i) => (
                <div className="cao-phaseWrap" key={p.n}>
                  <div className={`cao-phase${p.hi ? " hi" : ""}`}>
                    <span className="cao-phaseLabel">{p.label}</span>
                    <b>{p.n}</b>
                    <p>{p.title}</p>
                  </div>
                  {i < PHASES.length - 1 && (
                    <span className="cao-phaseArrow" aria-hidden="true">
                      &rarr;
                    </span>
                  )}
                </div>
              ))}
            </div>
          </section>
        </div>

        <div className="csp-in">
          <section className="cao-sec" id="csp-sec-phase1">
            <div className="cao-head">
              <div className="cao-headL">
                <Eyebrow n="04">Phase 1</Eyebrow>
                <h2 className="cao-h">Pamphlets and Transit Ads</h2>
              </div>
              <div className="cao-headR">
                <p>
                  Both pamphlets and transit ads are quick to design and require low budgets for
                  execution.
                </p>
                <p>
                  The notion with this phase was to start building better user understanding and
                  figure out the communication for high-budget channels in the upcoming phases.
                </p>
              </div>
            </div>

            <div className="cao-split">
              <DesignExec data={PHASE_1} />

              <div className="cao-assets">
                <figure className="cao-fig">
                  <div className="cao-pamRow">
                    <img src={`${ASSETS}/pam-1.jpg`} alt="Pamphlet: 15 minute delivery, download the app" loading="lazy" />
                    <img src={`${ASSETS}/pam-2.jpg`} alt="Pamphlet: Apnamart app, free delivery" loading="lazy" />
                    <img src={`${ASSETS}/pam-3.jpg`} alt="Pamphlet: five bad habits of mothers-in-law" loading="lazy" />
                  </div>
                  <figcaption>Pamphlet Assets</figcaption>
                </figure>
                <figure className="cao-fig">
                  <div className="cao-totoRow">
                    <img src={`${ASSETS}/toto-1.jpg`} alt="Transit ad artwork for the toto" loading="lazy" />
                    <img src={`${ASSETS}/toto-2.jpg`} alt="Transit ad on a toto" loading="lazy" />
                  </div>
                  <figcaption>Transit Ad (Toto) Assets</figcaption>
                </figure>
              </div>
            </div>
          </section>
        </div>

        <div className="csp-in">
          <section className="cao-sec" id="csp-sec-phase2">
            <div className="cao-head">
              <div className="cao-headL">
                <Eyebrow n="05">Phase 2</Eyebrow>
                <h2 className="cao-h">Newspapers and Billboards</h2>
              </div>
              <div className="cao-headR">
                <p>
                  These assets were really important for Apnamart cities even though the cost was
                  high for them.
                </p>
                <p>
                  While Phase 1 was more around retargeting and being constantly on top of mind of
                  the customer, this phase was for awareness and adoption.
                </p>
              </div>
            </div>

            <div className="cao-split">
              <DesignExec data={PHASE_2} />

              <div className="cao-assets cao-assets--row">
                <figure className="cao-fig">
                  <img className="cao-bill" src={`${ASSETS}/bill.jpg`} alt="Apnamart billboard" loading="lazy" />
                  <figcaption>Billboard</figcaption>
                </figure>
                <figure className="cao-fig">
                  <div className="cao-newsCol">
                    <img src={`${ASSETS}/news-1.jpg`} alt="Newspaper ad: you will read this paper fully" loading="lazy" />
                    <img src={`${ASSETS}/news-2.jpg`} alt="Newspaper ad: 15 minutes, groceries delivered" loading="lazy" />
                  </div>
                  <figcaption>Newspaper Assets</figcaption>
                </figure>
              </div>
            </div>
          </section>
        </div>

        <div className="csp-in">
          <section className="cao-sec cao-dark" id="csp-sec-phase3">
            <Eyebrow n="06">Phase 3</Eyebrow>
            <h2 className="cao-h">Digital Awareness Videos</h2>
            <p className="cao-darkIntro">
              Awareness Videos take a great amount of time to be produced and also require the most
              amount of resources. Keeping it in the third phase was to get sufficient learning and
              user understanding from the first 2 phases and then apply them while creating these
              assets.
            </p>

            <p className="cao-label cao-label--acid">Communication:</p>
            <ChipList items={PHASE_3_COMMS} />

            <div className="cao-aware">
              {[1, 2, 3].map((n) => (
                <img
                  key={n}
                  src={`${ASSETS}/aware-${n}.webp`}
                  alt={`Apnamart digital awareness video, scene ${n}`}
                  loading="lazy"
                />
              ))}
            </div>
          </section>
        </div>

        <div className="csp-in">
          <section className="cao-sec" id="csp-sec-results">
            <Eyebrow n="07">Results</Eyebrow>
            <h2 className="cao-h cao-h--results">
              The playbook was created and was replicated in the other cities to enable Apnamart to
              scale up
            </h2>

            <div className="cao-results">
              <div className="cao-resultsCopy">
                <p>After the first phase, the results were not very good.</p>
                <p>
                  However, after phase 2, total app downloads and the adoption rate of online
                  delivery services in Bilaspur jumped. This meant that Billboards led to a greater
                  awareness and the newspapers resulted in more downloads.
                </p>
                <p>With the execution of the third phase, the results were further higher.</p>
                <p>
                  As a result of these, we decided to go ahead with another phase (phase 4) with all
                  our previous leanings and the channels.
                </p>
              </div>

              <div className="cao-resultsSide">
                <div className="cao-stat">
                  <span className="cao-statLabel">The result</span>
                  <b>4.2x &uarr;</b>
                  <span className="cao-statSub">in Adoption Rate</span>
                  <span className="cao-statNote">as compared to the other cities</span>
                </div>

                <p className="cao-label cao-label--sm">Active marketing channels</p>
                <div className="cao-ba">
                  <div className="cao-baCol">
                    <h3>Before Vidrow</h3>
                    <ul>
                      <li>Transit Ads</li>
                    </ul>
                  </div>
                  <div className="cao-baCol cao-baCol--after">
                    <h3>After Vidrow</h3>
                    <ul>
                      {RESULT_AFTER.map((c) => (
                        <li key={c}>{c}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
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

            <DeepDiveCards embed exclude="/case-study/apnamart-online-offline" />
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
