"use client";

import { motion, type Variants } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import ImageSlider from "./ImageSilder";
import AchivementSlider from "./AchivementSlider";
import { X } from "lucide-react";

const aboutGridVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.08,
    },
  },
};

const boxStarts = [
  { x: -130, y: -40, rotate: -5 },
  { x: 80, y: -90, rotate: 4 },
  { x: 140, y: 20, rotate: 5 },
  { x: 120, y: 100, rotate: 4 },
  { x: -120, y: 110, rotate: -4 },
  { x: -90, y: 70, rotate: -3 },
  { x: -120, y: 40, rotate: -2 },
  { x: 100, y: 60, rotate: 3 },
  { x: 120, y: -20, rotate: 4 },
];

const aboutBoxVariants: Variants = {
  hidden: (index: number) => ({
    opacity: 0,
    scale: 0.88,
    ...boxStarts[index % boxStarts.length],
  }),
  show: {
    opacity: 1,
    x: 0,
    y: 0,
    rotate: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 86,
      damping: 17,
      mass: 0.9,
    },
  },
};

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
  const [isMindsetOpen, setIsMindsetOpen] = useState(false);

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
  const mindsetImage = "/mindset4.jpeg";
  const mindsetText =
    "I build with patience, pressure, and polish. Every feature should have a reason, every interaction should feel intentional, and every system should be strong enough to grow without becoming messy.";
  const expandedMindsetText =
    `${mindsetText} I care about clean structure, readable code, fast feedback, and the kind of product decisions that make the final build feel confident instead of accidental. The goal is simple: think clearly, ship carefully, and keep improving the system until it feels calm under pressure.`;
  const heroCards = [
    {
      title: "Innovation & Startup Support",
      body: "Worked with Ignited Innovators of India to assist startups in scaling through weekly growth reviews, investor connections, mentorship, and ecosystem support.",
      position: "left-[3%] sm:left-[5%] rotate-[-7deg] z-10",
      accent: "text-cyan-200",
      border: "border-cyan-300/35 hover:border-cyan-200",
      glow: "hover:shadow-[0_0_28px_rgba(34,211,238,0.45)]",
      bg: "from-cyan-500/18 via-slate-900/95 to-slate-950",
      scrollbar: "scrollbar-cyan",
    },
    {
      title: "SDS - Developer Community",
      body: "Contributed to technical initiatives, collaborated on development projects, and participated in building scalable software solutions within the college developer community.",
      position: "left-1/2 -translate-x-1/2 rotate-[0deg] z-20",
      accent: "text-amber-200",
      border: "border-amber-300/45 hover:border-amber-200",
      glow: "hover:shadow-[0_0_34px_rgba(251,191,36,0.5)]",
      bg: "from-amber-400/20 via-indigo-950/95 to-slate-950",
      scrollbar: "scrollbar-amber",
    },
    {
      title: "Campus Community Development",
      body: "Developed and deployed a digital platform for the hostel block to streamline communication, event updates, notices, and student engagement activities within the college community.",
      position: "right-[3%] sm:right-[5%] rotate-[7deg] z-10",
      accent: "text-fuchsia-200",
      border: "border-fuchsia-300/35 hover:border-fuchsia-200",
      glow: "hover:shadow-[0_0_28px_rgba(217,70,239,0.45)]",
      bg: "from-fuchsia-500/18 via-slate-900/95 to-slate-950",
      scrollbar: "scrollbar-fuchsia",
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
    "RAG Pipelines",
    "End-to-End Encryption (E2EE)",
    "WebRTC",
    "API Architecture",
    "Cloud Infrastructure",
    "LLM Integration",
    
    "OAuth Integration",
    "Real-Time Chat Systems",
    "Image Processing",
     "AI Integration",
    "Authentication & Authorization",
    "Event-Driven Architecture",
    "Full-Stack Architecture",
     "WebSockets",
    "Role-Based Access Control",
  ];

  return (
    <section className="w-full min-h-screen flex items-center justify-center px-4 py-6 bg-gradient-to-br from-[#020617] via-[#020617] to-[#0f172a]">
      <div className="w-full max-w-5xl">
        <motion.div
          variants={aboutGridVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-6 gap-4 auto-rows-[110px]"
        >

          <motion.div
            custom={0}
            variants={aboutBoxVariants}
            className="group relative col-span-2 md:col-span-3 rounded-2xl p-[1px] text-white overflow-hidden will-change-transform"
          >
            <motion.div
              className="absolute inset-0 rounded-2xl bg-[conic-gradient(from_0deg,rgba(34,211,238,0.15),rgba(244,114,182,0.8),rgba(251,191,36,0.75),rgba(34,211,238,0.85),rgba(34,211,238,0.15))]"
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              aria-hidden="true"
            />
            <motion.div
              className="absolute -inset-16 bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.34),transparent_56%)] blur-3xl"
              animate={{ x: [-28, 34, -18, -28], y: [18, -20, 28, 18], opacity: [0.45, 0.9, 0.55, 0.45] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              aria-hidden="true"
            />

            <div className="relative z-10 flex h-full flex-col justify-between rounded-[15px] bg-slate-950/54 p-5 shadow-[0_0_42px_rgba(34,211,238,0.18)] backdrop-blur-md transition duration-300 group-hover:shadow-[0_0_62px_rgba(34,211,238,0.32)]">
              <div className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-cyan-200 to-transparent opacity-90" />
              <motion.h2
                initial={{ backgroundPosition: "0% 50%" }}
                whileInView={{ backgroundPosition: "100% 50%" }}
                animate={{ scale: [1, 1.025, 1] }}
                transition={{
                  backgroundPosition: { duration: 2.4, ease: "easeOut" },
                  scale: { duration: 3.2, repeat: Infinity, ease: "easeInOut" },
                }}
                className="relative z-10 bg-cover bg-center text-[clamp(3rem,10vw,5.9rem)] font-black leading-[0.78] tracking-normal text-transparent bg-clip-text drop-shadow-[0_0_22px_rgba(125,211,252,0.5)]"
                style={{
                  backgroundImage: `linear-gradient(rgba(255,255,255,0.18), rgba(255,255,255,0.18)), url(${mindsetImage})`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  WebkitTextStroke: "1px rgba(226, 246, 255, 0.72)",
                }}
              >
                MINDSET
              </motion.h2>

              <div className="relative mt-3 max-w-[34rem] overflow-hidden pb-9">
                <p className="text-sm font-semibold leading-relaxed text-slate-100">
                  {mindsetText}
                </p>
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-14 bg-gradient-to-b from-transparent via-[#020617]/35 to-[#020617]" />
              </div>

              <motion.button
                type="button"
                onClick={() => setIsMindsetOpen(true)}
                animate={{
                  boxShadow: [
                    "0 0 18px rgba(34,211,238,0.34)",
                    "0 0 34px rgba(244,114,182,0.48)",
                    "0 0 22px rgba(251,191,36,0.42)",
                    "0 0 18px rgba(34,211,238,0.34)",
                  ],
                }}
                whileHover={{ scale: 1.06, y: -2 }}
                whileTap={{ scale: 0.96 }}
                transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute right-5 top-[4.8rem] z-20 border-1 border-[#06bcef] cursor-pointer rounded-full px-3 py-2 text-[0.59rem] font-black uppercase tracking-[0.22em] text-cyan-50 backdrop-blur-md transition hover:border-white/80 hover:bg-green-600/25"
              >
                Click me
              </motion.button>
            </div>

            {isMindsetOpen ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.96, y: 12 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.28, ease: "easeOut" }}
                className="absolute inset-0 z-30 flex flex-col rounded-2xl border border-cyan-100/30 bg-slate-950/92 px-1 pt-1 pb-0 text-white shadow-[0_0_40px_rgba(34,211,238,0.35)] backdrop-blur-2xl sm:px-4 sm:pt-4 sm:pb-0"
              >
                <div className=" flex shrink-0 items-start justify-between gap-3">
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.28, delay: 0.08 }}
                    className="text-[0.62rem] font-black uppercase tracking-[0.24em] text-cyan-100"
                  >
                    Mindset
                  </motion.p>
                  <button
                    type="button"
                    aria-label="Close mindset details"
                    onClick={() => setIsMindsetOpen(false)}
                    className="grid h-6 w-6 shrink-0 cursor-pointer place-items-center rounded-full border border-white/20 bg-white/10 text-md leading-none text-white transition hover:border-cyan-100/70 hover:bg-cyan-100/15"
                  >
                    <X className="h-3.5 w-3.5" />
                  </button>
                </div>

                <div className="min-h-0 flex-1 overflow-y-auto pr-2 [scrollbar-color:rgba(125,211,252,0.7)_rgba(15,23,42,0.35)] [scrollbar-width:thin]">
                  <p className="min-h-full text-[0.82rem] font-semibold leading-relaxed text-white sm:text-sm">
                    {expandedMindsetText}
                  </p>
                </div>
              </motion.div>
            ) : null}

</motion.div>

          <motion.div
            custom={1}
            variants={aboutBoxVariants}
            className={`col-span-1 md:col-span-1 rounded-2xl p-3 sm:p-4 bg-gradient-to-br from-[#312e81] via-[#1e1b4b] to-[#020617] text-white overflow-hidden border border-white/10 shadow-lg will-change-transform ${activeRole.glow}`}
          >
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
          </motion.div>






          <motion.div
            custom={2}
            variants={aboutBoxVariants}
            className="group relative col-span-2 md:col-span-2 md:row-span-2 rounded-2xl bg-gradient-to-br from-[#0f172a] via-[#111827] to-[#020617] text-white overflow-hidden border border-white/10 will-change-transform"
          >
            <div className="absolute inset-x-0 top-8 z-30 px-4 pt-4 text-center transition-all duration-500 ease-out group-hover:top-0">
              <p className="text-lg sm:text-xl font-black leading-none tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-cyan-200 via-amber-200 to-fuchsia-200">
                College Activities
              </p>
            </div>

            {heroCards.map((card) => (
              <div
                key={card.title}
                className={`absolute bottom-[-4.5rem] h-[11.5rem] w-[62%] max-w-[11.4rem] rounded-[1.5rem] border bg-gradient-to-br p-4 backdrop-blur-xl transition-all duration-500 ease-out hover:bottom-3 hover:z-40 hover:rotate-0 hover:scale-[1.03] ${card.position} ${card.border} ${card.glow} ${card.bg} flex flex-col overflow-hidden shadow-lg`}
              >
                <div className="mb-3 h-1 w-8 rounded-full bg-current opacity-80" />
                <h3 className={`text-sm sm:text-base font-bold leading-tight ${card.accent}`}>
                  {card.title}
                </h3>
                <div className={`mt-2 min-h-0 flex-1 overflow-y-auto pr-1.5 ${card.scrollbar}`}>
                  <p className="text-xs sm:text-[0.75rem] leading-relaxed text-slate-200">
                    {card.body}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>

          <motion.div
            custom={3}
            variants={aboutBoxVariants}
            className="col-span-1 md:col-span-2 md:row-span-3 flex min-h-0 flex-col rounded-2xl border border-white/10 bg-gradient-to-br from-[#1e1b4b] via-[#0f172a] to-[#020617] p-4 text-white overflow-hidden will-change-transform"
          >
            <p className="mb-3 text-[0.79rem] font-semibold tracking-[0.12em] text-indigo-200/80">
              Features & Systems Implemented
            </p>
            <div
              className="min-h-0 flex-1 overflow-y-auto pr-1 [scrollbar-color:rgba(125,211,252,0.55)_rgba(15,23,42,0.35)] [scrollbar-width:thin]"
              aria-label="Scrollable concepts list"
            >
              <div className="flex flex-wrap items-start gap-x-2.5 p-1 gap-y-3">
                {conceptCards.map((concept, index) => {
                  const style = conceptStyles[index % conceptStyles.length];

                  return (
                    <div
                      key={`${concept}-${index}`}
                      className={`inline-flex max-w-full w-fit rounded-xl border bg-gradient-to-br px-3 py-2 text-[0.72rem] font-semibold leading-tight backdrop-blur-md transition duration-300 hover:-translate-y-0.5 hover:scale-[1.03] ${style.bg} ${style.border} ${style.text} ${style.glow}`}
                    >
                      {concept}
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>

          <motion.div
            custom={4}
            variants={aboutBoxVariants}
            className="col-span-2 md:col-span-2 md:row-span-3 rounded-2xl p-4 bg-gradient-to-br from-[#020617] to-[#1e293b] text-white will-change-transform"
          >
            <ImageSlider />
          </motion.div>


          <motion.div
            custom={5}
            variants={aboutBoxVariants}
            className="col-span-1 md:col-span-2 md:row-span-2 rounded-2xl bg-gradient-to-br from-[#0f172a] to-[#1e293b] text-white will-change-transform"
          >
            <AchivementSlider />
          </motion.div>

          

          <motion.div
            custom={6}
            variants={aboutBoxVariants}
            className="col-span-2 md:col-span-3 rounded-2xl p-4 bg-gradient-to-br from-[#020617] to-[#312e81] text-white will-change-transform"
          >
            Philosophy → &quot;I build production-ready systems, not just projects&quot;
          </motion.div>

          <motion.div
            custom={7}
            variants={aboutBoxVariants}
            className="col-span-1 md:col-span-2 rounded-2xl p-4 bg-gradient-to-br from-[#1e1b4b] to-[#0f172a] text-white will-change-transform"
          >
            Journey → C++ → Web → AI growth
          </motion.div>

          <motion.div
            custom={8}
            variants={aboutBoxVariants}
            className="col-span-1 md:col-span-1 md:row-span-1 rounded-2xl p-4 bg-gradient-to-br from-[#020617] to-[#1e293b] text-white will-change-transform"
          >
            Contact → GitHub / LinkedIn / Email
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
