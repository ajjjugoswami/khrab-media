import { SITE } from "@/lib/data";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  const number = SITE.phone.replace(/\D/g, "");
  return (
    <a
      href={`https://wa.me/${number}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="group fixed bottom-6 right-6 z-50 flex items-center gap-3"
    >
      <span className="hidden sm:block glass-card rounded-full px-4 py-2 text-sm font-semibold text-white opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
        Book Free Expert Call
      </span>
      <span className="flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-xl shadow-green-500/30 hover:bg-green-600 hover:scale-110 transition-all duration-300">
        <FaWhatsapp className="h-7 w-7" />
      </span>
    </a>
  );
}
