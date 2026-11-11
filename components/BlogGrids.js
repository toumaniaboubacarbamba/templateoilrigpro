import Link from "next/link";
import Reveal from "./Reveal";
import BlogSidebar from "./BlogSidebar";
import { ArrowRight, Calendar } from "./Icons";
import { POSTS } from "@/data/posts";

// variant : "g2" | "g3" | "g4" | "g2s"
export default function BlogGrids({ variant }) {
  if (variant === "g2") {
    return (
      <section className="bg-wrap bg-2">
        <div className="container bg-grid">
          {POSTS.slice(0, 4).map((p, i) => (
            <Reveal key={p.slug} className="bg-item" delay={(i % 2) * 100}>
              <Link href={`/blog/${p.slug}`} className="bg-img"><img src={p.img} alt={p.title} /></Link>
              <div className="bg-meta"><Calendar size={14} /> <span>{p.date}</span> <i>/</i> <span>{p.category}</span></div>
              <h3><Link href={`/blog/${p.slug}`}>{p.title}</Link></h3>
            </Reveal>
          ))}
        </div>
      </section>
    );
  }

  if (variant === "g3") {
    return (
      <section className="bg-wrap bg-3">
        <div className="container bg-grid">
          {POSTS.slice(0, 6).map((p, i) => (
            <Reveal key={p.slug} className="bg-item" delay={(i % 3) * 100}>
              <Link href={`/blog/${p.slug}`} className="bg-img"><img src={p.img} alt={p.title} /></Link>
              <div className="bg-meta">
                <span className="bg-admin"><img src="/images/admin.png" alt="" /> Admin</span>
                <span><Calendar size={14} /> {p.date}</span>
              </div>
              <h3><Link href={`/blog/${p.slug}`}>{p.title}</Link></h3>
              <Link href={`/blog/${p.slug}`} className="bp-more">Read More <ArrowRight size={16} /></Link>
            </Reveal>
          ))}
        </div>
      </section>
    );
  }

  if (variant === "g4") {
    return (
      <section className="bg-wrap bg-4">
        <div className="container bg-grid">
          {POSTS.map((p, i) => (
            <Reveal key={p.slug} className="bg-item" delay={(i % 4) * 90}>
              <Link href={`/blog/${p.slug}`} className="bg-img"><img src={p.img} alt={p.title} /></Link>
              <div className="bg-meta"><Calendar size={14} /> <span>{p.date}</span></div>
              <h3><Link href={`/blog/${p.slug}`}>{p.title}</Link></h3>
            </Reveal>
          ))}
        </div>
      </section>
    );
  }

  // g2s : 2 colonnes + barre latérale (cartes à boîte superposée)
  return (
    <section className="blog-wrap">
      <div className="container blog-layout">
        <div className="bg-2s">
          {POSTS.map((p, i) => (
            <Reveal className="h3-post" key={p.slug} delay={(i % 2) * 100}>
              <Link href={`/blog/${p.slug}`} className="h3-post-img"><img src={p.img} alt={p.title} /></Link>
              <div className="h3-post-box">
                <span className="h3-date"><Calendar size={13} /> {p.date}</span>
                <h4><Link href={`/blog/${p.slug}`}>{p.title}</Link></h4>
                <Link href={`/blog/${p.slug}`} className="read-more">Read More <ArrowRight /></Link>
              </div>
            </Reveal>
          ))}
        </div>
        <BlogSidebar nested />
      </div>
    </section>
  );
}
