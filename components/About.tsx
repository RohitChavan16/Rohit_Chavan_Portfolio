"use client";

export default function About() {
  return (
    <section id="about" className="bg-[#0a0a0a] py-32 relative overflow-hidden">
      {/* Accent line */}
      <div className="absolute left-0 top-0 w-[1px] h-full bg-gradient-to-b from-transparent via-[#e8ff47]/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section label */}
        <div className="flex items-center gap-3 mb-20">
          <span className="text-[#e8ff47] font-mono text-xs tracking-[0.3em] uppercase">
            01 — About
          </span>
          <div className="flex-1 h-[1px] bg-[#1a1a1a]" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Left: image */}
          <div className="relative">
            {/* Decorative frame */}
            <div className="absolute -top-4 -left-4 w-full h-full border border-[#e8ff47]/20" />
            <div className="relative bg-[#111] aspect-[3/4] overflow-hidden">
              {/* Placeholder avatar with CSS art */}
              <div className="w-full h-full flex items-end justify-center bg-gradient-to-b from-[#111] to-[#0a0a0a] relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[#e8ff47]/5 to-transparent" />
                {/* Abstract person silhouette */}
                <div className="w-40 h-40 rounded-full bg-[#222] absolute top-12 left-1/2 -translate-x-1/2 border border-[#2a2a2a]">
                  <div className="absolute inset-4 rounded-full bg-gradient-to-br from-[#333] to-[#1a1a1a]" />
                  <div className="absolute top-6 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-[#3a3a3a]" />
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-16 h-6 rounded-full bg-[#2a2a2a]" />
                </div>
                <div className="w-64 h-56 rounded-t-full bg-[#1a1a1a] relative z-10 border-t border-x border-[#2a2a2a]" />
                {/* Name overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-[#0a0a0a] to-transparent">
                  <p className="text-[#e8ff47] font-mono text-xs tracking-[0.2em] uppercase">
                    Alex Rivera
                  </p>
                  <p className="text-[#444] font-mono text-xs tracking-widest uppercase mt-1">
                    Full Stack Dev
                  </p>
                </div>
              </div>
            </div>

            {/* Floating tag */}
            <div className="absolute -bottom-6 -right-6 bg-[#e8ff47] text-black px-4 py-2">
              <span className="text-xs font-black uppercase tracking-widest">
                Open to Work
              </span>
            </div>
          </div>

          {/* Right: text */}
          <div className="flex flex-col gap-8">
            <h2
              className="text-5xl lg:text-7xl font-black text-white leading-none uppercase"
              style={{ fontFamily: "'Bebas Neue', sans-serif" }}
            >
              Building the{" "}
              <span className="text-[#e8ff47]">Digital Future</span> One Line at
              a Time
            </h2>

            <p className="text-[#888] leading-relaxed text-base">
              Hey! I'm Alex — a Full Stack Developer with 5+ years of experience
              turning complex ideas into clean, performant, and beautiful web
              applications. I started coding at 16, fell in love with the craft,
              and never looked back.
            </p>

            <p className="text-[#888] leading-relaxed text-base">
              My stack centers around{" "}
              <span className="text-white">React, Next.js, Node.js,</span> and{" "}
              <span className="text-white">TypeScript</span> — but I'm
              comfortable across the full spectrum, from pixel-perfect UI to
              scalable backend architecture and database design.
            </p>

            {/* Quick facts grid */}
            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-[#1a1a1a]">
              {[
                { label: "Location", value: "San Francisco, CA" },
                { label: "Availability", value: "Freelance / Full-time" },
                { label: "Education", value: "B.S. Computer Science, MIT" },
                { label: "Focus", value: "Web Apps, APIs, UI/UX" },
              ].map((item) => (
                <div key={item.label}>
                  <p className="text-[#444] text-xs font-mono uppercase tracking-widest mb-1">
                    {item.label}
                  </p>
                  <p className="text-white text-sm font-medium">{item.value}</p>
                </div>
              ))}
            </div>

            {/* Download CV */}
            <div className="flex gap-4 mt-2">
              <a
                href="#"
                className="group flex items-center gap-3 text-xs font-mono uppercase tracking-widest text-[#e8ff47] border border-[#e8ff47]/30 px-6 py-3 hover:bg-[#e8ff47] hover:text-black transition-all duration-200"
              >
                <svg
                  className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M12 10v6m0 0l-3-3m3 3l3-3M3 17V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z"
                  />
                </svg>
                Download CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}