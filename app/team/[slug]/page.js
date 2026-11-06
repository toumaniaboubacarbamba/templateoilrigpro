import Link from "next/link";
import { notFound } from "next/navigation";
import PageBanner from "@/components/PageBanner";
import SkillBar from "@/components/SkillBar";
import { ArrowUpLeft, Facebook, Instagram, Medal, Whatsapp, Youtube } from "@/components/Icons";
import { TEAM } from "@/data/team";

export function generateStaticParams() {
  return TEAM.map((m) => ({ slug: m.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const m = TEAM.find((t) => t.slug === slug);
  return { title: m ? `${m.name} – Oilrigpro` : "Team – Oilrigpro" };
}

const LOREM =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia magni dolores eos qui ratione voluptatem sequi";

export default async function TeamSinglePage({ params }) {
  const { slug } = await params;
  const idx = TEAM.findIndex((t) => t.slug === slug);
  if (idx === -1) notFound();
  const m = TEAM[idx];
  const prev = TEAM[(idx - 1 + TEAM.length) % TEAM.length];

  return (
    <main>
      <PageBanner title={m.name} crumbs={[{ label: "Team", href: "/team" }, { label: m.name }]} />

      <section className="member">
        <div className="container">
          <div className="member-top">
            <aside className="member-card">
              <span className="member-dept">Offshore Operations</span>
              <h2>{m.name}</h2>
              <p className="member-role">Senior Rig Operation</p>
              <p className="member-bio">
                <b>12 + years</b> of offshore drilling and production experience on <b>jack-up and semi-submersible rigs.</b>
              </p>
              <div className="member-rate">
                <div className="rate-num">4.9 Rating</div>
                <p>309,614+ customer reviews.</p>
                <div className="socials">
                  <a href="#" aria-label="Facebook"><Facebook /></a>
                  <a href="#" aria-label="Instagram"><Instagram /></a>
                  <a href="#" aria-label="Youtube"><Youtube /></a>
                  <a href="#" aria-label="Whatsapp"><Whatsapp /></a>
                </div>
              </div>
            </aside>

            <div className="member-photo">
              <img src={m.img} alt={m.name} />
            </div>

            <div className="member-info">
              <div className="info-box">
                <h4>Shift &amp; Availability</h4>
                <ul>
                  <li>Rotation : 28/28</li>
                  <li>Offshore Ready : Yes</li>
                </ul>
              </div>
              <div className="info-box">
                <h4>Certification</h4>
                <ul>
                  <li className="with-icon"><Medal /> IWCF Level 4</li>
                  <li>Offshore Medical</li>
                </ul>
              </div>
              <div className="info-box">
                <h4>Location</h4>
                <ul>
                  <li>North sea / Middle East / Gulf</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="member-body">
            <h3>Professional Overview</h3>
            <p>{LOREM}.</p>

            <div className="skills">
              <SkillBar label="Safety" value={90} />
              <SkillBar label="Rig Equipment" value={98} />
              <SkillBar label="Offshore" value={95} />
              <SkillBar label="Leadership" value={99} />
            </div>

            <p>{LOREM} nesciunt Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</p>
            <p>
              Matilda is a frequent speaker on the topics of global innovation and digital disruption. She is also an avid cook and
              history buff. You can find him dining late at night with the chefs of the hotels where he stays during his travels, or
              reading in his home library.
            </p>

            <form className="contact-me" action="#">
              <h3>Contact me</h3>
              <div className="cm-grid">
                <input type="text" placeholder="Name *" />
                <input type="text" placeholder="Phone" />
                <input type="email" placeholder="Email *" />
                <input type="text" placeholder="Subject *" />
                <textarea placeholder="Message" rows={4} />
              </div>
              <div className="cm-actions">
                <button type="button" className="btn btn-primary btn-md">Send Message</button>
              </div>
            </form>

            <div className="member-nav">
              <Link href={`/team/${prev.slug}`} className="prev-btn">
                <ArrowUpLeft /> {prev.name}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
