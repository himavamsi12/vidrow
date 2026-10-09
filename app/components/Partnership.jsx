import TagMark from "./TagMark";
import Reveal from "./Reveal";
import PrTable from "./PrTable";
import { PR_STAGES, PR_TILES, PR_GROUPS } from "../data/partnership";

export default function Partnership() {
  return (
    <section className="pr" id="partnership">
      <div className="pr-in">
        <Reveal className="pr-top">
          <div className="pr-head">
            <div className="pr-tagwrap">
              <span className="pr-tag">Inside The Partnership</span>
              <TagMark />
            </div>
            <h2 className="pr-h">
              <span className="pr-h-d">
                A Playbook That Works <br />
                Across Stages
              </span>
              <span className="pr-h-m">A playbook that works across industries</span>
            </h2>
          </div>
        </Reveal>

        <div className="pr-scroll">
          <PrTable>
            <div className="pr-legend">
              {PR_STAGES.map((s) => (
                <span key={s.key} className="pr-key" data-stage={s.key}>
                  <i />
                  {s.label}
                </span>
              ))}
            </div>
            {PR_TILES.map((t) => {
              const Tile = t.href ? "a" : "div";
              return (
                <Tile
                  key={`${t.c}-${t.r}`}
                  className="pr-tile"
                  data-stage={t.stage}
                  style={{ "--c": t.c, "--r": t.r }}
                  {...(t.href ? { href: t.href, target: "_blank", rel: "noopener noreferrer", "aria-label": t.label } : {})}
                >
                  <img src={t.logo} alt={t.label} loading="lazy" style={{ width: `${t.w}%` }} />
                </Tile>
              );
            })}
          </PrTable>
        </div>

        {/* mobile: one block per stage, its logos three to a row */}
        <div className="pr-m">
          {PR_GROUPS.map((g) => (
            <div key={g.key} className="pr-group" data-stage={g.key}>
              <span className="pr-key">
                <i />
                {g.label}
              </span>
              <div className="pr-grid">
                {g.tiles.map((t) => {
                  const Tile = t.href ? "a" : "div";
                  return (
                    <Tile
                      key={t.label}
                      className="pr-mtile"
                      {...(t.href ? { href: t.href, target: "_blank", rel: "noopener noreferrer", "aria-label": t.label } : {})}
                    >
                      <img src={t.logo} alt={t.label} loading="lazy" style={{ width: `${t.mw}cqw`, scale: t.label === "Vahak" ? 1.45 : undefined }} />
                    </Tile>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
