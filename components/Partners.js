const LOGOS = [
  ["partner-square.png", "Square"],
  ["partner-xfinity.png", "Xfinity"],
  ["partner-fusion.png", "Fusion"],
  ["partner-sysco.png", "Sysco"],
  ["partner-kotona.png", "Kotona"],
];

export default function Partners() {
  return (
    <section className="partners">
      <div className="partners-row">
        {LOGOS.map(([f, alt]) => (
          <div className="partner" key={alt}>
            <img src={`/images/${f}`} alt={alt} />
          </div>
        ))}
      </div>
    </section>
  );
}
