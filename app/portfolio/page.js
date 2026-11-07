import Link from "next/link";
import PageBanner from "@/components/PageBanner";
import Reveal from "@/components/Reveal";
import { FIRST_SIX } from "@/data/portfolio";

export const metadata = { title: "Portfolio – Oilrigpro" };

export default function PortfolioPage() {
  return (
    <main>
      <PageBanner title="Portfolio" crumbs={[{ label: "Portfolio" }]} />
      <section className="pf-list">
        <div className="container pf-grid">
          {FIRST_SIX.map((p, i) => (
            <Reveal key={p.slug} className="pf-card" delay={(i % 3) * 100}>
              <Link href={`/portfolio/${p.slug}`} className="pf-img">
                <img src={p.img} alt={p.title} />
              </Link>
              <div className="pf-text">
                <h4>
                  <Link href={`/portfolio/${p.slug}`}>{p.title}</Link>
                </h4>
                <span>{p.category}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </main>
  );
}
