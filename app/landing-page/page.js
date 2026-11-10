import Hero from "@/components/Hero";
import Partners from "@/components/Partners";
import About from "@/components/About";
import Lenders from "@/components/Lenders";
import Services from "@/components/Services";
import Outreach from "@/components/Outreach";
import Faq from "@/components/Faq";
import Blog from "@/components/Blog";
import ContactSection from "@/components/ContactSection";

export const metadata = { title: "Landing Page – Oilrigpro" };

// Même contenu que l'accueil, avec un menu d'ancres et une section de contact en bas
export default function LandingPage() {
  return (
    <main className="landing">
      <div id="home"><Hero /></div>
      <Partners />
      <div id="about"><About /></div>
      <Lenders />
      <div id="services"><Services /></div>
      <div id="global"><Outreach /></div>
      <Faq />
      <div id="blog"><Blog /></div>
      <ContactSection id="contact" />
    </main>
  );
}
