import PageBanner from "@/components/PageBanner";
import BlogIndex from "@/components/BlogIndex";

export const metadata = { title: "Latest Posts – Oilrigpro" };

export default function BlogPage() {
  return (
    <main>
      <PageBanner title="Latest Posts" crumbs={[{ label: "Blog" }]} />
      <BlogIndex variant="default" />
    </main>
  );
}
