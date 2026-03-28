"use client";

const skillGroups = [
  {
    name: "Frontend",
    points: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
  {
    name: "Backend",
    points: ["Node.js", "Express", "FastAPI", "PostgreSQL", "MongoDB"],
  },
  {
    name: "Cloud & Tooling",
    points: ["Vercel", "Docker", "GitHub Actions", "Prisma", "Redis"],
  },
];

const toolkit = [
  "JavaScript",
  "TypeScript",
  "C++",
  "OpenCV",
  "REST API",
  "WebSocket",
  "GraphQL",
  "PostgreSQL",
  "MongoDB",
  "Docker",
  "AWS",
  "Vercel",
];

export default function Skills() {
  return (
    <section id="skills" className="px-[8%] py-24">
      <div className="section-shell rounded-3xl p-8 lg:p-12">
        <div className="flex items-center gap-4 mb-8">
          <span className="section-label">02 Skills</span>
          <div className="h-px flex-1 bg-white/15" />
        </div>

        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
          <h2 className="section-title">
            Tech stack I use to ship
            <span className="block accent-text">production-grade products</span>
          </h2>
          <p className="muted max-w-md">
            Balanced across frontend craft, backend engineering, and deployment tooling.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-12">
          {skillGroups.map((group) => (
            <div key={group.name} className="section-shell rounded-2xl p-6">
              <h3 className="text-lg font-semibold mb-5">{group.name}</h3>
              <div className="flex flex-col gap-3">
                {group.points.map((item) => (
                  <div key={item} className="flex items-center justify-between gap-4">
                    <span className="muted">{item}</span>
                    <div className="w-2 h-2 rounded-full bg-[#f4d03f]" />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="overflow-hidden border-y border-white/15 py-4">
          <div className="flex gap-8 w-max animate-ticker pr-8">
            {[...toolkit, ...toolkit].map((item, index) => (
              <span
                key={`${item}-${index}`}
                className="text-sm uppercase tracking-[0.2em] muted-soft whitespace-nowrap"
              >
                {item} <span className="accent-text ml-2">+</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
