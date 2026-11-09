"use client";
import { useEffect, useState } from "react";

const ITEMS = [
  { text: "Managing offshore energy projects requires precision, coordination, and technical strength. This team consistently demonstrates all three. Their structured planning, skilled workforce, and advanced equipment ensured our offshore installation was..", name: "Mia Hernandez", role: "Customer", img: "/images/avatar-mia.jpg" },
  { text: "Our organization values long-term partnerships built on trust and measurable results, and this team consistently exceeds expectations. Their deep industry knowledge, advanced technical capabilities, and commitment to quality have strengthened our infrastructure..", name: "Daniel Scott", role: "Client", img: "/images/avatar-daniel.webp" },
  { text: "Our organization values long-term partnerships built on trust and measurable results, and this team consistently exceeds expectations. We look forward to many more successful projects together..", name: "Kristen Stewart", role: "Investor", img: "/images/avatar-kristen.webp" },
];

export default function Testimonials5() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((n) => (n + 1) % ITEMS.length), 5500);
    return () => clearInterval(t);
  }, []);
  const t = ITEMS[i];
  return (
    <div className="h5-testi-slide" key={i}>
      <div className="h5-stars" aria-label="4 étoiles sur 5">★★★★<span>★</span></div>
      <p>{t.text}</p>
      <div className="h5-testi-author">
        <img src={t.img} alt={t.name} />
        <div><h5>{t.name}</h5><span>{t.role}</span></div>
      </div>
      <div className="h5-dots">
        {ITEMS.map((_, k) => (<button key={k} className={k === i ? "on" : ""} aria-label={`Témoignage ${k + 1}`} onClick={() => setI(k)} />))}
      </div>
    </div>
  );
}
