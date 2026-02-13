"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

type Particle = {
  id: number;
  x: number;
  y: number;
  baseColor: string;
  size: number;
  borderRadius: string;
};

const colors = [
  "rgba(34,211,238,0.8)",   // cyan
  "rgba(167,139,250,0.8)",  // purple
  "rgba(244,114,182,0.8)",  // pink
  "rgba(96,165,250,0.8)",   // light blue
];

function generateBlobRadius() {
  return `
    ${Math.random() * 60 + 20}% 
    ${Math.random() * 60 + 20}% 
    ${Math.random() * 60 + 20}% 
    ${Math.random() * 60 + 20}% 
    /
    ${Math.random() * 60 + 20}% 
    ${Math.random() * 60 + 20}% 
    ${Math.random() * 60 + 20}% 
    ${Math.random() * 60 + 20}%
  `;
}

export default function CursorParticles() {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      const newParticle: Particle = {
        id: Date.now() + Math.random(),
        x: e.clientX,
        y: e.clientY,
        baseColor: colors[Math.floor(Math.random() * colors.length)],
        size: Math.random() * 20 + 20, // bigger = more fluid look
        borderRadius: generateBlobRadius(),
      };

      setParticles((prev) => [...prev.slice(-15), newParticle]);
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <>
      {particles.map((p) => (
        <motion.div
          key={p.id}
          initial={{
            opacity: 0.7,
            scale: 1,
          }}
          animate={{
            opacity: 0,
            scale: 0.6,
            y: p.y - 30,
          }}
          transition={{
            duration: 1.7,
            ease: "easeOut",
          }}
          className="pointer-events-none fixed"
          style={{
            left: p.x - p.size / 2,
            top: p.y - p.size / 2,
            width: p.size,
            height: p.size,
            borderRadius: p.borderRadius,
            background: `radial-gradient(circle at 30% 30%, ${p.baseColor}, transparent 70%)`,
            filter: "blur(6px)",
            boxShadow: `0 0 25px ${p.baseColor}`,
          }}
        />
      ))}
    </>
  );
}
