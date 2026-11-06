import Hero from "@/components/Hero";
import Partners from "@/components/Partners";
import About from "@/components/About";
import Lenders from "@/components/Lenders";
import Services from "@/components/Services";
import Outreach from "@/components/Outreach";
import Faq from "@/components/Faq";
import Blog from "@/components/Blog";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <Partners />
        <About />
        <Lenders />
        <Services />
        <Outreach />
        <Faq />
        <Blog />
      </main>
    </>
  );
}
