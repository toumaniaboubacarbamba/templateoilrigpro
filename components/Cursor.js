"use client";
import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

// Curseur personnalisé (boule + cercle) : uniquement sur la page d'accueil
export default function Cursor() {
  const dot = useRef(null);
  const ring = useRef(null);
  const pathname = usePathname();
  const enabled = pathname === "/";

  useEffect(() => {
    if (!enabled) return;
    // Pas de curseur personnalisé sur écran tactile
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const root = document.documentElement;
    root.classList.add("has-cursor");

    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;
    let rx = x;
    let ry = y;
    let raf;

    const onMove = (e) => {
      x = e.clientX;
      y = e.clientY;
      dot.current.style.opacity = 1;
      ring.current.style.opacity = 1;
      dot.current.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`;
    };
    const onOver = (e) => {
      const hover = e.target.closest("a, button, input, textarea, [role='button']");
      ring.current.classList.toggle("hover", !!hover);
      dot.current.classList.toggle("hover", !!hover);
    };
    const onDown = () => ring.current.classList.add("down");
    const onUp = () => ring.current.classList.remove("down");
    const onLeave = () => {
      dot.current.style.opacity = 0;
      ring.current.style.opacity = 0;
    };

    const loop = () => {
      rx += (x - rx) * 0.16;
      ry += (y - ry) * 0.16;
      ring.current.style.transform = `translate(${rx}px, ${ry}px) translate(-50%, -50%)`;
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", onOver);
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);
    document.addEventListener("mouseleave", onLeave);

    return () => {
      root.classList.remove("has-cursor");
      cancelAnimationFrame(raf);
      if (dot.current) dot.current.style.opacity = 0;
      if (ring.current) ring.current.style.opacity = 0;
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      document.removeEventListener("mouseleave", onLeave);
    };
  }, [enabled]);

  return (
    <>
      <div ref={ring} className="cursor-ring" aria-hidden="true" />
      <div ref={dot} className="cursor-dot" aria-hidden="true" />
    </>
  );
}
