"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
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
          ? "glass-nav border-b border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.4)]"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="container-custom flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <Image
            src="/logo.png"
            alt={SITE.name}
            width={36}
            height={36}
            priority
            className="h-9 w-9 rounded-lg transition-transform duration-300 group-hover:scale-110"
          />
          <span className="text-xl font-black tracking-tight">
            <span className="text-gradient">Kharb</span>
            <span className="text-white">Media</span>
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
                  active ? "text-amber-400" : "text-gray-300 hover:text-amber-400"
                }`}
              >
                {l.label}
                <span
                  className={`absolute left-3 right-3 -bottom-0.5 h-0.5 rounded-full bg-linear-to-r from-amber-500 to-amber-400 origin-left transition-transform duration-300 ${
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
            className="text-sm text-gray-300 hover:text-amber-400 font-medium transition-colors"
          >
            {SITE.phone}
          </a>
          <Link
            href="/contact"
            className="btn-shine btn-primary text-sm px-4 py-2 rounded-lg"
          >
            Free Consultation
          </Link>
        </div>

        {/* Mobile burger */}
        <button
          className="md:hidden p-2 rounded-lg text-gray-200 hover:bg-white/10 transition-colors"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-[max-height,opacity] duration-300 ease-out ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="glass-nav border-t border-white/10 px-6 py-4 flex flex-col gap-1">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className={`py-2 font-medium transition-colors ${
                pathname === l.href ? "text-amber-400" : "text-gray-300 hover:text-amber-400"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="mt-2 btn-primary text-sm px-4 py-2.5 rounded-lg text-center"
          >
            Free Consultation
          </Link>
        </div>
      </div>
    </header>
  );
}
