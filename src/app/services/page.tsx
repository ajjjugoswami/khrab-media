import type { Metadata } from "next";
import Link from "next/link";
import { SITE, SERVICES, STATS } from "@/lib/data";

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
      <section className="bg-gradient-to-br from-blue-50 to-indigo-50 py-16 md:py-24">
        <div className="container-custom text-center max-w-3xl mx-auto">
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-widest">Our Services</span>
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 mt-3 mb-5">
            Everything You Need to Dominate Online
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed">
            From organic search to paid ads, social media to web development — we offer every digital marketing service your business needs to grow, packaged into custom strategies that deliver results.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-blue-600 py-10">
        <div className="container-custom grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-white">
          {STATS.map((s) => (
            <div key={s.label}>
              <p className="text-3xl font-black">{s.value}</p>
              <p className="text-blue-100 text-sm mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service) => (
              <div
                key={service.slug}
                id={service.slug}
                className="bg-white rounded-2xl border border-gray-100 hover:border-blue-200 hover:shadow-xl transition-all p-7 scroll-mt-20"
              >
                <div className="text-5xl mb-5">{service.icon}</div>
                <h2 className="text-xl font-black text-gray-900 mb-3">{service.title}</h2>
                <p className="text-gray-500 text-sm leading-relaxed mb-5">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-gray-600">
                      <span className="text-green-500 font-bold">✓</span> {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className="inline-block bg-blue-600 text-white text-sm font-semibold px-5 py-2.5 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gray-900 text-white text-center">
        <div className="container-custom max-w-2xl mx-auto">
          <h2 className="text-3xl font-black mb-4">Not Sure Which Service You Need?</h2>
          <p className="text-gray-400 mb-8">
            Book a free discovery call and our experts will recommend the best strategy for your specific business goals.
          </p>
          <Link
            href="/contact"
            className="bg-blue-600 text-white font-bold px-8 py-4 rounded-xl hover:bg-blue-700 transition-colors inline-block"
          >
            Book Free Discovery Call
          </Link>
        </div>
      </section>
    </>
  );
}
