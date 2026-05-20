"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ["home", "about", "skills", "projects", "experience", "contact"];
      sections.forEach((sec) => {
        const element = document.getElementById(sec);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActive(sec);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home", id: "home" },
    { name: "About", href: "#about", id: "about" },
    { name: "Skills", href: "#skills", id: "skills" },
    { name: "Projects", href: "#projects", id: "projects" },
    { name: "Experience", href: "#experience", id: "experience" },
    { name: "Contact", href: "#contact", id: "contact" },
  ];

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#091228]/80 backdrop-blur-md border-b border-white/10 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-[8%] py-4 flex justify-between items-center">
        <Link
          href="#home"
          className="text-2xl font-bold bg-gradient-to-r from-[#f4d03f] via-white to-[#9fbef4] bg-clip-text text-transparent hover:scale-105 transition-transform duration-300"
        >
          Rohit Chavan
        </Link>

        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.id}
              href={link.href}
              className={`relative transition duration-300 ${
                active === link.id
                  ? "text-[#f4d03f]"
                  : "text-white/80 hover:text-[#f4d03f]"
              }`}
            >
              {link.name}
              <span
                className={`absolute left-0 -bottom-1 h-[2px] bg-[#f4d03f] transition-all duration-300 ${
                  active === link.id ? "w-full" : "w-0"
                }`}
              />
            </Link>
          ))}

          <Link
            href="#contact"
            className="portfolio-btn portfolio-btn-primary"
          >
            Let&apos;s Build
          </Link>
        </nav>

        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-[#050a15]/95 backdrop-blur-lg border-t border-white/10">
          <nav className="flex flex-col items-center py-6 space-y-6">
            {navLinks.map((link) => (
              <Link
                key={link.id}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-lg hover:text-[#f4d03f] transition"
              >
                {link.name}
              </Link>
            ))}

            <Link
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="portfolio-btn portfolio-btn-primary"
            >
              Let&apos;s Build
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
