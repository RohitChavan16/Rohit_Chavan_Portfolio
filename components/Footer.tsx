"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Mail, ArrowRight, Heart } from "lucide-react";
import Link from "next/link";

const socialLinks = [
  { name: "GitHub", icon: Github, href: "https://github.com/RohitChavan16" },
  { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com/in/rohit-chavan16" },
  { name: "Twitter", icon: Twitter, href: "https://twitter.com/" },
  { name: "Email", icon: Mail, href: "mailto:approachrohit16@gmail.com" },
];

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="relative w-full border-t border-[rgba(255,255,255,0.05)] bg-transparent pt-16 pb-8 overflow-hidden mt-20">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-[var(--accent)] to-transparent opacity-30" />
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[800px] h-[200px] bg-[var(--accent)] blur-[120px] rounded-[100%] opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 mb-12">
          
          {/* Brand Section */}
          <div className="flex flex-col gap-4">
            <Link href="/" className="group inline-block w-max">
              <h2 className="text-3xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-[#00cdcd] to-[#ced800]">
                Rohit Chavan.
              </h2>
              <div className="h-[2px] w-0 bg-[var(--accent)] transition-all duration-300 group-hover:w-full" />
            </Link>
            <p className="text-[var(--muted)] text-sm max-w-sm leading-relaxed mt-2">
              Building exceptional digital experiences with modern technologies. Constantly learning, constantly evolving.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <ul className="flex flex-col gap-2">
              {quickLinks.map((link, i) => (
                <li key={i}>
                  <Link href={link.href} className="text-[var(--muted)] hover:text-[var(--accent)] transition-colors duration-200 text-sm flex items-center gap-2 group w-max">
                    <ArrowRight size={14} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect Section */}
          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-semibold text-white">Let's Connect</h3>
            <p className="text-[var(--muted)] text-sm mb-2">
              Always open to discussing new projects, creative ideas or opportunities to be part of your visions.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, i) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={i}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -4, scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 rounded-full bg-[var(--surface)] border border-[var(--border)] flex items-center justify-center text-[var(--muted)] hover:text-[#081121] hover:bg-gradient-to-tr hover:from-[var(--accent)] hover:to-[#f8e58f] hover:border-transparent transition-colors duration-300 shadow-lg"
                  >
                    <Icon size={18} />
                  </motion.a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[rgba(255,255,255,0.05)] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[var(--muted-2)] text-xs">
            © {new Date().getFullYear()} Rohit Chavan. All rights reserved.
          </p>
          <p className="text-[var(--muted-2)] text-xs flex items-center gap-1.5">
            Designed & Built with <Heart size={12} className="text-rose-500 fill-rose-500 animate-pulse" />
          </p>
        </div>
      </div>
    </footer>
  );
}
