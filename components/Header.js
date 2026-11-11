"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Chevron, Gear, Search } from "./Icons";

// Chaque entrée : [label, href, sous-menu optionnel]
const MENU = [
  {
    label: "Home", href: "/", match: ["/"], exact: true,
    mega: [
      ["Home Default", "/", "/images/thumb-home-1.jpg"],
      ["Home 2", "/home-2", "/images/thumb-home-2.jpg"],
      ["Home 3", "/home-3", "/images/thumb-home-3.jpg"],
      ["Home 4", "/home-4", "/images/thumb-home-4.jpg"],
      ["Home 5", "/home-5", "/images/thumb-home-5.jpg"],
      ["Landing Page", "/landing-page", "/images/thumb-home-landing.jpg"],
    ],
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
    label: "Portfolio", href: "/portfolio", match: ["/portfolio"],
    items: [["Portfolio Default", "/portfolio"], ["Portfolio Grid", "#", [["Portfolio Grid-2", "/portfolio-grid-2"], ["Portfolio Grid-3", "/portfolio-grid-3"], ["Portfolio Grid-4", "/portfolio-grid-4"]]], ["Portfolio Single", "/portfolio/gas-glide"]],
  },
  {
    label: "Blog", href: "/blog", match: ["/blog"],
    items: [
      ["Blog Default", "/blog"],
      ["Blog List", "/blog-list"],
      ["Blog Grid Overlay", "/blog-grid-overlay"],
      ["Blog Grid", "#", [["Blog Grid-2", "/blog-grid-2"], ["Blog Grid-3", "/blog-grid-3"], ["Blog Grid-4", "/blog-grid-4"], ["2 Columns + Sidebar", "/blog-2-columns-sidebar"]]],
      ["Blog Single", "/blog/oil-and-gas-operations-overview"],
    ],
  },
];

const LANDING_MENU = [
  MENU[0],
  { label: "About Us", href: "#about", match: [] },
  { label: "Services", href: "#services", match: [] },
  { label: "Global", href: "#global", match: [] },
  { label: "Blog", href: "#blog", match: [] },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);
  const landing = pathname === "/landing-page";
  const light = pathname === "/home-4" || scrolled;
  const menu = landing ? LANDING_MENU : MENU;
  const HOMES = ["/home-2", "/home-3", "/home-4", "/home-5", "/landing-page"];
  const isActive = (m) => (m.mega ? pathname === "/" || HOMES.includes(pathname) : m.match.some((x) => pathname.startsWith(x)));
  const close = () => setOpen(false);

  return (
    <header className={`site-header ${light ? "light" : ""} ${scrolled ? "scrolled" : ""}`}>
      <div className="header-inner">
        <Link href="/" className="logo">
          <img src={light ? "/images/logo-dark.png" : "/images/logo.png"} alt="Oilrig Pro" />
        </Link>

        <nav className={`main-nav ${open ? "open" : ""}`}>
          <ul>
            {menu.map((m) => (
              <li key={m.label} className={`${isActive(m) ? "active" : ""} ${m.mega ? "has-mega" : ""}`}>
                <Link href={m.href}>
                  {m.label} {(m.mega || m.items) && <Chevron />}
                </Link>
                {m.mega && (
                  <div className="mega-menu">
                    {m.mega.map(([label, href, img]) => (
                      <Link key={label} href={href} className="mega-item" onClick={close}>
                        <span className="mega-thumb"><img src={img} alt={label} /></span>
                        <span className="mega-label">{label}</span>
                      </Link>
                    ))}
                  </div>
                )}
                {!m.mega && m.items && (
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
                )}
              </li>
            ))}
          </ul>
        </nav>

        <div className="header-actions">
          <button className="search-btn" aria-label="Search">
            <Search />
          </button>
          <Link href={landing ? "#contact" : "/contact"} className="btn btn-primary btn-sm">
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
