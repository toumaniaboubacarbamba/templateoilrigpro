import Link from "next/link";
import { ArrowUpRight, Calendar, Drop, SearchSm } from "./Icons";
import { CATEGORIES, LATEST, TAGS } from "@/data/posts";

export default function BlogSidebar() {
  return (
    <aside className="blog-side">
      <div className="bs-widget">
        <h4><Drop size={16} /> Search</h4>
        <form className="bs-search" action="#">
          <input type="search" aria-label="Search" />
          <button type="button" aria-label="Search"><SearchSm /></button>
        </form>
      </div>

      <div className="bs-widget">
        <h4><Drop size={16} /> Latest Posts</h4>
        <ul className="bs-latest">
          {LATEST.map((p) => (
            <li key={p.slug}>
              <Link href={`/blog/${p.slug}`} className="bs-thumb"><img src={p.thumb || p.img} alt="" /></Link>
              <div>
                <Link href={`/blog/${p.slug}`} className="bs-title">{p.title}</Link>
                <span className="bs-date"><Calendar size={13} /> {p.date}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="bs-widget">
        <h4><Drop size={16} /> Categories</h4>
        <ul className="bs-cats">
          {CATEGORIES.map((c) => (
            <li key={c}><ArrowUpRight size={14} /><a href="#">{c}</a></li>
          ))}
        </ul>
      </div>

      <div className="bs-widget">
        <h4><Drop size={16} /> Popular Tags</h4>
        <div className="bs-tags">
          {TAGS.map((t) => (<a key={t} href="#">{t}</a>))}
        </div>
      </div>
    </aside>
  );
}
