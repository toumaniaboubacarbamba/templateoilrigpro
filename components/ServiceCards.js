import Link from "next/link";
import Reveal from "./Reveal";
import { ArrowRight, ArrowUpRight } from "./Icons";
import { EXCERPT_LONG, EXCERPT_SHORT, SERVICES } from "@/data/services";

// variant : "default" | "classic" | "modern" | "pro"
export default function ServiceCards({ variant = "default" }) {
  if (variant === "pro") {
    return (
      <section className="svc-list svc-pro">
        <div className="container svc-list-grid">
          {SERVICES.map((s, i) => (
            <Reveal key={s.slug} delay={(i % 3) * 100}>
              <Link href={`/service/${s.slug}`} className="pro-tile">
                <img src={s.img} alt={s.title} />
                <span className="pro-title">{s.title}</span>
                <span className="pro-arrow"><ArrowUpRight size={28} /></span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    );
  }

  return (
    <section className={`svc-list svc-${variant}`}>
      <div className="container svc-list-grid">
        {SERVICES.map((s, i) => (
          <Reveal key={s.slug} className="svc-item" delay={(i % 3) * 100}>
            {variant === "modern" && (
              <div className="svc-icon">
                <img src={s.icon} alt="" />
              </div>
            )}
            {variant === "classic" && (
              <h4>
                <Link href={`/service/${s.slug}`}>{s.title}</Link>
              </h4>
            )}
            {variant !== "modern" && (
              <Link href={`/service/${s.slug}`} className="svc-thumb">
                <img src={s.img} alt={s.title} />
              </Link>
            )}
            {variant !== "classic" && (
              <h4>
                <Link href={`/service/${s.slug}`}>{s.title}</Link>
              </h4>
            )}
            <p>{variant === "default" ? EXCERPT_SHORT : EXCERPT_LONG}</p>
            <Link href={`/service/${s.slug}`} className="svc-more">
              Read More <ArrowRight size={16} />
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
