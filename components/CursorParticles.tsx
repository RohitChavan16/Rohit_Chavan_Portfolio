"use client";

import { useEffect, useRef } from "react";

type DotParticle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
  size: number;
  color: string;
};

const colors = [
  "rgba(244,208,63,",
  "rgba(255,255,255,",
  "rgba(130,176,245,",
];

export default function CursorParticles() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const particlesRef = useRef<DotParticle[]>([]);
  const trailRef = useRef<{ x: number; y: number }[]>([]);
  const targetRef = useRef({ x: -100, y: -100 });
  const currentRef = useRef({ x: -100, y: -100 });
  const frameRef = useRef<number | null>(null);
  const timeRef = useRef<number>(performance.now());

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const spawn = (x: number, y: number, speed: number) => {
      const angle = Math.random() * Math.PI * 2;
      const velocity = 0.6 + Math.random() * 1.7 + speed * 0.03;
      particlesRef.current.push({
        x,
        y,
        vx: Math.cos(angle) * velocity,
        vy: Math.sin(angle) * velocity,
        life: 0,
        maxLife: 44 + Math.random() * 36,
        size: 1 + Math.random() * 2.8,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    };

    const animate = (time: number) => {
      const dt = (time - timeRef.current) / 16.67;
      timeRef.current = time;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      currentRef.current.x += (targetRef.current.x - currentRef.current.x) * 0.15;
      currentRef.current.y += (targetRef.current.y - currentRef.current.y) * 0.15;

      trailRef.current.push({ x: currentRef.current.x, y: currentRef.current.y });
      if (trailRef.current.length > 24) trailRef.current.shift();

      if (trailRef.current.length > 1) {
        for (let i = 1; i < trailRef.current.length; i += 1) {
          const prev = trailRef.current[i - 1];
          const point = trailRef.current[i];
          const ratio = i / trailRef.current.length;
          ctx.beginPath();
          ctx.strokeStyle = `rgba(244,208,63,${ratio * 0.24})`;
          ctx.lineWidth = ratio * 3;
          ctx.lineCap = "round";
          ctx.moveTo(prev.x, prev.y);
          ctx.lineTo(point.x, point.y);
          ctx.stroke();
        }
      }

      ctx.globalCompositeOperation = "lighter";
      for (let i = particlesRef.current.length - 1; i >= 0; i -= 1) {
        const p = particlesRef.current[i];
        p.life += dt;
        if (p.life >= p.maxLife) {
          particlesRef.current.splice(i, 1);
          continue;
        }

        p.x += p.vx * dt;
        p.y += p.vy * dt;
        p.vx *= 0.973;
        p.vy *= 0.973;

        const alpha = 1 - p.life / p.maxLife;
        ctx.fillStyle = `${p.color}${alpha})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalCompositeOperation = "source-over";

      frameRef.current = requestAnimationFrame(animate);
    };

    let lastEmit = 0;
    const onMouseMove = (event: MouseEvent) => {
      const now = performance.now();
      const dx = event.clientX - targetRef.current.x;
      const dy = event.clientY - targetRef.current.y;
      const speed = Math.min(40, Math.hypot(dx, dy));
      targetRef.current = { x: event.clientX, y: event.clientY };

      if (now - lastEmit < 16) return;
      lastEmit = now;

      const count = 3 + Math.floor(speed / 8);
      for (let i = 0; i < count; i += 1) {
        spawn(
          event.clientX + (Math.random() - 0.5) * (8 + speed * 0.4),
          event.clientY + (Math.random() - 0.5) * (8 + speed * 0.4),
          speed,
        );
      }

      if (particlesRef.current.length > 700) {
        particlesRef.current = particlesRef.current.slice(-700);
      }
    };

    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", onMouseMove);
    frameRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMouseMove);
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
      particlesRef.current = [];
      trailRef.current = [];
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-[9998] pointer-events-none hidden md:block"
    />
  );
}
