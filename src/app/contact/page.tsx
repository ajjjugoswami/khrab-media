import type { Metadata } from "next";
import { SITE } from "@/lib/data";
import ContactForm from "@/components/ContactForm";
import {
  Phone as FiPhone,
  Mail as FiMail,
  Clock as FiClock,
  Calendar as FiCalendar,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

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
      <section className="relative overflow-hidden py-16 md:py-24">
        <div className="mesh-bg" aria-hidden>
          <div className="mesh-blob animate-float-slow" style={{ width: 420, height: 420, top: -120, right: -40, background: "radial-gradient(circle, #06b6d4, transparent 70%)" }} />
          <div className="mesh-blob animate-float-slower" style={{ width: 380, height: 380, bottom: -160, left: -40, background: "radial-gradient(circle, #6366f1, transparent 70%)" }} />
        </div>
        <div className="container-custom relative z-10 text-center max-w-2xl mx-auto">
          <span className="text-blue-400 font-semibold text-sm uppercase tracking-widest">Contact Us</span>
          <h1 className="text-4xl md:text-5xl font-black text-white mt-3 mb-5">
            Let&apos;s Talk About Your <span className="text-gradient">Growth</span>
          </h1>
          <p className="text-gray-300 text-lg leading-relaxed">
            Ready to get more leads, traffic, or clients? Let&apos;s talk one-on-one. Book a free discovery call or send us a message below.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-black text-white mb-6">Get In Touch</h2>
              <div className="space-y-6">
                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 rounded-xl bg-linear-to-br from-blue-600 to-cyan-500 text-white flex items-center justify-center shrink-0 shadow-md shadow-blue-500/30">
                    <FiPhone className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-white mb-0.5">Phone</p>
                    <a href={`tel:${SITE.phone}`} className="text-blue-400 hover:text-blue-300 transition-colors">
                      {SITE.phone}
                    </a>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 rounded-xl bg-linear-to-br from-blue-600 to-cyan-500 text-white flex items-center justify-center shrink-0 shadow-md shadow-blue-500/30">
                    <FiMail className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-white mb-0.5">Email</p>
                    <a href={`mailto:${SITE.email}`} className="text-blue-400 hover:text-blue-300 transition-colors block">
                      {SITE.email}
                    </a>
                    <a href={`mailto:${SITE.email2}`} className="text-blue-400 hover:text-blue-300 transition-colors block">
                      {SITE.email2}
                    </a>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 rounded-xl bg-linear-to-br from-blue-600 to-cyan-500 text-white flex items-center justify-center shrink-0 shadow-md shadow-blue-500/30">
                    <FiClock className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-white mb-0.5">Business Hours</p>
                    <p className="text-gray-400 text-sm">Mon–Sat: 9 AM – 11 PM</p>
                    <p className="text-gray-400 text-sm">Sunday: 12 PM – 12 AM</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 glass-card p-5 rounded-2xl overflow-hidden">
                <h3 className="font-bold text-white mb-2 flex items-center gap-2">
                  <FaWhatsapp className="h-5 w-5 text-green-400" /> Chat on WhatsApp
                </h3>
                <p className="text-gray-400 text-sm mb-4">
                  Prefer a quick chat? Message us directly on WhatsApp for a faster response.
                </p>
                <a
                  href={`https://wa.me/${SITE.phone.replace(/\D/g, "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-green-500 text-white font-semibold px-5 py-2.5 rounded-lg hover:bg-green-600 transition-colors text-sm"
                >
                  <FaWhatsapp className="h-4 w-4" /> Open WhatsApp
                </a>
              </div>

              <div className="mt-4 glass-card p-5 rounded-2xl overflow-hidden">
                <h3 className="font-bold text-white mb-2 flex items-center gap-2">
                  <FiCalendar className="h-5 w-5 text-blue-400" /> Book a Discovery Call
                </h3>
                <p className="text-gray-400 text-sm mb-4">
                  Schedule a free 30-minute strategy session with our team.
                </p>
                <a
                  href="https://topmate.io/kharbmedia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-block px-5 py-2.5 rounded-lg text-sm"
                >
                  Book on Topmate
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-black text-white mb-6">Send Us a Message</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
