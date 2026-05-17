"use client";

import { FormEvent, useState } from "react";
import { Github, Linkedin, Mail } from "lucide-react";

const socials = [
  {
    label: "GitHub",
    handle: "github.com/RohitChavan16",
    href: "https://github.com/RohitChavan16",
    icon: Github,
  },
  {
    label: "LinkedIn",
    handle: "linkedin.com/in/rohit-chavan16",
    href: "https://linkedin.com/in/rohit-chavan16",
    icon: Linkedin,
  },
  {
    label: "Email",
    handle: "approachrohit16@gmail.com",
    href: "mailto:approachrohit16@gmail.com",
    icon: Mail,
  },
];

type ContactFormState = {
  name: string;
  email: string;
  projectType: string;
  message: string;
};

const initialFormState: ContactFormState = {
  name: "",
  email: "",
  projectType: "",
  message: "",
};

export default function Contact() {
  const [formData, setFormData] = useState<ContactFormState>(initialFormState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setIsSubmitting(true);
    setError("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const payload = (await response.json()) as { message?: string };

      if (!response.ok) {
        throw new Error(payload.message || "Failed to send message.");
      }

      setSent(true);
      setFormData(initialFormState);
    } catch (submitError) {
      const message =
        submitError instanceof Error ? submitError.message : "Failed to send message.";
      setError(message);
    } finally {
      setIsSubmitting(false);
    }
  };

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
              Let&apos;s build something
              <span className="block accent-text">useful and beautiful</span>
            </h2>
            <p className="muted mt-5 leading-relaxed max-w-md">
              If you have a project, idea, or role where I can contribute, send a message. I
              usually respond within one day.
            </p>

            <div className="mt-10 space-y-4">
              {socials.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 border-b border-white/15 pb-3 transition hover:border-[#f4d03f]/60"
                >
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-white/15 bg-white/5 text-[#f4d03f] transition group-hover:border-[#f4d03f]/60 group-hover:bg-[#f4d03f]/10">
                    <item.icon size={20} strokeWidth={2.2} aria-hidden="true" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-xs uppercase tracking-[0.2em] muted-soft">
                      {item.label}
                    </span>
                    <span className="mt-1 block truncate text-sm">{item.handle}</span>
                  </span>
                </a>
              ))}
            </div>
          </div>

          <div className="section-shell rounded-2xl p-6">
            {sent ? (
              <div className="h-full min-h-[280px] flex flex-col items-center justify-center text-center">
                <div className="w-14 h-14 rounded-full bg-[#f4d03f] text-[#081121] grid place-items-center text-xs font-black tracking-[0.12em]">
                  SENT
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
              <form className="space-y-4" onSubmit={handleSubmit}>
                <input
                  required
                  value={formData.name}
                  onChange={(event) =>
                    setFormData((previous) => ({ ...previous, name: event.target.value }))
                  }
                  placeholder="Your name"
                  className="w-full rounded-xl border border-white/15 bg-[#081224]/90 px-4 py-3 outline-none focus:border-[#f4d03f]/70"
                />
                <input
                  required
                  type="email"
                  value={formData.email}
                  onChange={(event) =>
                    setFormData((previous) => ({ ...previous, email: event.target.value }))
                  }
                  placeholder="Your email"
                  className="w-full rounded-xl border border-white/15 bg-[#081224]/90 px-4 py-3 outline-none focus:border-[#f4d03f]/70"
                />
                <input
                  value={formData.projectType}
                  onChange={(event) =>
                    setFormData((previous) => ({ ...previous, projectType: event.target.value }))
                  }
                  placeholder="Project type"
                  className="w-full rounded-xl border border-white/15 bg-[#081224]/90 px-4 py-3 outline-none focus:border-[#f4d03f]/70"
                />
                <textarea
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(event) =>
                    setFormData((previous) => ({ ...previous, message: event.target.value }))
                  }
                  placeholder="What are you trying to build?"
                  className="w-full rounded-xl border border-white/15 bg-[#081224]/90 px-4 py-3 outline-none focus:border-[#f4d03f]/70 resize-none"
                />

                {error ? (
                  <p className="text-sm text-red-300" role="alert">
                    {error}
                  </p>
                ) : null}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full portfolio-btn portfolio-btn-primary disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
