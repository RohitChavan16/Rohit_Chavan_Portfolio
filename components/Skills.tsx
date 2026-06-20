"use client";

import { motion } from "framer-motion";
import type { ComponentType, CSSProperties } from "react";
import {
  Blocks,
  BrainCircuit,
  Braces,
  Code2,
  Cpu,
  CreditCard,
  Database,
  GitBranch,
  Globe,
  Image,
  Key,
  Network,
  Rows3,
  Terminal,
} from "lucide-react";

type Skill = {
  name: string;
  icon?: string;
  Icon?: ComponentType<{ size?: number; strokeWidth?: number; className?: string }>;
  colors: {
    border: string;
    glow: string;
    bg: string;
    text: string;
  };
};

type SkillSection = {
  title: string;
  description: string;
  icon: ComponentType<{ size?: number; className?: string }>;
  skills: Skill[];
};

const devicon = (path: string) =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${path}/${path}-original.svg`;

const skillSections: SkillSection[] = [
  {
    title: "Programming Languages",
    description: "Core languages that power modern applications and algorithms.",
    icon: Braces,
    skills: [
      {
        name: "C++",
        icon: devicon("cplusplus"),
        colors: { border: "#74c0fc", glow: "#4dabf7", bg: "#081f3f", text: "#d7e9ff" },
      },
      {
        name: "JavaScript",
        icon: devicon("javascript"),
        colors: { border: "#facc15", glow: "#fde047", bg: "#251f09", text: "#fff8c4" },
      },
      {
        name: "TypeScript",
        icon: devicon("typescript"),
        colors: { border: "#7dd3fc", glow: "#38bdf8", bg: "#071f36", text: "#d6f5ff" },
      },
      {
        name: "Python",
        icon: devicon("python"),
        colors: { border: "#ffd43b", glow: "#3776ab", bg: "#112039", text: "#f5f0c1" },
      },
      {
        name: "Go",
        icon: devicon("go"),
        colors: { border: "#f97316", glow: "#fb923c", bg: "#2d1409", text: "#ffe9d9" },
      },
      {
        name: "SQL",
        Icon: Database,
        colors: { border: "#7c3aed", glow: "#a855f7", bg: "#151336", text: "#e6dcff" },
      },
    ],
  },
  {
    title: "Frontend Development",
    description: "Polished interfaces, interaction systems, and responsive experiences.",
    icon: Blocks,
    skills: [
      {
        name: "React.js",
        icon: devicon("react"),
        colors: { border: "#7dd3fc", glow: "#38bdf8", bg: "#042735", text: "#daf5ff" },
      },
      {
        name: "Next.js",
        icon: devicon("nextjs"),
        colors: { border: "#e2e8f0", glow: "#f8fafc", bg: "#111111", text: "#f8fafc" },
      },
      {
        name: "Tailwind CSS",
        icon: devicon("tailwindcss"),
        colors: { border: "#38bdf8", glow: "#22d3ee", bg: "#042f3f", text: "#d9f8ff" },
      },
      {
        name: "Responsive Design • Framer Motion",
        icon: devicon("figma"),
        colors: { border: "#60a5fa", glow: "#93c5fd", bg: "#081e31", text: "#dbeafe" },
      },
      {
        name: "HTML5",
        icon: devicon("html5"),
        colors: { border: "#f97316", glow: "#fb923c", bg: "#2d1409", text: "#ffe9d9" },
      },
      {
        name: "CSS3",
        icon: devicon("css3"),
        colors: { border: "#60a5fa", glow: "#93c5fd", bg: "#081e31", text: "#dbeafe" },
      },
    ],
  },
  {
    title: "Backend Development",
    description: "High-performance backend systems built for scalability, security, reliability, and seamless integrations.",
    icon: Cpu,
    skills: [
      {
        name: "Node.js",
        icon: devicon("nodejs"),
        colors: { border: "#86efac", glow: "#4ade80", bg: "#051c11", text: "#e8ffee" },
      },
      {
        name: "Express.js",
        icon: devicon("express"),
        colors: { border: "#cbd5e1", glow: "#94a3b8", bg: "#141926", text: "#edf2f7" },
      },
      {
        name: "REST APIs",
        Icon: Network,
        colors: { border: "#facc15", glow: "#fbbf24", bg: "#271f05", text: "#fff7c8" },
      },
      {
  name: "FastAPI",
  icon: devicon("fastapi"),
  colors: {
    border: "#10b981",
    glow: "#6ee7b7",
    bg: "#06261f",
    text: "#d1fae5"
  },
}, {
        name: "Go",
        icon: devicon("go"),
        colors: { border: "#f97316", glow: "#fb923c", bg: "#2d1409", text: "#ffe9d9" },
      },
      {
        name: "Microservices",
        icon: devicon("docker"),
        colors: { border: "#22d3ee", glow: "#38bdf8", bg: "#071b24", text: "#d8f7ff" },
      },
    ],
  },
  {
    title: "Databases",
    description: "Designing efficient data architectures with scalable storage, fast retrieval, and strong consistency.",
    icon: Database,
    skills: [
      {
        name: "MongoDB",
        icon: devicon("mongodb"),
        colors: { border: "#86efac", glow: "#4ade80", bg: "#061f0f", text: "#e7ffec" },
      },
      {
        name: "PostgreSQL",
        icon: devicon("postgresql"),
        colors: { border: "#93c5fd", glow: "#3b82f6", bg: "#081c31", text: "#dbeafe" },
      },
      {
        name: "Mongoose",
        icon: devicon("mongoose"),
        colors: { border: "#fbbf24", glow: "#f59e0b", bg: "#2a1a08", text: "#fff1cc" },
      },
    ],
  },
  {
    title: "AI & ML",
    description: "Leveraging AI, machine learning, and data-driven technologies to create smart and scalable applications.",
    icon: BrainCircuit,
    skills: [
      {
        name: "OpenCV",
        icon: devicon("opencv"),
        colors: { border: "#4ade80", glow: "#22c55e", bg: "#081f10", text: "#e9ffee" },
      },
      {
        name: "NumPy",
        icon: devicon("numpy"),
        colors: { border: "#60a5fa", glow: "#3b82f6", bg: "#081d31", text: "#dbeafe" },
      },
      {
        name: "RAG Systems",
        Icon: BrainCircuit,
        colors: { border: "#fde68a", glow: "#facc15", bg: "#2d2411", text: "#fff7d6" },
      },
{
  name: "Pandas",
  icon: devicon("pandas"),
  colors: { border: "#60a5fa", glow: "#3b82f6", bg: "#081d31", text: "#dbeafe" },
},

{
  name: "Matplotlib",
  icon: devicon("matplotlib"),
  colors: { border: "#60a5fa", glow: "#3b82f6", bg: "#081d31", text: "#dbeafe" },
},

{
  name: "Scikit-Learn",
  icon: devicon("scikitlearn"),
  colors: { border: "#60a5fa", glow: "#3b82f6", bg: "#081d31", text: "#dbeafe" },
},
    ],
  },
  {
    title: "Tools & Platforms",
    description: "Infrastructure, collaboration, and deployment tools for real product delivery.",
    icon: GitBranch,
    skills: [
      {
        name: "Git",
        icon: devicon("git"),
        colors: { border: "#fb7185", glow: "#f43f5e", bg: "#2d1014", text: "#ffe6eb" },
      },
      {
        name: "GitHub",
        Icon: GitBranch,
        colors: { border: "#e2e8f0", glow: "#cbd5e1", bg: "#161b22", text: "#e2e8f0" },
      },
      {
        name: "Docker",
        icon: devicon("docker"),
        colors: { border: "#7dd3fc", glow: "#38bdf8", bg: "#082f49", text: "#d9f7ff" },
      },
      {
        name: "Postman",
        icon: devicon("postman"),
        colors: { border: "#ff9f7a", glow: "#fb7185", bg: "#2d1308", text: "#ffe7d8" },
      },
      {
        name: "Google Colab",
        icon: devicon("python"),
        colors: { border: "#f97316", glow: "#fb923c", bg: "#2d1409", text: "#ffe9d9" },
      },
      {
        name: "Stripe API",
        Icon: CreditCard,
        colors: { border: "#38bdf8", glow: "#0ea5e9", bg: "#071d2c", text: "#d9f7ff" },
      },
    ],
  },
  /*{
    title: "Computer Science Fundamentals",
    description: "Foundational systems, algorithms, and architecture every engineer uses.",
    icon: Code2,
    skills: [
      {
        name: "DSA",
        Icon: Rows3,
        colors: { border: "#fda4af", glow: "#fb7185", bg: "#2b1117", text: "#ffe3e7" },
      },
      {
        name: "OOP",
        Icon: Blocks,
        colors: { border: "#a5b4fc", glow: "#818cf8", bg: "#101a36", text: "#dde2ff" },
      },
      {
        name: "DBMS",
        Icon: Database,
        colors: { border: "#34d399", glow: "#10b981", bg: "#0c1d13", text: "#ddf7e8" },
      },
      {
        name: "Operating Systems",
        Icon: Cpu,
        colors: { border: "#fcd34d", glow: "#fbbf24", bg: "#2c2414", text: "#fff6d5" },
      },
      {
        name: "Computer Networks",
        Icon: Globe,
        colors: { border: "#7dd3fc", glow: "#38bdf8", bg: "#08203a", text: "#d9f7ff" },
      },
    ],
  },*/
];

const scatterOffsets = [
  { x: -20, y: -16, r: -8 },
  { x: 16, y: -12, r: 10 },
  { x: -14, y: 14, r: -6 },
  { x: 20, y: 8, r: 8 },
  { x: -8, y: 18, r: -3 },
  { x: 12, y: -18, r: 12 },
];

export default function Skills() {
  return (
    <section id="skills" className="px-4 py-12 md:px-[8%] md:py-24">
      <div className="section-shell relative overflow-hidden rounded-3xl p-6 sm:p-8 lg:p-12">
        <div className="skills-aurora" aria-hidden="true" />

        <div className="relative">
          <div className="mb-8 flex items-center gap-4">
            <span className="section-label">02 Skills</span>
            <div className="h-px flex-1 bg-white/15" />
          </div>

          <div className="mb-10 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <h2 className="max-w-4xl text-4xl font-black leading-[0.95] tracking-normal text-white sm:text-5xl lg:text-6xl">
              Technical stack in a
              <span className="block text-[#7cf6d4]">living skill board</span>
            </h2>
            <p className="muted max-w-md text-center leading-relaxed">
              A comprehensive overview of the technologies and tools I use to design, develop, and deploy software solutions.
Covering programming languages, frameworks, databases, cloud platforms, and development tools.
            </p>
          </div>

          <div className="grid gap-6 xl:grid-cols-2">
            {skillSections.map((section, sectionIndex) => {
              const SectionIcon = section.icon;
              return (
                <motion.article
                  key={section.title}
                  className="skill-section rounded-4xl border border-white/10 bg-transparent md:bg-slate-950/80 p-4 shadow-[0_32px_80px_rgba(0,0,0,0.22)] md:backdrop-blur-xl"
                  initial={{ opacity: 0, y: 36 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-120px" }}
                  transition={{ duration: 0.7, delay: sectionIndex * 0.08, ease: "easeOut" }}
                >
                  <div className="skill-category relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-transparent md:bg-slate-950/85 p-6 md:shadow-[0_28px_80px_rgba(0,0,0,0.18)]">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.08),transparent_40%)] opacity-70 pointer-events-none" />
                    <div className="absolute -left-12 top-4 h-24 w-24 rounded-full bg-[rgba(124,246,212,0.1)] blur-3xl" />
                    <div className="absolute right-4 top-14 h-20 w-20 rounded-full bg-[rgba(124,231,255,0.1)] blur-3xl" />

                    <div className="relative z-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                      <div>
                        <div className="inline-flex h-12 w-12 items-center justify-center rounded-3xl border border-white/10 bg-white/10 text-white shadow-[0_20px_50px_rgba(0,0,0,0.18)]">
                          <SectionIcon size={24} className="text-white" />
                        </div>
                        <h3 className="mt-5 text-2xl font-black tracking-tight text-white">
                          {section.title}
                        </h3>
                        <p className="mt-3 max-w-xl text-sm leading-6 text-slate-300">
                          {section.description}
                        </p>
                      </div>
                      <div className="rounded-3xl border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.24em] text-slate-200 shadow-[0_15px_40px_rgba(0,0,0,0.15)]">
                        {sectionIndex + 1}/6
                      </div>
                    </div>

                  <div className="mt-8 grid grid-cols-2 gap-3 sm:gap-4">
                      {section.skills.map((skill, skillIndex) => {
                        const scatter = scatterOffsets[skillIndex % scatterOffsets.length];
                        const style = {
                          "--skill-border": skill.colors.border,
                          "--skill-glow": skill.colors.glow,
                          "--skill-bg": skill.colors.bg,
                          "--skill-text": skill.colors.text,
                        } as CSSProperties;

                        const vibrantMobileGradients = [
                          "linear-gradient(135deg, rgba(236,72,153,0.3) 0%, rgba(244,63,94,0.3) 100%)", // Pink-Rose
                          "linear-gradient(135deg, rgba(139,92,246,0.3) 0%, rgba(59,130,246,0.3) 100%)", // Violet-Blue
                          "linear-gradient(135deg, rgba(16,185,129,0.3) 0%, rgba(20,184,166,0.3) 100%)", // Emerald-Teal
                          "linear-gradient(135deg, rgba(245,158,11,0.3) 0%, rgba(239,68,68,0.3) 100%)", // Amber-Red
                          "linear-gradient(135deg, rgba(6,182,212,0.3) 0%, rgba(59,130,246,0.3) 100%)", // Cyan-Blue
                          "linear-gradient(135deg, rgba(217,70,239,0.3) 0%, rgba(139,92,246,0.3) 100%)", // Fuchsia-Violet
                          "linear-gradient(135deg, rgba(132,204,22,0.3) 0%, rgba(34,197,94,0.3) 100%)", // Lime-Green
                          "linear-gradient(135deg, rgba(249,115,22,0.3) 0%, rgba(234,179,8,0.3) 100%)", // Orange-Yellow
                          "linear-gradient(135deg, rgba(14,165,233,0.3) 0%, rgba(99,102,241,0.3) 100%)", // Sky-Indigo
                        ];
                        const mobileGradient = vibrantMobileGradients[(sectionIndex * 10 + skillIndex) % vibrantMobileGradients.length];

                        const SkillIcon = skill.Icon;
                        return (
                          <motion.div
                            key={skill.name}
                            className="skill-card group relative overflow-hidden rounded-2xl sm:rounded-3xl border border-white/10 bg-transparent sm:bg-slate-950/95 p-3 sm:p-5 flex flex-col items-center sm:items-start"
                            style={style}
                            initial={{ opacity: 0, x: scatter.x * 0.55, y: scatter.y * 0.55, rotate: scatter.r, scale: 0.94 }}
                            whileInView={{ opacity: 1, x: 0, y: 0, rotate: 0, scale: 1 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.66, delay: sectionIndex * 0.05 + skillIndex * 0.03, ease: "easeOut" }}
                            whileHover={{ y: -8, scale: 1.02, rotate: scatter.r / 5 }}
                          >
                            {/* Mobile-Only Vibrant Gradient Background */}
                            <div 
                              className="absolute inset-0 sm:hidden pointer-events-none"
                              style={{ background: mobileGradient }}
                            />
                            
                            <div className="absolute inset-0 rounded-[inherit] bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.12),transparent_55%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none" />
                            <div className="absolute -right-8 top-3 h-20 w-20 rounded-full opacity-10 blur-3xl" style={{ backgroundColor: "var(--skill-glow)" }} />
                            <div className="relative z-10 flex items-center justify-center sm:justify-between gap-3 w-full">
                              <div className="grid h-10 w-10 sm:h-12 sm:w-12 place-items-center rounded-2xl sm:rounded-3xl border border-white/10 bg-black/20 sm:bg-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.14)] backdrop-blur-md">
                                {skill.icon ? (
                                  <img
                                    src={skill.icon}
                                    alt={skill.name}
                                    className="h-6 w-6 sm:h-8 sm:w-8 object-contain"
                                    loading="lazy"
                                  />
                                ) : SkillIcon ? (
                                  <SkillIcon size={22} style={{ color: "var(--skill-glow)" }} aria-hidden="true" />
                                ) : null}
                              </div>
                              <span
                                className="hidden sm:block h-3 w-3 rounded-full"
                                style={{
                                  backgroundColor: "var(--skill-border)",
                                  boxShadow: `0 0 18px var(--skill-glow)`,
                                }}
                              />
                            </div>
                            <div className="mt-3 sm:mt-4 text-center sm:text-left w-full">
                              <h4 className="text-[0.75rem] sm:text-base font-semibold truncate" style={{ color: "var(--skill-text)" }}>
                                {skill.name}
                              </h4>
                              <p className="mt-2 hidden sm:block text-xs text-slate-400">
                                Pro-level mastery and system-ready integration.
                              </p>
                            </div>
                            <div className="mt-3 sm:mt-4 w-full h-1 sm:h-1.5 overflow-hidden rounded-full bg-white/10">
                              <div
                                className="h-full w-4/5 rounded-full transition-all duration-500 group-hover:w-full"
                                style={{
                                  backgroundColor: "var(--skill-border)",
                                  boxShadow: `0 0 18px var(--skill-glow)`,
                                }}
                              />
                            </div>
                          </motion.div>
                        );
                      })}
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
