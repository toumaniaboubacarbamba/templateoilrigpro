"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Chevron, Gear, Search } from "./Icons";

// Chaque entrée : [label, href, sous-menu optionnel]
const MENU = [
  {
    label: "Home", href: "/", match: ["/"],
    items: [["Home Default", "/"], ["Home 2", "#"], ["Home 3", "#"], ["Home 4", "#"], ["Home 5", "#"], ["Landing Page", "#"]],
  },
  {
    label: "Pages", href: "#", match: ["/about", "/team", "/faq", "/testimonial", "/contact", "/services-default", "/service-", "/end-to-end"],
    items: [
      ["About us", "/about"],
      ["Team", "/team"],
      ["Team Single", "/team/karen-blake"],
      ["FAQ", "/faq"],
      ["Testimonial", "/testimonial"],
      ["Services Styles", "#", [
        ["Services Default", "/services-default"],
        ["Classic Style", "/service-classic-style"],
        ["Modern Style", "/service-modern-style"],
        ["Classic Pro", "/service-classic-pro"],
        ["Services With Sidebar", "/end-to-end-oil-and-gas-solutions"],
      ]],
      ["Contact US", "/contact"],
    ],
  },
  {
    label: "Services", href: "/service", match: ["/service/"],
    items: [
      ["End-to-End Oil and Gas", "/service/end-to-end-oil-and-gas-solutions"],
      ["Energy Project Planning", "/service/energy-project-planning-and-execution"],
      ["Oil and Gas Supply Chain", "/service/oil-and-gas-supply-chain-solutions"],
      ["Offshore Oil and Gas", "/service/offshore-oil-and-gas-support-services"],
      ["Field Engineering", "/service/field-engineering-and-technical-support"],
    ],
  },
  {
    label: "Portfolio", href: "#", match: [],
    items: [["Portfolio Default", "#"], ["Portfolio Grid", "#"], ["Portfolio Grid-2", "#"], ["Portfolio Grid-3", "#"], ["Portfolio Grid-4", "#"], ["Portfolio Single", "#"]],
  },
  {
    label: "Blog", href: "#", match: [],
    items: [["Blog Default", "#"], ["Blog List", "#"], ["Blog Grid Overlay", "#"], ["Blog Grid", "#"], ["Blog Grid-2", "#"], ["Blog Grid-3", "#"], ["Blog Grid-4", "#"], ["2 Columns + Sidebar", "#"], ["Blog Single", "#"]],
  },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const isActive = (m) => m.match.some((x) => (x === "/" ? pathname === "/" : pathname.startsWith(x)));
  const close = () => setOpen(false);

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
                  {m.items.map(([label, href, children]) => (
                    <li key={label} className={children ? "has-children" : ""}>
                      <Link href={href} onClick={children ? undefined : close}>
                        {label} {children && <Chevron />}
                      </Link>
                      {children && (
                        <ul className="sub-menu sub-sub">
                          {children.map(([l2, h2]) => (
                            <li key={l2}>
                              <Link href={h2} onClick={close}>{l2}</Link>
                            </li>
                          ))}
                        </ul>
                      )}
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
          <Link href="/contact" className="btn btn-primary btn-sm">
            Get In Touch <Gear />
          </Link>
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
