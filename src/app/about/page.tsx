import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { SITE, STATS, TEAM, TESTIMONIALS } from "@/lib/data";
import Reveal from "@/components/Reveal";
import CountUp from "@/components/CountUp";
import {
  Target as FiTarget,
  TrendingUp as FiTrendingUp,
  Award as FiAward,
  Users as FiUsers,
  Star as FiStar,
  Rocket as FiSend,
  Eye as FiEye,
  Lightbulb as FiHeart,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Kharb Media — founded by Vivek Kharb with 8+ years of digital marketing experience, serving 266+ satisfied clients across India and beyond.",
  alternates: { canonical: `${SITE.url}/about` },
  openGraph: {
    title: "About Kharb Media | Our Story, Team & Mission",
    description: "Meet the team behind Kharb Media and learn how we drive results for our clients.",
    url: `${SITE.url}/about`,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE.name,
  url: SITE.url,
  telephone: SITE.phone,
  email: SITE.email,
  founder: { "@type": "Person", name: "Vivek Kharb" },
  numberOfEmployees: "45",
  description: SITE.description,
};

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="relative overflow-hidden py-20 md:py-28">
        <div className="mesh-bg" aria-hidden>
          <div className="mesh-blob animate-float-slow" style={{ width: 440, height: 440, top: -120, left: -40, background: "radial-gradient(circle, #3b82f6, transparent 70%)" }} />
          <div className="mesh-blob animate-float-slower" style={{ width: 400, height: 400, bottom: -160, right: -40, background: "radial-gradient(circle, #06b6d4, transparent 70%)" }} />
        </div>
        <div className="container-custom relative z-10 max-w-3xl mx-auto text-center">
          <Reveal>
            <span className="text-amber-400 font-semibold text-sm uppercase tracking-widest">About Us</span>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="text-4xl md:text-5xl font-black text-white mt-3 mb-5">
              The Agency That Puts Your <span className="text-gradient">Success First</span>
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="text-gray-300 text-lg leading-relaxed">
              Kharb Media was built on one simple belief: client success always comes first. Every strategy we build is rooted in data, designed for sustainable growth, and executed with full transparency.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Stats */}
      <section className="py-8">
        <div className="container-custom">
          <div className="glass-card grid grid-cols-2 md:grid-cols-4 gap-6 text-center rounded-3xl p-8 overflow-hidden">
            {STATS.map((s, i) => (
              <Reveal key={s.label} delay={i * 90}>
                <p className="text-3xl md:text-4xl font-black tabular-nums text-gradient">
                  <CountUp value={s.value} />
                </p>
                <p className="text-gray-400 text-sm mt-1">{s.label}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <Reveal>
              <span className="text-amber-400 font-semibold text-sm uppercase tracking-widest">Our Story</span>
              <h2 className="text-3xl font-black text-white mt-2 mb-5">
                Built by a Marketer, for Businesses That Want Real Results
              </h2>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  Kharb Media was founded by <strong className="text-white">Vivek Kharb</strong>, a digital marketing specialist with over 8 years of hands-on experience helping businesses grow online. Frustrated by agencies that promised results but delivered reports full of vanity metrics, Vivek set out to build something different.
                </p>
                <p>
                  Today, Kharb Media is a full-service digital marketing agency trusted by 100+ companies across B2B and B2C sectors. Our team of 45+ specialists covers everything from SEO and paid ads to web development and video production.
                </p>
                <p>
                  We believe in transparent communication, data-driven decisions, and long-term partnerships. When our clients win, we win — and that alignment drives everything we do.
                </p>
              </div>
            </Reveal>
            <Reveal delay={150}>
              <div className="relative">
                <div className="absolute -inset-4 bg-linear-to-br from-amber-500/20 to-amber-400/20 rounded-3xl blur-2xl" aria-hidden />
                <div className="glass-card relative rounded-3xl overflow-hidden">
                  <Image
                    src="/about-team.webp"
                    alt="Kharb Media digital marketing team in discussion"
                    width={1024}
                    height={932}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </Reveal>
          </div>

          {/* Value cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-12">
            {[
              { title: "Client Focus", desc: "Your goals are our goals. We align every strategy to your business outcomes.", Icon: FiTarget },
              { title: "Proven Results", desc: "282+ projects completed with measurable, documented growth.", Icon: FiTrendingUp },
              { title: "Decades of Experience", desc: "Our team brings 15+ years of collective industry expertise.", Icon: FiAward },
              { title: "Dedicated Team", desc: "45+ specialists committed to your success every day.", Icon: FiUsers },
            ].map((v, i) => (
              <Reveal key={v.title} delay={i * 80}>
                <div className="card-hover glass-card h-full rounded-2xl p-5 overflow-hidden">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-linear-to-br from-amber-500 to-amber-400 text-[#0a1220] mb-3 shadow-md shadow-amber-500/20">
                    <v.Icon className="h-5 w-5" />
                  </span>
                  <h3 className="font-bold text-white mb-1">{v.title}</h3>
                  <p className="text-gray-400 text-sm">{v.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Mission / Vision / Values */}
      <section className="py-20">
        <div className="container-custom">
          <Reveal className="text-center mb-12">
            <h2 className="text-3xl font-black text-white">Our Mission, Vision &amp; Values</h2>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Mission",
                Icon: FiSend,
                text: "To deliver data-driven digital marketing strategies that generate real, measurable business growth for every client we work with.",
              },
              {
                title: "Vision",
                Icon: FiEye,
                text: "To be the most trusted digital marketing partner for businesses across India — known for transparency, results, and genuine client-first relationships.",
              },
              {
                title: "Values",
                Icon: FiHeart,
                text: "Integrity in every recommendation. Transparency in every report. Innovation in every strategy. Excellence in every deliverable.",
              },
            ].map((item, i) => (
              <Reveal key={item.title} delay={i * 100}>
                <div className="card-hover glass-card h-full rounded-2xl p-7 text-center overflow-hidden">
                  <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-linear-to-br from-amber-500 to-amber-400 text-[#0a1220] mb-4 shadow-lg shadow-amber-500/20 mx-auto">
                    <item.Icon className="h-7 w-7" />
                  </span>
                  <h3 className="text-xl font-black text-white mb-3">{item.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20">
        <div className="container-custom">
          <Reveal className="text-center mb-12">
            <span className="text-amber-400 font-semibold text-sm uppercase tracking-widest">Our Team</span>
            <h2 className="text-3xl font-black text-white mt-2">Meet the Experts Behind Your Growth</h2>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {TEAM.map((member, i) => (
              <Reveal key={member.name} delay={(i % 4) * 80}>
                <div className="card-hover glass-card h-full text-center rounded-2xl p-6 overflow-hidden">
                  <div className="w-20 h-20 rounded-full bg-linear-to-br from-amber-500 to-amber-400 flex items-center justify-center text-[#0a1220] text-2xl font-black mx-auto mb-4 shadow-lg shadow-amber-500/20">
                    {member.name.charAt(0)}
                  </div>
                  <h3 className="font-bold text-white">{member.name}</h3>
                  <p className="text-amber-400 text-sm font-medium mt-0.5">{member.role}</p>
                  <p className="text-gray-500 text-xs mt-1">{member.experience}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container-custom">
          <Reveal className="text-center mb-12">
            <h2 className="text-3xl font-black text-white">What Our Clients Say About Us</h2>
            <p className="flex items-center justify-center gap-2 mt-3">
              <span className="flex text-yellow-400 text-lg">
                {Array.from({ length: 5 }).map((_, i) => (
                  <FiStar key={i} className="fill-current h-5 w-5" />
                ))}
              </span>
              <span className="text-gray-400 text-sm">4.9/5 from 643+ reviews</span>
            </p>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {TESTIMONIALS.map((t, i) => (
              <Reveal key={t.name} delay={(i % 2) * 100}>
                <div className="card-hover glass-card h-full rounded-2xl p-6 overflow-hidden">
                  <p className="flex text-yellow-400 mb-3">
                    {Array.from({ length: t.rating }).map((_, idx) => (
                      <FiStar key={idx} className="fill-current h-4 w-4" />
                    ))}
                  </p>
                  <p className="text-gray-300 italic leading-relaxed mb-4">&ldquo;{t.text}&rdquo;</p>
                  <p className="font-bold text-white">{t.name}</p>
                  <p className="text-gray-400 text-sm">{t.role}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden py-20">
        <div className="container-custom relative z-10 max-w-3xl mx-auto">
          <div className="glass-card relative rounded-3xl p-12 text-center overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-3xl font-black mb-4 text-white">Let&apos;s Work Together</h2>
              <p className="text-gray-300 mb-8">
                Join 100+ businesses that trust Kharb Media to grow their online presence and revenue.
              </p>
              <Link
                href="/contact"
                className="btn-shine btn-primary px-8 py-4 rounded-xl inline-block"
              >
                Start a Conversation
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
