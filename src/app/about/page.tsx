import type { Metadata } from "next";
import Link from "next/link";
import { SITE, STATS, TEAM, TESTIMONIALS } from "@/lib/data";

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
      <section className="bg-gradient-to-br from-blue-50 to-indigo-50 py-16 md:py-24">
        <div className="container-custom max-w-3xl mx-auto text-center">
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-widest">About Us</span>
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 mt-3 mb-5">
            The Agency That Puts Your Success First
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed">
            Kharb Media was built on one simple belief: client success always comes first. Every strategy we build is rooted in data, designed for sustainable growth, and executed with full transparency.
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

      {/* Story */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-blue-600 font-semibold text-sm uppercase tracking-widest">Our Story</span>
              <h2 className="text-3xl font-black text-gray-900 mt-2 mb-5">
                Built by a Marketer, for Businesses That Want Real Results
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Kharb Media was founded by <strong className="text-gray-900">Vivek Kharb</strong>, a digital marketing specialist with over 8 years of hands-on experience helping businesses grow online. Frustrated by agencies that promised results but delivered reports full of vanity metrics, Vivek set out to build something different.
                </p>
                <p>
                  Today, Kharb Media is a full-service digital marketing agency trusted by 100+ companies across B2B and B2C sectors. Our team of 45+ specialists covers everything from SEO and paid ads to web development and video production.
                </p>
                <p>
                  We believe in transparent communication, data-driven decisions, and long-term partnerships. When our clients win, we win — and that alignment drives everything we do.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { title: "Client Focus", desc: "Your goals are our goals. We align every strategy to your business outcomes.", icon: "🎯" },
                { title: "Proven Results", desc: "282+ projects completed with measurable, documented growth.", icon: "📈" },
                { title: "Decades of Experience", desc: "Our team brings 15+ years of collective industry expertise.", icon: "🏆" },
                { title: "Dedicated Team", desc: "45+ specialists committed to your success every day.", icon: "👥" },
              ].map((v) => (
                <div key={v.title} className="bg-gray-50 rounded-2xl p-5 border border-gray-100">
                  <p className="text-3xl mb-3">{v.icon}</p>
                  <h3 className="font-bold text-gray-900 mb-1">{v.title}</h3>
                  <p className="text-gray-500 text-sm">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission / Vision / Values */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-gray-900">Our Mission, Vision & Values</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Mission",
                icon: "🚀",
                text: "To deliver data-driven digital marketing strategies that generate real, measurable business growth for every client we work with.",
              },
              {
                title: "Vision",
                icon: "🌟",
                text: "To be the most trusted digital marketing partner for businesses across India — known for transparency, results, and genuine client-first relationships.",
              },
              {
                title: "Values",
                icon: "💡",
                text: "Integrity in every recommendation. Transparency in every report. Innovation in every strategy. Excellence in every deliverable.",
              },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-2xl p-7 border border-gray-100 shadow-sm text-center">
                <p className="text-5xl mb-4">{item.icon}</p>
                <h3 className="text-xl font-black text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-widest">Our Team</span>
            <h2 className="text-3xl font-black text-gray-900 mt-2">Meet the Experts Behind Your Growth</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {TEAM.map((member) => (
              <div key={member.name} className="text-center bg-gray-50 rounded-2xl p-6 border border-gray-100">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-400 to-indigo-600 flex items-center justify-center text-white text-2xl font-black mx-auto mb-4">
                  {member.name.charAt(0)}
                </div>
                <h3 className="font-bold text-gray-900">{member.name}</h3>
                <p className="text-blue-600 text-sm font-medium mt-0.5">{member.role}</p>
                <p className="text-gray-400 text-xs mt-1">{member.experience}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-gray-900">What Our Clients Say About Us</h2>
            <p className="text-yellow-500 text-xl mt-2">★★★★★ <span className="text-gray-500 text-sm">4.9/5 from 643+ reviews</span></p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {TESTIMONIALS.map((t) => (
              <div key={t.name} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                <p className="text-yellow-400 mb-3">{"★".repeat(t.rating)}</p>
                <p className="text-gray-700 italic leading-relaxed mb-4">&ldquo;{t.text}&rdquo;</p>
                <p className="font-bold text-gray-900">{t.name}</p>
                <p className="text-gray-500 text-sm">{t.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-blue-600 text-white text-center">
        <div className="container-custom max-w-2xl mx-auto">
          <h2 className="text-3xl font-black mb-4">Let&apos;s Work Together</h2>
          <p className="text-blue-100 mb-8">
            Join 100+ businesses that trust Kharb Media to grow their online presence and revenue.
          </p>
          <Link
            href="/contact"
            className="bg-white text-blue-600 font-bold px-8 py-4 rounded-xl hover:bg-blue-50 transition-colors inline-block"
          >
            Start a Conversation
          </Link>
        </div>
      </section>
    </>
  );
}
