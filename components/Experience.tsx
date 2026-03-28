"use client";

import { useState } from "react";

const experiences = [
  {
    id: 0,
    role: "Full Stack Developer",
    company: "Freelance Product Teams",
    period: "2023 - Present",
    description:
      "Built and shipped full stack applications for clients in productivity, communication, and education domains.",
    wins: [
      "Launched features with measurable performance gains and cleaner UX flows.",
      "Designed API contracts and data models to support fast iteration.",
      "Implemented CI-based quality checks to reduce production issues.",
    ],
  },
  {
    id: 1,
    role: "Project Lead (Academic + Personal Products)",
    company: "COEP Project Labs",
    period: "2021 - 2023",
    description:
      "Led small teams across hackathon and capstone initiatives, focusing on delivery, code quality, and communication.",
    wins: [
      "Mentored peers on React, Git workflows, and deployment basics.",
      "Delivered demo-ready products under short timelines.",
      "Bridged UI and backend work to keep project scope cohesive.",
    ],
  },
  {
    id: 2,
    role: "Computer Vision Builder",
    company: "Independent Builds",
    period: "2020 - 2022",
    description:
      "Created OpenCV and C++ prototypes for document detection and image enhancement pipelines.",
    wins: [
      "Implemented contour-based paper detection with perspective transforms.",
      "Improved output clarity with adaptive thresholding and contrast tuning.",
      "Packaged prototypes for easier future productization.",
    ],
  },
];

export default function Experience() {
  const [active, setActive] = useState(0);
  const selected = experiences[active];

  return (
    <section id="experience" className="px-[8%] py-24">
      <div className="section-shell rounded-3xl p-8 lg:p-12">
        <div className="flex items-center gap-4 mb-8">
          <span className="section-label">04 Experience</span>
          <div className="h-px flex-1 bg-white/15" />
        </div>

        <h2 className="section-title mb-10">
          Work journey shaped by
          <span className="block accent-text">delivery and ownership</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-6">
          <div className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-visible">
            {experiences.map((item) => (
              <button
                key={item.id}
                onClick={() => setActive(item.id)}
                className={`text-left rounded-xl border px-4 py-3 min-w-[200px] transition ${
                  active === item.id
                    ? "border-[#f4d03f]/60 bg-[#f4d03f]/10"
                    : "border-white/15 hover:border-white/35"
                }`}
              >
                <p className="text-sm font-semibold">{item.company}</p>
                <p className="text-xs muted-soft mt-1">{item.period}</p>
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
