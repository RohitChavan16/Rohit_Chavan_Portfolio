"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

type Project = {
  id: string;
  title: string;
  summary: string;
  stack: string[];
  impact: string;
  year: string;
  live: string;
  code: string;
  images: string[];
  theme: {
    glow: string;
    border: string;
    chip: string;
    imageOverlay: string;
  };
};

const projects: Project[] = [
  {
    id: "01",
    title: "SynapTalk",
    summary:
      "Unified communication platform with chat, HD calls, AI assistant workflows, and team-level social automation.",
    stack: ["Next.js", "Node.js", "MongoDB", "WebSocket", "Tailwind"],
    impact: "Handled multi-room messaging and live collaboration with low-latency sockets.",
    year: "2026",
    live: "https://synap-talk-kuub.vercel.app/",
    code: "https://github.com/RohitChavan16/SynapTalk",
    images: [
      "/synaptalk/img1.png",
      "/synaptalk/img2.png",
      "/synaptalk/img3.png",
      "/synaptalk/img4.png",
      "/synaptalk/img5.png",
      "/synaptalk/img6.png",
      "/synaptalk/img7.png",
      "/synaptalk/img8.png",
      "/synaptalk/img9.png",
      "/synaptalk/img10.png",
      "/synaptalk/img11.png",
    ],
    theme: {
      glow: "from-[#f4d03f]/30 via-[#f39f1b]/20 to-transparent",
      border: "border-[#f4d03f]/35",
      chip: "border-[#f4d03f]/45 text-[#fff3b3]",
      imageOverlay: "from-[#120f06]/70 via-transparent to-transparent",
    },
  },
  
{
  id: "02",
  title: "BenchForge",
  summary:
    "Production-grade distributed benchmarking platform for stress testing trading infrastructure with telemetry-driven scaling.",
  stack: ["Go", "Docker", "PostgreSQL", "Telemetry", "Microservices"],
  impact:
    "Executed distributed load simulations with realtime telemetry visualization and scalable orchestration.",
  year: "2026",
  live: "#",
  code: "https://github.com/RohitChavan16/BenchForge",
  images: [
    "/benchforge/img1.png",
    "/benchforge/img2.png",
    "/benchforge/img3.png",
    "/benchforge/img4.png",
  ],
  theme: {
    glow: "from-[#ff4d6d]/30 via-[#e11d48]/20 to-transparent",
    border: "border-[#fb7185]/35",
    chip: "border-[#fb7185]/45 text-[#ffe1e8]",
    imageOverlay: "from-[#26030b]/70 via-transparent to-transparent",
  },
},
  {
  id: "03",
  title: "GeoShop Engine",
  summary:
    "Scalable geospatial intelligence platform for resolving inconsistent POI datasets using entity matching and confidence scoring.",
  stack: ["Next.js", "FastAPI", "PostgreSQL", "Maps", "Docker"],
  impact:
    "Achieved accurate cross-source business matching with fuzzy similarity scoring and realtime analytics.",
  year: "2026",
  live: "#",
  code: "https://github.com/RohitChavan16/Geo_Analysis",
  images: [
    "/geoshop/img1.png",
    "/geoshop/img2.png",
    "/geoshop/img3.png",
  ],
  theme: {
    glow: "from-[#6ef3ff]/30 via-[#0ea5e9]/20 to-transparent",
    border: "border-[#67e8f9]/35",
    chip: "border-[#67e8f9]/45 text-[#d9fcff]",
    imageOverlay: "from-[#02161c]/70 via-transparent to-transparent",
  },
},
  
  {
    id: "04",
    title: "ScanLayer",
    summary:
      "OpenCV document scanner that detects paper boundaries, applies perspective correction, and enhances readability.",
    stack: ["C++", "OpenCV", "Image Processing"],
    impact: "Converted rough mobile captures into scanner-style outputs in seconds.",
    year: "2025",
    live: "#",
    code: "https://github.com/RohitChavan16/ScanLayer",
    images: [
      "/scanlayer/img1.png",
      "/scanlayer/img2.png",
      "/scanlayer/img3.png",
    ],
    theme: {
      glow: "from-[#7be7cf]/30 via-[#1db892]/20 to-transparent",
      border: "border-[#7be7cf]/35",
      chip: "border-[#7be7cf]/45 text-[#d9fff5]",
      imageOverlay: "from-[#031f1a]/70 via-transparent to-transparent",
    },
  },
{
    id: "05",
    title: "PrepNex",
    summary:
      "AI-driven learning assistant with prompt orchestration and adaptive topic recommendations.",
    stack: ["FastAPI", "OpenAI API", "Next.js", "PostgreSQL"],
    impact: "Personalized revision plan generation based on performance history.",
    year: "2025",
    live: "#",
    code: "https://github.com/RohitChavan16/PrepNex",
    images: [
      "/prepnex/img1.png",
      "/prepnex/img2.png",
      "/prepnex/img3.png",
      "/prepnex/img4.png",
    ],
    theme: {
      glow: "from-[#d0b2ff]/30 via-[#6f5ef6]/20 to-transparent",
      border: "border-[#b89ef7]/35",
      chip: "border-[#b89ef7]/45 text-[#e9ddff]",
      imageOverlay: "from-[#120a28]/70 via-transparent to-transparent",
    },
  },
{
  id: "06",
  title: "NeuraRAG",
  summary:
    "Custom RAG chatbot with semantic retrieval, vector search, and domain-aware response generation.",
  stack: ["FastAPI", "LangChain", "FAISS", "OpenAI", "Next.js"],
  impact:
    "Delivered context-aware AI responses using optimized chunking, embeddings, and retrieval pipelines.",
  year: "2026",
  live: "#",
  code: "https://github.com/RohitChavan16/custom-rag-chatbot",
  images: [
    "/neurarag/img1.png",
    "/neurarag/img2.png",
    "/neurarag/img3.png",
    "/neurarag/img4.png",
  ],
  theme: {
    glow: "from-[#9b8cff]/30 via-[#7c3aed]/20 to-transparent",
    border: "border-[#a78bfa]/35",
    chip: "border-[#a78bfa]/45 text-[#efe7ff]",
    imageOverlay: "from-[#140726]/70 via-transparent to-transparent",
  },
},
/*
{
  id: "07",
  title: "BankVerse",
  summary:
    "Multilingual fintech platform with AI banking support, realtime e-KYC calls, and regional-language accessibility.",
  stack: ["Next.js", "i18n", "WebRTC", "FastAPI", "MongoDB"],
  impact:
    "Enabled multilingual banking workflows with realtime support and AI-powered customer assistance.",
  year: "2025",
  live: "#",
  code: "https://github.com/RohitChavan16/Banking_Hackathon",
  images: [
    "/projects/bankverse-1.jpg",
    "/projects/bankverse-2.jpg",
    "/projects/bankverse-3.jpg",
    "/projects/bankverse-4.jpg",
  ],
  theme: {
    glow: "from-[#ff6ec7]/30 via-[#d946ef]/20 to-transparent",
    border: "border-[#f472b6]/35",
    chip: "border-[#f472b6]/45 text-[#ffe2f5]",
    imageOverlay: "from-[#230516]/70 via-transparent to-transparent",
  },
},*/

  {
    id: "07",
    title: "ScreenFlow",
    summary:
      "Movie booking suite with seat selection, role-based dashboards, and secure INR checkout via Stripe.",
    stack: ["React", "Node.js", "Express", "MongoDB", "Stripe"],
    impact: "Delivered full booking lifecycle from browsing to payment reconciliation.",
    year: "2024",
    live: "https://screenflow-puce.vercel.app/",
    code: "https://github.com/RohitChavan16/ScreenFlow",
    images: [
      "/screenflow/img1.png",
      "/screenflow/img2.png",
      "/screenflow/img3.png",
      "/screenflow/img4.png",
      "/screenflow/img5.png",
      "/screenflow/img6.png",
      "/screenflow/img7.png",
      "/screenflow/img8.png",
      "/screenflow/img9.png",
      "/screenflow/img10.png",
      "/screenflow/img11.png",
      "/screenflow/img12.png",
    ],
    theme: {
      glow: "from-[#7ec6ff]/30 via-[#2c7ff8]/20 to-transparent",
      border: "border-[#7ec6ff]/35",
      chip: "border-[#78bfff]/45 text-[#d9eeff]",
      imageOverlay: "from-[#041427]/70 via-transparent to-transparent",
    },
  },
  
  
{
  id: "08",
  title: "FlightCove",
  summary:
    "Console-based airline reservation and ticket management system with booking workflows and persistent flight storage.",
  stack: ["C++", "STL", "File I/O", "OOP"],
  impact:
    "Handled booking lifecycle, cancellations, and ticket history using optimized structured file storage.",
  year: "2025",
  live: "#",
  code: "https://github.com/RohitChavan16/FlightCove",
  images: [
    "/flightcove/img1.png",
    "/flightcove/img2.png",
    "/flightcove/img3.png",
    "/flightcove/img4.png",
    "/flightcove/img5.png",
    "/flightcove/img6.png",
    "/flightcove/img7.png",
  ],
  theme: {
    glow: "from-[#ffb86c]/30 via-[#ff7b00]/20 to-transparent",
    border: "border-[#ffb86c]/35",
    chip: "border-[#ffb86c]/45 text-[#fff0db]",
    imageOverlay: "from-[#221204]/70 via-transparent to-transparent",
  },
},
  
{
  id: "9",
  title: "NovaPortfolio",
  summary:
    "Interactive developer portfolio with cinematic UI, AI chatbot integration, and animated project storytelling.",
  stack: ["Next.js", "TypeScript", "Tailwind", "FastAPI", "Framer Motion"],
  impact:
    "Created immersive portfolio interactions with AI-assisted navigation and performance-optimized animations.",
  year: "2026",
  live: "https://your-portfolio-link.vercel.app",
  code: "https://github.com/RohitChavan16/Rohit_Chavan_Portfolio",
  images: [
    "/portfolio/img1.png",
    "/portfolio/img2.png",
    "/portfolio/img3.png",
    "/portfolio/img4.png",
    "/portfolio/img5.png",
    "/portfolio/img6.png",
    "/portfolio/img7.png",
  ],
  theme: {
    glow: "from-[#8aff80]/30 via-[#22c55e]/20 to-transparent",
    border: "border-[#86efac]/35",
    chip: "border-[#86efac]/45 text-[#e8ffe8]",
    imageOverlay: "from-[#041d09]/70 via-transparent to-transparent",
  },
},
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.14,
    },
  },
};

const cardDirections = [
  { x: -80, y: 36, rotate: -3 },
  { x: 0, y: 90, rotate: 0 },
  { x: 80, y: 36, rotate: 3 },
  { x: -40, y: 72, rotate: -2 },
];

const getCardVariants = (index: number) => ({
  hidden: {
    opacity: 0,
    scale: 0.92,
    ...cardDirections[index % cardDirections.length],
  },
  show: {
    opacity: 1,
    x: 0,
    y: 0,
    rotate: 0,
    scale: 1,
    transition: {
      type: "spring" as const,
      stiffness: 90,
      damping: 18,
      mass: 0.9,
    },
  },
});

export default function Work() {
  const [activeSlides, setActiveSlides] = useState<number[]>(
    projects.map(() => 0),
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlides((prev) =>
        prev.map((slideIndex, projectIndex) => {
          const imageCount = projects[projectIndex].images.length;
          return (slideIndex + 1) % imageCount;
        }),
      );
    }, 2600);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="projects" className="px-4 py-12 md:px-[8%] md:py-24">
      <div className="section-shell rounded-3xl p-8 lg:p-12">
        <div className="flex items-center gap-4 mb-8">
          <span className="section-label">03 Projects</span>
          <div className="h-px flex-1 bg-white/15" />
        </div>

        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
          <h2 className="section-title">
            Selected work in a
            <span className="block accent-text">visual project gallery</span>
          </h2>
          <a
            href="https://github.com/RohitChavan16"
            target="_blank"
            rel="noopener noreferrer"
            className="portfolio-btn portfolio-btn-secondary"
          >
            Explore GitHub
          </a>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.18 }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-6"
        >
          {projects.map((project, cardIndex) => (
            <motion.article
              key={project.id}
              variants={getCardVariants(cardIndex)}
              whileHover={{
                y: -10,
                scale: 1.015,
                transition: { duration: 0.22, ease: "easeOut" },
              }}
              className={`group relative overflow-hidden rounded-2xl border ${project.theme.border} bg-[#0a1426]/75 backdrop-blur-sm shadow-[0_18px_48px_rgba(0,0,0,0.22)] will-change-transform`}
            >
              <div className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${project.theme.glow}`} />
              <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-white/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="pointer-events-none absolute -inset-12 opacity-0 blur-3xl transition-opacity duration-300 group-hover:opacity-40">
                <div className={`h-full w-full bg-gradient-to-br ${project.theme.glow}`} />
              </div>

              <div className="relative h-52 overflow-hidden border-b border-white/10">
                <div
    className="flex h-full transition-transform duration-700"
    style={{
      transform: `translateX(-${activeSlides[cardIndex] * 100}%)`,
    }}
  >
                  {project.images.map((image, imageIndex) => (
                    <div key={imageIndex} className="relative h-full min-w-full">
                      <div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{
                          backgroundImage: `url(${image})`,
                        }}
                      />
                      <div className={`absolute inset-0 ${project.theme.imageOverlay}`} />
                      <span className="absolute left-4 top-4 text-[10px] tracking-[0.2em] uppercase text-white/80 bg-black/30 px-2 py-1 rounded">
                        Project Screen {imageIndex + 1}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
                  {project.images.map((_, dotIndex) => (
                    <span
                      key={dotIndex}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        activeSlides[cardIndex] === dotIndex
                          ? "w-5 bg-white"
                          : "w-2 bg-white/40"
                      }`}
                    />
                  ))}
                </div>
              </div>

              <div className="relative p-6 lg:p-7">
                <div className="flex items-center justify-between gap-3 mb-3">
                  <div className="flex items-center gap-3">
                    <span className="text-xl font-bold accent-text">{project.id}</span>
                    <h3 className="text-2xl font-semibold">{project.title}</h3>
                  </div>
                  <span className="text-xs uppercase tracking-[0.2em] muted-soft">
                    {project.year}
                  </span>
                </div>

                <p className="muted leading-relaxed mb-3">{project.summary}</p>
                <p className="text-sm text-white/90 mb-4">{project.impact}</p>

                <div className="flex flex-wrap gap-2 mb-5">
                  {project.stack.map((tag) => (
                    <span
                      key={tag}
                      className={`px-3 py-1 rounded-full border text-xs ${project.theme.chip}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="portfolio-btn portfolio-btn-primary"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.code}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="portfolio-btn portfolio-btn-secondary"
                  >
                    Source Code
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}