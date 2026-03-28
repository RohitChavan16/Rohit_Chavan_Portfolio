export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen pt-28 pb-16 px-[8%] flex flex-col lg:flex-row items-center justify-between gap-12 relative"
    >
      <div className="absolute top-24 left-0 w-40 h-40 rounded-full bg-[#f4d03f]/20 blur-3xl pointer-events-none" />
      <div className="absolute bottom-16 right-10 w-44 h-44 rounded-full bg-[#4a8ce5]/25 blur-3xl pointer-events-none" />

      <div className="max-w-2xl reveal-up">
        <p className="section-label mb-4">Rohit Chavan | Full Stack Developer</p>

        <h1 className="text-5xl lg:text-7xl font-extrabold leading-[1.05] mb-6">
          Building high-impact
          <span className="block accent-text">web products</span>
          with clean systems.
        </h1>

        <p className="muted text-lg leading-relaxed mb-10 max-w-xl">
          I craft responsive apps with Next.js, TypeScript, and Node.js, focused on
          performance, reliability, and polished UI. From idea to launch, I enjoy
          turning product vision into practical, scalable software.
        </p>

        <div className="flex flex-wrap gap-4">
          <a href="#projects" className="portfolio-btn portfolio-btn-primary">
            View Projects
          </a>
          <a href="#contact" className="portfolio-btn portfolio-btn-secondary">
            Start a Conversation
          </a>
        </div>

        <div className="mt-10 grid grid-cols-3 max-w-lg gap-4">
          {[
            { value: "15+", label: "Production Projects" },
            { value: "4+", label: "Years Building" },
            { value: "99%", label: "Delivery Commitment" },
          ].map((item) => (
            <div key={item.label} className="section-shell rounded-xl px-4 py-3">
              <p className="accent-text text-xl font-bold">{item.value}</p>
              <p className="muted-soft text-xs">{item.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="relative float-card">
        <div className="w-[320px] h-[320px] lg:w-[380px] lg:h-[380px] rounded-full border border-white/20 bg-gradient-to-br from-[#f4d03f]/25 via-[#89b2f5]/18 to-[#0f2342] flex items-center justify-center">
          <div className="w-[280px] h-[280px] lg:w-[330px] lg:h-[330px] rounded-full bg-[#0a1324]/90 border border-white/20 flex flex-col items-center justify-center text-center p-8">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#f4d03f] to-[#f8e58f] text-[#081121] font-black text-2xl grid place-items-center mb-5">
              RC
            </div>
            <p className="text-xl font-semibold">Engineer + Designer Mindset</p>
            <p className="muted text-sm mt-2">
              Product thinking, scalable architecture, and expressive interface design.
            </p>
          </div>
        </div>
        <div className="absolute -inset-6 border border-[#f4d03f]/30 rounded-full decor-ring" />
        <div className="absolute inset-[-36px] border border-white/15 rounded-full decor-spin" />
      </div>
    </section>
  );
}
