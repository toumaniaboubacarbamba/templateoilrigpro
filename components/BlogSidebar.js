import Link from "next/link";
import { ArrowUpRight, Calendar, Drop, SearchSm } from "./Icons";
import { CATEGORIES, LATEST, TAGS } from "@/data/posts";

function Widget({ nested, children }) {
  return nested ? (
    <div className="bs-widget">
      <div className="bs-in">{children}</div>
    </div>
  ) : (
    <div className="bs-widget">{children}</div>
  );
}

// nested : variante à double cadre (page « 2 Columns + Sidebar »)
export default function BlogSidebar({ nested = false }) {
  return (
    <aside className={`blog-side ${nested ? "nested" : ""}`}>
      <Widget nested={nested}>
        <h4><Drop size={16} /> Search</h4>
        <form className="bs-search" action="#">
          <input type="search" aria-label="Search" />
          <button type="button" aria-label="Search"><SearchSm /></button>
        </form>
      </Widget>

      <Widget nested={nested}>
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
      </Widget>

      <Widget nested={nested}>
        <h4><Drop size={16} /> Categories</h4>
        <ul className="bs-cats">
          {CATEGORIES.map((c) => (
            <li key={c}><ArrowUpRight size={14} /><a href="#">{c}</a></li>
          ))}
        </ul>
      </Widget>

      <Widget nested={nested}>
        <h4><Drop size={16} /> Popular Tags</h4>
        <div className="bs-tags">
          {TAGS.map((t) => (<a key={t} href="#">{t}</a>))}
        </div>
      </Widget>
    </aside>
  );
}
