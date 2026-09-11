import Mark from "./Mark";
import Reveal from "./Reveal";

export default function Founders() {
  return (
    <section className="fo" id="people">
      <div className="fo-in">
        <Reveal className="fo-head">
          <div className="fo-tagwrap">
            <span className="fo-tag">Founders</span>
            <Mark />
          </div>
          <h2 className="fo-h">The people behind this</h2>
          <p className="fo-sub">The latest stories, ideas, and shifts worth paying attention to.</p>
        </Reveal>

        <Reveal className="fo-body">
          <div className="fo-shot" role="img" aria-label="Aditya and Anushank, founders of Vidrow" />

          <div className="fo-col">
            <div className="fo-lead">
              <div className="fo-lead-t">
                <h3 className="fo-statement">
                  You&apos;ll be working with people who&apos;ve seen this before.
                </h3>
                <p className="fo-copy">
                  Aditya and Anushank started Vidrow because they were frustrated with how agencies
                  talked to founders — like vendors, not partners. They come from IIT Kanpur. So does
                  most of the team. They think in systems, not campaigns. They measure in fundraises,
                  not impressions.
                </p>
              </div>
              <a className="fo-pill" href="#people">
                <span>Meet the full team</span>
                <svg className="fo-pill-i" viewBox="0 0 40 40" aria-hidden="true">
                  <path
                    fill="var(--violet)"
                    d="M0 0 H40 V40 H26.667 V26.667 H13.333 V13.333 H0 Z"
                  />
                </svg>
              </a>
            </div>

            <div className="fo-stats">
              <div className="fo-step">
                <div className="fo-stat">
                  <b>
                    90% raise next
                    <br />
                    round
                  </b>
                  <p>of Vidrow clients raise their next round while actively engaged with us.</p>
                </div>
              </div>
              <div className="fo-step">
                <div className="fo-stat">
                  <b>
                    IIT KANPUR
                    <br />
                    FOUNDERS + TEAM
                  </b>
                  <p>
                    Founders + core team with a pedigree that sets Vidrow apart from traditional
                    agencies.
                  </p>
                </div>
              </div>
              <div className="fo-step">
                <div className="fo-stat">
                  <b>
                    Forbes
                    <br />
                    30 under 30 | ASIA
                  </b>
                  <p>Recognition that signals our founders are building with people who’ve been noticed</p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
