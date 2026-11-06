"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Chevron, Gear, Search } from "./Icons";

const MENU = [
  { label: "Home", href: "/", active: "/", items: [["Home Default", "/"], ["Home 2", "#"], ["Home 3", "#"], ["Home 4", "#"], ["Home 5", "#"], ["Landing Page", "#"]] },
  { label: "Pages", href: "#", active: "pages", items: [["About us", "/about"], ["Team", "/team"], ["Team Single", "/team/karen-blake"], ["FAQ", "#"], ["Testimonial", "#"], ["Contact US", "#"]] },
  { label: "Services", href: "#", items: [["End-to-End Oil and Gas", "#"], ["Energy Project Planning", "#"], ["Oil and Gas Supply Chain", "#"], ["Offshore Oil and Gas", "#"], ["Field Engineering", "#"]] },
  { label: "Portfolio", href: "#", items: [["Portfolio Default", "#"], ["Portfolio Grid", "#"], ["Portfolio Grid-2", "#"], ["Portfolio Grid-3", "#"], ["Portfolio Grid-4", "#"], ["Portfolio Single", "#"]] },
  { label: "Blog", href: "#", items: [["Blog Default", "#"], ["Blog List", "#"], ["Blog Grid Overlay", "#"], ["Blog Grid", "#"], ["Blog Grid-2", "#"], ["Blog Grid-3", "#"], ["Blog Grid-4", "#"], ["2 Columns + Sidebar", "#"], ["Blog Single", "#"]] },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const isActive = (m) => (m.active === "/" ? pathname === "/" : m.active === "pages" ? pathname.startsWith("/about") || pathname.startsWith("/team") : false);

  return (
    <header className="site-header">
      <div className="header-inner">
        <Link href="/" className="logo">
          <img src="/images/logo.png" alt="Oilrig Pro" />
        </Link>

        <nav className={`main-nav ${open ? "open" : ""}`}>
          <ul>
            {MENU.map((m) => (
              <li key={m.label} className={isActive(m) ? "active" : ""}>
                <Link href={m.href}>
                  {m.label} <Chevron />
                </Link>
                <ul className="sub-menu">
                  {m.items.map(([label, href]) => (
                    <li key={label}>
                      <Link href={href} onClick={() => setOpen(false)}>{label}</Link>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </nav>

        <div className="header-actions">
          <button className="search-btn" aria-label="Search">
            <Search />
          </button>
          <a href="#" className="btn btn-primary btn-sm">
            Get In Touch <Gear />
          </a>
          <button className="burger" aria-label="Menu" onClick={() => setOpen(!open)}>
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  );
}
