"use client";
import { useEffect, useState } from "react";
import { ArrowRight, Calendar, Gear } from "./Icons";

const POSTS = [
  { img: "blog-1.webp", cat: "Operations", t: "Pipeline Operations in Oil Industry" },
  { img: "blog-2.webp", cat: "Energy", t: "Industrial Automation in Oil Operations" },
  { img: "blog-3.webp", cat: "Technology", t: "Oil and Gas Safety Operations" },
  { img: "blog-4.webp", cat: "Refining", t: "Oil and Gas Operations Overview" },
  { img: "blog-5.webp", cat: "Production", t: "Oil Exploration and Drilling Operations" },
  { img: "blog-6.webp", cat: "Onshore", t: "Upstream Oil and Gas Operations" },
];

export default function Blog() {
  const [start, setStart] = useState(0);
  const [perView, setPerView] = useState(3);

  useEffect(() => {
    const calc = () => setPerView(window.innerWidth < 700 ? 1 : window.innerWidth < 1024 ? 2 : 3);
    calc();
    window.addEventListener("resize", calc);
    return () => window.removeEventListener("resize", calc);
  }, []);

  useEffect(() => {
    const t = setInterval(() => setStart((s) => (s + 1) % POSTS.length), 4500);
    return () => clearInterval(t);
  }, []);

  const visible = Array.from({ length: perView }, (_, k) => POSTS[(start + k) % POSTS.length]);

  return (
    <section className="blog">
      <div className="container">
        <div className="blog-head">
          <div>
            <span className="eyebrow">Our Blog</span>
            <h2 className="title-xl">The Next Wave of Oilfield Technology</h2>
          </div>
          <a href="#" className="btn btn-primary btn-md">
            View All Blogs <Gear />
          </a>
        </div>

        <div className="blog-grid" style={{ gridTemplateColumns: `repeat(${perView}, 1fr)` }}>
          {visible.map((p, k) => (
            <article className="post" key={`${start}-${k}`}>
              <a href="#" className="post-img">
                <img src={`/images/${p.img}`} alt={p.t} />
              </a>
              <div className="post-meta">
                <Calendar />
                <span>November 12, 2025</span>
                <i>/</i>
                <span>{p.cat}</span>
              </div>
              <h4>{p.t}</h4>
              <a href="#" className="read-more">
                Read More <ArrowRight />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
