import PageBanner from "@/components/PageBanner";
import Reveal from "@/components/Reveal";
import TeamCard from "@/components/TeamCard";
import { TEAM } from "@/data/team";

export const metadata = { title: "Team – Oilrigpro" };

export default function TeamPage() {
  return (
    <main>
      <PageBanner title="Team" crumbs={[{ label: "Team" }]} />
      <section className="team-page">
        <div className="container team-page-grid">
          {TEAM.map((m, i) => (
            <Reveal key={m.slug} delay={(i % 3) * 100}>
              <TeamCard member={m} />
            </Reveal>
          ))}
        </div>
      </section>
    </main>
  );
}
