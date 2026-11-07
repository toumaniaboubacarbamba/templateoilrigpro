import ServiceDetail from "@/components/ServiceDetail";
import { SERVICES } from "@/data/services";

export const metadata = { title: "End-to-End Oil and Gas Solutions – Oilrigpro" };

// « Services With Sidebar » dans le menu d'origine
export default function ServiceSidebarPage() {
  return <ServiceDetail service={SERVICES[0]} sidebar />;
}
