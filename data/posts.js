const TXT = "There are many industries and organizations that depend on efficient systems to achieve sustainable growth and long-term success. From energy production and infrastructure development to industrial..";

// Ordre « ancien → récent » (celui de Blog List / Blog Grid Overlay)
export const POSTS = [
  { slug: "oil-exploration-and-drilling-operations", title: "Oil Exploration and Drilling Operations", date: "November 10, 2025", category: "Drilling", img: "/images/blog-8.webp" },
  { slug: "energy-transportation-and-pipeline", title: "Energy Transportation and Pipeline", date: "November 12, 2025", category: "Onshore", img: "/images/blog-7.webp" },
  { slug: "oil-and-gas-safety-operations", title: "Oil and Gas Safety Operations", date: "November 12, 2025", category: "Technology", img: "/images/blog-3.webp" },
  { slug: "industrial-automation-in-oil-operations", title: "Industrial Automation in Oil Operations", date: "November 12, 2025", category: "Energy", img: "/images/blog-2.webp" },
  { slug: "pipeline-operations-in-oil-industry", title: "Pipeline Operations in Oil Industry", date: "November 12, 2025", category: "Operations", img: "/images/blog-1.webp", thumb: "/images/thumb-pipeline.webp" },
  { slug: "upstream-oil-and-gas-operations", title: "Upstream Oil and Gas Operations", date: "November 12, 2025", category: "Onshore", img: "/images/blog-6.webp", imgBig: "/images/blog-big-upstream.webp", thumb: "/images/thumb-upstream.webp" },
  { slug: "oil-exploration-and-drilling-operations-2", title: "Oil Exploration and Drilling Operations", date: "November 12, 2025", category: "Production", img: "/images/blog-5.webp", imgBig: "/images/blog-big-exploration.webp", thumb: "/images/thumb-exploration.webp" },
  { slug: "oil-and-gas-operations-overview", title: "Oil and Gas Operations Overview", date: "November 12, 2025", category: "Refining", img: "/images/blog-4.webp", imgBig: "/images/blog-big-overview.webp", thumb: "/images/thumb-overview.webp" },
];

export const EXCERPT_LONG = TXT;
export const EXCERPT_SHORT = "There are many industries and organizations that depend on efficient systems to..";

export const LATEST = [...POSTS].reverse().slice(0, 4);
export const NEWEST_FIRST = [...POSTS].reverse();

export const CATEGORIES = ["Drilling", "Energy", "Onshore", "Operations", "Production", "Refining", "Technology"];
export const TAGS = ["Fuelled", "HSE", "Industry", "Oil", "Pipeline", "Renew", "Safety"];
