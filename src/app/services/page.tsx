import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { SITE, SERVICES, STATS } from "@/lib/data";
import Reveal from "@/components/Reveal";
import CountUp from "@/components/CountUp";
import { getServiceIcon } from "@/lib/icons";
import { Check as FiCheck } from "lucide-react";

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
      <section className="relative overflow-hidden py-20 md:py-28">
        <div className="mesh-bg" aria-hidden>
          <div className="mesh-blob animate-float-slow" style={{ width: 440, height: 440, top: -120, right: -60, background: "radial-gradient(circle, #06b6d4, transparent 70%)" }} />
          <div className="mesh-blob animate-float-slower" style={{ width: 400, height: 400, bottom: -160, left: -40, background: "radial-gradient(circle, #6366f1, transparent 70%)" }} />
        </div>
        <div className="container-custom relative z-10 text-center max-w-3xl mx-auto">
          <Reveal>
            <span className="text-blue-400 font-semibold text-sm uppercase tracking-widest">Our Services</span>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="text-4xl md:text-5xl font-black text-white mt-3 mb-5">
              Everything You Need to <span className="text-gradient">Dominate Online</span>
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="text-gray-300 text-lg leading-relaxed">
              From organic search to paid ads, social media to web development &mdash; we offer every digital marketing service your business needs to grow, packaged into custom strategies that deliver results.
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

      {/* Services Grid */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service, i) => {
              const Icon = getServiceIcon(service.slug);
              return (
                <Reveal key={service.slug} delay={(i % 3) * 90}>
                  <div
                    id={service.slug}
                    className="card-hover glass-card group relative h-full rounded-2xl scroll-mt-24 overflow-hidden"
                  >
                    {/* Real service image */}
                    <div className="relative h-44 overflow-hidden">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-[#0a0f1e] via-[#0a0f1e]/40 to-transparent" />
                      <div className="absolute bottom-3 left-3 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-linear-to-br from-blue-600 to-cyan-500 text-white shadow-lg">
                        <Icon className="h-6 w-6" />
                      </div>
                    </div>
                    <div className="p-7 pt-5">
                    <h2 className="text-xl font-black text-white mb-3">{service.title}</h2>
                    <p className="text-gray-400 text-sm leading-relaxed mb-5">{service.description}</p>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((f) => (
                        <li key={f} className="flex items-center gap-2 text-sm text-gray-300">
                          <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-green-500/15 text-green-400">
                            <FiCheck className="h-3 w-3" strokeWidth={3} />
                          </span>
                          {f}
                        </li>
                      ))}
                    </ul>
                    <Link
                      href="/contact"
                      className="btn-shine btn-primary inline-block text-sm px-5 py-2.5 rounded-lg"
                    >
                      Get Started
                    </Link>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden py-20">
        <div className="container-custom relative z-10 max-w-3xl mx-auto">
          <div className="glass-card relative rounded-3xl p-12 text-center overflow-hidden">
            <div className="relative z-10">
              <Reveal>
                <h2 className="text-3xl md:text-4xl font-black mb-4 text-white">Not Sure Which Service You Need?</h2>
              </Reveal>
              <Reveal delay={100}>
                <p className="text-gray-300 mb-8">
                  Book a free discovery call and our experts will recommend the best strategy for your specific business goals.
                </p>
              </Reveal>
              <Reveal delay={200}>
                <Link
                  href="/contact"
                  className="btn-shine btn-primary px-8 py-4 rounded-xl inline-block"
                >
                  Book Free Discovery Call
                </Link>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
