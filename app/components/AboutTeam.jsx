import TagMark from "./TagMark";

// photo n is /about us/team/team{n}.png, in this order. bg fills behind the
// photos cut out on a transparent ground (the rest carry their own).
// bio: shown in the yellow block that grows up the card on hover (lines kept as
// written; blank lines make paragraphs). Cards without one don't animate.
// linkedin: profile URL — the icon shows either way, linked only with one.
// x: X profile URL (optional) — shown in the hover bio when given.
const TEAM = [
  { name: "Nipun Angrish", role: "Director - Brand & Content", bg: "#B78F85", linkedin: "https://www.linkedin.com/in/nipun-angrish/", bio: "Nipun graduated from Whistling Woods and has been working for eight-plus years in entertainment and media, which is a long time to learn that the best story wins. He has worked with Zee Studios and Kiran Rao, and came out convinced of one thing: a sharp story wrapped in a pop-culture hook will outperform a fat budget any day." },
  { name: "Yash Choudhary", role: "Director - Performance & Ad Ops", bg: "#8E916D", drop: "11%", linkedin: "https://www.linkedin.com/in/yash-choudhary-iim-iit/", bio: "An IIT and IIM grad, he sees performance marketing as a strategy game. Like Dota 2, it’s about reading the lane early and knowing when to farm and when to push. Like Hades, every run is a loop of small upgrades: you fail, learn, pick a better build and go again, so each dud creative sharpens the next. Like Civilisation, it’s a long game of compounding." },
  { name: "Aaryan Mehar", role: "Creative Manager - Performance", bg: "#F7ECE1", linkedin: "https://www.linkedin.com/in/aaryan-mehar", bio: "Aaryan spent his undergrad years at IIT Kanpur in the rooms of literary societies, where he learned to wordsmith. Then came IPAC, where he built a deep, ground-level understanding of audiences. Today he combines both to build the most efficient, scalable performance marketing engine." },
  { name: "Narottam Kumar Pankaj", role: "Creative Manager - Performance", bg: "#809181", linkedin: "https://www.linkedin.com/in/narottam-kumar-pankaj-b5101b239/", bio: "If Narottam learned one thing in the corridors of IIT Kanpur’s Drama Society, it’s that a simple line can be made punchy. He wrote so many street plays on so many boring topics that he can now make the most boring product look thrilling. He’s convinced a good creative engine can change a company’s growth trajectory." },
  { name: "Shruthy Suvarna", role: "Creative Manager - Socials", bg: "#7891B9", linkedin: "https://www.linkedin.com/in/shruthysuvarna/", bio: "Shruthy has spent 8.5 years making brands impossible to ignore, leading social and performance work for Publicis, GroupM, and Dentsu. Her own Instagram grew from 500 to 122K+ followers, with viral videos hitting 58M+ views. Turns out she knows how to stop a thumb mid-scroll and keep it there." },
  { name: "Prathamesh Wankar", role: "Creative Manager - Performance", bg: "#A5B5C4", linkedin: "https://www.linkedin.com/in/prathamesh026", bio: "Prathamesh started in the drama club at IIT Kanpur, writing skits for live audiences. Now he writes ads, which turns out to be the same craft with a shorter attention span to win over. He still believes every line has to earn its laugh, or its click." },
  { name: "Hashvith Naik", role: "Creative Associate - Performance", bg: "#F9DC9A", linkedin: "https://www.linkedin.com/in/hashvith-naik-b3732a2a1", bio: "Hashvith runs on Rick Sanchez energy: question the process, find the shortcut, never spend an hour on a ten-minute task. An IIT Kanpur electrical engineer turned Creative Associate, he works where creative strategy meets analytical thinking. Work smarter, finish early, let the deadline worry about itself." },
  { name: "Shivani Agrawal", role: "Content Ops - Performance", bg: "#7992B5", linkedin: "https://www.linkedin.com/in/shivani-agrawal-2107a9229/", bio: "Shivani keeps Content Ops and Performance work running smoothly. She turns scattered briefs and deadlines into work that ships and performs. She makes people’s dreams and Google Sheets come true, and she does it with a straight face." },
  { name: "Radhika Dhoot", role: "Founders’ Office", bg: "#2C3441", linkedin: "https://www.linkedin.com/in/radhika-dhoot-5117a82a6", bio: "Radhika is a little bit of everything, every day, and most days she is still working out what the everything is. Founders’ Office keeps her in the middle of it all, so she has seen every corner of Vidrow. Chaos is just her Tuesday." },
  { name: "Bably Dutta", role: "Post Production Manager - Performance", bg: "#D7CBCD", linkedin: "https://www.linkedin.com/in/bably-d-89aa84206/", bio: "Bably was once a girl with dreams. Now she’s a girl with an edit tracker, and somehow the dreams survived the transition. She keeps Post Production Performance on schedule, one cut at a time, and treats every timeline like it owes her an apology." },
  { name: "Ayush Harsh", role: "Post Production Manager - Performance", bg: "#CF8480", linkedin: "https://www.linkedin.com/in/ayush-harsh-3ab0631ab", bio: "Others work to feed their families. Ayush works to keep his bike running, and the bike is the harder client. As Post Production Manager on Performance, he meets every deadline with the calm of someone who has survived worse." },
  { name: "Kiran Goud", role: "Content Ops - Performance", bg: "#C39941", linkedin: "https://www.linkedin.com/in/kiran-goud333", bio: "Kiran walks into every shoot saying “Easy.” He walks out asking what they just shot. Then he edits it into something so good that he claims he knew it all along. Content Ops and Performance is his favorite genre: chaos to confidence." },
  { name: "Ekansh Johar", role: "Associate - Brand & Content", bg: "#B78F85", linkedin: "https://www.linkedin.com/in/ekanshh-johar-05aa76295", bio: "Ekansh works in brand marketing, shaping ideas into work people actually watch and remember." },
  { name: "Anil Siyak", role: "Content Ops - Performance", bg: "#B78F85", linkedin: "https://www.linkedin.com/in/anil-siyak-939b202aa", bio: "Give Anil a messy task and a deadline, and he’ll take three breaks and solve it on the fourth. In Content Ops, he treats chaos as a warm-up round. Deadlines don’t stress him. They just set the pace." },
  { name: "Anil Kushwah", role: "Creative Associate - Performance", bg: "#C39941", linkedin: "https://www.linkedin.com/in/anil-kushwah-0167bb256/", bio: "Anil believes careers aren’t built overnight. They grow when you choose to get a little better every day, and he takes that seriously. As a Creative Associate in Performance marketing, he is quietly stacking small wins, one day at a time." },
  { name: "Sneha Das", role: "Creative Writer - Performance", bg: "#537596", linkedin: "https://www.linkedin.com/in/sneha-das-67a482247/", bio: "Sneha is a copywriter with a background in advertising and PR, now writing performance scripts and copy. She hunts for the right hook, turns simple briefs into things people want to watch or read, and is still finding her voice. Her secret ingredient? A little PJ in every script." },
  { name: "Utkarsh Kumar", role: "Post Production Associate - Performance", bg: "#C39941", linkedin: "https://www.linkedin.com/in/utkarsh-kumar-0906833a3", bio: "Utkarsh is a writer, director, actor, and unofficial snack manager on the Post Production team. He has led teams, made independent projects, and delivered fast, mostly on chai, deadlines, and pure jugaad. His stories stick with people long after the pack-up." },
  { name: "Sandeep S", role: "Post Production Associate - Brand", bg: "#8796AC", linkedin: "https://www.linkedin.com/in/sandeeps123/", bio: "Sandeep works on Post Production like a machine, turning raw footage into finished work." },
  { name: "Anshika Bhatnagar", role: "Creative Associate - Social", bg: "#F3B1BD", linkedin: "https://www.linkedin.com/in/anshika-b-698ba842a", bio: "Anshika works in social media, which means she gets paid to scroll. The catch is she has to decide what’s worth stopping for, and she’s very good at it. As a Creative Associate on Social, she turns an endless feed into ideas people actually stop for." },
].map((m, i) => ({ ...m, photo: `/about%20us/team/team${i + 1}.webp` }));

// the photos that come with their own backdrop (no transparent ground): these
// fill the whole frame instead of being shrunk, so no flat bg colour shows round them
const SOLID = new Set([5, 8, 9, 16, 17, 18]);

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect width="24" height="24" rx="2" fill="#121212" />
      <path
        fill="var(--acid)"
        d="M5.3 9.2h2.9V19H5.3zM6.75 4.6a1.68 1.68 0 1 1 0 3.36 1.68 1.68 0 0 1 0-3.36zM10 9.2h2.78v1.34h.04c.39-.73 1.33-1.5 2.74-1.5 2.93 0 3.47 1.93 3.47 4.43V19h-2.9v-4.92c0-1.17-.02-2.68-1.63-2.68-1.64 0-1.89 1.28-1.89 2.6V19H10z"
      />
    </svg>
  );
}

function XIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect width="24" height="24" rx="2" fill="#121212" />
      <path
        fill="var(--acid)"
        d="M15.9 5.5h2.1l-4.6 5.25L18.8 18.5h-4.2l-3.3-4.3-3.77 4.3H5.42l4.92-5.62L5.2 5.5h4.3l2.98 3.94zm-.74 11.7h1.17L8.9 6.73H7.65z"
      />
    </svg>
  );
}

// "The Whole Team": heading on the left, the blurb on the right, then a grid
// of portrait cards, each photo stepping down into a yellow name plate
export default function AboutTeam() {
  return (
    <section className="abt">
      <div className="abt-head">
        <div className="abt-title">
          <div className="ab-tagwrap">
            <span className="ab-tag">The Whole Team</span>
            <TagMark />
          </div>
          <h2 className="abt-h">A hub of Left-Brain creatives.</h2>
        </div>
        <p className="abt-blurb">
          Most creative teams will tell you they&rsquo;re data-driven. Ours didn&rsquo;t have to
          learn that, it&rsquo;s just how they&rsquo;re wired. The team is largely IIT Kanpur
          alumni, which means systems thinking, first-principles reasoning, and an almost
          inconvenient obsession with how things actually work aren&rsquo;t values we had to
          instill. They came standard.
        </p>
      </div>

      <div className="abt-grid">
        {TEAM.map((m, i) => (
          <article className={`abt-card${m.bio ? " abt-card--bio" : ""}`} key={m.name}>
            <div className={`abt-shot${SOLID.has(i + 1) ? " abt-shot--solid" : ""}`} style={{ background: m.bg }}>
              <img
                src={m.photo}
                alt={m.name}
                loading="lazy"
                // a shot framed tighter than the rest is moved down in its frame
                // so every head sits at about the same height (the plate covers
                // what drops off the bottom)
                style={m.drop ? { transform: `translateY(${m.drop})` } : undefined}
              />
              <span className="abt-step abt-step--1" aria-hidden="true" />
              <span className="abt-step abt-step--2" aria-hidden="true" />
            </div>
            <div className="abt-plate">
              <h3 className="abt-name" style={{ "--nl": m.name.length }}>
                {m.name}
              </h3>
              <p className="abt-role">{m.role}</p>
              {m.linkedin ? (
                <a
                  className="abt-in"
                  href={m.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${m.name} on LinkedIn`}
                >
                  <LinkedInIcon />
                </a>
              ) : (
                <span className="abt-in">
                  <LinkedInIcon />
                </span>
              )}
            </div>
            {m.bio && (
              <div className="abt-bio">
                {m.bio.split(/\n{2,}/).map((para, j) => (
                  <p key={j}>{para}</p>
                ))}
                {/* their LinkedIn (and X, for anyone with an `x` link) at the
                    foot of the yellow, clickable while the bio is up */}
                {(m.linkedin || m.x) && (
                  <div className="abt-bioSocials">
                    {m.linkedin && (
                      <a href={m.linkedin} target="_blank" rel="noopener noreferrer" aria-label={`${m.name} on LinkedIn`}>
                        <LinkedInIcon />
                      </a>
                    )}
                    {m.x && (
                      <a href={m.x} target="_blank" rel="noopener noreferrer" aria-label={`${m.name} on X`}>
                        <XIcon />
                      </a>
                    )}
                  </div>
                )}
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
