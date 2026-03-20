"use client";

import { useState } from "react";

const projects = [
  {
    id: "01",
    title: "SynapTalk",
    category: "SaaS /Full Stack",
    description:
      "SynapTalk 🌐 is a next-generation platform that unifies real-time chat, HD video calls, screen sharing, AI-powered assistance, and social media management — all in one place. Built with end-to-end encryption, low-latency infrastructure, and modern web technologies, it ensures fast, secure, and seamless communication for users.",
    tags: ["Mongo DB", "JavaScript", "Node js", "WebSocket", "Tailwind"],
    year: "2026",
    color: "#e8ff47",
    link: "https://github.com/RohitChavan16/SynapTalk",
    live: "https://synap-talk-kuub.vercel.app/",
  },
  {
    id: "02",
    title: "ScreenFlow",
    category: "Movie Booking",
    description:
      "ScreenFlow is a full-stack web application that allows users to browse movies, select showtimes, book seats, and make secure online payments. It also features an admin dashboard for managing movies, showtimes, and tracking total bookings and revenue. The project includes role-based authentication, real-time seat selection, and Stripe integration for payments in INR.",
    tags: ["React", "Shopify", "Stripe", "Node.js", "GSAP"],
    year: "2024",
    color: "#ff6b6b",
    link: "https://github.com/RohitChavan16/ScreenFlow",
    live: "https://screenflow-puce.vercel.app/",
  },
  {
    id: "03",
    title: "PrepNex",
    category: "AI / Web App",
    description:
      "An AI-powered mood journaling app that analyzes sentiment and suggests wellness activities. Integrates OpenAI GPT-4 with a Flutter mobile frontend.",
    tags: ["Python", "OpenAI", "FastAPI", "React Native", "MongoDB"],
    year: "2023",
    color: "#a78bfa",
    link: "https://github.com/RohitChavan16/PrepNex",
    live: "#",
  },
  {
    id: "04",
    title: "Custom RAG ChatBot",
    category: "Dev Tool / API",
    description:
      "A CLI + web tool for syncing environment variables across dev teams. Built with Node.js, encrypted storage, and a minimal React dashboard.",
    tags: ["Node.js", "CLI", "React", "AES Encryption", "Redis"],
    year: "2023",
    color: "#47ffe8",
    link: "https://github.com/RohitChavan16/custom-rag-chatbot",
    live: "#",
  },
  {
    id: "04",
    title: "Document Scanner",
    category: "Open CV",
    description:
      "A professional-grade Document Scanner built using OpenCV in C++. This project takes an input image (uploaded from storage, in future will be updating with webcam), detects the document boundaries, performs a perspective transform, and returns a top-down, high-contrast scanned version — just like a real scanner.",
    tags: ["Node.js", "CLI", "React", "AES Encryption", "Redis"],
    year: "2023",
    color: "#47ffe8",
    link: "https://github.com/RohitChavan16/ScanLayer",
    live: "#",
  },
];

export default function Work() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <section id="work" className="bg-[#0a0a0a] py-32 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section label */}
        <div className="flex items-center gap-3 mb-20">
          <span className="text-[#e8ff47] font-mono text-xs tracking-[0.3em] uppercase">
            03 — Selected Work
          </span>
          <div className="flex-1 h-[1px] bg-[#1a1a1a]" />
        </div>

        <div className="mb-16 flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <h2
            className="text-5xl lg:text-7xl font-black text-white leading-none uppercase"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            Projects <br />
            <span className="text-[#e8ff47]">I've Built</span>
          </h2>
          <a
            href="https://github.com"
            target="_blank"
            className="text-xs font-mono uppercase tracking-widest text-[#555] hover:text-[#e8ff47] transition-colors flex items-center gap-2"
          >
            All projects on GitHub →
          </a>
        </div>

        {/* Projects list */}
        <div className="flex flex-col">
          {projects.map((project, i) => (
            <div
              key={project.id}
              className="group grid grid-cols-1 lg:grid-cols-[80px_1fr_auto] gap-6 lg:gap-12 items-start border-t border-[#1a1a1a] py-10 cursor-pointer hover:border-t-[#333] transition-colors duration-200"
              onMouseEnter={() => setHovered(project.id)}
              onMouseLeave={() => setHovered(null)}
            >
              {/* Number */}
              <span
                className="text-5xl font-black leading-none transition-colors duration-300"
                style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  color: hovered === project.id ? project.color : "#1a1a1a",
                }}
              >
                {project.id}
              </span>

              {/* Content */}
              <div className="flex flex-col gap-3">
                <div className="flex flex-wrap items-center gap-4">
                  <h3
                    className="text-2xl lg:text-3xl font-black text-white uppercase group-hover:text-white transition-colors"
                    style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                  >
                    {project.title}
                  </h3>
                  <span
                    className="text-xs font-mono uppercase tracking-widest px-3 py-1 border"
                    style={{
                      color: project.color,
                      borderColor: project.color + "33",
                    }}
                  >
                    {project.category}
                  </span>
                  <span className="text-[#333] text-xs font-mono">
                    {project.year}
                  </span>
                </div>

                <p className="text-[#555] text-sm leading-relaxed max-w-2xl group-hover:text-[#888] transition-colors duration-300">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-mono text-[#333] bg-[#111] px-3 py-1 border border-[#1a1a1a] group-hover:border-[#2a2a2a] transition-colors duration-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Links */}
              <div className="flex lg:flex-col items-start gap-3 lg:pt-2 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-200">
                <a
                  href={project.live}
                  className="text-xs font-mono uppercase tracking-widest text-black px-4 py-2 transition-colors duration-200 whitespace-nowrap"
                  style={{ background: project.color }}
                >
                  Live →
                </a>
                <a
                  href={project.link}
                  className="text-xs font-mono uppercase tracking-widest text-[#555] border border-[#2a2a2a] px-4 py-2 hover:text-white hover:border-[#444] transition-colors duration-200 whitespace-nowrap"
                >
                  Code
                </a>
              </div>
            </div>
          ))}
          {/* Last border */}
          <div className="border-t border-[#1a1a1a]" />
        </div>
      </div>
    </section>
  );
}