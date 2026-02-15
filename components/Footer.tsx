"use client";

import React from 'react';
import Link from 'next/link';
import { 
  Github, 
  Linkedin, 
  Twitter, 
  Mail, 
  Heart, 
  ArrowUp,
  ExternalLink,
  Instagram,
  Youtube,
  Coffee
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { icon: Github, href: 'https://github.com/yourusername', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/yourusername', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://twitter.com/yourusername', label: 'Twitter' },
    { icon: Instagram, href: 'https://instagram.com/yourusername', label: 'Instagram' },
    { icon: Youtube, href: 'https://youtube.com/@yourusername', label: 'YouTube' },
  ];

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Projects', href: '/projects' },
    { name: 'Skills', href: '/skills' },
    { name: 'Experience', href: '/experience' },
    { name: 'Contact', href: '/contact' },
  ];

  const services = [
    'Web Development',
    'UI/UX Design',
    'Mobile Apps',
    'API Development',
    'Consulting',
    'Code Review',
  ];

  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        {/* Top Section with Gradient Border */}
        <div className="mb-12 pb-12 border-b border-gradient">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                YourName
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Full Stack Developer & Creative Designer crafting digital experiences that make a difference.
              </p>
              <div className="flex items-center gap-3 text-sm text-gray-400">
                <Coffee className="w-4 h-4 text-amber-400" />
                <span>Available for freelance work</span>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                Quick Links
              </h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href}
                      className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 flex items-center gap-2 group"
                    >
                      <span className="w-0 h-0.5 bg-cyan-400 group-hover:w-4 transition-all duration-300"></span>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                Services
              </h4>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service} className="text-gray-300 flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-purple-400 to-pink-400"></div>
                    {service}
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact & Newsletter */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-cyan-400">
                Stay Connected
              </h4>
              <p className="text-gray-300 mb-4 text-sm">
                Subscribe to get updates on new projects and articles.
              </p>
              <div className="mb-6">
                <div className="flex gap-2">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-2 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 text-white placeholder-gray-400 backdrop-blur-sm"
                  />
                  <button className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 font-semibold">
                    Join
                  </button>
                </div>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <Mail className="w-4 h-4 text-cyan-400" />
                <a href="mailto:your.email@example.com" className="hover:text-cyan-400 transition-colors text-sm">
                  your.email@example.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          
          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 rounded-lg blur opacity-0 group-hover:opacity-75 transition-opacity duration-300"></div>
                <div className="relative p-3 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-300 group-hover:scale-110">
                  <social.icon className="w-5 h-5" />
                </div>
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-center md:text-left">
            <p className="text-gray-300 flex items-center gap-2 flex-wrap justify-center md:justify-start">
              <span>© {currentYear} YourName. Made with</span>
              <Heart className="w-4 h-4 text-red-500 animate-pulse" />
              <span>and</span>
              <Coffee className="w-4 h-4 text-amber-400" />
            </p>
            <p className="text-gray-400 text-sm mt-1">
              All rights reserved. Designed & Developed with passion.
            </p>
          </div>

          {/* Scroll to Top Button */}
          <button
            onClick={scrollToTop}
            className="group relative"
            aria-label="Scroll to top"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 rounded-lg blur opacity-0 group-hover:opacity-75 transition-opacity duration-300"></div>
            <div className="relative p-3 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-300 group-hover:scale-110 group-hover:-translate-y-1">
              <ArrowUp className="w-5 h-5" />
            </div>
          </button>
        </div>

        {/* Bottom Links */}
        <div className="mt-8 pt-8 border-t border-white/10 flex flex-wrap justify-center gap-6 text-sm text-gray-400">
          <Link href="/privacy" className="hover:text-cyan-400 transition-colors">
            Privacy Policy
          </Link>
          <span>•</span>
          <Link href="/terms" className="hover:text-cyan-400 transition-colors">
            Terms of Service
          </Link>
          <span>•</span>
          <Link href="/sitemap" className="hover:text-cyan-400 transition-colors">
            Sitemap
          </Link>
          <span>•</span>
          <a 
            href="/resume.pdf" 
            target="_blank" 
            className="hover:text-cyan-400 transition-colors inline-flex items-center gap-1"
          >
            Download Resume
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;