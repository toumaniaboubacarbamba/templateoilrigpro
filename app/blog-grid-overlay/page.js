import Link from "next/link";
import PageBanner from "@/components/PageBanner";
import Reveal from "@/components/Reveal";
import { ArrowRight, Calendar } from "@/components/Icons";
import { POSTS } from "@/data/posts";

export const metadata = { title: "Blog Grid Overlay – Oilrigpro" };

export default function BlogGridOverlay() {
  return (
    <main>
      <PageBanner title="Blog Grid Overlay" crumbs={[{ label: "Blog Grid Overlay" }]} />
      <section className="bgo">
        <div className="container bgo-grid">
          {POSTS.map((p, i) => (
            <Reveal key={p.slug} className="bgo-card" delay={(i % 2) * 100}>
              <Link href={`/blog/${p.slug}`} className="bgo-img"><img src={p.img} alt={p.title} /></Link>
              <div className="bgo-meta">
                <span><Calendar size={14} /> {p.date}</span>
                <span className="bgo-admin"><img src="/images/admin.png" alt="" /> Admin</span>
              </div>
              <h3><Link href={`/blog/${p.slug}`}>{p.title}</Link></h3>
              <Link href={`/blog/${p.slug}`} className="bp-more">Read More <ArrowRight size={16} /></Link>
            </Reveal>
          ))}
        </div>
      </section>
    </main>
  );
}
