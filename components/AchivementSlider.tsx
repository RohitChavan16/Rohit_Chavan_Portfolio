"use client";

import { ChevronLeft, ChevronRight, X } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

const achievements = [
  {
    image: "/images/img1.jpg",
    title: "Hackathon Finalist",
    text: "Built a working product prototype under pressure, connected the core user flow, and presented the complete idea with a practical roadmap for scaling it later.",
    accent: "cyan",
    glow: "shadow-[0_0_30px_rgba(34,211,238,0.34)] group-hover:shadow-[0_0_48px_rgba(34,211,238,0.58)]",
    border: "border-cyan-300/35",
    textColor: "text-cyan-100",
    button: "border-cyan-200/50 text-cyan-100 hover:bg-cyan-300/15",
    gradient: "from-cyan-500/45 via-slate-950/45 to-slate-950/90",
  },
  {
    image: "/images/img2.jpg",
    title: "Campus Leadership",
    text: "Coordinated a small team through planning, communication, and execution while keeping the experience smooth for participants and stakeholders.",
    accent: "amber",
    glow: "shadow-[0_0_30px_rgba(251,191,36,0.32)] group-hover:shadow-[0_0_48px_rgba(251,191,36,0.56)]",
    border: "border-amber-300/40",
    textColor: "text-amber-100",
    button: "border-amber-200/50 text-amber-100 hover:bg-amber-300/15",
    gradient: "from-amber-400/42 via-indigo-950/45 to-slate-950/90",
  },
  {
    image: "/images/img3.jpg",
    title: "Project Showcase",
    text: "Presented a polished web application with clean interface details, reliable backend wiring, and clear product thinking around the final user outcome.",
    accent: "fuchsia",
    glow: "shadow-[0_0_30px_rgba(217,70,239,0.32)] group-hover:shadow-[0_0_48px_rgba(217,70,239,0.56)]",
    border: "border-fuchsia-300/35",
    textColor: "text-fuchsia-100",
    button: "border-fuchsia-200/50 text-fuchsia-100 hover:bg-fuchsia-300/15",
    gradient: "from-fuchsia-500/42 via-slate-950/45 to-slate-950/90",
  },
  {
    image: "/images/img4.jpg",
    title: "Technical Workshop",
    text: "Helped simplify a complex technical topic into approachable steps with examples, live debugging, and practical takeaways for other students.",
    accent: "emerald",
    glow: "shadow-[0_0_30px_rgba(52,211,153,0.31)] group-hover:shadow-[0_0_48px_rgba(52,211,153,0.54)]",
    border: "border-emerald-300/35",
    textColor: "text-emerald-100",
    button: "border-emerald-200/50 text-emerald-100 hover:bg-emerald-300/15",
    gradient: "from-emerald-500/40 via-slate-950/45 to-slate-950/90",
  },
  {
    image: "/images/img5.jpg",
    title: "Build Sprint",
    text: "Turned rough ideas into a functional interface, improved details through quick feedback, and kept the final delivery focused and usable.",
    accent: "rose",
    glow: "shadow-[0_0_30px_rgba(251,113,133,0.31)] group-hover:shadow-[0_0_48px_rgba(251,113,133,0.54)]",
    border: "border-rose-300/35",
    textColor: "text-rose-100",
    button: "border-rose-200/50 text-rose-100 hover:bg-rose-300/15",
    gradient: "from-rose-500/40 via-slate-950/45 to-slate-950/90",
  },
];

export default function AchivementSlider() {
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const activeAchievement = achievements[index];

  const goToSlide = (direction: "next" | "previous") => {
    setIsExpanded(false);
    setIndex((current) => {
      if (direction === "next") {
        return (current + 1) % achievements.length;
      }

      return (current - 1 + achievements.length) % achievements.length;
    });
  };

  useEffect(() => {
    if (isPaused || isExpanded) {
      return;
    }

    const interval = window.setInterval(() => {
      setIndex((current) => (current + 1) % achievements.length);
    }, 2500);

    return () => window.clearInterval(interval);
  }, [isExpanded, isPaused]);

  return (
    <div
      className={`group relative h-full min-h-[14rem] w-full overflow-hidden rounded-2xl border ${activeAchievement.border} bg-slate-950 transition-all duration-500 ${activeAchievement.glow}`}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {achievements.map((achievement, achievementIndex) => (
        <Image
          key={achievement.image}
          src={achievement.image}
          alt={achievement.title}
          fill
          sizes="(min-width: 768px) 33vw, 100vw"
          className={`absolute inset-0 h-full w-full object-cover transition-all duration-700 ease-out ${
            achievementIndex === index ? "scale-100 opacity-100 group-hover:scale-105" : "scale-105 opacity-0"
          } ${isExpanded && achievementIndex === index ? "blur-md scale-110" : ""}`}
        />
      ))}

      <div className={`absolute inset-0 bg-gradient-to-t ${activeAchievement.gradient}`} />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(255,255,255,0.18),transparent_28%)] opacity-70" />

      <div
        className={`absolute inset-x-0 bottom-0 z-10 p-4 transition-all duration-500 ${
          isExpanded ? "inset-y-0 flex flex-col justify-center bg-slate-950/68 backdrop-blur-sm" : ""
        }`}
      >
        <p className="mb-2 text-[0.62rem] font-bold uppercase tracking-[0.22em] text-white/55">
          Achievement
        </p>
        <h3 className={`text-lg font-black leading-tight ${activeAchievement.textColor}`}>
          {activeAchievement.title}
        </h3>
        <p
          className={`mt-2 text-sm leading-relaxed text-slate-100/88 transition-all duration-500 ${
            isExpanded ? "line-clamp-none" : "line-clamp-3 [mask-image:linear-gradient(180deg,#000_55%,transparent_100%)]"
          }`}
        >
          {activeAchievement.text}
        </p>

        <button
          type="button"
          onClick={() => setIsExpanded((expanded) => !expanded)}
          className={`mt-3 cursor-pointer inline-flex w-fit items-center rounded-full border px-3 py-1.5 text-xs font-semibold transition ${activeAchievement.button}`}
          aria-expanded={isExpanded}
        >
          {isExpanded ? "Show less" : "Read more"}
        </button>
      </div>

      {!isExpanded && (
        <>
          <button
            type="button"
            onClick={() => goToSlide("previous")}
            className="absolute cursor-pointer left-1 top-1/2 z-20 grid h-7 w-7 -translate-y-1/2 place-items-center rounded-full border border-white/20 bg-slate-950/5 backdrop-blur-md text-white/80 transition hover:scale-110 hover:border-white/45 hover:bg-white/15 hover:text-white"
            aria-label="Previous achievement"
          >
            <ChevronLeft size={18} strokeWidth={2.4} />
          </button>

          <button
            type="button"
            onClick={() => goToSlide("next")}
            className="absolute cursor-pointer right-1 top-1/2 z-20 grid h-7 w-7 -translate-y-1/2 place-items-center rounded-full border border-white/20 bg-slate-950/5 backdrop-blur-md text-white/80 transition hover:scale-110 hover:border-white/45 hover:bg-white/15 hover:text-white"
            aria-label="Next achievement"
          >
            <ChevronRight size={18} strokeWidth={2.4} />
          </button>
        </>
      )}

      {isExpanded && (
        <button
          type="button"
          onClick={() => setIsExpanded(false)}
          className="absolute cursor-pointer right-3 top-3 z-30 grid h-8 w-8 place-items-center rounded-full border border-white/20 bg-slate-950/60 text-white/80 backdrop-blur-md transition hover:scale-110 hover:border-white/45 hover:bg-white/15 hover:text-white"
          aria-label="Close full achievement text"
        >
          <X size={16} strokeWidth={2.4} />
        </button>
      )}

      {!isExpanded && (
        <div className="absolute left-4 top-4 z-20 flex gap-1.5">
          {achievements.map((achievement, achievementIndex) => (
            <button
              key={`${achievement.accent}-${achievementIndex}`}
              type="button"
              onClick={() => {
                setIsExpanded(false);
                setIndex(achievementIndex);
              }}
              className={`h-1.5 cursor-pointer rounded-full transition-all duration-300 ${
                achievementIndex === index ? "w-6 bg-white" : "w-1.5 bg-white/35 hover:bg-white/70"
              }`}
              aria-label={`Show achievement ${achievementIndex + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
