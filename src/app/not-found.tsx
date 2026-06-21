import Link from "next/link";

export default function NotFound() {
  return (
    <section className="relative flex-1 flex items-center justify-center py-24 overflow-hidden">
      <div className="mesh-bg" aria-hidden>
        <div className="mesh-blob animate-float-slow" style={{ width: 420, height: 420, top: "10%", left: "20%", background: "radial-gradient(circle, #3b82f6, transparent 70%)" }} />
        <div className="mesh-blob animate-float-slower" style={{ width: 380, height: 380, bottom: "5%", right: "20%", background: "radial-gradient(circle, #06b6d4, transparent 70%)" }} />
      </div>
      <div className="relative z-10 text-center max-w-md mx-auto px-6">
        <p className="text-8xl font-black text-gradient mb-4">404</p>
        <h1 className="text-2xl font-black text-white mb-3">Page Not Found</h1>
        <p className="text-gray-400 mb-8">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <div className="flex gap-3 justify-center">
          <Link href="/" className="btn-shine btn-primary px-5 py-2.5 rounded-lg">
            Go Home
          </Link>
          <Link href="/contact" className="glass text-white font-semibold px-5 py-2.5 rounded-lg hover:bg-white/10 transition-colors">
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
