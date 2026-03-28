"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();

  return (
    <main className="min-h-screen flex items-center justify-center px-6">
      <div className="section-shell rounded-3xl p-10 text-center max-w-xl">
        <p className="section-label mb-4">404</p>
        <h1 className="text-4xl font-bold mb-3">This page is off the map</h1>
        <p className="muted mb-8">
          The route does not exist anymore or may have moved to a new section.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link href="/" className="portfolio-btn portfolio-btn-primary">
            Go Home
          </Link>
          <button onClick={() => router.back()} className="portfolio-btn portfolio-btn-secondary">
            Go Back
          </button>
        </div>
      </div>
    </main>
  );
}
