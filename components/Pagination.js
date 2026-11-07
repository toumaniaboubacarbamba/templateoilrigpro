"use client";
import { ArrowRight, ArrowsLast } from "./Icons";

export default function Pagination({ page, pages, onChange }) {
  if (pages <= 1) return null;
  return (
    <div className="pager">
      {Array.from({ length: pages }, (_, i) => (
        <button key={i} className={page === i + 1 ? "on" : ""} onClick={() => onChange(i + 1)}>{i + 1}</button>
      ))}
      {page < pages && <button aria-label="Suivant" onClick={() => onChange(page + 1)}><ArrowRight size={12} /></button>}
      {page < pages && <button aria-label="Dernière" onClick={() => onChange(pages)}><ArrowsLast /></button>}
    </div>
  );
}
