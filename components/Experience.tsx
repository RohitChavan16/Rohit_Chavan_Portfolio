"use client";

import { useState } from "react";

const experiences = [
  {
    id: 0,
    role: "Core Contributor",
    company: "Software Development Club, COEP",
    period: "2025 - Present",
    description:
      "Actively contributing to technical discussions, collaborative engineering initiatives, and peer learning activities.",
    wins: [
      "Collaborated with peers on full-stack development and Git workflows.",
      "Participated in engineering-focused project discussions and code reviews.",
      "Helped build a strong developer community through teamwork and knowledge sharing.",
    ],
  },
 {
    id: 1,
    role: "Open Source Contributor",
    company: "GirlScript Summer of Code (GSSoC)",
    period: "2026 - Present",
    description:
      "Contributing to real-world open source projects by fixing bugs, improving UI/UX flows, and collaborating through GitHub workflows.",
    wins: [
      "Worked with maintainers through pull requests, code reviews, and issue discussions.",
      "Fixed frontend and state-management related bugs in production-style codebases.",
      "Improved understanding of scalable React architecture and collaborative development.",
    ],
  },

  {
    id: 2,
    role: "Backend Developer / System Design",
    company: "HERE Technologies Mumbai Hackathon",
    period: "2025",
    description:
      "Built GeoShop Engine, a geospatial place intelligence platform focused on resolving inconsistent POI data across multiple map sources.",
    wins: [
      "Secured 2nd Runner-Up among competing teams.",
      "Developed FastAPI + MongoDB backend with fuzzy matching and confidence scoring.",
      "Implemented automated business classification and real-time analytics dashboard.",
    ],
  },

  {
    id: 3,
    role: "Full Stack Developer",
    company: "FINSPARK 2025 Hackathon",
    period: "2025",
    description:
      "Developed a multilingual fintech platform focused on accessibility, communication, and responsive banking experiences.",
    wins: [
      "Won Best UI/UX Experience Award.",
      "Built multilingual interfaces supporting 4 languages using i18n.",
      "Integrated WebRTC-based video calling into a functional MVP within 36 hours.",
    ],
  },

  
]

export default function Experience() {
  const [active, setActive] = useState(0);
  const selected = experiences[active];

  return (
    <section id="experience" className="px-4 py-12 md:px-[8%] md:py-24">
      <div className="section-shell rounded-3xl p-8 lg:p-12">
        <div className="flex items-center gap-4 mb-8">
          <span className="section-label">04 Experience</span>
          <div className="h-px flex-1 bg-white/15" />
        </div>

        <h2 className="section-title mb-10">
          Work journey shaped by
          <span className="block text-[#7cf6d4]">delivery and ownership</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-6">
          <div className="grid grid-cols-2 lg:flex lg:flex-col gap-2">
            {experiences.map((item) => (
              <button
                key={item.id}
                onClick={() => setActive(item.id)}
                className={`text-left cursor-pointer rounded-xl border px-3 py-3.5 sm:px-4 sm:py-3 transition ${
                  active === item.id
                    ? "border-[#f4d03f]/60 bg-[#f4d03f]/10"
                    : "border-white/15 hover:border-white/35"
                }`}
              >
                <p className="text-xs sm:text-sm font-bold truncate leading-tight">{item.company}</p>
                <p className="text-[10px] sm:text-xs muted-soft mt-1 sm:mt-1">{item.period}</p>
              </button>
            ))}
          </div>

          <article className="section-shell rounded-2xl p-6">
            <h3 className="text-2xl font-semibold">{selected.role}</h3>
            <p className="accent-text mt-1">{selected.company}</p>
            <p className="text-xs uppercase tracking-[0.2em] muted-soft mt-2">{selected.period}</p>
            <p className="muted leading-relaxed mt-5">{selected.description}</p>
            <div className="mt-6 space-y-3">
              {selected.wins.map((win) => (
                <p key={win} className="text-sm text-white/90 flex gap-2">
                  <span className="accent-text">+</span>
                  {win}
                </p>
              ))}
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
