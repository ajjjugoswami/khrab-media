import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex-1 flex items-center justify-center py-24 bg-gray-50">
      <div className="text-center max-w-md mx-auto px-6">
        <p className="text-8xl font-black text-blue-600 mb-4">404</p>
        <h1 className="text-2xl font-black text-gray-900 mb-3">Page Not Found</h1>
        <p className="text-gray-500 mb-8">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <div className="flex gap-3 justify-center">
          <Link href="/" className="bg-blue-600 text-white font-semibold px-5 py-2.5 rounded-lg hover:bg-blue-700 transition-colors">
            Go Home
          </Link>
          <Link href="/contact" className="bg-white text-gray-700 font-semibold px-5 py-2.5 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors">
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
