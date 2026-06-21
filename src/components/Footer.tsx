import Link from "next/link";
import { SITE, SERVICES } from "@/lib/data";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { Phone as FiPhone, Mail as FiMail, Clock as FiClock } from "lucide-react";

export default function Footer() {
  const featuredServices = SERVICES.slice(0, 6);

  return (
    <footer className="glass-nav border-t border-white/10 text-gray-300">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <Link href="/" className="inline-block mb-4">
              <span className="text-2xl font-black text-white tracking-tight">
                Kharb<span className="text-blue-400">Media</span>
              </span>
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed mb-4">
              A results-driven digital marketing agency helping B2B and B2C businesses grow with data-backed strategies.
            </p>
            <div className="flex gap-3 mt-4">
              <a href={SITE.social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook"
                className="w-9 h-9 rounded-full glass hover:bg-blue-600 flex items-center justify-center transition-all hover:-translate-y-0.5">
                <FaFacebookF className="h-4 w-4" />
              </a>
              <a href={SITE.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram"
                className="w-9 h-9 rounded-full glass hover:bg-pink-500 flex items-center justify-center transition-all hover:-translate-y-0.5">
                <FaInstagram className="h-4 w-4" />
              </a>
              <a href={SITE.social.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
                className="w-9 h-9 rounded-full glass hover:bg-blue-500 flex items-center justify-center transition-all hover:-translate-y-0.5">
                <FaLinkedinIn className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              {featuredServices.map((s) => (
                <li key={s.slug}>
                  <Link href={`/services#${s.slug}`} className="hover:text-blue-400 transition-colors">
                    {s.short}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/services" className="text-blue-400 hover:text-blue-300 font-medium transition-colors">
                  View All Services →
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              {[
                { href: "/", label: "Home" },
                { href: "/services", label: "Services" },
                { href: "/about", label: "About Us" },
                { href: "/blog", label: "Blog" },
                { href: "/contact", label: "Contact" },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="hover:text-blue-400 transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href={`tel:${SITE.phone}`} className="hover:text-blue-400 transition-colors flex items-center gap-2.5">
                  <FiPhone className="h-4 w-4 shrink-0 text-blue-400" /> {SITE.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${SITE.email}`} className="hover:text-blue-400 transition-colors flex items-center gap-2.5">
                  <FiMail className="h-4 w-4 shrink-0 text-blue-400" /> {SITE.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <FiClock className="h-4 w-4 shrink-0 text-blue-400 mt-0.5" />
                <span className="text-gray-400">{SITE.hours}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container-custom py-5 flex flex-col md:flex-row justify-between items-center gap-3 text-sm text-gray-500">
          <p>© {new Date().getFullYear()} {SITE.name}. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/privacy-policy" className="hover:text-gray-300 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-gray-300 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
