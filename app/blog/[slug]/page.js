import Link from "next/link";
import { notFound } from "next/navigation";
import PageBanner from "@/components/PageBanner";
import BlogSidebar from "@/components/BlogSidebar";
import PostSlider from "@/components/PostSlider";
import { ArrowUpLeft, ArrowUpRight, Calendar, IconUser, Quote } from "@/components/Icons";
import { POSTS } from "@/data/posts";

export function generateStaticParams() {
  return POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const p = POSTS.find((x) => x.slug === slug);
  return { title: p ? `${p.title} – Oilrigpro` : "Blog – Oilrigpro" };
}

export default async function PostPage({ params }) {
  const { slug } = await params;
  const idx = POSTS.findIndex((p) => p.slug === slug);
  if (idx === -1) notFound();
  const post = POSTS[idx];
  const prev = idx > 0 ? POSTS[idx - 1] : null;
  const next = idx < POSTS.length - 1 ? POSTS[idx + 1] : null;

  return (
    <main>
      <PageBanner title={post.title} crumbs={[{ label: post.category, href: "/blog" }, { label: post.title }]} />

      <section className="blog-wrap">
        <div className="container blog-layout">
          <article className="post-single">
            <img className="ps-hero" src={post.imgBig || post.img} alt={post.title} />
            <div className="ps-meta">
              <span><IconUser size={13} /> Admin</span>
              <i>/</i>
              <span><Calendar size={15} /> {post.date}</span>
            </div>

            <p>
              There are many industries and organizations that depend on efficient systems to achieve sustainable growth and long-term success. From energy
              production and infrastructure development to industrial engineering and large-scale project management, operational excellence plays a critical
              role in maintaining competitiveness. With the right strategy, planning, and execution, businesses can streamline processes, improve safety
              standards, and enhance overall performance. <b>Our approach focuses on delivering measurable outcomes through innovation, collaboration, and continuous improvement.</b>
            </p>

            <blockquote className="ps-quote">
              <p>“From exploration to distribution, oil and gas engineering transforms complexity into dependable energy that supports modern life every day globally.”</p>
              <cite><u /> Petroleum Engineering</cite>
              <Quote size={44} />
            </blockquote>

            <h3>Transforming Oil and Gas Through Innovation</h3>
            <p>
              We combine technical expertise with industry insight to deliver solutions that are practical, cost-effective, and aligned with your strategic
              objectives. Our commitment to quality, safety, and innovation ensures that every project is completed to the highest standards. Through
              collaboration and forward-thinking <mark>methodologies, we empower businesses to operate more efficiently, reduce environmental impact,</mark> and
              achieve operational excellence on a global scale.
            </p>

            <div className="ps-feature">
              <PostSlider images={["/images/service-1.webp", "/images/service-2.webp", "/images/service-4.webp"]} />
              <div className="ps-lists">
                <h5>Energy Asset Management</h5>
                <ul><li>Oil and Gas Operations</li><li>Explore Our Energy Solutions</li></ul>
                <hr />
                <h5>Integrated Energy Services</h5>
                <ul><li>Discover Our Oilfield Capabilities</li><li>Energy Engineering Solutions</li></ul>
              </div>
            </div>

            <p>
              As global energy demand continues to grow, oilfield operations are evolving to meet higher standards of efficiency, safety, and sustainability.
              Strategic planning and engineering excellence are essential.
            </p>

            <div className="ps-tags"><a href="#">HSE</a></div>

            <div className="ps-nav">
              {prev ? (
                <Link href={`/blog/${prev.slug}`} className="ps-nav-box">
                  <span className="ps-circle"><ArrowUpLeft size={14} /></span>
                  <strong className="cap">{prev.title}</strong>
                </Link>
              ) : <span />}
              {next ? (
                <Link href={`/blog/${next.slug}`} className="ps-nav-box next">
                  <span className="ps-circle"><ArrowUpRight size={14} /></span>
                  <strong className="cap">{next.title}</strong>
                </Link>
              ) : <span />}
            </div>

            <form className="ps-reply" action="#">
              <h3>Leave a Reply</h3>
              <p className="ps-note">Your email address will not be published. Required fields are marked *</p>
              <label>Comment *<textarea rows={5} /></label>
              <label>Name *<input type="text" /></label>
              <label>Email *<input type="email" /></label>
              <label>Website<input type="text" /></label>
              <label className="ps-check"><input type="checkbox" /> Save my name, email, and website in this browser for the next time I comment.</label>
              <button type="button" className="btn btn-primary btn-md">Post Comment</button>
            </form>
          </article>

          <BlogSidebar />
        </div>
      </section>
    </main>
  );
}
