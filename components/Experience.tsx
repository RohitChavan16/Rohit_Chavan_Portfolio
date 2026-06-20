"use client";

import { useState } from "react";

const experiences = [
 {
    id: 0,
    role: "Open Source Contributor",
    company: "GirlScript Summer of Code (GSSoC)",
    period: "2026 - Present",
    description:
      "Collaborated in large-scale open-source development through Git-based workflows, code reviews, issue resolution, documentation updates, and production-grade feature delivery using Node.js, Express.js, FastAPI, PostgreSQL, Supabase, JWT, and REST APIs.",
    wins: [
      "Implemented JWT-based authentication and authorization infrastructure, developing 3 secure REST APIs, bcrypt password hashing, token validation utilities, and middleware-protected endpoints for personalized user workflows.",
      "Engineered a Trending Recommendation Engine processing user interaction data with Bayesian rating smoothing, weighted ranking algorithms, pagination-based aggregation, and 1-hour caching, improving recommendation quality and API efficiency.",
      "Developed a complete newsletter subscription platform integrating Supabase with double opt-in email verification, confirmation token generation, secure RLS policies, duplicate detection, and lead-tracking infrastructure.",
      "Built 127+ lines of backend integration testing infrastructure, automating authenticated CRUD validation across 5 REST endpoints using mock PostgreSQL query simulations and deterministic test execution.",
    ],
  },
 {
    id: 1,
    role: "Core Contributor",
    company: "Software Development Club, COEP",
    period: "2025 - Present",
    description:
      "Actively contributing to technical discussions, collaborative engineering initiatives, and peer learning activities.",
    wins: [
      "Engineered backend services for SDS platforms, implementing secure authentication, authorization, and role-based access control.",
      "Developed organizer dashboards and competition management workflows supporting registrations, quizzes, participant tracking, and result processing.",
      "Built contest lifecycle features including event creation, submissions, leaderboards, and user management systems.",
      "Collaborated in a cross-functional team to deliver production-ready features and improve API performance and reliability.",
      "Troubleshot and resolved production issues, contributing to platform stability, security, and maintainability.",
    ],
  },
  
]

const timelineColors = [
  { glow: "#7cf6d4", bgHex: "124, 246, 212" }, // Mint Green
  { glow: "#f4d03f", bgHex: "244, 208, 63" },  // Yellow
  { glow: "#ff9a9e", bgHex: "255, 154, 158" }, // Pink
];

export default function Experience() {
  const [active, setActive] = useState(0);
  const activeColorTheme = timelineColors[active % timelineColors.length];

  return (
    <section id="experience" className="px-4 py-12 md:px-[8%] md:py-24">
      <div className="section-shell rounded-3xl p-8 lg:p-12 shadow-2xl relative overflow-hidden group/section">
        {/* Subtle section animation */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent opacity-0 group-hover/section:opacity-100 transition-opacity duration-1000" />
        
        <div className="relative z-10 flex items-center gap-4 mb-8">
          <span className="section-label">04 Experience</span>
          <div className="h-px flex-1 bg-white/15" />
        </div>

        <h2 className="relative z-10 section-title mb-10">
          Work journey shaped by
          <span className="block" style={{ color: activeColorTheme.glow, transition: 'color 0.5s ease' }}>
            delivery and ownership
          </span>
        </h2>

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-6 lg:gap-12">
          
          {/* Left Panel: Timeline */}
          <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:flex lg:flex-col gap-4 lg:gap-0 lg:pl-10 lg:h-full">
            
            {/* The Full Background Track Line */}
            <div className="hidden lg:block absolute left-1.5 top-0 bottom-0 w-2.5 rounded-full transition-all duration-700 overflow-hidden border-[1.5px] border-fuchsia-500/80"
                 style={{ 
                   background: 'linear-gradient(to bottom, rgba(255, 0, 128, 0.3), rgba(121, 40, 202, 0.3), rgba(0, 112, 243, 0.3), rgba(0, 223, 216, 0.3), rgba(244, 208, 63, 0.3))',
                   boxShadow: `0 0 30px 4px ${activeColorTheme.glow}80, 0 0 10px 2px ${activeColorTheme.glow}` 
                 }}>
               {/* Dynamic Progress Gradient Line (Bottom to Top) */}
               <div 
                 className="absolute left-0 bottom-0 w-full rounded-full transition-all duration-700 ease-in-out"
                 style={{ 
                   height: `calc(${100 - ((active + 0.5) / experiences.length) * 100}%)`,
                   backgroundImage: `linear-gradient(to top, #ff9a9e, #f4d03f, #7cf6d4)`,
                   boxShadow: `0 0 20px ${activeColorTheme.glow}`
                 }}
               />
            </div>

            {experiences.map((item, index) => {
               const itemColor = timelineColors[index % timelineColors.length];
               const isActive = active === item.id;
               
               return (
               <div key={item.id} className="relative w-full lg:flex-1 flex flex-col justify-center group">
                  
                  {/* Timeline Node Dot */}
                  <div 
                     className={`hidden lg:flex absolute -left-[37px] top-1/2 -translate-y-1/2 w-4 h-4 rounded-full border-[3px] items-center justify-center transition-all duration-500 z-10 ${
                       isActive 
                         ? "scale-125 bg-[#0a0a0a]" 
                         : "border-white/20 bg-[#0a0a0a] group-hover:border-white/40 group-hover:scale-110"
                     }`}
                     style={{
                        borderColor: isActive ? itemColor.glow : undefined,
                        boxShadow: isActive ? `0 0 20px ${itemColor.glow}` : "none"
                     }}
                  >
                     {/* Inner pulsing dot for active state */}
                     {isActive && (
                       <div className="w-1.5 h-1.5 rounded-full animate-ping absolute" style={{ backgroundColor: itemColor.glow }} />
                     )}
                     {isActive && (
                       <div className="w-1.5 h-1.5 rounded-full relative" style={{ backgroundColor: itemColor.glow }} />
                     )}
                  </div>

                  <button
                     onClick={() => setActive(item.id)}
                     className={`w-full text-left cursor-pointer rounded-2xl border px-5 py-4 transition-all duration-500 relative overflow-hidden group/btn ${
                        isActive
                          ? `scale-[1.02] lg:scale-100` 
                          : "hover:scale-[1.01]"
                     }`}
                     style={{
                        borderColor: isActive ? itemColor.glow : `rgba(${itemColor.bgHex}, 0.3)`,
                        backgroundColor: isActive ? `rgba(${itemColor.bgHex}, 0.12)` : `rgba(${itemColor.bgHex}, 0.03)`,
                        boxShadow: isActive 
                           ? `0 0 25px rgba(${itemColor.bgHex}, 0.4), inset 0 0 15px rgba(${itemColor.bgHex}, 0.15)` 
                           : `0 0 10px rgba(${itemColor.bgHex}, 0.1)`,
                     }}
                  >
                     {/* Background gradient hint */}
                     <div 
                       className={`absolute top-0 right-0 w-32 h-32 blur-3xl -mr-10 -mt-10 pointer-events-none transition-all duration-700 ${isActive ? 'opacity-30' : 'opacity-10 group-hover/btn:opacity-20'}`} 
                       style={{ backgroundColor: itemColor.glow }} 
                     />

                     <p className={`text-sm sm:text-base font-bold truncate transition-colors duration-300 relative z-10 ${isActive ? "text-white" : "text-white/70 group-hover:text-white/90"}`}>
                       {item.company}
                     </p>
                     <p className="text-xs sm:text-sm font-medium mt-1.5 transition-colors duration-300 relative z-10" style={{ color: isActive ? itemColor.glow : 'rgba(255,255,255,0.4)' }}>
                       {item.role}
                     </p>
                     <p className="text-[11px] sm:text-xs muted-soft mt-2.5 relative z-10">{item.period}</p>
                  </button>
               </div>
            )})}
          </div>

          <article className="section-shell rounded-3xl p-6 lg:p-10 relative overflow-hidden flex flex-col justify-center transition-all duration-500 border"
                   style={{ borderColor: `rgba(${activeColorTheme.bgHex}, 0.2)` }}>
            {/* Dynamic background glow based on active item */}
            <div 
              className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 blur-[90px] rounded-full pointer-events-none transition-all duration-1000 opacity-20" 
              style={{ backgroundColor: activeColorTheme.glow }}
            />
            <div 
              className="absolute bottom-0 left-0 -ml-20 -mb-20 w-72 h-72 blur-[90px] rounded-full pointer-events-none transition-all duration-1000 opacity-15" 
              style={{ backgroundColor: activeColorTheme.glow }}
            />
            
            <div className="relative z-10 grid">
               {experiences.map((exp) => {
                 const isActive = active === exp.id;
                 return (
                   <div 
                     key={exp.id} 
                     className={`col-start-1 row-start-1 transition-all duration-700 ease-in-out flex flex-col justify-center ${
                       isActive 
                         ? "opacity-100 translate-y-0 scale-100 pointer-events-auto z-10" 
                         : "opacity-0 translate-y-8 scale-95 pointer-events-none z-0"
                     }`}
                   >
                     <h3 className="text-2xl sm:text-3xl font-bold bg-clip-text text-transparent transition-all duration-500"
                         style={{ backgroundImage: `linear-gradient(to right, white, ${activeColorTheme.glow})` }}>
                       {exp.role}
                     </h3>
                     <p className="mt-2 text-sm sm:text-base font-semibold transition-colors duration-500" style={{ color: activeColorTheme.glow }}>{exp.company}</p>
                     <p className="text-xs sm:text-sm uppercase tracking-[0.2em] text-white/40 mt-4 font-semibold">{exp.period}</p>
                     <p className="text-white/80 leading-relaxed mt-6 sm:mt-8 text-sm sm:text-base">{exp.description}</p>
                     <div className="mt-8 space-y-4">
                       {exp.wins.map((win, i) => (
                         <div key={i} className="flex gap-4 text-sm sm:text-base text-white/80 leading-relaxed items-start">
                           <span className="mt-1 shrink-0 text-lg leading-none transition-colors duration-500" style={{ color: activeColorTheme.glow }}>❖</span>
                           <p>{win}</p>
                         </div>
                       ))}
                     </div>
                   </div>
                 );
               })}
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
