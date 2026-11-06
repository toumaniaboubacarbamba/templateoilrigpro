"use client";
import { useEffect, useState } from "react";

export default function ScrollTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <button className={`scroll-top ${show ? "show" : ""}`} aria-label="Retour en haut" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
      <svg width="16" height="18" viewBox="0 0 16 18" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
        <path d="M8 17V2M2 7.5L8 1.5l6 6" />
      </svg>
    </button>
  );
}
