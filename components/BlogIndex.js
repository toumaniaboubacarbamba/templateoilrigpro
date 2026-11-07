"use client";
import { useState } from "react";
import Link from "next/link";
import BlogSidebar from "./BlogSidebar";
import Pagination from "./Pagination";
import { ArrowRight, Calendar } from "./Icons";
import { EXCERPT_LONG, EXCERPT_SHORT, NEWEST_FIRST, POSTS } from "@/data/posts";

// variant : "default" (cartes + sidebar) | "list" (liste horizontale + sidebar)
export default function BlogIndex({ variant = "default" }) {
  const [page, setPage] = useState(1);
  const list = variant === "default" ? NEWEST_FIRST : POSTS;
  const per = variant === "default" ? 3 : 5;
  const pages = Math.ceil(list.length / per);
  const items = list.slice((page - 1) * per, page * per);
  const go = (n) => { setPage(n); window.scrollTo({ top: 300, behavior: "smooth" }); };

  return (
    <section className="blog-wrap">
      <div className="container blog-layout">
        <div className="blog-main">
          {items.map((p) =>
            variant === "default" ? (
              <article className="bp-card" key={p.slug}>
                <Link href={`/blog/${p.slug}`} className="bp-img"><img src={p.imgBig || p.img} alt={p.title} /></Link>
                <div className="bp-meta">
                  <Calendar size={16} /> <span>{p.date}</span> <i>/</i> <span>{p.category}</span>
                </div>
                <h3 className="cap"><Link href={`/blog/${p.slug}`}>{p.title}</Link></h3>
                <p>{EXCERPT_LONG}</p>
                <Link href={`/blog/${p.slug}`} className="bp-more">Read More <ArrowRight size={16} /></Link>
              </article>
            ) : (
              <article className="bl-item" key={p.slug}>
                <Link href={`/blog/${p.slug}`} className="bl-img"><img src={p.img} alt={p.title} /></Link>
                <div className="bl-body">
                  <div className="bl-admin"><img src="/images/admin.png" alt="" /> Admin</div>
                  <h3><Link href={`/blog/${p.slug}`}>{p.title}</Link></h3>
                  <p>{EXCERPT_SHORT}</p>
                  <Link href={`/blog/${p.slug}`} className="bl-more">Read More <ArrowRight size={16} /></Link>
                </div>
              </article>
            )
          )}
          <Pagination page={page} pages={pages} onChange={go} />
        </div>
        <BlogSidebar />
      </div>
    </section>
  );
}
