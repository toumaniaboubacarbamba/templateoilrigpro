"use client";
import { useEffect, useRef, useState } from "react";

export default function SkillBar({ label, value }) {
  const ref = useRef(null);
  const [on, setOn] = useState(false);

  useEffect(() => {
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        setOn(true);
        io.disconnect();
      }
    }, { threshold: 0.4 });
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, []);

  return (
    <div className="skill" ref={ref}>
      <div className="skill-top">
        <span>{label}</span>
        <span>{value}%</span>
      </div>
      <div className="skill-track">
        <div className="skill-fill" style={{ width: on ? `${value}%` : "0%" }} />
      </div>
    </div>
  );
}
