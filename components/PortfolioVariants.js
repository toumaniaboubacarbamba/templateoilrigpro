import Link from "next/link";
import Reveal from "./Reveal";
import { ArrowRight, ArrowUpRight } from "./Icons";
import { EXCERPT, FIRST_SIX, PROJECTS } from "@/data/portfolio";

function Comment({ size = 14 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.2" aria-hidden="true">
      <path d="M2 3h12v8H7l-3 2.500V11H2z" />
    </svg>
  );
}

// variant : "grid2" | "grid3" | "grid4"
export default function PortfolioVariants({ variant }) {
  if (variant === "grid2") {
    return (
      <section className="pf-list pfv-2">
        <div className="container pfv-grid">
          {FIRST_SIX.map((p, i) => (
            <Reveal key={p.slug} className="pfv-card" delay={(i % 2) * 100}>
              <Link href={`/portfolio/${p.slug}`} className="pf-img">
                <img src={p.img} alt={p.title} />
              </Link>
              <div className="pf-text">
                <h4><Link href={`/portfolio/${p.slug}`}>{p.title}</Link></h4>
                <Link href={`/portfolio/${p.slug}`} className="pfv-more">Read More</Link>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    );
  }

  if (variant === "grid3") {
    return (
      <section className="pf-list pfv-3">
        <div className="container pfv-grid">
          {FIRST_SIX.map((p, i) => (
            <Reveal key={p.slug} className="pfv3-card" delay={(i % 3) * 100}>
              <div className="pfv3-imgwrap">
                <Link href={`/portfolio/${p.slug}`} className="pfv3-img">
                  <img src={p.portrait} alt={p.title} />
                </Link>
                <Link href={`/portfolio/${p.slug}`} className="pfv3-arrow" aria-label={p.title}><ArrowUpRight size={16} /></Link>
              </div>
              <span className="pfv3-cat">{p.category}</span>
              <div className="pfv3-meta">
                <span>{p.date}</span>
                <span className="pfv3-com"><Comment /> 0</span>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    );
  }

  return (
    <section className="pf-list pfv-4">
      <div className="container pfv-grid">
        {PROJECTS.map((p, i) => (
          <Reveal key={p.slug} className="pfv4-card" delay={(i % 4) * 100}>
            <Link href={`/portfolio/${p.slug}`} className="pfv4-img">
              <img src={p.img} alt={p.title} />
            </Link>
            <span className="pfv4-cat">{p.category}</span>
            <h4><Link href={`/portfolio/${p.slug}`}>{p.title}</Link></h4>
            <p>{EXCERPT}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
