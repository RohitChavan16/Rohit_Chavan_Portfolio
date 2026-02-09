"use client";

import { useEffect, useState } from "react";

type Dot = {
  id: number;
  x: number;
  y: number;
  size: number;
  color: string;
};

export default function BackgroundDots() {
  const [dots, setDots] = useState<Dot[]>([]);

  useEffect(() => {
    const colors = ["#4fc3ff", "#7c7cff", "#38bdf8", "#60a5fa"];

    const newDots: Dot[] = Array.from({ length: 60 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 2,
      color: colors[Math.floor(Math.random() * colors.length)],
    }));

    setDots(newDots);
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">

      {dots.map((dot) => (
        <span
          key={dot.id}
          className="absolute rounded-full opacity-70 animate-pulse"
          style={{
            left: `${dot.x}%`,
            top: `${dot.y}%`,
            width: dot.size,
            height: dot.size,
            backgroundColor: dot.color,
            boxShadow: `0 0 12px ${dot.color}`,
          }}
        />
      ))}

    </div>
  );
}
