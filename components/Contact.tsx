"use client";

import { FormEvent, useState } from "react";
import { Github, Linkedin, Mail, Send, Sparkles } from "lucide-react";
import { toast } from "react-hot-toast";

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
  linkedinUrl: string;
  projectType: string;
  message: string;
};

const initialFormState: ContactFormState = {
  name: "",
  email: "",
  linkedinUrl: "",
  projectType: "",
  message: "",
};

type LabeledInputProps = {
  name: keyof ContactFormState;
  label: string;
  type?: string;
  required?: boolean;
  isTextArea?: boolean;
  value: string;
  isFocused: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onFocus: () => void;
  onBlur: () => void;
};

const LabeledInput = ({
  name,
  label,
  type = "text",
  required = false,
  isTextArea = false,
  value,
  isFocused,
  onChange,
  onFocus,
  onBlur,
}: LabeledInputProps) => {
  return (
    <div className="relative group z-10 w-full flex flex-col gap-1.5">
      <label className="text-sm font-semibold text-slate-300 ml-1 cursor-pointer" htmlFor={name}>
        {label} {required && <span className="text-pink-500">*</span>}
      </label>
      <div className="relative rounded-xl bg-[#050b14]/80 backdrop-blur-md overflow-hidden border border-white/15 focus-within:border-cyan-400/60 focus-within:shadow-[0_0_20px_2px_rgba(34,211,238,0.25)] transition-all duration-300">
        {isTextArea ? (
          <textarea
            id={name}
            required={required}
            rows={4}
            value={value}
            onFocus={onFocus}
            onBlur={onBlur}
            onChange={onChange}
            className="w-full bg-transparent px-5 py-4 text-sm text-white outline-none resize-none z-10 relative"
          />
        ) : (
          <input
            id={name}
            type={type}
            required={required}
            value={value}
            onFocus={onFocus}
            onBlur={onBlur}
            onChange={onChange}
            className="w-full bg-transparent px-5 py-4 text-sm text-white outline-none z-10 relative h-12"
          />
        )}
        
        {/* Static Glow inside input on focus via CSS */}
        {isFocused && (
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 pointer-events-none z-0" />
        )}
      </div>
    </div>
  );
};

export default function Contact() {
  const [formData, setFormData] = useState<ContactFormState>(initialFormState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [sent, setSent] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setIsSubmitting(true);

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
      toast.success("Message Transmitted Successfully!");
    } catch (submitError) {
      const message =
        submitError instanceof Error ? submitError.message : "Failed to send message.";
      toast.error(message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="px-4 py-12 md:px-[8%] md:py-24">
      <div className="section-shell rounded-3xl p-8 lg:p-12 relative overflow-hidden">
        {/* Subtle glow matching other sections */}
        <div className="absolute -top-16 -right-16 w-56 h-56 rounded-full bg-[#f4d03f]/12 blur-3xl pointer-events-none" />

        <div className="flex items-center gap-4 mb-8">
          <span className="section-label">05 Contact</span>
          <div className="h-px flex-1 bg-white/15" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-12 relative z-10">
          
          {/* Left Column: Info & Socials */}
          <div className="flex flex-col justify-between">
            <div>
              <h2 className="text-4xl md:text-5xl font-black text-white leading-tight mb-6">
                Let&apos;s build something <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-fuchsia-500 animate-gradient-x">
                  extraordinary.
                </span>
              </h2>
              
              {/* Description */}
              <div className="text-slate-300 mb-10 text-sm leading-relaxed max-w-md">
                <p>
                  Whether it&apos;s a scalable backend, an AI integration, or a beautifully crafted UI—I&apos;m ready to bring your ideas to life. Fill out the form, and I&apos;ll get back to you within 24 hours.
                </p>
              </div>

              <div className="space-y-4">
                {socials.map((item, i) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-5 p-3 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] hover:border-cyan-500/30 transition-all duration-300"
                  >
                    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl border border-white/10 bg-black/20 text-cyan-400 transition-transform duration-300 group-hover:scale-110 group-hover:bg-cyan-500/10 group-hover:border-cyan-500/40 group-hover:shadow-[0_0_15px_rgba(34,211,238,0.3)]">
                      <item.icon size={22} strokeWidth={2} aria-hidden="true" />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-[11px] font-bold uppercase tracking-widest text-slate-500 group-hover:text-cyan-400 transition-colors">
                        {item.label}
                      </span>
                      <span className="mt-1 block truncate text-sm text-slate-200 group-hover:text-white transition-colors">{item.handle}</span>
                    </span>
                  </a>
                ))}
              </div>
            </div>
            
            {/* Decorative element removed as requested */}
          </div>

          {/* Right Column: Form */}
          <div className="relative section-shell rounded-2xl p-6 lg:p-8">

              {sent ? (
                <div 
                  className="h-full min-h-[400px] flex flex-col items-center justify-center text-center relative z-10"
                >
                  <div 
                    className="w-20 h-20 rounded-full bg-gradient-to-tr from-cyan-400 to-blue-500 text-white grid place-items-center shadow-[0_0_30px_rgba(34,211,238,0.5)] mb-6"
                  >
                    <Send size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Message Transmitted</h3>
                  <p className="text-slate-400 mt-3 max-w-xs">I&apos;ve received your message and will initialize contact shortly.</p>
                  <button
                    className="mt-8 px-8 py-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 text-white text-sm font-semibold transition-colors cursor-pointer"
                    onClick={() => setSent(false)}
                  >
                    Send Another
                  </button>
                </div>
              ) : (
                <form className="space-y-5 relative z-10" onSubmit={handleSubmit}>
                  <div className="flex items-center gap-2 mb-6">
                    <Sparkles className="text-fuchsia-400" size={20} />
                    <h3 className="text-lg font-semibold text-white">Initialize Communication</h3>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <LabeledInput 
                      name="name" 
                      label="Your Name" 
                      required 
                      value={formData.name}
                      isFocused={focusedField === "name"}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      onFocus={() => setFocusedField("name")}
                      onBlur={() => setFocusedField(null)}
                    />
                    <LabeledInput 
                      name="email" 
                      label="Your Email" 
                      type="email" 
                      required 
                      value={formData.email}
                      isFocused={focusedField === "email"}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      onFocus={() => setFocusedField("email")}
                      onBlur={() => setFocusedField(null)}
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <LabeledInput 
                      name="linkedinUrl" 
                      label="LinkedIn URL (Optional)" 
                      type="url" 
                      value={formData.linkedinUrl}
                      isFocused={focusedField === "linkedinUrl"}
                      onChange={(e) => setFormData({ ...formData, linkedinUrl: e.target.value })}
                      onFocus={() => setFocusedField("linkedinUrl")}
                      onBlur={() => setFocusedField(null)}
                    />
                    <LabeledInput 
                      name="projectType" 
                      label="Project Type / Reason" 
                      value={formData.projectType}
                      isFocused={focusedField === "projectType"}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      onFocus={() => setFocusedField("projectType")}
                      onBlur={() => setFocusedField(null)}
                    />
                  </div>

                  <LabeledInput 
                    name="message" 
                    label="How can I help you?" 
                    isTextArea 
                    required 
                    value={formData.message}
                    isFocused={focusedField === "message"}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    onFocus={() => setFocusedField("message")}
                    onBlur={() => setFocusedField(null)}
                  />

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full relative group overflow-hidden rounded-xl bg-[#f4d03f] p-[1px] mt-6 disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer"
                  >
                    <div className="relative flex items-center justify-center gap-2 rounded-xl bg-[#f4d03f] px-8 py-4 transition-colors duration-300 hover:bg-[#e0be33]">
                      <span className="font-bold text-[#081121] tracking-wide">
                        {isSubmitting ? "Sending..." : "Send Message"}
                      </span>
                      <Send size={18} className="text-[#081121]" />
                    </div>
                  </button>
                </form>
              )}
          </div>
        </div>
      </div>
    </section>
  );
}
