"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  Bot,
  BrainCircuit,
  FileText,
  ImagePlus,
  Mic,
  MicOff,
  Paperclip,
  Send,
  Sparkles,
  X,
  Zap,
} from "lucide-react";
import { FormEvent, useEffect, useMemo, useRef, useState } from "react";

type ChatMessage = {
  id: number;
  role: "assistant" | "user";
  text: string;
};

type SpeechRecognitionResultItem = {
  transcript: string;
};

type SpeechRecognitionResult = {
  0: SpeechRecognitionResultItem;
};

type SpeechRecognitionEvent = {
  results: {
    [index: number]: SpeechRecognitionResult;
    length: number;
  };
};

type SpeechRecognitionInstance = {
  continuous: boolean;
  interimResults: boolean;
  lang: string;
  start: () => void;
  stop: () => void;
  onresult: ((event: SpeechRecognitionEvent) => void) | null;
  onend: (() => void) | null;
  onerror: (() => void) | null;
};

type SpeechRecognitionConstructor = new () => SpeechRecognitionInstance;

type SpeechWindow = Window & {
  SpeechRecognition?: SpeechRecognitionConstructor;
  webkitSpeechRecognition?: SpeechRecognitionConstructor;
};

const promptCards = [
  { label: "About Me", prompt: "Tell me about Rohit", icon: Bot },
  { label: "My Projects", prompt: "Show me Rohit's best projects", icon: Zap },
  { label: "Skills", prompt: "What are Rohit's strongest skills?", icon: BrainCircuit },
  { label: "Tech Stack", prompt: "Summarize Rohit's tech stack", icon: Sparkles },
  { label: "Experience", prompt: "Tell me about Rohit's experience", icon: FileText },
  { label: "Resume", prompt: "How can I view Rohit's resume?", icon: FileText },
  { label: "Contact", prompt: "How can I contact Rohit?", icon: Send },
  { label: "AI Projects", prompt: "Tell me about Rohit's AI projects", icon: BrainCircuit },
  { label: "Achievements", prompt: "Show Rohit's achievements", icon: Sparkles },
];

const responseMap = [
  {
    keys: ["about", "rohit"],
    response:
      "Rohit is a full-stack developer who builds polished interfaces, scalable backend systems, AI workflows, and product-focused web experiences with a clean engineering mindset.",
  },
  {
    keys: ["project"],
    response:
      "You can explore Rohit's projects in the Projects section. The strongest ones highlight full-stack architecture, AI integrations, real-time systems, payments, auth, and production-ready UI.",
  },
  {
    keys: ["skill"],
    response:
      "Rohit's core strengths include React, Next.js, TypeScript, backend APIs, MongoDB, authentication, real-time features, AI integration, system design, and sharp UI implementation.",
  },
  {
    keys: ["tech", "stack"],
    response:
      "His portfolio stack leans modern: Next.js, React, TypeScript, Tailwind CSS, Framer Motion, Node-style APIs, MongoDB, AI tooling, and thoughtful frontend motion systems.",
  },
  {
    keys: ["experience"],
    response:
      "Rohit's experience is centered on building complete products: frontend polish, backend reliability, database design, integrations, and features that feel ready for real users.",
  },
  {
    keys: ["resume"],
    response:
      "For the resume, jump to the Contact section or use the portfolio links. A dedicated resume action can be connected here when the PDF path is ready.",
  },
  {
    keys: ["contact", "email", "hire"],
    response:
      "The fastest path is the Contact section. You can send a message there, or connect through GitHub, LinkedIn, and email links if they are configured on the site.",
  },
  {
    keys: ["ai"],
    response:
      "Rohit's AI work includes AI-assisted product features, RAG-style pipelines, LLM integrations, smart automation flows, and interfaces that make complex systems easier to use.",
  },
  {
    keys: ["achievement"],
    response:
      "His achievements section highlights college activities, delivered projects, technical growth, and the practical systems he has implemented across the portfolio.",
  },
];

const initialMessages: ChatMessage[] = [
  {
    id: 1,
    role: "assistant",
    text: "Hi, I am Rohit's AI portfolio assistant. Ask me about his projects, skills, experience, AI work, resume, or contact details.",
  },
];

function getDemoResponse(input: string) {
  const normalized = input.toLowerCase();
  const match = responseMap.find((item) => item.keys.some((key) => normalized.includes(key)));

  return (
    match?.response ??
    "Nice question. For this demo, I can guide you through Rohit's About, Projects, Skills, Tech Stack, Experience, Resume, Contact, AI Projects, and Achievements."
  );
}

export default function PortfolioChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>(initialMessages);
  const [input, setInput] = useState("");
  const [isThinking, setIsThinking] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [mouse, setMouse] = useState({ x: 78, y: 18 });
  const chatEndRef = useRef<HTMLDivElement | null>(null);
  const recognitionRef = useRef<SpeechRecognitionInstance | null>(null);

  const speechSupported = useMemo(() => {
    if (typeof window === "undefined") return false;
    const speechWindow = window as SpeechWindow;
    return Boolean(speechWindow.SpeechRecognition || speechWindow.webkitSpeechRecognition);
  }, []);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isThinking, isOpen]);

  useEffect(() => {
    return () => recognitionRef.current?.stop();
  }, []);

  const sendMessage = (text = input) => {
    const trimmed = text.trim();
    if (!trimmed || isThinking) return;

    const userMessage: ChatMessage = {
      id: Date.now(),
      role: "user",
      text: trimmed,
    };

    setMessages((current) => [...current, userMessage]);
    setInput("");
    setIsThinking(true);

    window.setTimeout(() => {
      setMessages((current) => [
        ...current,
        {
          id: Date.now() + 1,
          role: "assistant",
          text: getDemoResponse(trimmed),
        },
      ]);
      setIsThinking(false);
    }, 850);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    sendMessage();
  };

  const handlePromptClick = (prompt: string) => {
    setInput(prompt);
  };

  const toggleVoice = () => {
    if (!speechSupported || typeof window === "undefined") return;

    if (isListening) {
      recognitionRef.current?.stop();
      setIsListening(false);
      return;
    }

    const speechWindow = window as SpeechWindow;
    const Recognition = speechWindow.SpeechRecognition || speechWindow.webkitSpeechRecognition;
    if (!Recognition) return;

    const recognition = new Recognition();
    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.lang = "en-US";
    recognition.onresult = (event) => {
      const transcript = event.results[event.results.length - 1][0].transcript;
      setInput((current) => `${current}${current ? " " : ""}${transcript}`.trim());
    };
    recognition.onend = () => setIsListening(false);
    recognition.onerror = () => setIsListening(false);
    recognitionRef.current = recognition;
    setIsListening(true);
    recognition.start();
  };

  return (
    <div className="fixed bottom-5 right-5 z-[80] sm:bottom-7 sm:right-7">
      <AnimatePresence>
        {isOpen ? (
          <motion.aside
            key="chat-panel"
            initial={{ opacity: 0, scale: 0.78, y: 80, filter: "blur(14px)" }}
            animate={{ opacity: 1, scale: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, scale: 0.82, y: 72, filter: "blur(12px)" }}
            transition={{ type: "spring", stiffness: 210, damping: 22 }}
            onMouseMove={(event) => {
              const rect = event.currentTarget.getBoundingClientRect();
              setMouse({
                x: ((event.clientX - rect.left) / rect.width) * 100,
                y: ((event.clientY - rect.top) / rect.height) * 100,
              });
            }}
            className="chatbot-panel relative flex h-[min(78vh,46rem)] w-[calc(100vw-2.5rem)] max-w-[27rem] flex-col overflow-hidden rounded-2xl border border-cyan-200/20 bg-[#050a15]/82 text-white shadow-[0_24px_80px_rgba(0,0,0,0.55),0_0_54px_rgba(34,211,238,0.22)] backdrop-blur-2xl sm:h-[41rem]"
          >
            <div
              className="pointer-events-none absolute inset-0 opacity-80"
              style={{
                background: `radial-gradient(circle at ${mouse.x}% ${mouse.y}%, rgba(125,211,252,0.22), transparent 24%), linear-gradient(135deg, rgba(244,208,63,0.1), transparent 28%, rgba(74,140,229,0.12))`,
              }}
            />
            <div className="chatbot-grid pointer-events-none absolute inset-0 opacity-[0.18]" />
            <div className="chatbot-particles pointer-events-none absolute inset-0" />

            <header className="relative z-10 border-b border-white/10 bg-white/[0.03] px-4 py-4">
              <div className="flex items-center justify-between gap-3">
                <div className="flex min-w-0 items-center gap-3">
                  <motion.div
                    animate={{ rotate: 360, scale: [1, 1.06, 1] }}
                    transition={{ rotate: { duration: 8, repeat: Infinity, ease: "linear" }, scale: { duration: 2.8, repeat: Infinity } }}
                    className="relative grid h-12 w-12 shrink-0 place-items-center rounded-full border border-cyan-200/35 bg-gradient-to-br from-cyan-300 via-[#f4d03f] to-fuchsia-400 p-[2px] shadow-[0_0_28px_rgba(34,211,238,0.5)]"
                  >
                    <div className="grid h-full w-full place-items-center rounded-full bg-[#071121]">
                      <Bot className="h-6 w-6 text-cyan-100" />
                    </div>
                  </motion.div>
                  <div className="min-w-0">
                    <p className="truncate text-sm font-black uppercase tracking-[0.18em] text-cyan-50">
                      Portfolio AI
                    </p>
                    <div className="mt-1 flex items-center gap-2 text-xs text-emerald-200">
                      <span className="relative flex h-2 w-2">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-300 opacity-70" />
                        <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-300" />
                      </span>
                      Online now
                    </div>
                  </div>
                </div>

                <button
                  type="button"
                  aria-label="Close portfolio chatbot"
                  onClick={() => setIsOpen(false)}
                  className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-white/15 bg-white/10 text-white transition hover:rotate-90 hover:border-cyan-100/70 hover:bg-cyan-100/15"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            </header>

            <div className="relative z-10 flex min-h-0 flex-1 flex-col">
              <div className="chatbot-scroll min-h-0 flex-1 space-y-3 overflow-y-auto px-4 py-4">
                {messages.map((message) => (
                  <motion.div
                    key={message.id}
                    initial={{ opacity: 0, y: 18, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ type: "spring", stiffness: 260, damping: 20 }}
                    className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-[86%] rounded-2xl px-4 py-3 text-sm leading-relaxed shadow-lg ${
                        message.role === "user"
                          ? "rounded-br-sm border border-[#f4d03f]/35 bg-gradient-to-br from-[#f4d03f]/95 to-[#f8e58f]/90 text-[#081121]"
                          : "rounded-bl-sm border border-cyan-200/18 bg-white/[0.08] text-slate-100 backdrop-blur-md"
                      }`}
                    >
                      {message.text}
                    </div>
                  </motion.div>
                ))}

                {isThinking ? (
                  <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex justify-start"
                  >
                    <div className="flex items-center gap-2 rounded-2xl rounded-bl-sm border border-cyan-200/18 bg-white/[0.08] px-4 py-3 backdrop-blur-md">
                      <span className="chatbot-dot" />
                      <span className="chatbot-dot [animation-delay:140ms]" />
                      <span className="chatbot-dot [animation-delay:280ms]" />
                    </div>
                  </motion.div>
                ) : null}
                <div ref={chatEndRef} />
              </div>

              <div className="border-t border-white/10 bg-[#06101f]/72 px-4 py-3 backdrop-blur-xl">
                <div className="mb-3 flex gap-2 overflow-x-auto pb-1 chatbot-scroll">
                  {promptCards.map((card, index) => {
                    const Icon = card.icon;

                    return (
                      <motion.button
                        key={card.label}
                        type="button"
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.035 }}
                        whileHover={{ scale: 1.06, y: -3, rotate: index % 2 === 0 ? -1.5 : 1.5 }}
                        whileTap={{ scale: 0.96 }}
                        onClick={() => handlePromptClick(card.prompt)}
                        className="group inline-flex shrink-0 items-center gap-2 rounded-full border border-white/12 bg-white/[0.07] px-3 py-2 text-xs font-bold text-slate-100 shadow-[0_0_18px_rgba(34,211,238,0.08)] transition hover:border-[#f4d03f]/60 hover:bg-[#f4d03f]/12 hover:text-white"
                      >
                        <Icon className="h-3.5 w-3.5 text-cyan-200 transition group-hover:text-[#f4d03f]" />
                        {card.label}
                      </motion.button>
                    );
                  })}
                </div>

                <form onSubmit={handleSubmit} className="flex items-end gap-2">
                  <div className="flex min-h-12 flex-1 items-center gap-2 rounded-2xl border border-cyan-100/18 bg-white/[0.08] px-3 py-2 shadow-[inset_0_0_24px_rgba(34,211,238,0.05)] transition focus-within:border-[#f4d03f]/60 focus-within:shadow-[0_0_26px_rgba(244,208,63,0.16)]">
                    <button type="button" aria-label="Attach file demo" className="text-slate-300 transition hover:text-cyan-200">
                      <Paperclip className="h-4 w-4" />
                    </button>
                    <input
                      value={input}
                      onChange={(event) => setInput(event.target.value)}
                      placeholder="Ask about Rohit..."
                      className="min-w-0 flex-1 bg-transparent text-sm text-white outline-none placeholder:text-slate-400"
                    />
                    <button type="button" aria-label="Image upload demo" className="hidden text-slate-300 transition hover:text-cyan-200 sm:block">
                      <ImagePlus className="h-4 w-4" />
                    </button>
                    <button
                      type="button"
                      aria-label={speechSupported ? "Use voice input" : "Voice input not supported"}
                      onClick={toggleVoice}
                      disabled={!speechSupported}
                      className={`transition ${
                        isListening
                          ? "text-emerald-200 drop-shadow-[0_0_10px_rgba(110,231,183,0.8)]"
                          : "text-slate-300 hover:text-cyan-200 disabled:cursor-not-allowed disabled:text-slate-600"
                      }`}
                    >
                      {isListening ? <MicOff className="h-4 w-4" /> : <Mic className="h-4 w-4" />}
                    </button>
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.08, rotate: -4 }}
                    whileTap={{ scale: 0.92 }}
                    disabled={!input.trim() || isThinking}
                    className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-[#f4d03f] via-cyan-200 to-[#4a8ce5] text-[#06101f] shadow-[0_0_30px_rgba(34,211,238,0.28)] transition disabled:cursor-not-allowed disabled:grayscale"
                  >
                    <Send className="h-5 w-5" />
                  </motion.button>
                </form>
              </div>
            </div>
          </motion.aside>
        ) : null}
      </AnimatePresence>

      <AnimatePresence>
        {!isOpen ? (
          <motion.button
            key="chat-button"
            type="button"
            aria-label="Open portfolio AI chatbot"
            initial={{ opacity: 0, scale: 0.5, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.7, y: 24 }}
            whileHover={{ scale: 1.08, rotate: -3 }}
            whileTap={{ scale: 0.92 }}
            transition={{ type: "spring", stiffness: 260, damping: 18 }}
            onClick={() => setIsOpen(true)}
            className="chatbot-launch relative grid h-16 w-16 place-items-center rounded-full border border-cyan-100/30 bg-[#06101f]/88 text-white shadow-[0_0_34px_rgba(34,211,238,0.42),0_16px_44px_rgba(0,0,0,0.45)] backdrop-blur-xl sm:h-[4.5rem] sm:w-[4.5rem]"
          >
            <span className="absolute inset-[-7px] rounded-full border border-[#f4d03f]/30" />
            <span className="absolute inset-[-14px] rounded-full border border-cyan-200/15" />
            <motion.span
              animate={{ rotate: 360 }}
              transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 rounded-full bg-[conic-gradient(from_0deg,rgba(34,211,238,0.1),rgba(244,208,63,0.65),rgba(244,114,182,0.55),rgba(34,211,238,0.8),rgba(34,211,238,0.1))] p-[2px]"
            />
            <span className="relative grid h-[calc(100%-4px)] w-[calc(100%-4px)] place-items-center rounded-full bg-[#071121]">
              <Bot className="h-7 w-7 text-cyan-100" />
              <Sparkles className="absolute right-3 top-3 h-3.5 w-3.5 text-[#f4d03f]" />
            </span>
          </motion.button>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
