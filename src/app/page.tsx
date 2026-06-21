import type { Metadata } from "next";
import Link from "next/link";
import { SITE, STATS, SERVICES, TESTIMONIALS, FAQS, BLOG_POSTS } from "@/lib/data";
import Reveal from "@/components/Reveal";
import CountUp from "@/components/CountUp";
import { getServiceIcon } from "@/lib/icons";
import {
  ArrowRight as FiArrowRight,
  BarChart3 as FiBarChart2,
  Users as FiUsers,
  Eye as FiEye,
  Award as FiAward,
  Star as FiStar,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

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

const TRUST_WORDS = [
  "SEO", "Social Media", "PPC", "Web Design", "Content", "Video Editing",
  "Email Marketing", "Local SEO", "Branding", "Lead Generation",
];

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* HERO */}
      <section className="relative overflow-hidden py-24 md:py-32">
        {/* Animated mesh blobs */}
        <div className="mesh-bg" aria-hidden>
          <div className="mesh-blob animate-float-slow" style={{ width: 460, height: 460, top: -120, left: -80, background: "radial-gradient(circle, #3b82f6, transparent 70%)" }} />
          <div className="mesh-blob animate-float-slower" style={{ width: 520, height: 520, top: 20, right: -140, background: "radial-gradient(circle, #06b6d4, transparent 70%)" }} />
          <div className="mesh-blob animate-float-slow" style={{ width: 400, height: 400, bottom: -160, left: "40%", background: "radial-gradient(circle, #6366f1, transparent 70%)", animationDelay: "-6s" }} />
        </div>
        {/* Subtle grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.5] pointer-events-none"
          aria-hidden
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)",
            backgroundSize: "44px 44px",
            maskImage: "radial-gradient(ellipse 70% 60% at 50% 40%, black, transparent)",
            WebkitMaskImage: "radial-gradient(ellipse 70% 60% at 50% 40%, black, transparent)",
          }}
        />

        <div className="container-custom relative z-10 text-center max-w-4xl mx-auto">
          <Reveal>
            <span className="inline-flex items-center gap-2 glass text-blue-300 text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75 animate-ping" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-500" />
              </span>
              India&apos;s Results-Driven Digital Marketing Agency
            </span>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="text-4xl md:text-6xl font-black text-white leading-[1.08] mb-6">
              Grow Your Business with{" "}
              <span className="text-gradient animate-gradient">Data-Driven</span>{" "}
              Digital Marketing
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="text-lg md:text-xl text-gray-300 mb-9 leading-relaxed max-w-2xl mx-auto">
              We help B2B and B2C businesses scale through SEO, Social Media, PPC, Web Design, and Content &mdash; delivering real results, not vanity metrics.
            </p>
          </Reveal>

          <Reveal delay={240}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="btn-shine bg-linear-to-r from-blue-600 to-cyan-500 text-white font-bold px-8 py-4 rounded-xl text-lg shadow-xl shadow-blue-500/30 hover:shadow-2xl hover:shadow-blue-500/50 hover:-translate-y-1 transition-all duration-300"
              >
                Get a Free Consultation
              </Link>
              <Link
                href="/services"
                className="glass text-white font-bold px-8 py-4 rounded-xl text-lg hover:bg-white/10 hover:-translate-y-1 transition-all duration-300"
              >
                Explore Our Services
              </Link>
            </div>
          </Reveal>

          <Reveal delay={320}>
            <p className="mt-8 text-sm text-gray-400 flex items-center justify-center gap-2">
              <span className="flex text-yellow-400">
                {Array.from({ length: 5 }).map((_, i) => (
                  <FiStar key={i} className="fill-current h-4 w-4" />
                ))}
              </span>
              Rated 4.9/5 by 643+ happy clients
            </p>
          </Reveal>
        </div>
      </section>

      {/* TRUST MARQUEE */}
      <section className="glass border-y border-white/5 py-5 overflow-hidden">
        <div className="flex w-max animate-marquee gap-12 whitespace-nowrap">
          {[...TRUST_WORDS, ...TRUST_WORDS].map((word, i) => (
            <span key={i} className="text-gray-500 font-semibold text-sm uppercase tracking-widest flex items-center gap-12">
              {word}
              <span className="text-blue-500/60">&#9670;</span>
            </span>
          ))}
        </div>
      </section>

      {/* STATS */}
      <section className="relative overflow-hidden py-16">
        <div className="mesh-bg" aria-hidden>
          <div className="mesh-blob animate-float-slower" style={{ width: 500, height: 500, top: -160, left: "50%", background: "radial-gradient(circle, #1d4ed8, transparent 70%)", opacity: 0.25 }} />
        </div>
        <div className="container-custom relative">
          <div className="glass-card relative grid grid-cols-2 md:grid-cols-4 gap-8 text-center rounded-3xl p-10 overflow-hidden">
            {STATS.map((s, i) => (
              <Reveal key={s.label} delay={i * 100}>
                <p className="text-4xl md:text-5xl font-black mb-1 tabular-nums text-gradient">
                  <CountUp value={s.value} />
                </p>
                <p className="text-gray-400 text-sm font-medium">{s.label}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES OVERVIEW */}
      <section className="py-24">
        <div className="container-custom">
          <Reveal className="text-center mb-14">
            <span className="text-blue-400 font-semibold text-sm uppercase tracking-widest">What We Do</span>
            <h2 className="text-3xl md:text-4xl font-black text-white mt-2 mb-4">
              Full-Stack Digital Marketing Services
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              From search rankings to social media growth &mdash; we cover every channel your customers use.
            </p>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.slice(0, 6).map((service, i) => {
              const Icon = getServiceIcon(service.slug);
              return (
                <Reveal key={service.slug} delay={(i % 3) * 90}>
                  <Link
                    href={`/services#${service.slug}`}
                    className="card-hover glass-card group relative block h-full p-7 rounded-2xl overflow-hidden"
                  >
                    <span className="absolute inset-x-0 top-0 h-1 bg-linear-to-r from-blue-500 to-cyan-400 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
                    <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-linear-to-br from-blue-600 to-cyan-500 text-white mb-4 shadow-lg shadow-blue-500/30 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6">
                      <Icon className="h-7 w-7" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{service.description}</p>
                    <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-blue-400 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                      Learn more <FiArrowRight className="h-4 w-4" />
                    </span>
                  </Link>
                </Reveal>
              );
            })}
          </div>
          <Reveal className="text-center mt-12">
            <Link
              href="/services"
              className="btn-shine inline-flex items-center gap-2 bg-linear-to-r from-blue-600 to-cyan-500 text-white font-semibold px-6 py-3 rounded-xl shadow-lg shadow-blue-500/25 hover:-translate-y-0.5 transition-all duration-300"
            >
              View All 15 Services <FiArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* WHY US */}
      <section className="py-24">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <Reveal>
              <span className="text-blue-400 font-semibold text-sm uppercase tracking-widest">Why Kharb Media</span>
              <h2 className="text-3xl md:text-4xl font-black text-white mt-2 mb-6">
                We Don&apos;t Just Run Campaigns &mdash; We Drive Growth
              </h2>
              <div className="space-y-3">
                {[
                  { Icon: FiBarChart2, title: "100% Data-Driven", desc: "Every decision is backed by analytics, testing, and performance data — no guesswork." },
                  { Icon: FiUsers, title: "Long-Term Partnership", desc: "We build lasting relationships focused on sustainable growth, not short-term wins." },
                  { Icon: FiEye, title: "Transparent Reporting", desc: "You always know what we're doing and why — clear monthly reports, no fluff." },
                  { Icon: FiAward, title: "Proven Track Record", desc: "282+ completed projects and 643+ 5-star reviews across industries." },
                ].map((item, i) => (
                  <Reveal key={item.title} delay={i * 80}>
                    <div className="card-hover glass flex gap-4 rounded-xl p-4">
                      <span className="shrink-0 flex h-11 w-11 items-center justify-center rounded-xl bg-linear-to-br from-blue-600 to-cyan-500 text-white shadow-md shadow-blue-500/30">
                        <item.Icon className="h-5 w-5" />
                      </span>
                      <div>
                        <h3 className="font-bold text-white">{item.title}</h3>
                        <p className="text-gray-400 text-sm mt-0.5">{item.desc}</p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </Reveal>

            <Reveal delay={150}>
              <div className="relative">
                <div className="absolute -inset-4 bg-linear-to-br from-blue-600/30 to-cyan-500/30 rounded-3xl blur-3xl" aria-hidden />
                <div className="glass-card relative rounded-3xl p-8 overflow-hidden">
                  <p className="text-6xl font-black text-gradient mb-2">
                    <CountUp value="8+" />
                  </p>
                  <p className="text-gray-200 font-semibold text-lg mb-6">Years of Collective Experience</p>
                  <p className="text-gray-400 leading-relaxed mb-6">
                    Founded by Vivek Kharb, our agency brings 8 years of hands-on digital marketing expertise to every client engagement. We&apos;ve helped businesses across industries multiply their revenue through smart, scalable strategies.
                  </p>
                  <Link href="/about" className="inline-flex items-center gap-1 text-blue-400 font-semibold hover:gap-2 transition-all">
                    Meet Our Team <FiArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24">
        <div className="container-custom">
          <Reveal className="text-center mb-14">
            <span className="text-blue-400 font-semibold text-sm uppercase tracking-widest">Client Reviews</span>
            <h2 className="text-3xl md:text-4xl font-black text-white mt-2">
              What Our Clients Say
            </h2>
            <p className="flex items-center justify-center gap-2 mt-3">
              <span className="flex text-yellow-400 text-xl">
                {Array.from({ length: 5 }).map((_, i) => (
                  <FiStar key={i} className="fill-current h-5 w-5" />
                ))}
              </span>
              <span className="text-gray-400 text-base">4.9/5 from 643+ reviews</span>
            </p>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {TESTIMONIALS.map((t, i) => (
              <Reveal key={t.name} delay={(i % 2) * 100}>
                <div className="card-hover glass-card relative h-full rounded-2xl p-7 overflow-hidden">
                  <span className="absolute top-5 right-6 text-6xl leading-none text-white/5 font-serif select-none" aria-hidden>&rdquo;</span>
                  <p className="flex text-yellow-400 mb-3">
                    {Array.from({ length: t.rating }).map((_, idx) => (
                      <FiStar key={idx} className="fill-current h-4 w-4" />
                    ))}
                  </p>
                  <p className="text-gray-300 leading-relaxed mb-5 italic relative z-10">&ldquo;{t.text}&rdquo;</p>
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-linear-to-br from-blue-600 to-cyan-500 text-white font-bold text-sm">
                      {t.name.charAt(0)}
                    </span>
                    <div>
                      <p className="font-bold text-white">{t.name}</p>
                      <p className="text-gray-400 text-sm">{t.role}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24">
        <div className="container-custom max-w-3xl mx-auto">
          <Reveal className="text-center mb-12">
            <span className="text-blue-400 font-semibold text-sm uppercase tracking-widest">FAQ</span>
            <h2 className="text-3xl md:text-4xl font-black text-white mt-2">
              Frequently Asked Questions
            </h2>
          </Reveal>
          <div className="space-y-4">
            {FAQS.map((faq, i) => (
              <Reveal key={faq.q} delay={i * 60}>
                <details className="card-hover glass-card group rounded-xl overflow-hidden">
                  <summary className="flex cursor-pointer items-center justify-between gap-4 p-5 font-bold text-white list-none">
                    {faq.q}
                    <span className="shrink-0 flex h-7 w-7 items-center justify-center rounded-full bg-blue-500/15 text-blue-400 transition-transform duration-300 group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <p className="px-5 pb-5 text-gray-400 text-sm leading-relaxed">{faq.a}</p>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* BLOG PREVIEW */}
      <section className="py-24">
        <div className="container-custom">
          <Reveal className="text-center mb-14">
            <span className="text-blue-400 font-semibold text-sm uppercase tracking-widest">Latest Insights</span>
            <h2 className="text-3xl md:text-4xl font-black text-white mt-2">From Our Blog</h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {BLOG_POSTS.slice(0, 3).map((post, i) => (
              <Reveal key={post.slug} delay={i * 100}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="card-hover glass-card group block h-full rounded-2xl overflow-hidden"
                >
                  <div className="relative h-44 overflow-hidden bg-linear-to-br from-blue-600 to-indigo-700">
                    <div className="absolute inset-0 opacity-30 transition-transform duration-700 group-hover:scale-110" style={{ backgroundImage: "radial-gradient(circle at 30% 20%, white 0, transparent 50%)" }} />
                    <span className="absolute top-3 left-3 glass text-blue-200 text-xs font-semibold px-2.5 py-1 rounded-full">
                      {post.category}
                    </span>
                  </div>
                  <div className="p-5">
                    <span className="text-xs text-gray-500">{post.date} &middot; {post.readTime}</span>
                    <h3 className="font-bold text-white mt-2 mb-2 group-hover:text-blue-300 transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-400 text-sm line-clamp-2">{post.excerpt}</p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
          <Reveal className="text-center mt-10">
            <Link href="/blog" className="inline-flex items-center gap-1 text-blue-400 font-semibold hover:gap-2 transition-all">
              View All Articles <FiArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="relative overflow-hidden py-20">
        <div className="container-custom relative z-10">
          <div className="glass-card relative rounded-3xl p-12 text-center overflow-hidden">
            <div className="mesh-bg" aria-hidden>
              <div className="mesh-blob animate-float-slow" style={{ width: 400, height: 400, top: -120, left: "10%", background: "radial-gradient(circle, #3b82f6, transparent 70%)", opacity: 0.35 }} />
              <div className="mesh-blob animate-float-slower" style={{ width: 440, height: 440, bottom: -160, right: "5%", background: "radial-gradient(circle, #22d3ee, transparent 70%)", opacity: 0.35 }} />
            </div>
            <div className="relative z-10">
              <Reveal>
                <h2 className="text-3xl md:text-5xl font-black mb-4 text-white">
                  Ready to Grow Your Business?
                </h2>
              </Reveal>
              <Reveal delay={100}>
                <p className="text-gray-300 text-lg mb-8 max-w-xl mx-auto">
                  Book a free 30-minute discovery call and let&apos;s build a strategy tailored to your goals.
                </p>
              </Reveal>
              <Reveal delay={200}>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/contact"
                    className="btn-shine bg-linear-to-r from-blue-600 to-cyan-500 text-white font-bold px-8 py-4 rounded-xl hover:-translate-y-1 transition-all duration-300 text-lg shadow-xl shadow-blue-500/30"
                  >
                    Book Free Consultation
                  </Link>
                  <a
                    href={`https://wa.me/${SITE.phone.replace(/\D/g, "")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-shine inline-flex items-center justify-center gap-2 bg-green-500 text-white font-bold px-8 py-4 rounded-xl hover:bg-green-600 hover:-translate-y-1 transition-all duration-300 text-lg shadow-xl"
                  >
                    <FaWhatsapp className="h-5 w-5" /> WhatsApp Us
                  </a>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
