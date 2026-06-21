import Link from "next/link";
import Image from "next/image";
import { SITE, SERVICES } from "@/lib/data";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { Phone as FiPhone, Mail as FiMail, ArrowRight, ArrowUpRight } from "lucide-react";

export default function Footer() {
  const featuredServices = SERVICES.slice(0, 6);

  return (
    <footer className="relative mt-20">
      {/* CTA BAND */}
      <div className="container-custom">
        <div className="glass-card relative overflow-hidden rounded-3xl px-8 py-10 md:px-12 md:py-12">
          <div
            className="absolute inset-0 opacity-60 pointer-events-none"
            aria-hidden
            style={{
              backgroundImage:
                "radial-gradient(600px circle at 15% 20%, rgba(37,99,235,0.25), transparent 60%), radial-gradient(600px circle at 85% 80%, rgba(34,211,238,0.2), transparent 60%)",
            }}
          />
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
            <div>
              <h2 className="text-2xl md:text-3xl font-black text-white">
                Ready to grow your business?
              </h2>
              <p className="text-gray-300 mt-2 max-w-md">
                Book a free 30-minute discovery call and let&apos;s build a strategy tailored to your goals.
              </p>
            </div>
            <Link
              href="/contact"
              className="btn-shine btn-primary shrink-0 inline-flex items-center gap-2 px-7 py-4 rounded-xl"
            >
              Get Started <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>

      {/* MAIN FOOTER */}
      <div className="relative mt-24 pt-20 bg-[#060a14]">
        <div className="container-custom pt-20 pb-16">
          <div className="grid grid-cols-2 md:grid-cols-12 gap-x-8 gap-y-12 items-start">
            {/* Brand */}
            <div className="col-span-2 md:col-span-4">
              <Link href="/" className="inline-flex items-center gap-2 mb-4 group">
                <Image
                  src="/logo.png"
                  alt={SITE.name}
                  width={36}
                  height={36}
                  className="h-9 w-9 rounded-lg transition-transform duration-300 group-hover:scale-110"
                />
                <span className="text-xl font-black tracking-tight">
                  <span className="text-gradient">Kharb</span>
                  <span className="text-white">Media</span>
                </span>
              </Link>
              <p className="text-sm text-gray-400 leading-relaxed mb-6 max-w-xs">
                A results-driven digital marketing agency helping B2B and B2C businesses grow with data-backed strategies.
              </p>
              <div className="flex gap-3">
                {[
                  { href: SITE.social.facebook, label: "Facebook", Icon: FaFacebookF, hover: "hover:bg-blue-600" },
                  { href: SITE.social.instagram, label: "Instagram", Icon: FaInstagram, hover: "hover:bg-pink-500" },
                  { href: SITE.social.linkedin, label: "LinkedIn", Icon: FaLinkedinIn, hover: "hover:bg-blue-500" },
                ].map(({ href, label, Icon, hover }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className={`w-9 h-9 rounded-lg glass ${hover} flex items-center justify-center transition-all hover:-translate-y-0.5 text-gray-300 hover:text-white`}
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>

            {/* Services */}
            <div className="md:col-span-3 md:pt-1">
              <h3 className="relative text-white font-bold mb-5 text-sm tracking-wide inline-block after:absolute after:-bottom-2 after:left-0 after:h-0.5 after:w-8 after:rounded-full after:bg-linear-to-r after:from-blue-500 after:to-cyan-400">Services</h3>
              <ul className="space-y-3 text-sm">
                {featuredServices.map((s) => (
                  <li key={s.slug}>
                    <Link href={`/services#${s.slug}`} className="text-gray-400 hover:text-blue-400 transition-colors">
                      {s.short}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link href="/services" className="inline-flex items-center gap-1 text-blue-400 hover:text-blue-300 font-medium transition-colors">
                    View All <ArrowUpRight className="h-3.5 w-3.5" />
                  </Link>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div className="md:col-span-2 md:pt-1">
              <h3 className="relative text-white font-bold mb-5 text-sm tracking-wide inline-block after:absolute after:-bottom-2 after:left-0 after:h-0.5 after:w-8 after:rounded-full after:bg-linear-to-r after:from-blue-500 after:to-cyan-400">Company</h3>
              <ul className="space-y-3 text-sm">
                {[
                  { href: "/", label: "Home" },
                  { href: "/services", label: "Services" },
                  { href: "/about", label: "About Us" },
                  { href: "/blog", label: "Blog" },
                  { href: "/contact", label: "Contact" },
                ].map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="text-gray-400 hover:text-blue-400 transition-colors">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div className="md:col-span-3 md:pt-1">
              <h3 className="relative text-white font-bold mb-5 text-sm tracking-wide inline-block after:absolute after:-bottom-2 after:left-0 after:h-0.5 after:w-8 after:rounded-full after:bg-linear-to-r after:from-blue-500 after:to-cyan-400">Get in Touch</h3>
              <ul className="space-y-3.5 text-sm">
                <li>
                  <a href={`tel:${SITE.phone}`} className="text-gray-400 hover:text-blue-400 transition-colors flex items-center gap-2.5">
                    <FiPhone className="h-4 w-4 shrink-0 text-blue-400" />
                    {SITE.phone}
                  </a>
                </li>
                <li>
                  <a href={`mailto:${SITE.email}`} className="text-gray-400 hover:text-blue-400 transition-colors flex items-center gap-2.5">
                    <FiMail className="h-4 w-4 shrink-0 text-blue-400" />
                    {SITE.email}
                  </a>
                </li>
                <li className="text-gray-400 leading-relaxed pt-1">
                  {SITE.hours}
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="  pt-10 pb-10 border-white/10">
          <div className="container-custom py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
            <p>© {new Date().getFullYear()} {SITE.name}. All rights reserved.</p>
            <div className="flex gap-6">
              <Link href="/privacy-policy" className="hover:text-gray-300 transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-gray-300 transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
