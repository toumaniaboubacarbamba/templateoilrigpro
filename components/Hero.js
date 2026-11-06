"use client";
import { useEffect, useState } from "react";
import { Gear } from "./Icons";

const SLIDES = [
  { img: "/images/hero-1.webp", eyebrow: "Powering Global Energy Infrastructure", title: "Engineering the Energy Future", count: "4,20,000" },
  { img: "/images/hero-2.webp", eyebrow: "Driving the Energy Future", title: "Advancing the Energy Future", count: "5,20,000" },
  { img: "/images/hero-3.webp", eyebrow: "Global Offshore Operations", title: "Innovating the Energy Industry", count: "3,00,000" },
];

export default function Hero() {
  const [i, setI] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setI((n) => (n + 1) % SLIDES.length), 6500);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="hero">
      {SLIDES.map((s, idx) => (
        <div key={s.title} className={`hero-slide ${idx === i ? "active" : ""}`} style={{ backgroundImage: `url(${s.img})` }}>
          <div className="hero-overlay" />
          <div className="hero-content">
            <p className="hero-eyebrow">{s.eyebrow}</p>
            <h1>{s.title}</h1>
            <a href="#" className="btn btn-primary btn-lg">
              Request Consultation
            </a>
          </div>
          <div className="hero-side">
            <ul>
              <li>Safety</li>
              <li className="accent">Reliability</li>
              <li>Performance</li>
            </ul>
            <div className="hero-count">
              {s.count}
              <span>+</span>
            </div>
          </div>
        </div>
      ))}
      <div className="hero-dots">
        {SLIDES.map((s, idx) => (
          <button key={s.title} className={idx === i ? "on" : ""} aria-label={`Slide ${idx + 1}`} onClick={() => setI(idx)} />
        ))}
      </div>
    </section>
  );
}
