import type { Metadata } from "next";
import Link from "next/link";
import { SITE, STATS, SERVICES, TESTIMONIALS, FAQS, BLOG_POSTS } from "@/lib/data";

export const metadata: Metadata = {
  title: `${SITE.name} | ${SITE.tagline}`,
  description: SITE.description,
  alternates: { canonical: SITE.url },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: SITE.name,
  url: SITE.url,
  telephone: SITE.phone,
  email: SITE.email,
  description: SITE.description,
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "643",
  },
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* HERO */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-20 md:py-28">
        <div className="container-custom text-center max-w-4xl mx-auto">
          <span className="inline-block bg-blue-100 text-blue-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
            🚀 India&apos;s Results-Driven Digital Marketing Agency
          </span>
          <h1 className="text-4xl md:text-6xl font-black text-gray-900 leading-tight mb-6">
            Grow Your Business with{" "}
            <span className="text-blue-600">Data-Driven</span> Digital Marketing
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed max-w-2xl mx-auto">
            We help B2B and B2C businesses scale through SEO, Social Media, PPC, Web Design, and Content — delivering real results, not vanity metrics.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-blue-600 text-white font-bold px-8 py-4 rounded-xl hover:bg-blue-700 transition-colors text-lg shadow-lg hover:shadow-xl"
            >
              Get a Free Consultation
            </Link>
            <Link
              href="/services"
              className="bg-white text-gray-900 font-bold px-8 py-4 rounded-xl hover:bg-gray-50 transition-colors text-lg border border-gray-200 shadow-sm"
            >
              Explore Our Services
            </Link>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-blue-600 py-12">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            {STATS.map((s) => (
              <div key={s.label}>
                <p className="text-3xl md:text-4xl font-black mb-1">{s.value}</p>
                <p className="text-blue-100 text-sm font-medium">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES OVERVIEW */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-widest">What We Do</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mt-2 mb-4">
              Full-Stack Digital Marketing Services
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              From search rankings to social media growth — we cover every channel your customers use.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.slice(0, 6).map((service) => (
              <Link
                key={service.slug}
                href={`/services#${service.slug}`}
                className="group p-6 rounded-2xl border border-gray-100 hover:border-blue-200 hover:shadow-lg transition-all bg-white"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">{service.description}</p>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 bg-blue-600 text-white font-semibold px-6 py-3 rounded-xl hover:bg-blue-700 transition-colors"
            >
              View All 15 Services →
            </Link>
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-blue-600 font-semibold text-sm uppercase tracking-widest">Why Kharb Media</span>
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 mt-2 mb-6">
                We Don&apos;t Just Run Campaigns — We Drive Growth
              </h2>
              <div className="space-y-5">
                {[
                  { icon: "📊", title: "100% Data-Driven", desc: "Every decision is backed by analytics, testing, and performance data — no guesswork." },
                  { icon: "🤝", title: "Long-Term Partnership", desc: "We build lasting relationships focused on sustainable growth, not short-term wins." },
                  { icon: "🔍", title: "Transparent Reporting", desc: "You always know what we're doing and why — clear monthly reports, no fluff." },
                  { icon: "🏆", title: "Proven Track Record", desc: "282+ completed projects and 643+ 5-star reviews across industries." },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <span className="text-2xl flex-shrink-0">{item.icon}</span>
                    <div>
                      <h3 className="font-bold text-gray-900">{item.title}</h3>
                      <p className="text-gray-500 text-sm mt-0.5">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <p className="text-5xl font-black text-blue-600 mb-2">8+</p>
              <p className="text-gray-700 font-semibold text-lg mb-6">Years of Collective Experience</p>
              <p className="text-gray-500 leading-relaxed mb-6">
                Founded by Vivek Kharb, our agency brings 8 years of hands-on digital marketing expertise to every client engagement. We&apos;ve helped businesses across industries multiply their revenue through smart, scalable strategies.
              </p>
              <Link href="/about" className="text-blue-600 font-semibold hover:text-blue-700 transition-colors">
                Meet Our Team →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-widest">Client Reviews</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mt-2">
              What Our Clients Say
            </h2>
            <p className="text-yellow-500 text-2xl mt-2">
              ★★★★★ <span className="text-gray-500 text-base">4.9/5 from 643+ reviews</span>
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {TESTIMONIALS.map((t) => (
              <div key={t.name} className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                <p className="text-yellow-400 mb-3">{"★".repeat(t.rating)}</p>
                <p className="text-gray-700 leading-relaxed mb-4 italic">&ldquo;{t.text}&rdquo;</p>
                <div>
                  <p className="font-bold text-gray-900">{t.name}</p>
                  <p className="text-gray-500 text-sm">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-widest">FAQ</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mt-2">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="space-y-4">
            {FAQS.map((faq) => (
              <div key={faq.q} className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
                <h3 className="font-bold text-gray-900 mb-2">{faq.q}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BLOG PREVIEW */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-widest">Latest Insights</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mt-2">From Our Blog</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {BLOG_POSTS.slice(0, 3).map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group bg-gray-50 rounded-2xl overflow-hidden border border-gray-100 hover:shadow-lg transition-all"
              >
                <div className="bg-gradient-to-br from-blue-500 to-indigo-600 h-40 flex items-center justify-center">
                  <span className="text-white font-bold text-sm px-4 text-center">{post.category}</span>
                </div>
                <div className="p-5">
                  <span className="text-xs text-gray-400">{post.date} · {post.readTime}</span>
                  <h3 className="font-bold text-gray-900 mt-2 mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-500 text-sm line-clamp-2">{post.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/blog" className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors">
              View All Articles →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="py-16 bg-blue-600">
        <div className="container-custom text-center text-white">
          <h2 className="text-3xl md:text-4xl font-black mb-4">
            Ready to Grow Your Business?
          </h2>
          <p className="text-blue-100 text-lg mb-8 max-w-xl mx-auto">
            Book a free 30-minute discovery call and let&apos;s build a strategy tailored to your goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-blue-600 font-bold px-8 py-4 rounded-xl hover:bg-blue-50 transition-colors text-lg shadow-lg"
            >
              Book Free Consultation
            </Link>
            <a
              href={`https://wa.me/${SITE.phone.replace(/\D/g, "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white font-bold px-8 py-4 rounded-xl hover:bg-green-600 transition-colors text-lg shadow-lg"
            >
              💬 WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
