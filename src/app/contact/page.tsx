import type { Metadata } from "next";
import { SITE } from "@/lib/data";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Kharb Media. Book a free discovery call, send us a message, or reach out via WhatsApp. We respond within 24 hours.",
  alternates: { canonical: `${SITE.url}/contact` },
  openGraph: {
    title: "Contact Kharb Media | Get a Free Consultation",
    description: "Reach out to our team for a free discovery call and custom digital marketing strategy.",
    url: `${SITE.url}/contact`,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: `Contact ${SITE.name}`,
  url: `${SITE.url}/contact`,
  mainEntity: {
    "@type": "Organization",
    name: SITE.name,
    telephone: SITE.phone,
    email: SITE.email,
    url: SITE.url,
  },
};

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-50 py-16 md:py-24">
        <div className="container-custom text-center max-w-2xl mx-auto">
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-widest">Contact Us</span>
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 mt-3 mb-5">
            Let&apos;s Talk About Your Growth
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed">
            Ready to get more leads, traffic, or clients? Let&apos;s talk one-on-one. Book a free discovery call or send us a message below.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-black text-gray-900 mb-6">Get In Touch</h2>
              <div className="space-y-6">
                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center text-xl flex-shrink-0">📞</div>
                  <div>
                    <p className="font-semibold text-gray-900 mb-0.5">Phone</p>
                    <a href={`tel:${SITE.phone}`} className="text-blue-600 hover:text-blue-700 transition-colors">
                      {SITE.phone}
                    </a>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center text-xl flex-shrink-0">✉️</div>
                  <div>
                    <p className="font-semibold text-gray-900 mb-0.5">Email</p>
                    <a href={`mailto:${SITE.email}`} className="text-blue-600 hover:text-blue-700 transition-colors block">
                      {SITE.email}
                    </a>
                    <a href={`mailto:${SITE.email2}`} className="text-blue-600 hover:text-blue-700 transition-colors block">
                      {SITE.email2}
                    </a>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center text-xl flex-shrink-0">🕐</div>
                  <div>
                    <p className="font-semibold text-gray-900 mb-0.5">Business Hours</p>
                    <p className="text-gray-500 text-sm">Mon–Sat: 9 AM – 11 PM</p>
                    <p className="text-gray-500 text-sm">Sunday: 12 PM – 12 AM</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-5 bg-green-50 rounded-2xl border border-green-100">
                <h3 className="font-bold text-gray-900 mb-2">💬 Chat on WhatsApp</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Prefer a quick chat? Message us directly on WhatsApp for a faster response.
                </p>
                <a
                  href={`https://wa.me/${SITE.phone.replace(/\D/g, "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-green-500 text-white font-semibold px-5 py-2.5 rounded-lg hover:bg-green-600 transition-colors text-sm"
                >
                  Open WhatsApp
                </a>
              </div>

              <div className="mt-4 p-5 bg-blue-50 rounded-2xl border border-blue-100">
                <h3 className="font-bold text-gray-900 mb-2">📅 Book a Discovery Call</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Schedule a free 30-minute strategy session with our team.
                </p>
                <a
                  href="https://topmate.io/kharbmedia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-blue-600 text-white font-semibold px-5 py-2.5 rounded-lg hover:bg-blue-700 transition-colors text-sm"
                >
                  Book on Topmate
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-black text-gray-900 mb-6">Send Us a Message</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
