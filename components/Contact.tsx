"use client";

import { useState } from "react";

const socials = [
  { label: "GitHub", handle: "github.com/RohitChavan16", href: "https://github.com/RohitChavan16" },
  { label: "LinkedIn", handle: "linkedin.com/in/rohit-chavan16", href: "https://linkedin.com/in/rohit-chavan16" },
  { label: "Email", handle: "approachrohit16@gmail.com", href: "mailto:approachrohit16@gmail.com" },
];

export default function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <section id="contact" className="px-[8%] py-24">
      <div className="section-shell rounded-3xl p-8 lg:p-12 relative overflow-hidden">
        <div className="absolute -top-16 -right-16 w-56 h-56 rounded-full bg-[#f4d03f]/12 blur-3xl pointer-events-none" />

        <div className="flex items-center gap-4 mb-8">
          <span className="section-label">05 Contact</span>
          <div className="h-px flex-1 bg-white/15" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 relative z-10">
          <div>
            <h2 className="section-title">
              Let's build something
              <span className="block accent-text">useful and beautiful</span>
            </h2>
            <p className="muted mt-5 leading-relaxed max-w-md">
              If you have a project, idea, or role where I can contribute, send a
              message. I usually respond within one day.
            </p>

            <div className="mt-10 space-y-4">
              {socials.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block border-b border-white/15 pb-3 hover:border-[#f4d03f]/60 transition"
                >
                  <p className="text-xs uppercase tracking-[0.2em] muted-soft">{item.label}</p>
                  <p className="text-sm mt-1">{item.handle}</p>
                </a>
              ))}
            </div>
          </div>

          <div className="section-shell rounded-2xl p-6">
            {sent ? (
              <div className="h-full min-h-[280px] flex flex-col items-center justify-center text-center">
                <div className="w-14 h-14 rounded-full bg-[#f4d03f] text-[#081121] grid place-items-center text-2xl font-black">
                  ✓
                </div>
                <p className="text-xl font-semibold mt-4">Message queued.</p>
                <p className="muted mt-2">Thanks for reaching out. I will connect soon.</p>
                <button
                  className="portfolio-btn portfolio-btn-secondary mt-5"
                  onClick={() => setSent(false)}
                >
                  Send Another
                </button>
              </div>
            ) : (
              <form
                className="space-y-4"
                onSubmit={(event) => {
                  event.preventDefault();
                  setSent(true);
                }}
              >
                <input
                  required
                  placeholder="Your name"
                  className="w-full rounded-xl border border-white/15 bg-[#081224]/90 px-4 py-3 outline-none focus:border-[#f4d03f]/70"
                />
                <input
                  required
                  type="email"
                  placeholder="Your email"
                  className="w-full rounded-xl border border-white/15 bg-[#081224]/90 px-4 py-3 outline-none focus:border-[#f4d03f]/70"
                />
                <input
                  placeholder="Project type"
                  className="w-full rounded-xl border border-white/15 bg-[#081224]/90 px-4 py-3 outline-none focus:border-[#f4d03f]/70"
                />
                <textarea
                  required
                  rows={5}
                  placeholder="What are you trying to build?"
                  className="w-full rounded-xl border border-white/15 bg-[#081224]/90 px-4 py-3 outline-none focus:border-[#f4d03f]/70 resize-none"
                />
                <button type="submit" className="w-full portfolio-btn portfolio-btn-primary">
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
