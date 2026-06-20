"use client";

import { ChevronLeft, ChevronRight, X } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

const achievements = [
  {
    image: "/achievement_img/img4.jpg",
    title: "HERE Technologies Mumbai Hackathon",
    text: "Achieved 2nd Runner-Up at the HERE Technologies Mumbai Hackathon by building GeoShop Engine, a place intelligence platform that resolves inconsistencies across multi-source POI datasets using geospatial matching, fuzzy similarity scoring, and confidence-based entity resolution.",
    accent: "cyan",
    glow: "shadow-[0_0_30px_rgba(34,211,238,0.34)] group-hover:shadow-[0_0_48px_rgba(34,211,238,0.58)]",
    border: "border-cyan-300/35",
    textColor: "text-cyan-100",
    button: "border-cyan-200/50 text-cyan-100 hover:bg-cyan-300/15",
    scrollbar: "scrollbar-cyan",
    gradient: "from-cyan-500/45 via-slate-950/45 to-slate-950/90",
  },
  {
    image: "/achievement_img/img2.jpg",
    title: "FINSPARK Banking Hackathon",
    text: "Won the UI/UX Excellence Award at FINSPARK 2025, a 36-hour banking innovation hackathon organized by Bank of Maharashtra, DFS, and COEP Tech, by developing an inclusive fintech solution focused on bridging language barriers in Indian banking through intuitive UI/UX, rapid prototyping, and scalable system integration.",
    accent: "amber",
    glow: "shadow-[0_0_30px_rgba(251,191,36,0.32)] group-hover:shadow-[0_0_48px_rgba(251,191,36,0.56)]",
    border: "border-amber-300/40",
    textColor: "text-amber-100",
    button: "border-amber-200/50 text-amber-100 hover:bg-amber-300/15",
    scrollbar: "scrollbar-amber",
    gradient: "from-amber-400/42 via-indigo-950/45 to-slate-950/90",
  },
  {
    image: "/achievement_img/img5.png",
    title: "CodeUnCode CP Contest (COEP Regional)",
    text: "Secured a Top 10 position in the CodeUnCode Competitive Programming Contest (COEP Regional) by solving algorithmic and problem-solving challenges under time constraints, demonstrating strong skills in data structures, algorithms, and competitive programming",
    accent: "fuchsia",
    glow: "shadow-[0_0_30px_rgba(217,70,239,0.32)] group-hover:shadow-[0_0_48px_rgba(217,70,239,0.56)]",
    border: "border-fuchsia-300/35",
    textColor: "text-fuchsia-100",
    button: "border-fuchsia-200/50 text-fuchsia-100 hover:bg-fuchsia-300/15",
    scrollbar: "scrollbar-fuchsia",
    gradient: "from-fuchsia-500/42 via-slate-950/45 to-slate-950/90",
  },
  {
    image: "/achievement_img/img3.png",
    title: "GSSOC 2026",
    text: "Selected for GSSoC 2026, contributing to open-source projects through merged pull requests, feature development, bug fixes, issue resolution, and collaborative development workflows using Git and GitHub while working with real-world codebases.",
    accent: "emerald",
    glow: "shadow-[0_0_30px_rgba(52,211,153,0.31)] group-hover:shadow-[0_0_48px_rgba(52,211,153,0.54)]",
    border: "border-emerald-300/35",
    textColor: "text-emerald-100",
    button: "border-emerald-200/50 text-emerald-100 hover:bg-emerald-300/15",
    scrollbar: "scrollbar-emerald",
    gradient: "from-emerald-500/40 via-slate-950/45 to-slate-950/90",
  },
  {
    image: "/achievement_img/img1.jpg",
    title: "Competitive Exam Achievements",
    text: "Secured 99.7 percentile with State Rank 807 in MHT-CET and achieved 98.80 percentile in JEE Main, demonstrating strong analytical thinking, problem-solving ability, and performance in highly competitive national-level engineering entrance examinations.",
    accent: "rose",
    glow: "shadow-[0_0_30px_rgba(251,113,133,0.31)] group-hover:shadow-[0_0_48px_rgba(251,113,133,0.54)]",
    border: "border-rose-300/35",
    textColor: "text-rose-100",
    button: "border-rose-200/50 text-rose-100 hover:bg-rose-300/15",
    scrollbar: "scrollbar-rose",
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
      className={`group relative h-full min-h-[14rem] w-full overflow-hidden rounded-2xl border ${activeAchievement.border} bg-transparent md:bg-slate-950 transition-all duration-500 ${activeAchievement.glow}`}
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
          isExpanded ? "inset-0 flex flex-col bg-slate-950/80 backdrop-blur-sm" : ""
        }`}
      >
        <div className={`${isExpanded ? "flex min-h-0 flex-col gap-4" : ""}`}>
          <p className={`${isExpanded ? "" : "mb-2"} text-[0.62rem] font-bold uppercase tracking-[0.22em] text-white/55`}>
            Achievement
          </p>
          <h3 className={`text-lg ${isExpanded ? "" : "mb-2"} font-black leading-tight ${activeAchievement.textColor}`}>
            {activeAchievement.title}
          </h3>
          <div className={` ${isExpanded ? `min-h-0 max-h-[40vh] overflow-y-auto pr-2 ${activeAchievement.scrollbar}` : ""}`}>
            <p
              className={`text-sm leading-relaxed text-slate-100/88 transition-all duration-500 ${
                isExpanded ? "whitespace-pre-line" : "line-clamp-3 [mask-image:linear-gradient(180deg,#000_55%,transparent_100%)]"
              }`}
            >
              {activeAchievement.text}
            </p>
          </div>
        </div>

        <button
          type="button"
          onClick={() => setIsExpanded((expanded) => !expanded)}
          className={`mt-1 cursor-pointer inline-flex w-fit items-center rounded-full border px-3 py-1.5 text-xs font-semibold transition ${activeAchievement.button}`}
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
