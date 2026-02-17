"use client";

import { useEffect, useRef, useState } from "react";

type Particle = {
  id: number;
  x: number;
  y: number;
  size: number;
  color: string;
  speedX: number;
  speedY: number;
  opacity: number;
  pulseDelay: string;
  pulseSpeed: string;
  twinkleClass: string;
};

type ShootingStar = {
  id: number;
  x: number;
  y: number;
  angle: number;
  delay: string;
  duration: string;
  width: number;
};

type Nebula = {
  id: number;
  x: number;
  y: number;
  size: number;
  color: string;
  blur: number;
  opacity: number;
};

export default function BackgroundDots() {
  const [particles, setParticles] = useState<Particle[]>([]);
  const [shootingStars, setShootingStars] = useState<ShootingStar[]>([]);
  const [nebulae, setNebulae] = useState<Nebula[]>([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    // Deep cosmic palette matching dark blue/black/violet
    const starColors = [
      "#e2e8ff", // cool white
      "#b8c8ff", // pale blue-white
      "#a78bfa", // violet
      "#818cf8", // indigo
      "#60a5fa", // blue
      "#c4b5fd", // soft lavender
      "#f0f4ff", // near white
    ];

    const twinkleClasses = [
      "twinkle-a",
      "twinkle-b",
      "twinkle-c",
      "twinkle-d",
    ];

    const newParticles: Particle[] = Array.from({ length: 120 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() < 0.15 ? Math.random() * 3 + 2.5 : Math.random() * 1.8 + 0.4,
      color: starColors[Math.floor(Math.random() * starColors.length)],
      speedX: (Math.random() - 0.5) * 0.015,
      speedY: (Math.random() - 0.5) * 0.015,
      opacity: Math.random() * 0.6 + 0.3,
      pulseDelay: `${(Math.random() * 8).toFixed(2)}s`,
      pulseSpeed: `${(Math.random() * 4 + 2).toFixed(2)}s`,
      twinkleClass: twinkleClasses[Math.floor(Math.random() * twinkleClasses.length)],
    }));

    // Shooting stars
    const newShootingStars: ShootingStar[] = Array.from({ length: 8 }).map((_, i) => ({
      id: i,
      x: Math.random() * 80 + 5,
      y: Math.random() * 40,
      angle: Math.random() * 30 + 20,
      delay: `${(i * 3.5 + Math.random() * 4).toFixed(2)}s`,
      duration: `${(Math.random() * 1.5 + 1).toFixed(2)}s`,
      width: Math.random() * 80 + 60,
    }));

    // Nebula glow clouds
    const nebulaColors = [
      "rgba(139, 92, 246, 0.08)",   // violet
      "rgba(67, 56, 202, 0.10)",    // indigo
      "rgba(30, 27, 75, 0.15)",     // deep violet
      "rgba(15, 23, 78, 0.12)",     // deep blue
      "rgba(109, 40, 217, 0.07)",   // purple
    ];

    const newNebulae: Nebula[] = Array.from({ length: 5 }).map((_, i) => ({
      id: i,
      x: Math.random() * 80 + 10,
      y: Math.random() * 80 + 10,
      size: Math.random() * 400 + 250,
      color: nebulaColors[i],
      blur: Math.random() * 60 + 80,
      opacity: 1,
    }));

    setParticles(newParticles);
    setShootingStars(newShootingStars);
    setNebulae(newNebulae);
  }, []);

  if (!mounted) return null;

  return (
    <>
      <style>{`
        @keyframes twinkle-a {
          0%, 100% { opacity: 0.9; transform: scale(1); }
          33% { opacity: 0.2; transform: scale(0.6); }
          66% { opacity: 0.7; transform: scale(1.1); }
        }
        @keyframes twinkle-b {
          0%, 100% { opacity: 0.5; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.4); }
        }
        @keyframes twinkle-c {
          0% { opacity: 0.8; transform: scale(1); }
          25% { opacity: 0.1; transform: scale(0.5); }
          75% { opacity: 0.9; transform: scale(1.2); }
          100% { opacity: 0.8; transform: scale(1); }
        }
        @keyframes twinkle-d {
          0%, 100% { opacity: 0.3; transform: scale(0.8); }
          60% { opacity: 1; transform: scale(1.3); }
        }
        @keyframes shootingstar {
          0% {
            opacity: 0;
            transform: translateX(0) translateY(0) scaleX(0.1);
          }
          10% {
            opacity: 1;
          }
          80% {
            opacity: 0.8;
          }
          100% {
            opacity: 0;
            transform: translateX(280px) translateY(140px) scaleX(1);
          }
        }
        @keyframes nebuladrift {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(15px, -10px) scale(1.03); }
          66% { transform: translate(-10px, 12px) scale(0.97); }
        }
        @keyframes orbitglow {
          0%, 100% { opacity: 0.6; transform: scale(1) rotate(0deg); }
          50% { opacity: 1; transform: scale(1.15) rotate(180deg); }
        }
        @keyframes horizonpulse {
          0%, 100% { opacity: 0.4; transform: scaleX(1); }
          50% { opacity: 0.7; transform: scaleX(1.02); }
        }

        .twinkle-a { animation: twinkle-a var(--speed) var(--delay) infinite ease-in-out; }
        .twinkle-b { animation: twinkle-b var(--speed) var(--delay) infinite ease-in-out; }
        .twinkle-c { animation: twinkle-c var(--speed) var(--delay) infinite ease-in-out; }
        .twinkle-d { animation: twinkle-d var(--speed) var(--delay) infinite ease-in-out; }

        .shooting-star {
          animation: shootingstar var(--duration) var(--delay) infinite linear;
        }

        .nebula-drift {
          animation: nebuladrift 18s ease-in-out infinite;
        }

        .orbit-glow {
          animation: orbitglow 12s ease-in-out infinite;
        }

        .horizon-pulse {
          animation: horizonpulse 8s ease-in-out infinite;
        }
      `}</style>

      <div className="fixed inset-0 overflow-hidden" style={{ zIndex: -10 }}>

        {/* Base gradient: dark blue → black → deep violet */}
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse 80% 50% at 20% 10%, #0d0a2e 0%, transparent 60%),
              radial-gradient(ellipse 60% 40% at 80% 80%, #110733 0%, transparent 55%),
              radial-gradient(ellipse 100% 80% at 50% 50%, #050510 0%, #000005 100%)
            `,
          }}
        />

        {/* Deep horizon aurora glow at bottom */}
        <div
          className="absolute bottom-0 left-0 right-0 horizon-pulse"
          style={{
            height: "35%",
            background:
              "linear-gradient(to top, rgba(79,42,180,0.18) 0%, rgba(49,27,130,0.10) 40%, transparent 100%)",
            filter: "blur(30px)",
          }}
        />

        {/* Top ethereal glow */}
        <div
          className="absolute top-0 left-0 right-0"
          style={{
            height: "30%",
            background:
              "linear-gradient(to bottom, rgba(30,15,80,0.25) 0%, transparent 100%)",
            filter: "blur(20px)",
          }}
        />

        {/* Nebula cloud layers */}
        {nebulae.map((n, i) => (
          <div
            key={n.id}
            className="absolute rounded-full nebula-drift"
            style={{
              left: `${n.x}%`,
              top: `${n.y}%`,
              width: n.size,
              height: n.size * 0.6,
              background: n.color,
              filter: `blur(${n.blur}px)`,
              transform: "translate(-50%, -50%)",
              animationDelay: `${i * 3.7}s`,
              animationDuration: `${18 + i * 2.5}s`,
            }}
          />
        ))}

        {/* Subtle grid / star field vignette overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 100% 100% at 50% 50%, transparent 50%, rgba(0,0,5,0.55) 100%)",
          }}
        />

        {/* Stars / particles */}
        {particles.map((p) => {
          const isLarge = p.size > 2.5;
          return (
            <span
              key={p.id}
              className={`absolute rounded-full ${p.twinkleClass}`}
              style={
                {
                  left: `${p.x}%`,
                  top: `${p.y}%`,
                  width: p.size,
                  height: p.size,
                  backgroundColor: p.color,
                  boxShadow: isLarge
                    ? `0 0 ${p.size * 3}px ${p.size}px ${p.color}88, 0 0 ${p.size * 6}px ${p.size * 0.5}px ${p.color}33`
                    : `0 0 ${p.size * 2}px ${p.color}66`,
                  "--delay": p.pulseDelay,
                  "--speed": p.pulseSpeed,
                } as React.CSSProperties
              }
            />
          );
        })}

        {/* Shooting stars */}
        {shootingStars.map((s) => (
          <div
            key={s.id}
            className="absolute shooting-star"
            style={
              {
                left: `${s.x}%`,
                top: `${s.y}%`,
                transform: `rotate(${s.angle}deg)`,
                "--delay": s.delay,
                "--duration": s.duration,
                transformOrigin: "left center",
              } as React.CSSProperties
            }
          >
            <div
              style={{
                width: s.width,
                height: 1.5,
                background:
                  "linear-gradient(to right, transparent, rgba(200,210,255,0.9) 30%, rgba(255,255,255,1) 70%, transparent)",
                borderRadius: 4,
                boxShadow:
                  "0 0 6px 1px rgba(180,200,255,0.6), 0 0 12px 2px rgba(140,160,255,0.3)",
              }}
            />
          </div>
        ))}

        {/* Central subtle orbit ring */}
        <div
          className="absolute orbit-glow"
          style={{
            left: "50%",
            top: "45%",
            width: 500,
            height: 500,
            transform: "translate(-50%, -50%)",
            border: "1px solid rgba(120, 90, 220, 0.08)",
            borderRadius: "50%",
            boxShadow:
              "0 0 60px 10px rgba(100,60,200,0.05) inset, 0 0 40px 5px rgba(80,50,180,0.04)",
          }}
        />
        <div
          className="absolute orbit-glow"
          style={{
            left: "50%",
            top: "45%",
            width: 800,
            height: 800,
            transform: "translate(-50%, -50%)",
            border: "1px solid rgba(90, 70, 180, 0.05)",
            borderRadius: "50%",
            animationDelay: "4s",
            animationDuration: "16s",
          }}
        />

      </div>
    </>
  );
}