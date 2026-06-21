import type { Metadata } from "next";
import Link from "next/link";
import { SITE, SERVICES, STATS } from "@/lib/data";
import Reveal from "@/components/Reveal";
import CountUp from "@/components/CountUp";

export const metadata: Metadata = {
  title: "Digital Marketing Services",
  description:
    "Explore all 15 digital marketing services offered by Kharb Media — SEO, Social Media, PPC, Web Design, Video Editing, and more.",
  alternates: { canonical: `${SITE.url}/services` },
  openGraph: {
    title: "Digital Marketing Services | Kharb Media",
    description: "Full-stack digital marketing services to grow your business online.",
    url: `${SITE.url}/services`,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  provider: { "@type": "Organization", name: SITE.name, url: SITE.url },
  serviceType: "Digital Marketing",
  areaServed: "IN",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Digital Marketing Services",
    itemListElement: SERVICES.map((s, i) => ({
      "@type": "Offer",
      position: i + 1,
      itemOffered: { "@type": "Service", name: s.title, description: s.description },
    })),
  },
};

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-linear-to-br from-slate-50 via-white to-blue-50/60 py-20 md:py-28">
        <div className="mesh-bg" aria-hidden>
          <div className="mesh-blob animate-float-slow" style={{ width: 400, height: 400, top: -120, right: -60, background: "radial-gradient(circle, #06b6d4, transparent 70%)" }} />
          <div className="mesh-blob animate-float-slower" style={{ width: 360, height: 360, bottom: -140, left: -40, background: "radial-gradient(circle, #6366f1, transparent 70%)" }} />
        </div>
        <div className="container-custom relative z-10 text-center max-w-3xl mx-auto">
          <Reveal>
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-widest">Our Services</span>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="text-4xl md:text-5xl font-black text-gray-900 mt-3 mb-5">
              Everything You Need to <span className="text-gradient">Dominate Online</span>
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="text-gray-600 text-lg leading-relaxed">
              From organic search to paid ads, social media to web development &mdash; we offer every digital marketing service your business needs to grow, packaged into custom strategies that deliver results.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-linear-to-r from-blue-700 via-blue-600 to-cyan-600 py-12">
        <div className="container-custom grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-white">
          {STATS.map((s, i) => (
            <Reveal key={s.label} delay={i * 90}>
              <p className="text-3xl md:text-4xl font-black tabular-nums">
                <CountUp value={s.value} />
              </p>
              <p className="text-blue-100 text-sm mt-1">{s.label}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service, i) => (
              <Reveal key={service.slug} delay={(i % 3) * 90}>
                <div
                  id={service.slug}
                  className="card-hover group relative h-full bg-white rounded-2xl border border-gray-100 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-500/5 p-7 scroll-mt-24 overflow-hidden"
                >
                  <span className="absolute inset-x-0 top-0 h-1 bg-linear-to-r from-blue-600 to-cyan-500 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
                  <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-linear-to-br from-blue-50 to-cyan-50 text-4xl mb-5 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6">
                    {service.icon}
                  </div>
                  <h2 className="text-xl font-black text-gray-900 mb-3">{service.title}</h2>
                  <p className="text-gray-500 text-sm leading-relaxed mb-5">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-gray-600">
                        <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-green-100 text-green-600 text-[10px] font-bold">&#10003;</span> {f}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact"
                    className="btn-shine inline-block bg-linear-to-r from-blue-600 to-cyan-500 text-white text-sm font-semibold px-5 py-2.5 rounded-lg shadow-md shadow-blue-500/20 hover:-translate-y-0.5 transition-all duration-300"
                  >
                    Get Started
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden py-20 bg-gray-900 text-white text-center">
        <div className="mesh-bg" aria-hidden>
          <div className="mesh-blob animate-float-slower" style={{ width: 420, height: 420, top: -120, left: "30%", background: "radial-gradient(circle, #2563eb, transparent 70%)", opacity: 0.35 }} />
        </div>
        <div className="container-custom relative z-10 max-w-2xl mx-auto">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-black mb-4">Not Sure Which Service You Need?</h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="text-gray-400 mb-8">
              Book a free discovery call and our experts will recommend the best strategy for your specific business goals.
            </p>
          </Reveal>
          <Reveal delay={200}>
            <Link
              href="/contact"
              className="btn-shine bg-linear-to-r from-blue-600 to-cyan-500 text-white font-bold px-8 py-4 rounded-xl hover:-translate-y-1 transition-all duration-300 inline-block shadow-xl shadow-blue-500/25"
            >
              Book Free Discovery Call
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
