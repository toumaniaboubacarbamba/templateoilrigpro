"use client";
import { useEffect, useState } from "react";
import Reveal from "./Reveal";
import TeamCard from "./TeamCard";
import { TEAM_CAROUSEL } from "@/data/team";

export default function TeamCarousel({ eyebrow = "Our Team", title = "People Who Power Possibility", members = TEAM_CAROUSEL }) {
  const [start, setStart] = useState(0);
  const [perView, setPerView] = useState(3);

  useEffect(() => {
    const calc = () => setPerView(window.innerWidth < 700 ? 1 : window.innerWidth < 1024 ? 2 : 3);
    calc();
    window.addEventListener("resize", calc);
    return () => window.removeEventListener("resize", calc);
  }, []);

  useEffect(() => {
    const t = setInterval(() => setStart((s) => (s + 1) % members.length), 4000);
    return () => clearInterval(t);
  }, []);

  const visible = Array.from({ length: perView }, (_, k) => members[(start + k) % members.length]);

  return (
    <section className="team-section">
      <div className="container">
        <Reveal className="team-head">
          <span className="eyebrow">{eyebrow}</span>
          <h2 className="title-xl navy">{title}</h2>
        </Reveal>
        <div className="team-grid" style={{ gridTemplateColumns: `repeat(${perView}, 1fr)` }}>
          {visible.map((m, k) => (
            <div className="team-slide" key={`${start}-${k}`}>
              <TeamCard member={m} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
