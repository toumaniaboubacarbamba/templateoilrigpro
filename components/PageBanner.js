import Link from "next/link";
import { ChevronRight } from "./Icons";

// Bannière des pages intérieures : titre, ligne blanche, fil d'Ariane
export default function PageBanner({ title, crumbs = [], compact = false }) {
  return (
    <section className={`page-banner ${compact ? "compact" : ""}`}>
      <div className="page-banner-inner">
        <h1>{title}</h1>
      </div>
      <div className="page-banner-line" />
      <div className="page-banner-inner">
        <nav className="crumbs" aria-label="Breadcrumb">
          <Link href="/">Home</Link>
          {crumbs.map((c, i) => (
            <span key={c.label} className="crumb">
              <ChevronRight />
              {c.href ? <Link href={c.href}>{c.label}</Link> : <em>{c.label}</em>}
            </span>
          ))}
        </nav>
      </div>
    </section>
  );
}
