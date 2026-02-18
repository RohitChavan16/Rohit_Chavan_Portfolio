"use client";

import { useState } from "react";

const experiences = [
  {
    id: 0,
    role: "Senior Full Stack Engineer",
    company: "Stripe",
    type: "Full-time",
    period: "Jan 2023 — Present",
    duration: "2 yrs",
    description:
      "Lead development of internal tooling used by 500+ Stripe engineers. Architected a real-time audit log system processing 2M+ events/day. Mentored a team of 4 junior engineers and drove the migration from REST to GraphQL.",
    highlights: [
      "Reduced API response time by 60% through Redis caching strategy",
      "Led migration of legacy Ruby monolith to Node.js microservices",
      "Implemented automated testing pipeline — 0 regressions in 12 months",
      "Built ML-powered fraud detection dashboard saving $3M annually",
    ],
    tech: ["Node.js", "React", "GraphQL", "Redis", "PostgreSQL", "AWS"],
    logo: "◈",
    color: "#e8ff47",
  },
  {
    id: 1,
    role: "Full Stack Developer",
    company: "Linear",
    type: "Full-time",
    period: "Mar 2021 — Dec 2022",
    duration: "1 yr 9 mo",
    description:
      "Worked on the core product team building features for Linear's project management platform. Shipped keyboard-first navigation, bulk actions, and the public API — used by 50K+ teams worldwide.",
    highlights: [
      "Shipped 20+ features shipped in 18 months, zero critical incidents",
      "Designed and built the public REST API consumed by 500+ integrations",
      "Improved initial page load from 4.2s to 0.9s via code splitting",
      "Co-authored internal design system used across 4 product teams",
    ],
    tech: ["TypeScript", "React", "Electron", "Prisma", "Postgres"],
    logo: "◎",
    color: "#a78bfa",
  },
  {
    id: 2,
    role: "Frontend Engineer",
    company: "Notion",
    type: "Full-time",
    period: "Jun 2020 — Feb 2021",
    duration: "9 mo",
    description:
      "Joined Notion during hyper-growth phase. Focused on performance and mobile responsiveness. Collaborated with design to build a new block editor experience that became Notion's signature feature.",
    highlights: [
      "Rebuilt mobile web experience, boosting mobile DAU by 38%",
      "Contributed 15+ components to the internal component library",
      "Reduced React bundle size by 35% through lazy loading",
      "Drove accessibility improvements across core editor features",
    ],
    tech: ["React", "TypeScript", "CSS Modules", "Webpack", "Jest"],
    logo: "◉",
    color: "#ff6b6b",
  },
  {
    id: 3,
    role: "Software Engineering Intern",
    company: "GitHub",
    type: "Internship",
    period: "May 2019 — Aug 2019",
    duration: "3 mo",
    description:
      "Summer internship on the GitHub Actions team. Built a new workflow visualization feature from scratch. Shipped to production and used by millions of developers on day one.",
    highlights: [
      "Built workflow graph visualizer shipped to 40M+ GitHub users",
      "Pair programmed with senior engineers and participated in design reviews",
      "Received return offer — top intern project of summer cohort",
    ],
    tech: ["Ruby on Rails", "React", "GraphQL", "Storybook"],
    logo: "◇",
    color: "#47ffe8",
  },
];

export default function Experience() {
  const [active, setActive] = useState(0);
  const exp = experiences[active];

  return (
    <section id="experience" className="bg-[#0d0d0d] py-32 relative overflow-hidden">
      {/* Blob */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-[#a78bfa] opacity-[0.03] blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section label */}
        <div className="flex items-center gap-3 mb-20">
          <span className="text-[#e8ff47] font-mono text-xs tracking-[0.3em] uppercase">
            04 — Experience
          </span>
          <div className="flex-1 h-[1px] bg-[#1a1a1a]" />
        </div>

        <h2
          className="text-5xl lg:text-7xl font-black text-white leading-none uppercase mb-16"
          style={{ fontFamily: "'Bebas Neue', sans-serif" }}
        >
          Where I've <span className="text-[#e8ff47]">Worked</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-12">
          {/* Left: Company selector */}
          <div className="flex flex-row lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0">
            {experiences.map((e) => (
              <button
                key={e.id}
                onClick={() => setActive(e.id)}
                className={`flex items-center gap-3 px-4 py-3 text-left border transition-all duration-200 flex-shrink-0 lg:flex-shrink ${
                  active === e.id
                    ? "border-[#e8ff47]/40 bg-[#0a0a0a]"
                    : "border-transparent hover:border-[#2a2a2a]"
                }`}
              >
                <span
                  className="text-lg transition-colors duration-200"
                  style={{ color: active === e.id ? e.color : "#333" }}
                >
                  {e.logo}
                </span>
                <div>
                  <p
                    className={`text-sm font-bold transition-colors duration-200 ${active === e.id ? "text-white" : "text-[#555]"}`}
                  >
                    {e.company}
                  </p>
                  <p className="text-[#333] text-xs font-mono mt-0.5">
                    {e.duration}
                  </p>
                </div>
              </button>
            ))}
          </div>

          {/* Right: Details */}
          <div
            key={active}
            className="border border-[#1a1a1a] p-8 bg-[#0a0a0a] relative overflow-hidden animate-[fadeIn_0.3s_ease]"
          >
            {/* Corner accent */}
            <div
              className="absolute top-0 left-0 w-16 h-[2px]"
              style={{ background: exp.color }}
            />

            <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
              <div>
                <h3
                  className="text-2xl font-black text-white mb-1"
                  style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                >
                  {exp.role}
                </h3>
                <div className="flex items-center gap-3">
                  <span
                    className="text-sm font-bold"
                    style={{ color: exp.color }}
                  >
                    {exp.company}
                  </span>
                  <span className="text-[#333] text-xs font-mono">·</span>
                  <span className="text-[#555] text-xs font-mono uppercase tracking-widest">
                    {exp.type}
                  </span>
                </div>
              </div>
              <span className="text-[#333] text-xs font-mono tracking-widest border border-[#1a1a1a] px-3 py-1">
                {exp.period}
              </span>
            </div>

            <p className="text-[#666] text-sm leading-relaxed mb-8">
              {exp.description}
            </p>

            {/* Highlights */}
            <div className="flex flex-col gap-3 mb-8">
              {exp.highlights.map((h, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span
                    className="mt-1 flex-shrink-0 text-xs"
                    style={{ color: exp.color }}
                  >
                    ▸
                  </span>
                  <p className="text-[#888] text-sm leading-relaxed">{h}</p>
                </div>
              ))}
            </div>

            {/* Tech stack */}
            <div className="pt-6 border-t border-[#1a1a1a]">
              <p className="text-[#333] text-xs font-mono uppercase tracking-widest mb-3">
                Stack Used
              </p>
              <div className="flex flex-wrap gap-2">
                {exp.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs font-mono px-3 py-1 border text-[#555] border-[#1a1a1a] hover:text-white hover:border-[#333] transition-colors duration-200"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}