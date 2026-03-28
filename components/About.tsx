"use client";

export default function About() {
  return (
    <section id="about" className="px-[8%] py-24">
      <div className="section-shell rounded-3xl p-8 lg:p-12">
        <div className="flex items-center gap-4 mb-8">
          <span className="section-label">01 About</span>
          <div className="h-px flex-1 bg-white/15" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="relative">
            <div className="rounded-3xl border border-white/20 bg-[var(--surface-strong)] p-8">
              <p className="text-sm uppercase tracking-[0.25em] accent-text mb-5">
                Snapshot
              </p>
              <h2 className="section-title mb-4">
                I build robust apps with
                <span className="block accent-text">speed and quality.</span>
              </h2>
              <p className="muted leading-relaxed">
                I am a full stack developer focused on product-driven engineering. My
                approach blends thoughtful UX, scalable backend architecture, and
                maintainable code quality so products stay fast as they grow.
              </p>
            </div>
            <div className="absolute -bottom-5 -right-5 section-shell rounded-2xl px-5 py-4">
              <p className="text-xs uppercase tracking-[0.24em] muted-soft">Current Focus</p>
              <p className="text-sm font-semibold mt-1">Next.js, APIs, and AI-enabled UX</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              { label: "Location", value: "Pune, India" },
              { label: "Degree", value: "B.Tech ENTC (COEP)" },
              { label: "Preferred Role", value: "Full Stack Engineer" },
              { label: "Availability", value: "Freelance + Full-time" },
            ].map((item) => (
              <div key={item.label} className="section-shell rounded-2xl p-5">
                <p className="text-xs uppercase tracking-[0.2em] muted-soft mb-2">{item.label}</p>
                <p className="font-medium">{item.value}</p>
              </div>
            ))}

            <div className="col-span-2 section-shell rounded-2xl p-5">
              <p className="text-xs uppercase tracking-[0.2em] muted-soft mb-2">
                Collaboration Style
              </p>
              <p className="muted">
                Communicative, deadline-conscious, and architecture-first. I like clear
                product outcomes, measurable milestones, and strong code reviews.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
