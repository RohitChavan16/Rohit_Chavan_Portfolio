import Link from "next/link";

export default function Navbar() {
  return (
    <header className="w-full px-[8%] py-6 flex justify-between items-center">

      <h1 className="text-2xl font-bold text-sky-400">
        Rohit
      </h1>

      <nav className="space-x-8">

        <Link href="#home" className="hover:text-sky-400 transition">
          Home
        </Link>

        <Link href="#about" className="hover:text-sky-400 transition">
          About
        </Link>

        <Link href="#projects" className="hover:text-sky-400 transition">
          Projects
        </Link>

        <Link href="#contact" className="hover:text-sky-400 transition">
          Contact
        </Link>

      </nav>

    </header>
  );
}
