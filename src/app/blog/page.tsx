import type { Metadata } from "next";
import Link from "next/link";
import { SITE, BLOG_POSTS } from "@/lib/data";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Digital Marketing Blog",
  description:
    "Expert insights on SEO, social media marketing, PPC, and digital growth strategies from the Kharb Media team.",
  alternates: { canonical: `${SITE.url}/blog` },
  openGraph: {
    title: "Digital Marketing Blog | Kharb Media",
    description: "Industry-specific digital marketing strategies, tips, and insights.",
    url: `${SITE.url}/blog`,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Blog",
  name: `${SITE.name} Blog`,
  url: `${SITE.url}/blog`,
  description: "Expert digital marketing insights from Kharb Media",
  publisher: { "@type": "Organization", name: SITE.name, url: SITE.url },
};

const categories = ["All", "Social Media", "SEO", "Digital Marketing"];

export default function BlogPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="relative overflow-hidden py-16 md:py-24">
        <div className="mesh-bg" aria-hidden>
          <div className="mesh-blob animate-float-slow" style={{ width: 420, height: 420, top: -120, left: -40, background: "radial-gradient(circle, #3b82f6, transparent 70%)" }} />
          <div className="mesh-blob animate-float-slower" style={{ width: 380, height: 380, bottom: -160, right: -40, background: "radial-gradient(circle, #06b6d4, transparent 70%)" }} />
        </div>
        <div className="container-custom relative z-10 text-center max-w-2xl mx-auto">
          <span className="text-blue-400 font-semibold text-sm uppercase tracking-widest">Our Blog</span>
          <h1 className="text-4xl md:text-5xl font-black text-white mt-3 mb-5">
            Digital Marketing <span className="text-gradient">Insights &amp; Strategies</span>
          </h1>
          <p className="text-gray-300 text-lg">
            Actionable strategies, industry-specific guides, and expert commentary from the Kharb Media team.
          </p>
        </div>
      </section>

      {/* Category Filter (visual only) */}
      <section className="glass-nav border-b border-white/10 sticky top-16 z-10">
        <div className="container-custom py-4 flex gap-3 overflow-x-auto">
          {categories.map((cat, i) => (
            <span
              key={cat}
              className={`px-4 py-1.5 rounded-full text-sm font-medium whitespace-nowrap cursor-pointer transition-colors ${
                i === 0
                  ? "bg-linear-to-r from-blue-600 to-cyan-500 text-white"
                  : "glass text-gray-300 hover:text-blue-400"
              }`}
            >
              {cat}
            </span>
          ))}
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {BLOG_POSTS.map((post, i) => (
              <Reveal key={post.slug} delay={(i % 3) * 80}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="card-hover glass-card group block h-full rounded-2xl overflow-hidden"
                >
                  <div className="relative bg-linear-to-br from-blue-600 to-indigo-700 h-48 flex items-end p-5 overflow-hidden">
                    <div className="absolute inset-0 opacity-30 transition-transform duration-700 group-hover:scale-110" style={{ backgroundImage: "radial-gradient(circle at 30% 20%, white 0, transparent 50%)" }} />
                    <span className="relative glass text-white text-xs font-semibold px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-xs text-gray-500 mb-3">
                      <span>{post.date}</span>
                      <span>·</span>
                      <span>{post.readTime}</span>
                    </div>
                    <h2 className="text-lg font-black text-white mb-3 group-hover:text-blue-300 transition-colors leading-snug">
                      {post.title}
                    </h2>
                    <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">{post.excerpt}</p>
                    <p className="text-blue-400 font-semibold text-sm mt-4 group-hover:gap-2 flex items-center gap-1 transition-all">
                      Read Article <span>→</span>
                    </p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 text-center">
        <div className="container-custom max-w-xl mx-auto">
          <div className="glass-card rounded-3xl p-10 overflow-hidden">
            <h2 className="text-2xl font-black text-white mb-3">
              Want a Custom Strategy for Your Business?
            </h2>
            <p className="text-gray-400 mb-6">
              Our experts can create a tailored digital marketing plan based on your industry and goals.
            </p>
            <Link
              href="/contact"
              className="btn-shine btn-primary px-6 py-3 rounded-xl inline-block"
            >
              Get a Free Consultation
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
