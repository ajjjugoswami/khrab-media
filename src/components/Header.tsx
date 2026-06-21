"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { SITE } from "@/lib/data";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => setOpen(false), [pathname]);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "glass border-b border-gray-200/70 shadow-[0_4px_30px_rgba(0,0,0,0.06)]"
          : "bg-white/80 backdrop-blur border-b border-transparent"
      }`}
    >
      <div className="container-custom flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-linear-to-br from-blue-600 to-cyan-500 text-white font-black shadow-md transition-transform duration-300 group-hover:rotate-6 group-hover:scale-105">
            K
          </span>
          <span className="text-xl font-black tracking-tight">
            <span className="text-gradient">Kharb</span>
            <span className="text-gray-900">Media</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((l) => {
            const active = pathname === l.href;
            return (
              <Link
                key={l.href}
                href={l.href}
                className={`relative px-3 py-2 text-sm font-medium transition-colors ${
                  active ? "text-blue-600" : "text-gray-700 hover:text-blue-600"
                }`}
              >
                {l.label}
                <span
                  className={`absolute left-3 right-3 -bottom-0.5 h-0.5 rounded-full bg-linear-to-r from-blue-600 to-cyan-500 origin-left transition-transform duration-300 ${
                    active ? "scale-x-100" : "scale-x-0 hover:scale-x-100"
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href={`tel:${SITE.phone}`}
            className="text-sm text-gray-600 hover:text-blue-600 font-medium transition-colors"
          >
            {SITE.phone}
          </a>
          <Link
            href="/contact"
            className="btn-shine bg-linear-to-r from-blue-600 to-cyan-500 text-white text-sm font-semibold px-4 py-2 rounded-lg shadow-md shadow-blue-500/20 hover:shadow-lg hover:shadow-blue-500/30 hover:-translate-y-0.5 transition-all duration-300"
          >
            Free Consultation
          </Link>
        </div>

        {/* Mobile burger */}
        <button
          className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-[max-height,opacity] duration-300 ease-out ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="glass border-t border-gray-200/70 px-6 py-4 flex flex-col gap-1">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className={`py-2 font-medium transition-colors ${
                pathname === l.href ? "text-blue-600" : "text-gray-700 hover:text-blue-600"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="mt-2 bg-linear-to-r from-blue-600 to-cyan-500 text-white text-sm font-semibold px-4 py-2.5 rounded-lg text-center shadow-md"
          >
            Free Consultation
          </Link>
        </div>
      </div>
    </header>
  );
}
