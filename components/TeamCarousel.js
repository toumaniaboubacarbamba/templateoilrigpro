"use client";
import { useEffect, useState } from "react";
import Reveal from "./Reveal";
import TeamCard from "./TeamCard";
import { TEAM_CAROUSEL } from "@/data/team";

export default function TeamCarousel() {
  const [start, setStart] = useState(0);
  const [perView, setPerView] = useState(3);

  useEffect(() => {
    const calc = () => setPerView(window.innerWidth < 700 ? 1 : window.innerWidth < 1024 ? 2 : 3);
    calc();
    window.addEventListener("resize", calc);
    return () => window.removeEventListener("resize", calc);
  }, []);

  useEffect(() => {
    const t = setInterval(() => setStart((s) => (s + 1) % TEAM_CAROUSEL.length), 4000);
    return () => clearInterval(t);
  }, []);

  const visible = Array.from({ length: perView }, (_, k) => TEAM_CAROUSEL[(start + k) % TEAM_CAROUSEL.length]);

  return (
    <section className="team-section">
      <div className="container">
        <Reveal className="team-head">
          <span className="eyebrow">Our Team</span>
          <h2 className="title-xl navy">People Who Power Possibility</h2>
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
