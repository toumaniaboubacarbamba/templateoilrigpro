import PageBanner from "@/components/PageBanner";
import ContactInfo from "@/components/ContactInfo";
import Faq from "@/components/Faq";

export const metadata = { title: "FAQ – Oilrigpro" };

export default function FaqPage() {
  return (
    <main>
      <PageBanner title="FAQ" crumbs={[{ label: "FAQ" }]} />
      <ContactInfo image="/images/faq-truck.webp" />
      <Faq />
    </main>
  );
}
