"use client";
import { useState } from "react";

export default function PostSlider({ images }) {
  const [i, setI] = useState(0);
  const n = images.length;
  return (
    <div className="post-slider">
      <img src={images[i]} alt="" />
      <button className="ps-prev" aria-label="Précédent" onClick={() => setI((i - 1 + n) % n)}>‹</button>
      <button className="ps-next" aria-label="Suivant" onClick={() => setI((i + 1) % n)}>›</button>
    </div>
  );
}
