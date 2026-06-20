"use client";

import Link from "next/link";
import { useState, useEffect, useMemo } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import NeuralNetwork from "@/components/animations/NeuralNetwork";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  const profileRoles = useMemo(
    () => [
      { label: "Software Developer", color: "text-indigo-200" },
      { label: "AI/ML Enthusiast", color: "text-sky-200" },
      { label: "Full Stack Developer", color: "text-cyan-200" },
      { label: "Competitive Programmer", color: "text-fuchsia-200" },
      { label: "Backend Developer", color: "text-emerald-200" },
      { label: "System Builder", color: "text-amber-200" },
      { label: "Problem Solver", color: "text-rose-200" },
    ],
    []
  );

  const [roleIndex, setRoleIndex] = useState(0);
  const [typedRole, setTypedRole] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (!isOpen) return;

    const currentRole = profileRoles[roleIndex].label;
    const isComplete = typedRole === currentRole;
    const isEmpty = typedRole.length === 0;

    const timeout = window.setTimeout(
      () => {
        if (!isDeleting && !isComplete) {
          setTypedRole(currentRole.slice(0, typedRole.length + 1));
          return;
        }

        if (!isDeleting && isComplete) {
          setIsDeleting(true);
          return;
        }

        if (isDeleting && !isEmpty) {
          setTypedRole(currentRole.slice(0, typedRole.length - 1));
          return;
        }

        setIsDeleting(false);
        setRoleIndex((index) => (index + 1) % profileRoles.length);
      },
      isComplete && !isDeleting ? 1200 : isDeleting ? 42 : 74
    );

    return () => window.clearTimeout(timeout);
  }, [isDeleting, profileRoles, roleIndex, typedRole, isOpen]);

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

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const navLinks = [
    { name: "Home", href: "#home", id: "home" },
    { name: "About", href: "#about", id: "about" },
    { name: "Skills", href: "#skills", id: "skills" },
    { name: "Projects", href: "#projects", id: "projects" },
    { name: "Experience", href: "#experience", id: "experience" },
    { name: "Contact", href: "#contact", id: "contact" },
  ];

  // Framer Motion Variants
  const menuVariants = {
    closed: {
      x: "100%",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40,
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
    open: {
      x: 0,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40,
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    closed: { opacity: 0, x: 50 },
    open: { opacity: 1, x: 0 },
  };

  return (
    <>
      <header
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled || isOpen
            ? "bg-[#091228]/80 backdrop-blur-md border-b border-white/10 shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-[8%] py-4 flex justify-between items-center">
          <Link
            href="#home"
            className="text-2xl font-bold bg-gradient-to-r from-[#f4d03f] via-white to-[#9fbef4] bg-clip-text text-transparent hover:scale-105 transition-transform duration-300 cursor-pointer relative z-50"
          >
            Rohit Chavan
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.id}
                href={link.href}
                className={`relative transition duration-300 cursor-pointer ${
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
              className="portfolio-btn portfolio-btn-primary cursor-pointer"
            >
              Let&apos;s Build
            </Link>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-white relative z-50 cursor-pointer hover:text-[#f4d03f] transition-colors p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X size={28} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu size={28} />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>
      </header>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Sidebar Fullscreen Drawer */}
            <motion.div
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="fixed top-0 left-0 w-full h-[100dvh] bg-[#0a1128]/95 backdrop-blur-xl z-40 md:hidden flex flex-col pt-[80px]"
            >
              {/* Neural Network Background specific to Sidebar */}
              <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
                <NeuralNetwork />
              </div>

              {/* Decorative gradients */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/20 blur-[80px] rounded-full pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-fuchsia-500/20 blur-[80px] rounded-full pointer-events-none" />

              <div className="flex flex-col px-6 pb-12 pt-4 relative z-10 h-full overflow-y-auto overflow-x-hidden w-full">
                {/* Typewriter Animation filling the gap */}
                <motion.div 
                  variants={itemVariants}
                  className="mb-8 mt-2 flex flex-col items-center text-center"
                >
                  <p className="text-xs text-slate-400 font-bold tracking-[0.2em] uppercase mb-3">Rohit Chavan</p>
                  <div className="h-8 flex items-center justify-center">
                    <p
                      className={`text-2xl font-black leading-tight ${profileRoles[roleIndex].color}`}
                      aria-live="polite"
                    >
                      {typedRole}
                      <span className="ml-0.5 inline-block h-[1em] w-[3px] translate-y-[2px] rounded-full bg-current animate-pulse" />
                    </p>
                  </div>
                </motion.div>

                <nav className="flex flex-col gap-6">
                  {navLinks.map((link) => (
                    <motion.div key={link.id} variants={itemVariants}>
                      <Link
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className={`group flex items-center justify-between text-lg font-semibold transition-colors cursor-pointer ${
                          active === link.id ? "text-[#f4d03f]" : "text-white"
                        }`}
                      >
                        <span className="relative">
                          {link.name}
                          <span
                            className={`absolute left-0 -bottom-2 h-[2px] bg-[#f4d03f] transition-all duration-300 ${
                              active === link.id ? "w-full" : "w-0 group-hover:w-1/2"
                            }`}
                          />
                        </span>
                        <ArrowRight
                          size={20}
                          className={`transition-all duration-300 ${
                            active === link.id ? "text-[#f4d03f] opacity-100 translate-x-0" : "text-white/30 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 group-hover:text-[#f4d03f]"
                          }`}
                        />
                      </Link>
                    </motion.div>
                  ))}

                  <motion.div variants={itemVariants} className="mt-8 pt-8 border-t border-white/10 flex flex-row gap-3 w-full justify-between">
                    <Link
                      href="#projects"
                      onClick={() => setIsOpen(false)}
                      className="flex-1 relative group overflow-hidden rounded-xl bg-gradient-to-r from-amber-400 via-orange-500 to-rose-500 p-[2px] block cursor-pointer shadow-[0_0_20px_rgba(249,115,22,0.2)]"
                    >
                      <div className="h-full relative flex items-center justify-center gap-2 rounded-[10px] bg-[#0a1128] px-2 py-3 transition-all duration-300 group-hover:bg-orange-950/40">
                        <span className="font-bold text-orange-50 tracking-wide text-sm text-center">
                          View Work
                        </span>
                      </div>
                    </Link>

                    <Link
                      href="#contact"
                      onClick={() => setIsOpen(false)}
                      className="flex-1 relative group overflow-hidden rounded-xl bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 p-[2px] block cursor-pointer shadow-[0_0_20px_rgba(6,182,212,0.2)]"
                    >
                      <div className="h-full relative flex items-center justify-center gap-2 rounded-[10px] bg-[#0a1128] px-2 py-3 transition-all duration-300 group-hover:bg-blue-950/40">
                        <span className="font-bold text-cyan-50 tracking-wide text-sm text-center">
                          Let&apos;s Build
                        </span>
                      </div>
                    </Link>
                  </motion.div>
                </nav>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
