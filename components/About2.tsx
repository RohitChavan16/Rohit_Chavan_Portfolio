"use client";

import { motion, type Variants, AnimatePresence } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import ImageSlider from "./ImageSilder";
import AchivementSlider from "./AchivementSlider";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

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
const contacts = [
  {
    name: "GitHub",
    icon: "/icons/github.png",
    href: "https://github.com/RohItChavan16",
  },
  {
    name: "LinkedIn",
    icon: "/icons/linkedin.webp",
    href: "https://linkedin.com/in/rohit-chavan16",
  },
  {
    name: "Email",
    icon: "/icons/email.webp",
    href: "mailto:approachrohit16@gmail.com",
  },
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
      {
  label: "Software Developer",
  color: "text-indigo-200",
  glow: "shadow-indigo-400/30"
},

{
  label: "AI/ML Enthusiast",
  color: "text-sky-200",
  glow: "shadow-sky-400/30"
},
      { label: "Full Stack Developer", color: "text-cyan-200", glow: "shadow-cyan-400/30" },
      { label: "Competitive Programmer", color: "text-fuchsia-200", glow: "shadow-fuchsia-400/30" },
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
  const [codingProfileIndex, setCodingProfileIndex] = useState(0);
  
const LeetCodeIcon = "/icons/leetcode.svg";
const CodeforcesIcon =  "/icons/code-forces.svg";
const CodeChefIcon = "/icons/codechef.svg";

  const codingProfiles = useMemo(
    () => [
      {
        name: "LeetCode",
        icon: <img src={LeetCodeIcon} alt="LeetCode" className="w-8 h-8" />,
        color: "from-orange-500 via-yellow-500 to-orange-600",
        stats: "1700 + Rating • 700 + Problems",
        image: "/images/img1.jpg",
        link: "https://leetcode.com/u/RohitChavan1612/",
      },
      {
        name: "CodeChef",
        icon: <img src={CodeChefIcon} alt="CodeChef" className="w-8 h-8" />,
        color: "from-blue-600 via-cyan-500 to-indigo-700",
        stats: "1600 + Rating • 3⭐star",
        image: "/achievement_img/img4.jpg",
        link: "https://codechef.com/users/rohitchavan16",
      },
      {
        name: "Codeforces",
        icon: <img src={CodeforcesIcon} alt="Codeforces" className="w-8 h-8" />,
        color: "from-purple-600 via-violet-500 to-purple-700",
        stats: "1200 + • Pupil",
        image: "/achievement_img/img3.png",
        link: "https://codeforces.com/profile/RohitChavan16",
      },
    ],
    []
  );

const [activeIndex, setActiveIndex] = useState(0);

const prevIndex =
  (activeIndex - 1 + contacts.length) % contacts.length;

const nextIndex =
  (activeIndex + 1) % contacts.length;
  useEffect(() => {
    const interval = setInterval(() => {
      setCodingProfileIndex((prev) => (prev + 1) % codingProfiles.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [codingProfiles.length]);

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
    "I build with patience, pressure, and polish. Every feature should have a reason, every interaction should feel intentional, and every system should be strong enough to grow without becoming messy. I care about clean structure, readable code, and fast feedback.";
  const expandedMindsetText =
    `${mindsetText} I focus on the kind of product decisions that make the final build feel confident instead of accidental. The goal is simple: think clearly, ship carefully, and keep improving the system until it feels calm under pressure.`;
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
      title: "Mindspark Core Team Member",
      body: "Worked as a member of the Purchase & Infrastructure Department during MindSpark, one of the major technical festivals at COEP. Contributed to event execution by managing procurement activities, coordinating logistics, handling infrastructure requirements, and supporting smooth on-ground operations for multiple events and activities.",
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
    "Containerization",
    "LLM Integration",
    "Distributed Systems",
    "OAuth Integration",
    "Real-Time Chat Systems",
    "Image Processing",
     "AI Integration",
     "Concurrency Handling",
    "Authentication & Authorization",
    "Event-Driven Architecture",
    "Geospatial Analysis",
    "Full-Stack Architecture",
     "WebSockets",
    "Role-Based Access Control",
  ];

  return (
    <section id="about" className="px-4 py-12 md:px-[8%] md:py-24">
      <div className="section-shell rounded-3xl p-8 lg:p-12">
        <div className="flex items-center gap-4 mb-8">
          <span className="section-label">01 About me</span>
          <div className="h-px flex-1 bg-white/15" />
        </div>
        <motion.div
          variants={aboutGridVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.05 }}
          className="flex flex-col md:grid md:grid-cols-6 gap-4 md:auto-rows-[110px]"
        >

          <motion.div
            custom={0}
            variants={aboutBoxVariants}
            className="group relative md:col-span-3 rounded-2xl p-[1px] text-white overflow-hidden will-change-transform min-h-[220px] md:min-h-0"
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

            <div className="relative z-10 flex h-full flex-col justify-between rounded-[15px] bg-transparent md:bg-slate-950/54 p-5 shadow-[0_0_42px_rgba(34,211,238,0.18)] backdrop-blur-md transition duration-300 group-hover:shadow-[0_0_62px_rgba(34,211,238,0.32)]">
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
                className="absolute right-5 bottom-6 md:bottom-auto md:top-[4.8rem] z-20 border-1 border-[#06bcef] cursor-pointer rounded-full px-3 py-2 text-[0.59rem] font-black uppercase tracking-[0.22em] text-cyan-50 backdrop-blur-md transition hover:border-white/80 hover:bg-green-600/25"
              >
                Click me
              </motion.button>
            </div>

            {isMindsetOpen ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.96, y: 12 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.28, ease: "easeOut" }}
                className="absolute inset-0 z-30 flex flex-col rounded-2xl border border-cyan-100/30 bg-slate-950/92 md:bg-slate-950/92 px-4 pt-4 pb-4 sm:pb-0 text-white shadow-[0_0_40px_rgba(34,211,238,0.35)] backdrop-blur-2xl"
              >
                <div className=" flex shrink-0 items-start justify-between gap-3 mb-2 sm:mb-0">
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
            className={`md:col-span-1 rounded-2xl p-3 sm:p-4 bg-transparent md:bg-gradient-to-br md:from-[#312e81] md:via-[#1e1b4b] md:to-[#020617] text-white overflow-hidden border border-white/10 shadow-lg will-change-transform min-h-[120px] md:min-h-0 flex flex-col justify-center ${activeRole.glow}`}
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
            className="group relative md:col-span-2 md:row-span-2 rounded-2xl bg-transparent md:bg-gradient-to-br md:from-[#0f172a] md:via-[#111827] md:to-[#020617] text-white overflow-hidden border border-white/10 shadow-lg shadow-amber-500/20 will-change-transform min-h-[250px] md:min-h-0"
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
            className="md:col-span-2 md:row-span-3 flex h-[300px] md:h-auto md:min-h-0 flex-col rounded-2xl border border-white/10 shadow-lg shadow-cyan-500/20 bg-transparent md:bg-gradient-to-br md:from-[#1e1b4b] md:via-[#0f172a] md:to-[#020617] p-4 text-white overflow-hidden will-change-transform"
          >
            <style>{`
              .features-scroll::-webkit-scrollbar {
                width: 5px;
              }
              .features-scroll::-webkit-scrollbar-track {
                background: rgba(15, 23, 42, 0.35);
                border-radius: 999px;
              }
              .features-scroll::-webkit-scrollbar-thumb {
                background: linear-gradient(180deg, rgba(34,211,238,0.8), rgba(56,189,248,0.8));
                border-radius: 999px;
              }
            `}</style>
            <p className="mb-3 text-[0.79rem] font-semibold tracking-[0.12em] text-indigo-200/80">
              Features & Systems Implemented
            </p>
            <div
              className="features-scroll min-h-0 flex-1 overflow-y-auto pr-1 [scrollbar-color:rgba(34,211,238,0.8)_rgba(15,23,42,0.35)] [scrollbar-width:thin]"
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
            className="hidden md:block md:col-span-2 md:row-span-3 rounded-2xl p-4 bg-transparent md:bg-gradient-to-br md:from-[#020617] md:to-[#1e293b] text-white border border-white/10 shadow-lg shadow-rose-500/20 will-change-transform min-h-[250px] md:min-h-0"
          >
            <ImageSlider />
          </motion.div>


          <motion.div
            custom={5}
            variants={aboutBoxVariants}
            className="md:col-span-2 md:row-span-2 rounded-2xl bg-transparent md:bg-gradient-to-br md:from-[#0f172a] md:to-[#1e293b] text-white border border-white/10 shadow-lg shadow-fuchsia-500/20 will-change-transform h-[250px] md:h-auto md:min-h-0"
          >
            <AchivementSlider />
          </motion.div>

          

          {/* Coding Profiles Section */}
          <motion.div
            custom={6}
            variants={aboutBoxVariants}
            className="md:col-span-3 rounded-2xl overflow-hidden will-change-transform bg-transparent md:bg-gradient-to-br md:from-[#020617] md:via-[#1a1a3e] md:to-[#0f0f1e] border border-white/10 shadow-lg shadow-purple-500/20 flex flex-col sm:flex-row h-full min-h-[300px] md:min-h-0"
          >
            {/* Left Section - Headline */}
            <div className="w-full sm:w-16 py-3 sm:py-0 flex items-center justify-center bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-fuchsia-500/20 sm:border-r border-b sm:border-b-0 border-white/10">
              <div className="flex flex-row sm:flex-col items-center gap-3 sm:gap-1">
                <p className="text-base sm:text-[10px] font-black tracking-[0.2em] sm:tracking-widest uppercase text-transparent bg-clip-text bg-gradient-to-r sm:bg-gradient-to-b from-cyan-300 to-fuchsia-300 leading-tight text-center">
                  CODING
                </p>
                <div className="h-0.5 w-8 sm:w-0.5 sm:h-6 bg-gradient-to-r sm:bg-gradient-to-b from-cyan-400 to-fuchsia-400 rounded-full" />
                <p className="text-base sm:text-[10px] font-black tracking-[0.2em] sm:tracking-widest uppercase text-transparent bg-clip-text bg-gradient-to-r sm:bg-gradient-to-b from-fuchsia-300 to-cyan-300 leading-tight text-center">
                  PROFILE
                </p>
              </div>
            </div>

            {/* Middle Section - Image Slider */}
            <motion.a
              href={codingProfiles[codingProfileIndex].link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 relative overflow-hidden cursor-pointer group min-h-[200px] sm:min-h-0"
            >
              {/* Image Slider Background */}
              <motion.div
                key={`slider-${codingProfileIndex}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6 }}
                className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-300"
                style={{
                  backgroundImage: `url('${codingProfiles[codingProfileIndex].image}'), linear-gradient(135deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.4) 100%)`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-black/40 to-black/30 group-hover:from-black/30 group-hover:to-black/20 transition-all duration-300" />

              {/* Profile Info Overlay */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-3 sm:p-4 z-10">
                <motion.div
                  key={`profile-info-${codingProfileIndex}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="text-center"
                >
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <span className="text-3xl sm:text-4xl drop-shadow-lg">
                      {codingProfiles[codingProfileIndex].icon}
                    </span>
                    <h3 className="text-lg sm:text-xl font-black text-white drop-shadow-md">
                      {codingProfiles[codingProfileIndex].name}
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-white/95 font-bold drop-shadow-md">
                    {codingProfiles[codingProfileIndex].stats}
                  </p>
                </motion.div>
              </div>

              {/* Left Arrow Button - Absolute */}
              <motion.button
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setCodingProfileIndex((prev) => (prev - 1 + codingProfiles.length) % codingProfiles.length);
                }}
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.9 }}
                className="absolute cursor-pointer left-2 sm:left-3 top-1/2 -translate-y-1/2 z-20 p-1.5 sm:p-2 rounded-full border border-white/40 bg-white/10 backdrop-blur-md text-white/80 hover:bg-white/20 hover:text-white transition"
              >
                <ChevronLeft className="w-4 h-4 sm:w-3 sm:h-3" />
              </motion.button>

              {/* Right Arrow Button - Absolute */}
              <motion.button
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setCodingProfileIndex((prev) => (prev + 1) % codingProfiles.length);
                }}
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.9 }}
                className="absolute cursor-pointer right-2 sm:right-3 top-1/2 -translate-y-1/2 z-20 p-1.5 sm:p-2 rounded-full border border-white/40 bg-white/10 backdrop-blur-md text-white/80 hover:bg-white/20 hover:text-white transition"
              >
                <ChevronRight className="w-4 h-4 sm:w-3 sm:h-3" />
              </motion.button>
            </motion.a>

            {/* Right Section - 3D Coding Animation */}
            <div className="hidden sm:flex w-full sm:w-24 flex-row sm:flex-col items-center justify-center px-2 sm:px-3 py-4 sm:border-l border-t sm:border-t-0 border-white/10 bg-gradient-to-t sm:bg-gradient-to-l from-cyan-500/10 to-transparent gap-4 sm:gap-0">
              <motion.div
                className="w-16 h-16 sm:w-20 sm:h-20 relative"
                animate={{ rotateY: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                style={{ perspective: "1000px" }}
              >
                {/* Cube representing computer */}
                <motion.div
                  className="absolute inset-0 rounded-lg bg-gradient-to-br from-cyan-500/40 to-purple-600/40 border border-cyan-400/50 flex items-center justify-center text-3xl"
                  animate={{
                    rotateX: [0, 360],
                    rotateZ: [0, -360],
                  }}
                  transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                >
                  <span>💻</span>
                </motion.div>

                {/* Orbiting code particles */}
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute inset-0"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 3 + i, repeat: Infinity, ease: "linear" }}
                  >
                    <div
                      className="absolute w-1.5 h-1.5 sm:w-2 sm:h-2 bg-cyan-400 rounded-full"
                      style={{
                        top: "50%",
                        left: "50%",
                        transform: `translate(-50%, -50%) translateX(${32 + i * 8}px)`,
                      }}
                    />
                  </motion.div>
                ))}

                {/* Pulsing background */}
                <motion.div
                  className="absolute inset-0 rounded-lg bg-gradient-to-br from-cyan-500/20 to-fuchsia-500/20"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </motion.div>

              {/* Coding text indicator */}
              <motion.div
                className="text-[8px] sm:text-[10px] font-bold text-cyan-300 opacity-60 sm:mt-2"
                animate={{ opacity: [0.4, 1, 0.4] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                &lt;/&gt;
              </motion.div>
            </div>
          </motion.div>

          <motion.div
  custom={7}
  variants={aboutBoxVariants}
  className="md:col-span-2 rounded-2xl p-2 bg-gradient-to-br from-[#1e1b4b] to-[#0f172a] text-white border border-white/10 shadow-lg shadow-indigo-500/20 will-change-transform h-[290px] md:h-auto md:min-h-0"
>
  {/* Scrollable inner container */}
  <div
    className="h-full overflow-y-auto "
    style={{
      maxHeight: "100%",
      scrollbarWidth: "thin",
      scrollbarColor: "#7c3aed #1e1b4b",
    }}
  >
    <style>{`
      .contrib-scroll::-webkit-scrollbar {
        width: 6px;
      }
      .contrib-scroll::-webkit-scrollbar-track {
        background: #1e1b4b;
        border-radius: 999px;
      }
      .contrib-scroll::-webkit-scrollbar-thumb {
        background: linear-gradient(180deg, #7c3aed, #ec4899, #f59e0b);
        border-radius: 999px;
      }
    `}</style>

    <div className="contrib-scroll h-full overflow-y-auto pr-1 space-y-3">
      {/* Headline */}
      <div className="flex items-center gap-2 mb-1">
        <span className="text-lg font-bold bg-gradient-to-r from-violet-400 via-pink-400 to-amber-400 bg-clip-text text-transparent tracking-tight">
          Open Source Contributor
        </span>
        <motion.span
          animate={{ rotate: [0, 15, -10, 15, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 3 }}
          className="text-lg"
        >
          🌍
        </motion.span>
      </div>
      {/* Card 1 — Testing Logic */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="rounded-xl p-3 bg-gradient-to-br from-violet-600/30 to-violet-900/40 border border-violet-500/30 backdrop-blur-sm"
      >
        <div className="flex items-center gap-2 mb-1.5">
          <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-violet-500/40 text-violet-200 border border-violet-400/30">
            🧪 gssoc:approved
          </span>
          <span className="text-xs px-2 py-0.5 rounded-full bg-emerald-500/30 text-emerald-300 border border-emerald-400/20">
            ✓ Merged
          </span>
        </div>
        <p className="text-xs text-slate-300 leading-relaxed">
          Delivered contributions across multiple open-source projects built with different backend and frontend technologies. Implemented secure authentication and authorization systems, scalable REST APIs, pagination strategies, rate limiting, logging, testing frameworks, input validation, and performance enhancements. Participated in issue triaging, bug fixes, feature development, and code review processes within collaborative development environments.
        </p>
      </motion.div>
    </div>
  </div>
</motion.div>

      <div className="relative h-full min-h-[160px] md:min-h-0 flex items-center justify-center md:col-span-1">
  <div className="relative w-[220px] h-[90px] rounded-2xl">

    {contacts.map((contact, index) => {
      const isCenter = index === activeIndex;

      const position =
        index === activeIndex
          ? {
              x: 0,
              y: 0,
              scale: 1,
              opacity: 1,
              rotate: 0,
              zIndex: 30,
            }
          : index === prevIndex
          ? {
              x: -75,
              y: 8,
              scale: 0.65,
              opacity: 0.4,
              rotate: -15,
              zIndex: 10,
            }
          : {
              x: 75,
              y: 8,
              scale: 0.65,
              opacity: 0.4,
              rotate: 15,
              zIndex: 10,
            };

      return (
        <motion.div
          key={contact.name}
          animate={position}
          transition={{
            type: "spring",
            stiffness: 120,
            damping: 14,
            mass: 0.8,
          }}
          className="
            absolute
            left-1/2
            top-1/2
            -translate-x-1/2
            -translate-y-1/2
          "
        >
          {isCenter ? (
            <motion.a
              href={contact.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{
                scale: 1.12,
              }}
              whileTap={{
                scale: 0.95,
              }}
              className="
                flex
                flex-col
                items-center
                cursor-pointer
              "
            >
              <motion.div
                animate={{
                  boxShadow: [
                    "0 0 10px rgba(34,211,238,0.3)",
                    "0 0 22px rgba(34,211,238,0.7)",
                    "0 0 10px rgba(34,211,238,0.3)",
                  ],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
                className="
                  p-2
                  rounded-full
                  border
                  border-cyan-400/40
                  bg-cyan-500/10
                  backdrop-blur-md
                "
              >
                <Image
                  src={contact.icon}
                  alt={contact.name}
                  width={48}
                  height={48}
                  className="w-[48px] h-[48px] md:w-[38px] md:h-[38px] select-none"
                />
              </motion.div>

              <span className="mt-1 text-xs font-semibold text-cyan-300">
                {contact.name}
              </span>
            </motion.a>
          ) : (
            <motion.button
              onClick={() => setActiveIndex(index)}
              whileHover={{
                scale: 0.8,
                opacity: 0.8,
              }}
              whileTap={{
                scale: 0.7,
              }}
              className="
                flex
                flex-col
                items-center
                cursor-pointer
              "
            >
              <Image
                src={contact.icon}
                alt={contact.name}
                width={48}
                height={48}
                className="w-[48px] h-[48px] md:w-[38px] md:h-[38px] select-none"
              />

              <span className="mt-1 text-[10px] text-slate-500">
                {contact.name}
              </span>
            </motion.button>
          )}
        </motion.div>
      );
    })}

  </div>
</div>

        </motion.div>
      </div>
    </section>
  );
}
