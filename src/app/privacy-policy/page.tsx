import type { Metadata } from "next";
import { SITE } from "@/lib/data";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Kharb Media's privacy policy — how we collect, use, and protect your information.",
  robots: { index: false },
};

export default function PrivacyPolicyPage() {
  return (
    <section className="py-16">
      <div className="container-custom max-w-3xl mx-auto">
        <h1 className="text-3xl font-black text-white mb-2">Privacy Policy</h1>
        <p className="text-gray-500 mb-10">Last updated: June 2026</p>
        <div className="max-w-none space-y-6 text-gray-300 leading-relaxed">
          <p>
            {SITE.name} (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) operates {SITE.url}. This page informs you of our policies regarding the collection, use, and disclosure of personal information we receive from users.
          </p>
          <h2 className="text-xl font-bold text-white">Information We Collect</h2>
          <p>We collect information you provide directly, including your name, email address, and phone number when you fill out our contact form or book a consultation.</p>
          <h2 className="text-xl font-bold text-white">How We Use Your Information</h2>
          <p>We use the information to respond to your inquiries, provide our services, send relevant marketing communications (with your consent), and improve our website experience.</p>
          <h2 className="text-xl font-bold text-white">Data Security</h2>
          <p>We implement industry-standard security measures to protect your personal information against unauthorized access, alteration, or disclosure.</p>
          <h2 className="text-xl font-bold text-white">Contact Us</h2>
          <p>If you have any questions about this Privacy Policy, please contact us at <a href={`mailto:${SITE.email}`} className="text-blue-400 hover:text-blue-300">{SITE.email}</a>.</p>
        </div>
      </div>
    </section>
  );
}
