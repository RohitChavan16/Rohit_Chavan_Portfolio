"use client";

import { useEffect, useMemo, useState } from "react";
import ImageSlider from "./ImageSilder";
import AchivementSlider from "./AchivementSlider";

export default function About() {
  const profileRoles = useMemo(
    () => [
      { label: "Full Stack Developer", color: "text-cyan-200", glow: "shadow-cyan-400/30" },
      { label: "Frontend Developer", color: "text-fuchsia-200", glow: "shadow-fuchsia-400/30" },
      { label: "Backend Developer", color: "text-emerald-200", glow: "shadow-emerald-400/30" },
      { label: "System Builder", color: "text-amber-200", glow: "shadow-amber-400/30" },
      { label: "Problem Solver", color: "text-rose-200", glow: "shadow-rose-400/30" },
    ],
    []
  );
  const [roleIndex, setRoleIndex] = useState(0);
  const [typedRole, setTypedRole] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = profileRoles[roleIndex].label;
    const isComplete = typedRole === currentRole;
    const isEmpty = typedRole.length === 0;

    const timeout = window.setTimeout(
      () => {
        if (!isDeleting && !isComplete) {
          setTypedRole(currentRole.slice(0, typedRole.length + 1));
          return;
        }

        if (!isDeleting && isComplete) {
          setIsDeleting(true);
          return;
        }

        if (isDeleting && !isEmpty) {
          setTypedRole(currentRole.slice(0, typedRole.length - 1));
          return;
        }

        setIsDeleting(false);
        setRoleIndex((index) => (index + 1) % profileRoles.length);
      },
      isComplete && !isDeleting ? 1200 : isDeleting ? 42 : 74
    );

    return () => window.clearTimeout(timeout);
  }, [isDeleting, profileRoles, roleIndex, typedRole]);

  const activeRole = profileRoles[roleIndex];
  const heroCards = [
    {
      title: "Product Mindset",
      body: "I shape features around real user flow, not just screens.",
      position: "left-[3%] sm:left-[5%] rotate-[-7deg] z-10",
      accent: "text-cyan-200",
      border: "border-cyan-300/35 hover:border-cyan-200",
      glow: "hover:shadow-[0_0_28px_rgba(34,211,238,0.45)]",
      bg: "from-cyan-500/18 via-slate-900/95 to-slate-950",
    },
    {
      title: "Clean Builds",
      body: "Fast interfaces, solid APIs, and details that feel finished.",
      position: "left-1/2 -translate-x-1/2 rotate-[0deg] z-20",
      accent: "text-amber-200",
      border: "border-amber-300/45 hover:border-amber-200",
      glow: "hover:shadow-[0_0_34px_rgba(251,191,36,0.5)]",
      bg: "from-amber-400/20 via-indigo-950/95 to-slate-950",
    },
    {
      title: "System Thinking",
      body: "I connect frontend polish with backend reliability.",
      position: "right-[3%] sm:right-[5%] rotate-[7deg] z-10",
      accent: "text-fuchsia-200",
      border: "border-fuchsia-300/35 hover:border-fuchsia-200",
      glow: "hover:shadow-[0_0_28px_rgba(217,70,239,0.45)]",
      bg: "from-fuchsia-500/18 via-slate-900/95 to-slate-950",
    },
  ];
  const conceptStyles = [
    {
      bg: "from-cyan-500/18 to-slate-950/80",
      border: "border-cyan-300/35 hover:border-cyan-200",
      text: "text-cyan-100",
      glow: "hover:shadow-[0_0_18px_rgba(34,211,238,0.42)]",
    },
    {
      bg: "from-amber-400/18 to-slate-950/80",
      border: "border-amber-300/40 hover:border-amber-200",
      text: "text-amber-100",
      glow: "hover:shadow-[0_0_18px_rgba(251,191,36,0.42)]",
    },
    {
      bg: "from-fuchsia-500/18 to-slate-950/80",
      border: "border-fuchsia-300/35 hover:border-fuchsia-200",
      text: "text-fuchsia-100",
      glow: "hover:shadow-[0_0_18px_rgba(217,70,239,0.42)]",
    },
    {
      bg: "from-emerald-500/18 to-slate-950/80",
      border: "border-emerald-300/35 hover:border-emerald-200",
      text: "text-emerald-100",
      glow: "hover:shadow-[0_0_18px_rgba(52,211,153,0.42)]",
    },
    {
      bg: "from-sky-500/18 to-slate-950/80",
      border: "border-sky-300/35 hover:border-sky-200",
      text: "text-sky-100",
      glow: "hover:shadow-[0_0_18px_rgba(56,189,248,0.42)]",
    },
    {
      bg: "from-violet-500/18 to-slate-950/80",
      border: "border-violet-300/35 hover:border-violet-200",
      text: "text-violet-100",
      glow: "hover:shadow-[0_0_18px_rgba(139,92,246,0.42)]",
    },
    {
      bg: "from-rose-500/18 to-slate-950/80",
      border: "border-rose-300/35 hover:border-rose-200",
      text: "text-rose-100",
      glow: "hover:shadow-[0_0_18px_rgba(251,113,133,0.42)]",
    },
    {
      bg: "from-lime-400/18 to-slate-950/80",
      border: "border-lime-300/35 hover:border-lime-200",
      text: "text-lime-100",
      glow: "hover:shadow-[0_0_18px_rgba(190,242,100,0.36)]",
    },
    {
      bg: "from-orange-400/18 to-slate-950/80",
      border: "border-orange-300/35 hover:border-orange-200",
      text: "text-orange-100",
      glow: "hover:shadow-[0_0_18px_rgba(251,146,60,0.38)]",
    },
    {
      bg: "from-blue-500/18 to-slate-950/80",
      border: "border-blue-300/35 hover:border-blue-200",
      text: "text-blue-100",
      glow: "hover:shadow-[0_0_18px_rgba(96,165,250,0.42)]",
    },
    {
      bg: "from-teal-500/18 to-slate-950/80",
      border: "border-teal-300/35 hover:border-teal-200",
      text: "text-teal-100",
      glow: "hover:shadow-[0_0_18px_rgba(45,212,191,0.42)]",
    },
    {
      bg: "from-pink-500/18 to-slate-950/80",
      border: "border-pink-300/35 hover:border-pink-200",
      text: "text-pink-100",
      glow: "hover:shadow-[0_0_18px_rgba(244,114,182,0.42)]",
    },
  ];
  const conceptCards = [
    "Payment Integration",
    "AI Integration",
    "Rate Limiter",
    "API Gateway",
    "WebSockets",
    "Real-Time Chat Systems",
    "Image Processing",
    "Object-Oriented Programming",
    "Load Balancing",
    "Authentication & Authorization",
    "Role-Based Access Control",
    "OAuth Integration",
    "RAG Pipelines",
    "LLM Integration",
    "Vector Search",
    "Prompt Engineering",
    "Streaming Responses",
    "File Upload Pipelines",
    "Webhook Systems",
    "Caching Strategies",
    "Database Indexing",
    "Queue Workers",
    "Microservices",
    "Observability",
  ];

  return (
    <section className="w-full min-h-screen flex items-center justify-center px-4 py-6 bg-gradient-to-br from-[#020617] via-[#020617] to-[#0f172a]">
      <div className="w-full max-w-5xl">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-4 auto-rows-[110px]">

          <div className="col-span-2 md:col-span-3 rounded-2xl p-5 bg-gradient-to-br from-[#1e293b] to-[#0f172a] text-white border border-white/10 overflow-hidden">
<p className="text-xs text-gray-400 mb-4 tracking-widest">
    CORE FLOW
  </p>
  <div className="grid grid-cols-2 md:grid-cols-5 gap-3">

    

    {[
      { label: "Systems", icon: "⚙️" },
      { label: "Scale", icon: "📈" },
      { label: "Performance", icon: "⚡" },
      { label: "Clarity", icon: "🧠" },
      { label: "Impact", icon: "🚀" },
    ].map((item, i) => (
      <div
        key={i}
        style={{ animationDelay: `${i * 0.2}s` }}
        className={`group flex flex-col items-center justify-center 
                   rounded-xl px-3 py-3 
                   bg-white/5 border
                   text-center backdrop-blur-md
                   hover:scale-[1.03] 
                   transition duration-300 animate-float

                   ${i === 0 ? "border-blue-200 hover:border-blue-400 hover:shadow-[0_0_18px_rgba(59,130,246,0.5)]" : ""}
                   ${i === 1 ? "border-purple-400 hover:border-purple-600 hover:shadow-[0_0_18px_rgba(168,85,247,0.5)]" : ""}
                   ${i === 2 ? "border-yellow-400 hover:border-yellow-600 hover:shadow-[0_0_18px_rgba(250,204,21,0.5)]" : ""}
                   ${i === 3 ? "border-green-400 hover:border-green-600 hover:shadow-[0_0_18px_rgba(34,197,94,0.5)]" : ""}
                   ${i === 4 ? "border-pink-400 hover:border-pink-600 hover:shadow-[0_0_18px_rgba(236,72,153,0.5)]" : ""}
        `}
      >
        <span className="text-lg mb-1">{item.icon}</span>

        <span
          className={`text-xs text-gray-300 transition 
            ${i === 0 ? "group-hover:text-blue-300" : ""}
            ${i === 1 ? "group-hover:text-purple-300" : ""}
            ${i === 2 ? "group-hover:text-yellow-300" : ""}
            ${i === 3 ? "group-hover:text-green-300" : ""}
            ${i === 4 ? "group-hover:text-pink-300" : ""}
          `}
        >
          {item.label}
        </span>
      </div>
    ))}

  </div>

</div>

          <div className={`col-span-1 md:col-span-1 rounded-2xl p-3 sm:p-4 bg-gradient-to-br from-[#312e81] via-[#1e1b4b] to-[#020617] text-white overflow-hidden border border-white/10 shadow-lg ${activeRole.glow}`}>
            <p className="text-[0.62rem] sm:text-xs text-indigo-200/90 mb-1 tracking-[0.22em] font-semibold">
              PROFILE
            </p>

            <div className="min-h-[3.7rem] flex items-center">
              <p
                className={`min-w-0 break-words text-[clamp(0.86rem,4vw,1.08rem)] md:text-[0.95rem] lg:text-base font-bold leading-tight ${activeRole.color}`}
                aria-live="polite"
              >
                {typedRole}
                <span className="profile-caret ml-0.5 inline-block h-[1em] w-[2px] translate-y-[2px] rounded-full bg-current" />
              </p>
            </div>
          </div>






          <div className="group relative col-span-2 md:col-span-2 md:row-span-2 rounded-2xl bg-gradient-to-br from-[#0f172a] via-[#111827] to-[#020617] text-white overflow-hidden border border-white/10">
            <div className="absolute inset-x-0 top-8 z-30 px-4 pt-4 text-center transition-all duration-500 ease-out group-hover:top-0">
              <p className="text-lg sm:text-xl font-black leading-none tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-cyan-200 via-amber-200 to-fuchsia-200">
                College Activities
              </p>
            </div>

            {heroCards.map((card) => (
              <div
                key={card.title}
                className={`absolute bottom-[-4.5rem] h-[11.5rem] w-[62%] max-w-[11.4rem] rounded-2xl border bg-gradient-to-br p-4 backdrop-blur-md transition-all duration-500 ease-out hover:bottom-3 hover:z-40 hover:rotate-0 hover:scale-[1.03] ${card.position} ${card.border} ${card.glow} ${card.bg}`}
              >
                <div className="mb-3 h-1 w-10 rounded-full bg-current opacity-70" />
                <h3 className={`text-base sm:text-lg font-bold leading-tight ${card.accent}`}>
                  {card.title}
                </h3>
                <p className="mt-2 text-xs sm:text-[0.8rem] leading-relaxed text-slate-300">
                  {card.body}
                </p>
              </div>
            ))}
          </div>

          <div className="col-span-1 md:col-span-2 md:row-span-3 rounded-2xl border border-white/10 bg-gradient-to-br from-[#1e1b4b] via-[#0f172a] to-[#020617] p-4 text-white overflow-hidden">
            <p className="mb-3 text-[0.62rem] font-semibold tracking-[0.22em] text-indigo-200/80">
              CONCEPTS
            </p>
            <div className="flex flex-wrap items-start gap-x-2.5 gap-y-3">
              {conceptCards.map((concept, index) => {
                const style = conceptStyles[index % conceptStyles.length];

                return (
                <div
                  key={concept}
                  className={`inline-flex w-fit rounded-xl border bg-gradient-to-br px-3 py-2 text-[0.72rem] font-semibold leading-none backdrop-blur-md transition duration-300 hover:-translate-y-0.5 hover:scale-[1.03] ${style.bg} ${style.border} ${style.text} ${style.glow}`}
                >
                  {concept}
                </div>
                );
              })}
            </div>
          </div>

          <div className="col-span-2 md:col-span-2 md:row-span-3 rounded-2xl p-4 bg-gradient-to-br from-[#020617] to-[#1e293b] text-white">
            <ImageSlider />
          </div>


          <div className="col-span-1 md:col-span-2 md:row-span-2 rounded-2xl bg-gradient-to-br from-[#0f172a] to-[#1e293b] text-white">
            <AchivementSlider />
          </div>

          

          <div className="col-span-2 md:col-span-3 rounded-2xl p-4 bg-gradient-to-br from-[#020617] to-[#312e81] text-white">
            Philosophy → &quot;I build production-ready systems, not just projects&quot;
          </div>

          <div className="col-span-1 md:col-span-2 rounded-2xl p-4 bg-gradient-to-br from-[#1e1b4b] to-[#0f172a] text-white">
            Journey → C++ → Web → AI growth
          </div>

          <div className="col-span-1 md:col-span-1 md:row-span-1 rounded-2xl p-4 bg-gradient-to-br from-[#020617] to-[#1e293b] text-white">
            Contact → GitHub / LinkedIn / Email
          </div>

        </div>
      </div>
    </section>
  );
}
