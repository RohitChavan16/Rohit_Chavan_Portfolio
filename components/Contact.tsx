"use client";

import { useState } from "react";

const socials = [
  { label: "GitHub", handle: "@alexrivera", href: "https://github.com" },
  { label: "LinkedIn", handle: "in/alexrivera", href: "https://linkedin.com" },
  { label: "Twitter", handle: "@alexrivera_dev", href: "https://twitter.com" },
  { label: "Email", handle: "alex@alexrivera.dev", href: "mailto:alex@alexrivera.dev" },
];

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    project: "",
    message: "",
  });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setFormState({ name: "", email: "", project: "", message: "" });
  };

  return (
    <section id="contact" className="bg-[#0a0a0a] py-32 relative overflow-hidden">
      {/* Large decorative text */}
      <div
        className="absolute bottom-0 left-0 right-0 text-center leading-none select-none pointer-events-none overflow-hidden"
        style={{
          fontFamily: "'Bebas Neue', sans-serif",
          fontSize: "clamp(60px, 15vw, 200px)",
          color: "#0f0f0f",
          letterSpacing: "0.05em",
        }}
      >
        CONTACT
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        {/* Section label */}
        <div className="flex items-center gap-3 mb-20">
          <span className="text-[#e8ff47] font-mono text-xs tracking-[0.3em] uppercase">
            05 — Contact
          </span>
          <div className="flex-1 h-[1px] bg-[#1a1a1a]" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Left */}
          <div className="flex flex-col justify-between">
            <div>
              <h2
                className="text-5xl lg:text-7xl font-black text-white leading-none uppercase mb-8"
                style={{ fontFamily: "'Bebas Neue', sans-serif" }}
              >
                Let's Build <br />
                Something <span className="text-[#e8ff47]">Great.</span>
              </h2>
              <p className="text-[#555] text-base leading-relaxed max-w-md">
                Have a project in mind? Looking to bring on a developer? Or just
                want to chat about tech? My inbox is always open.
              </p>
            </div>

            {/* Socials */}
            <div className="mt-16 flex flex-col gap-4">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between border-b border-[#1a1a1a] pb-4 hover:border-[#333] transition-colors duration-200"
                >
                  <div className="flex items-center gap-4">
                    <span className="text-[#333] text-xs font-mono uppercase tracking-widest w-16">
                      {s.label}
                    </span>
                    <span className="text-[#555] text-sm group-hover:text-white transition-colors duration-200">
                      {s.handle}
                    </span>
                  </div>
                  <span className="text-[#333] group-hover:text-[#e8ff47] group-hover:translate-x-1 transition-all duration-200">
                    →
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Right: Form */}
          <div className="border border-[#1a1a1a] p-8 bg-[#0d0d0d] relative">
            <div className="absolute top-0 right-0 w-16 h-[2px] bg-[#e8ff47]" />

            {sent ? (
              <div className="flex flex-col items-center justify-center h-full gap-4 py-16">
                <div className="w-12 h-12 rounded-full border-2 border-[#e8ff47] flex items-center justify-center">
                  <span className="text-[#e8ff47] text-xl">✓</span>
                </div>
                <p className="text-white font-bold text-lg">Message Sent!</p>
                <p className="text-[#555] text-sm">
                  I'll get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[#333] text-xs font-mono uppercase tracking-widest mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      value={formState.name}
                      onChange={(e) =>
                        setFormState({ ...formState, name: e.target.value })
                      }
                      placeholder="John Doe"
                      required
                      className="w-full bg-[#0a0a0a] border border-[#1a1a1a] text-white text-sm px-4 py-3 outline-none focus:border-[#e8ff47]/50 transition-colors duration-200 placeholder:text-[#2a2a2a]"
                    />
                  </div>
                  <div>
                    <label className="block text-[#333] text-xs font-mono uppercase tracking-widest mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      value={formState.email}
                      onChange={(e) =>
                        setFormState({ ...formState, email: e.target.value })
                      }
                      placeholder="you@company.com"
                      required
                      className="w-full bg-[#0a0a0a] border border-[#1a1a1a] text-white text-sm px-4 py-3 outline-none focus:border-[#e8ff47]/50 transition-colors duration-200 placeholder:text-[#2a2a2a]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[#333] text-xs font-mono uppercase tracking-widest mb-2">
                    Project Type
                  </label>
                  <select
                    value={formState.project}
                    onChange={(e) =>
                      setFormState({ ...formState, project: e.target.value })
                    }
                    required
                    className="w-full bg-[#0a0a0a] border border-[#1a1a1a] text-[#888] text-sm px-4 py-3 outline-none focus:border-[#e8ff47]/50 transition-colors duration-200"
                  >
                    <option value="" disabled>
                      Select a project type
                    </option>
                    <option value="web">Web Application</option>
                    <option value="api">API / Backend</option>
                    <option value="fullstack">Full Stack Project</option>
                    <option value="consulting">Consulting</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[#333] text-xs font-mono uppercase tracking-widest mb-2">
                    Message
                  </label>
                  <textarea
                    value={formState.message}
                    onChange={(e) =>
                      setFormState({ ...formState, message: e.target.value })
                    }
                    placeholder="Tell me about your project..."
                    required
                    rows={5}
                    className="w-full bg-[#0a0a0a] border border-[#1a1a1a] text-white text-sm px-4 py-3 outline-none focus:border-[#e8ff47]/50 transition-colors duration-200 placeholder:text-[#2a2a2a] resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="group w-full bg-[#e8ff47] text-black text-xs font-black uppercase tracking-widest py-4 hover:bg-white transition-colors duration-200 flex items-center justify-center gap-2"
                >
                  Send Message
                  <span className="group-hover:translate-x-1 transition-transform duration-200">
                    →
                  </span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}