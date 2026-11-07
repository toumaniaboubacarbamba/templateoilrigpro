import Link from "next/link";
import { ArrowUpRight, Bell, Drop, Send } from "./Icons";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-widgets">
        <div className="container">
          <div className="footer-cols">
            <div className="fcol fcol-brand">
              <Link href="/"><img src="/images/logo-footer.png" alt="Oilrig Pro" /></Link>
              <p>Delivering excellence across global offshore energy operations.</p>
            </div>
            <div className="fcol">
              <h2><Drop /> Quicklink</h2>
              <ul>
                {[["About us", "/about"], ["Team", "/team"], ["Testimonial", "/testimonial"]].map(([l, h]) => (
                  <li key={l}><ArrowUpRight /><Link href={h}>{l}</Link></li>
                ))}
              </ul>
            </div>
            <div className="fcol">
              <h2><Drop /> Service List</h2>
              <ul>
                {[["End-to-End Oil", "/service/end-to-end-oil-and-gas-solutions"], ["Energy Project", "/service/energy-project-planning-and-execution"], ["Supply Chain", "/service/oil-and-gas-supply-chain-solutions"]].map(([l, h]) => (
                  <li key={l}><ArrowUpRight /><Link href={h}>{l}</Link></li>
                ))}
              </ul>
            </div>
            <div className="fcol">
              <h2><Drop /> Get Updates</h2>
              <form className="subscribe" action="#">
                <input type="email" placeholder="Email Address" aria-label="Email Address" />
                <button type="button" aria-label="Envoyer"><Send /></button>
              </form>
              <p className="sub-note"><Bell /> Subscribe for Investment Tips.</p>
            </div>
          </div>

          <div className="footer-big">
            <div className="big-word">Oilrigpro</div>
            <img className="stripes" src="/images/stripes.gif" alt="" />
            <div className="contact">
              <a href="mailto:info@oilrigpro.com">info@oilrigpro.com</a>
              <a href="tel:+15284567592">+ 1 (528) 456-7592</a>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        © 2026 ToumaniDev – reproduction du template All rights reserved. <a href="#">oilrigpro</a>. Designed by <a href="#">Zozothemes</a>
      </div>
    </footer>
  );
}
