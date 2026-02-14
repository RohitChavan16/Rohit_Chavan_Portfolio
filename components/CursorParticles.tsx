"use client";

import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  life: number;
  maxLife: number;
  color: string;
  angle: number;
  rotationSpeed: number;
}

const COLORS = [
  "rgba(6, 182, 212,",   // cyan
  "rgba(147, 51, 234,",  // purple
  "rgba(236, 72, 153,",  // pink
  "rgba(59, 130, 246,",  // blue
  "rgba(168, 85, 247,",  // violet
];

export default function CursorCanvasParticles() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animationFrameRef = useRef<number | null>(null);
  const lastFrameTime = useRef<number>(performance.now());

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    // Proper DPI scaling
    const resizeCanvas = () => {
      const dpr = window.devicePixelRatio || 1;

      const width = window.innerWidth;
      const height = window.innerHeight;

      canvas.width = width * dpr;
      canvas.height = height * dpr;

      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resizeCanvas();

    window.addEventListener("resize", resizeCanvas);

    // Create particle (radial emission in all directions)
    const createParticle = (x: number, y: number): Particle => {
      const angle = Math.random() * Math.PI * 2;
      const speed = 0.5 + Math.random() * 3;

      return {
        x,
        y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        size: 10 + Math.random() * 20,
        opacity: 0.7 + Math.random() * 0.3,
        life: 0,
        maxLife: 60 + Math.random() * 60,
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
        angle: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.05,
      };
    };

    // Draw organic liquid shape
    const drawParticle = (p: Particle) => {
      ctx.save();

      ctx.translate(p.x, p.y);
      ctx.rotate(p.angle);

      const lifeRatio = p.life / p.maxLife;
      const alpha = p.opacity * (1 - lifeRatio);

      // Outer glow gradient
      const gradient = ctx.createRadialGradient(
        0,
        0,
        0,
        0,
        0,
        p.size
      );

      gradient.addColorStop(0, `${p.color}${alpha})`);
      gradient.addColorStop(0.4, `${p.color}${alpha * 0.6})`);
      gradient.addColorStop(1, `${p.color}0)`);

      ctx.fillStyle = gradient;

      // Organic blob shape
      ctx.beginPath();

      const points = 7;

      for (let i = 0; i <= points; i++) {
        const angle = (i / points) * Math.PI * 2;

        const radius =
          p.size *
          (0.7 +
            Math.sin(angle * 3 + p.life * 0.05) * 0.3);

        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;

        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }

      ctx.closePath();
      ctx.fill();

      ctx.restore();
    };

    // Update particles with deltaTime
    const updateParticles = (deltaTime: number) => {
      const particles = particlesRef.current;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];

        // Motion
        p.x += p.vx * deltaTime;
        p.y += p.vy * deltaTime;

        // Smooth friction
        const friction = 0.97;
        p.vx *= Math.pow(friction, deltaTime);
        p.vy *= Math.pow(friction, deltaTime);

        // Life update
        p.life += deltaTime;

        // Rotation
        p.angle += p.rotationSpeed * deltaTime;

        // Size evolution
        if (p.life < p.maxLife * 0.3)
          p.size *= 1.01;
        else p.size *= 0.99;

        if (p.life >= p.maxLife) {
          particles.splice(i, 1);
          continue;
        }

        drawParticle(p);
      }
    };

    // Animation loop
    const animate = (time: number) => {
      const deltaTime =
        (time - lastFrameTime.current) / 16.67;

      lastFrameTime.current = time;

      updateParticles(deltaTime);

      animationFrameRef.current =
        requestAnimationFrame(animate);
    };

    animationFrameRef.current =
      requestAnimationFrame(animate);

    // Mouse interaction
    let lastEmitTime = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const now = performance.now();

      if (now - lastEmitTime < 16) return;

      lastEmitTime = now;

      const x = e.clientX;
      const y = e.clientY;

      const count = 2 + Math.floor(Math.random() * 3);

      for (let i = 0; i < count; i++) {
        particlesRef.current.push(
          createParticle(
            x + (Math.random() - 0.5) * 10,
            y + (Math.random() - 0.5) * 10
          )
        );
      }

      // Limit particles for performance
      if (particlesRef.current.length > 400) {
        particlesRef.current =
          particlesRef.current.slice(-400);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Cleanup
    return () => {
      window.removeEventListener(
        "mousemove",
        handleMouseMove
      );

      window.removeEventListener(
        "resize",
        resizeCanvas
      );

      if (animationFrameRef.current !== null)
        cancelAnimationFrame(animationFrameRef.current);

      particlesRef.current = [];
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
    />
  );
}
