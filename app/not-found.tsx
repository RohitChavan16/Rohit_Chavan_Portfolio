"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Home, ArrowLeft, FolderKanban, Mail } from "lucide-react";

export default function NotFound() {

  const router = useRouter();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black text-white px-6">

      {/* Big 404 */}
      <h1 className="text-8xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
        404
      </h1>

      {/* Heading */}
      <h2 className="text-3xl font-semibold mt-4">
        Page Not Found
      </h2>

      {/* Description */}
      <p className="text-gray-400 text-center mt-3 max-w-md">
        The page you are looking for might have been removed, renamed, 
        or is temporarily unavailable.
      </p>

      {/* Buttons */}
      <div className="flex flex-wrap gap-4 mt-8 justify-center">

        {/* Go Home */}
        <Link href="/">
          <button className="flex items-center gap-2 bg-cyan-500 hover:bg-cyan-600 px-6 py-3 rounded-lg font-medium transition">
            <Home size={18} />
            Go Home
          </button>
        </Link>

        {/* Projects */}
        <Link href="/projects">
          <button className="flex items-center gap-2 border border-gray-600 hover:border-cyan-400 px-6 py-3 rounded-lg font-medium transition">
            <FolderKanban size={18} />
            View Projects
          </button>
        </Link>

        {/* Contact */}
        <Link href="/contact">
          <button className="flex items-center gap-2 border border-gray-600 hover:border-cyan-400 px-6 py-3 rounded-lg font-medium transition">
            <Mail size={18} />
            Contact Me
          </button>
        </Link>

        {/* Go Back */}
        <button
          onClick={() => router.back()}
          className="flex items-center gap-2 border border-gray-600 hover:border-cyan-400 px-6 py-3 rounded-lg font-medium transition"
        >
          <ArrowLeft size={18} />
          Go Back
        </button>

      </div>

      {/* Extra tip */}
      <p className="text-gray-500 text-sm mt-10">
        If you believe this is an error, please contact support.
      </p>

    </div>
  );
}
