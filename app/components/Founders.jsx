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
        </Reveal>

        <Reveal className="fo-body">
          <div className="fo-shot" role="img" aria-label="Aditya and Anushank, founders of Vidrow" />

          <div className="fo-col">
            <div className="fo-lead">
              <div className="fo-lead-t">
                <h3 className="fo-statement">
                  You&apos;ll be working with people who&apos;ve seen this before
                </h3>
                <p className="fo-copy">
                  Aditya and Anushank started Vidrow because they were frustrated with how
                  traditional marketing agencies never understood what founders need. Startups scale
                  differently than legacy brands, just being creative doesn&apos;t cut it, an
                  engineering mindset is required. They come from IIT Kanpur. So does most of the
                  team. They think in systems, not creative outburst. They measure in fundraises, not
                  impressions.
                </p>
              </div>
            </div>

            {/* its own Reveal, not the section's: .fo-body starts at the top
                of the photo, so watching that played the steps while they
                were still below the fold */}
            <Reveal className="fo-stats">
              <div className="fo-step">
                <div className="fo-stat">
                  <b>
                    90% raise next
                    <br />
                    round
                  </b>
                  <p>90% of Vidrow-backed startups close their next round ahead of time.</p>
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
                    Engineers turned marketers — a pedigree that sets Vidrow apart from traditional
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
                  <p>Recognition that signals our founders are building a playbook worth noticing.</p>
                </div>
              </div>
            </Reveal>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
