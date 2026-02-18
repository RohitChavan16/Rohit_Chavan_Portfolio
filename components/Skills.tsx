"use client";

const skillCategories = [
  {
    title: "Frontend",
    icon: "◈",
    skills: [
      { name: "React / Next.js", level: 95 },
      { name: "TypeScript", level: 90 },
      { name: "Tailwind CSS", level: 92 },
      { name: "Framer Motion", level: 80 },
      { name: "Three.js / WebGL", level: 65 },
    ],
  },
  {
    title: "Backend",
    icon: "◎",
    skills: [
      { name: "Node.js / Express", level: 90 },
      { name: "Python / FastAPI", level: 85 },
      { name: "GraphQL", level: 78 },
      { name: "REST APIs", level: 95 },
      { name: "PostgreSQL", level: 82 },
    ],
  },
  {
    title: "DevOps & Tools",
    icon: "◉",
    skills: [
      { name: "Docker / Kubernetes", level: 75 },
      { name: "AWS / Vercel", level: 82 },
      { name: "Git / CI-CD", level: 90 },
      { name: "Linux / Bash", level: 78 },
      { name: "Prisma / MongoDB", level: 85 },
    ],
  },
];

const techLogos = [
  "React", "Next.js", "TypeScript", "Node.js", "Python",
  "PostgreSQL", "MongoDB", "Docker", "AWS", "Figma",
  "Git", "GraphQL", "Redis", "Prisma", "Vercel",
];

export default function Skills() {
  return (
    <section id="skills" className="bg-[#0d0d0d] py-32 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, #e8ff47 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section label */}
        <div className="flex items-center gap-3 mb-20">
          <span className="text-[#e8ff47] font-mono text-xs tracking-[0.3em] uppercase">
            02 — Skills
          </span>
          <div className="flex-1 h-[1px] bg-[#1a1a1a]" />
        </div>

        <div className="mb-16">
          <h2
            className="text-5xl lg:text-7xl font-black text-white leading-none uppercase mb-6"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            My <span className="text-[#e8ff47]">Arsenal</span>
          </h2>
          <p className="text-[#555] text-base max-w-lg">
            Technologies I use to bring ideas to life — from pixel to production.
          </p>
        </div>

        {/* Skill columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {skillCategories.map((cat, i) => (
            <div
              key={cat.title}
              className="group border border-[#1a1a1a] p-8 bg-[#0a0a0a] hover:border-[#e8ff47]/30 transition-all duration-300 relative overflow-hidden"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              {/* Hover glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#e8ff47]/0 to-[#e8ff47]/0 group-hover:from-[#e8ff47]/3 group-hover:to-transparent transition-all duration-500" />

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-8">
                  <span className="text-[#e8ff47] text-2xl">{cat.icon}</span>
                  <h3 className="text-white font-black uppercase tracking-widest text-sm">
                    {cat.title}
                  </h3>
                </div>

                <div className="flex flex-col gap-5">
                  {cat.skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-[#888] text-sm font-mono">
                          {skill.name}
                        </span>
                        <span className="text-[#444] text-xs font-mono">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="h-[2px] bg-[#1a1a1a] relative overflow-hidden">
                        <div
                          className="absolute top-0 left-0 h-full bg-[#e8ff47] transition-all duration-1000"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Scrolling tech ticker */}
        <div className="border-y border-[#1a1a1a] py-6 overflow-hidden relative">
          <div className="flex gap-12 animate-[ticker_20s_linear_infinite] whitespace-nowrap">
            {[...techLogos, ...techLogos].map((tech, i) => (
              <span
                key={i}
                className="text-[#2a2a2a] text-sm font-mono uppercase tracking-widest hover:text-[#e8ff47] transition-colors duration-200 flex-shrink-0"
              >
                {tech}
                <span className="text-[#1a1a1a] ml-12">◆</span>
              </span>
            ))}
          </div>
        </div>

        {/* Soft skills row */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { icon: "⬡", label: "Problem Solving" },
            { icon: "⬡", label: "Team Leadership" },
            { icon: "⬡", label: "System Design" },
            { icon: "⬡", label: "Agile / Scrum" },
          ].map((item) => (
            <div
              key={item.label}
              className="flex items-center gap-3 border border-[#1a1a1a] px-5 py-4 hover:border-[#e8ff47]/20 transition-colors duration-200 group"
            >
              <span className="text-[#e8ff47] text-xs group-hover:scale-125 transition-transform duration-200">
                {item.icon}
              </span>
              <span className="text-[#555] text-xs font-mono uppercase tracking-widest group-hover:text-white transition-colors duration-200">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        @keyframes ticker {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}