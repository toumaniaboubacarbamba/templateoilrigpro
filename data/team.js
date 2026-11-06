export const TEAM = [
  { slug: "adam-lin", name: "Adam Lin", role: "Executive Officer", img: "/images/team-adam.webp" },
  { slug: "mei-tanaka", name: "Mei Tanaka", role: "Consultant", img: "/images/team-mei.webp" },
  { slug: "victor-ahmed", name: "Victor Ahmed", role: "Executive Officer", img: "/images/team-victor.webp" },
  { slug: "carlos-ramirez", name: "Carlos Ramirez", role: "Manager", img: "/images/team-carlos.webp" },
  { slug: "david-morgan", name: "David Morgan", role: "Operator", img: "/images/team-david.webp" },
  { slug: "karen-blake", name: "Karen Blake", role: "Manager", img: "/images/team-karen.webp" },
];

// Ordre utilisé par le carrousel de la page About
export const TEAM_CAROUSEL = ["victor-ahmed", "carlos-ramirez", "david-morgan", "adam-lin", "mei-tanaka"].map(
  (s) => TEAM.find((m) => m.slug === s)
);
