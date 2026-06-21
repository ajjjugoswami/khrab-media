import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SITE, BLOG_POSTS } from "@/lib/data";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `${SITE.url}/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `${SITE.url}/blog/${post.slug}`,
      type: "article",
      publishedTime: post.date,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) notFound();

  const related = BLOG_POSTS.filter((p) => p.slug !== slug && p.category === post.category).slice(0, 3);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    author: { "@type": "Organization", name: SITE.name },
    publisher: { "@type": "Organization", name: SITE.name, url: SITE.url },
    url: `${SITE.url}/blog/${post.slug}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="relative overflow-hidden py-16 md:py-24">
        <div className="mesh-bg" aria-hidden>
          <div className="mesh-blob animate-float-slow" style={{ width: 460, height: 460, top: -140, left: "20%", background: "radial-gradient(circle, #3b82f6, transparent 70%)" }} />
          <div className="mesh-blob animate-float-slower" style={{ width: 420, height: 420, bottom: -160, right: "10%", background: "radial-gradient(circle, #6366f1, transparent 70%)" }} />
        </div>
        <div className="container-custom relative z-10 max-w-3xl mx-auto text-center">
          <Link href="/blog" className="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 text-sm mb-6 transition-colors">
            ← Back to Blog
          </Link>
          <div>
            <span className="inline-block glass text-amber-300 text-xs font-semibold px-3 py-1 rounded-full mb-4">
              {post.category}
            </span>
          </div>
          <h1 className="text-3xl md:text-5xl font-black leading-tight mb-4 text-white">{post.title}</h1>
          <div className="flex items-center justify-center gap-3 text-gray-400 text-sm">
            <span>{post.date}</span>
            <span>·</span>
            <span>{post.readTime}</span>
            <span>·</span>
            <span>By {SITE.name}</span>
          </div>
        </div>
      </section>

      {/* Article body */}
      <article className="py-16">
        <div className="container-custom max-w-3xl mx-auto">
          <p className="text-xl text-gray-300 leading-relaxed mb-8 font-medium">{post.excerpt}</p>

          <div className="max-w-none text-gray-300 space-y-6 leading-relaxed">
            <p>
              In today&apos;s competitive digital landscape, having a clear marketing strategy is more critical than ever. Businesses that invest in proven, data-driven approaches consistently outperform those relying on guesswork or outdated tactics.
            </p>
            <h2 className="text-2xl font-black text-white mt-8 mb-4">Why This Matters for Your Business</h2>
            <p>
              The rules of digital marketing evolve constantly. Platforms update their algorithms, consumer behavior shifts, and new channels emerge. Staying ahead requires both deep expertise and constant adaptation — which is exactly what Kharb Media brings to every client engagement.
            </p>
            <h2 className="text-2xl font-black text-white mt-8 mb-4">Key Strategies That Drive Results</h2>
            <ul className="space-y-3 list-disc list-inside text-gray-400">
              <li>Understand your audience before creating any content</li>
              <li>Use data to inform every creative and strategic decision</li>
              <li>Test, measure, and optimize continuously</li>
              <li>Build authentic relationships rather than broadcasting at people</li>
              <li>Invest in channels that reach your specific ideal customer</li>
            </ul>
            <h2 className="text-2xl font-black text-white mt-8 mb-4">Working with the Right Partner</h2>
            <p>
              The most successful businesses don&apos;t try to master every marketing channel themselves — they partner with experts who specialize in delivering results. At Kharb Media, we&apos;ve helped 266+ clients across B2B and B2C sectors grow their online presence and revenue through tailored strategies.
            </p>
            <p>
              Whether you&apos;re looking to dominate search rankings, build a loyal social media following, or generate qualified leads at scale — we have the team and track record to make it happen.
            </p>
          </div>

          {/* CTA box */}
          <div className="mt-12 glass-card rounded-2xl p-8 text-center overflow-hidden">
            <h3 className="text-xl font-black text-white mb-3">
              Want These Results for Your Business?
            </h3>
            <p className="text-gray-400 mb-5">
              Book a free discovery call with our team and let&apos;s build a strategy tailored to your goals.
            </p>
            <Link
              href="/contact"
              className="btn-shine btn-primary px-6 py-3 rounded-xl inline-block"
            >
              Get a Free Consultation
            </Link>
          </div>
        </div>
      </article>

      {/* Related posts */}
      {related.length > 0 && (
        <section className="py-16">
          <div className="container-custom">
            <h2 className="text-2xl font-black text-white mb-8">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {related.map((p) => (
                <Link
                  key={p.slug}
                  href={`/blog/${p.slug}`}
                  className="card-hover glass-card group rounded-2xl overflow-hidden"
                >
                  <div className="bg-linear-to-br from-amber-500 to-orange-600 h-32" />
                  <div className="p-5">
                    <span className="text-xs text-gray-500">{p.date}</span>
                    <h3 className="font-bold text-white mt-1 group-hover:text-amber-300 transition-colors line-clamp-2">
                      {p.title}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
