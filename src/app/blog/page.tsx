import type { Metadata } from "next";
import Link from "next/link";
import { SITE, BLOG_POSTS } from "@/lib/data";

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
      <section className="bg-gradient-to-br from-blue-50 to-indigo-50 py-16 md:py-24">
        <div className="container-custom text-center max-w-2xl mx-auto">
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-widest">Our Blog</span>
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 mt-3 mb-5">
            Digital Marketing Insights & Strategies
          </h1>
          <p className="text-gray-600 text-lg">
            Actionable strategies, industry-specific guides, and expert commentary from the Kharb Media team.
          </p>
        </div>
      </section>

      {/* Category Filter (visual only) */}
      <section className="border-b border-gray-100 bg-white sticky top-16 z-10">
        <div className="container-custom py-4 flex gap-3 overflow-x-auto">
          {categories.map((cat, i) => (
            <span
              key={cat}
              className={`px-4 py-1.5 rounded-full text-sm font-medium whitespace-nowrap cursor-pointer transition-colors ${
                i === 0
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-blue-50 hover:text-blue-600"
              }`}
            >
              {cat}
            </span>
          ))}
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {BLOG_POSTS.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-xl transition-all"
              >
                <div className="bg-gradient-to-br from-blue-500 to-indigo-600 h-48 flex items-end p-5">
                  <span className="bg-white/20 text-white text-xs font-semibold px-3 py-1 rounded-full backdrop-blur-sm">
                    {post.category}
                  </span>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-xs text-gray-400 mb-3">
                    <span>{post.date}</span>
                    <span>·</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h2 className="text-lg font-black text-gray-900 mb-3 group-hover:text-blue-600 transition-colors leading-snug">
                    {post.title}
                  </h2>
                  <p className="text-gray-500 text-sm leading-relaxed line-clamp-3">{post.excerpt}</p>
                  <p className="text-blue-600 font-semibold text-sm mt-4 group-hover:gap-2 flex items-center gap-1 transition-all">
                    Read Article <span>→</span>
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gray-50 text-center">
        <div className="container-custom max-w-xl mx-auto">
          <h2 className="text-2xl font-black text-gray-900 mb-3">
            Want a Custom Strategy for Your Business?
          </h2>
          <p className="text-gray-500 mb-6">
            Our experts can create a tailored digital marketing plan based on your industry and goals.
          </p>
          <Link
            href="/contact"
            className="bg-blue-600 text-white font-bold px-6 py-3 rounded-xl hover:bg-blue-700 transition-colors inline-block"
          >
            Get a Free Consultation
          </Link>
        </div>
      </section>
    </>
  );
}
