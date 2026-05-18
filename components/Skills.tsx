"use client";

import { motion } from "framer-motion";
import type { ComponentType, CSSProperties } from "react";
import {
  Blocks,
  BrainCircuit,
  Braces,
  Cpu,
  Database,
  GitBranch,
  Network,
  Rows3,
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
  size?: "wide" | "tall" | "large";
};

const devicon = (path: string) =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${path}/${path}-original.svg`;

const skills: Skill[] = [

  {
    name: "Python",
    icon: devicon("python"),
    colors: { border: "#ffd166", glow: "#3776ab", bg: "#152038", text: "#fff1bf" },
    size: "wide",
  },
  {
    name: "Java",
    icon: devicon("java"),
    colors: { border: "#ff8a65", glow: "#f4511e", bg: "#2a120d", text: "#ffe3db" },
  },
  {
    name: "JavaScript",
    icon: devicon("javascript"),
    colors: { border: "#f7df1e", glow: "#f7df1e", bg: "#2a2404", text: "#fff7a8" },
    size: "wide",
  },
  {
    name: "TypeScript",
    icon: devicon("typescript"),
    colors: { border: "#7ab8ff", glow: "#3178c6", bg: "#071d36", text: "#d9ecff" },
    size: "wide",
  },
  {
    name: "HTML",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    colors: { border: "#ff8b5c", glow: "#e34f26", bg: "#2d140b", text: "#ffe4d6" },
  },
  {
  name: "FastAPI",
  icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg",
  colors: { border: "#5eead4", glow: "#009688", bg: "#06211f", text: "#d9fffb" },
  size: "wide",
},
{
  name: "Next.js",
  icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  colors: { border: "#e5e7eb", glow: "#ffffff", bg: "#111111", text: "#f9fafb" },
  size: "wide",
},
  {
    name: "CSS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    colors: { border: "#75a7ff", glow: "#1572b6", bg: "#071a33", text: "#dcecff" },
  },
   {
    name: "C++",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
    colors: { border: "#78b7ff", glow: "#2f80ed", bg: "#08213f", text: "#d7ecff" },
    size: "large",
  },
  {
    name: "C",
    icon: devicon("c"),
    colors: { border: "#9ec7ff", glow: "#5c6bc0", bg: "#101a37", text: "#eef5ff" },
  },
  {
    name: "NumPy",
    icon: devicon("numpy"),
    colors: { border: "#79c2ff", glow: "#4dabf7", bg: "#071f36", text: "#e0f1ff" },
  },
  {
    name: "Pandas",
    icon: devicon("pandas"),
    colors: { border: "#b197fc", glow: "#7950f2", bg: "#160d30", text: "#ece5ff" },
  },
  {
  name: "Docker",
  icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  colors: { border: "#7dd3fc", glow: "#2496ed", bg: "#082f49", text: "#e0f7ff" },
  size: "wide",
},{
  name: "PostgreSQL",
  icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  colors: { border: "#93c5fd", glow: "#336791", bg: "#0b1d33", text: "#dbeafe" },
  size: "wide",
},
  
  {
    name: "React.js",
    icon: devicon("react"),
    colors: { border: "#74e2ff", glow: "#61dafb", bg: "#062230", text: "#ddf9ff" },
    size: "large",
  }, {
    name: "Git",
    icon: devicon("git"),
    colors: { border: "#ff9671", glow: "#f05032", bg: "#2a1008", text: "#ffe5dc" },
  },
  {
    name: "GitHub",
    Icon: GitBranch,
    colors: { border: "#d0bfff", glow: "#9775fa", bg: "#17112a", text: "#eee8ff" },
  },
  {
    name: "Node.js",
    icon: devicon("nodejs"),
    colors: { border: "#8ce99a", glow: "#68a063", bg: "#0b2411", text: "#e2ffe8" },
    size: "wide",
  },
  {
    name: "Express.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    colors: { border: "#ced4da", glow: "#adb5bd", bg: "#15191f", text: "#f1f3f5" },
  }, {
    name: "MySQL",
    icon: devicon("mysql"),
    colors: { border: "#89d2ff", glow: "#00758f", bg: "#071d27", text: "#e0f4ff" },
  },
  {
    name: "RESTful APIs",
    Icon: Network,
    colors: { border: "#ffdd57", glow: "#fcc419", bg: "#261f05", text: "#fff6cf" },
    size: "wide",
  },
  {
    name: "Tailwind CSS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
    colors: { border: "#67e8f9", glow: "#06b6d4", bg: "#06232a", text: "#d9fbff" },
    size: "wide",
  },
  {
    name: "Postman",
    icon: devicon("postman"),
    colors: { border: "#ff9f7a", glow: "#ff6c37", bg: "#2d1308", text: "#ffe6da" },
  },
  {
    name: "OpenCV",
    icon: devicon("opencv"),
    colors: { border: "#9cff8a", glow: "#5ec576", bg: "#0b250d", text: "#e5ffdf" },
    size: "wide",
  },
  {
    name: "MongoDB",
    icon: devicon("mongodb"),
    colors: { border: "#8ce99a", glow: "#47a248", bg: "#08210c", text: "#e0ffe5" },
    size: "wide",
  },
 
];

const sizeClass = {
  wide: "sm:col-span-2",
  tall: "sm:row-span-2",
  large: "sm:col-span-2 sm:row-span-2",
};

export default function Skills() {
  return (
    <section id="skills" className="px-[8%] py-24">
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
            <p className="muted max-w-md leading-relaxed">
              Languages, CS fundamentals, frameworks, tools, and databases kept close
              together so the full engineering range is visible at a glance.
            </p>
          </div>

          <div className="grid auto-rows-[112px] grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-6 xl:grid-cols-7">
            {skills.map((skill, index) => {
              const style = {
                "--skill-border": skill.colors.border,
                "--skill-glow": skill.colors.glow,
                "--skill-bg": skill.colors.bg,
                "--skill-text": skill.colors.text,
              } as CSSProperties;

              const Icon = skill.Icon;

              return (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 18, scale: 0.96 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.42, delay: index * 0.025, ease: "easeOut" }}
                  whileHover={{ y: -8, rotate: index % 2 === 0 ? 1.2 : -1.2 }}
                  style={style}
                  className={`skill-tile group ${skill.size ? sizeClass[skill.size] : ""}`}
                >
                  <div className="absolute inset-0 rounded-[inherit] opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <div className="absolute inset-x-4 top-0 h-px bg-[var(--skill-border)]" />
                    <div className="absolute -inset-8 bg-[radial-gradient(circle,var(--skill-glow),transparent_58%)] opacity-25 blur-2xl" />
                  </div>

                  <div className="relative flex h-full flex-col justify-between">
                    <div className="flex items-start justify-between gap-3">
                      <div className="grid h-12 w-12 place-items-center rounded-lg border border-white/15 bg-white/90 p-2 shadow-[0_0_24px_rgba(255,255,255,0.1)] transition-transform duration-300 group-hover:scale-110">
                        {skill.icon ? (
                          <img
                            src={skill.icon}
                            alt=""
                            className="h-full w-full object-contain"
                            loading="lazy"
                          />
                        ) : Icon ? (
                          <Icon
                            size={28}
                            strokeWidth={2.1}
                            className="text-slate-950"
                            aria-hidden="true"
                          />
                        ) : null}
                      </div>
                      <span className="h-2.5 w-2.5 rounded-full bg-[var(--skill-border)] shadow-[0_0_18px_var(--skill-glow)]" />
                    </div>

                    <div>
                      <h3 className="text-balance text-base font-extrabold leading-tight text-[var(--skill-text)] sm:text-lg">
                        {skill.name}
                      </h3>
                      <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/10">
                        <div className="h-full w-2/3 rounded-full bg-[var(--skill-border)] shadow-[0_0_14px_var(--skill-glow)] transition-all duration-500 group-hover:w-full" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
