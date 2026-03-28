"use client";

import { useEffect, useRef, useState } from "react";

export default function CursorGlow() {
  const [visible, setVisible] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [position, setPosition] = useState({ x: -120, y: -120 });
  const targetRef = useRef({ x: -120, y: -120 });
  const currentRef = useRef({ x: -120, y: -120 });
  const frameRef = useRef<number | null>(null);

  useEffect(() => {
    const onMouseMove = (event: MouseEvent) => {
      targetRef.current = { x: event.clientX, y: event.clientY };
      if (!visible) setVisible(true);
    };

    const onMouseOver = (event: MouseEvent) => {
      const el = event.target as HTMLElement | null;
      if (!el) return;
      setHovering(Boolean(el.closest("a,button,input,textarea,select,[role='button']")));
    };

    const animate = () => {
      currentRef.current.x += (targetRef.current.x - currentRef.current.x) * 0.16;
      currentRef.current.y += (targetRef.current.y - currentRef.current.y) * 0.16;
      setPosition({ x: currentRef.current.x, y: currentRef.current.y });
      frameRef.current = requestAnimationFrame(animate);
    };

    const onLeave = () => setVisible(false);
    const onEnter = () => setVisible(true);

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseover", onMouseOver);
    window.addEventListener("mouseleave", onLeave);
    window.addEventListener("mouseenter", onEnter);
    frameRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseover", onMouseOver);
      window.removeEventListener("mouseleave", onLeave);
      window.removeEventListener("mouseenter", onEnter);
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, [visible]);

  return (
    <>
      <div
        className="pointer-events-none fixed inset-0 z-[9996] hidden md:block transition-opacity duration-300"
        style={{
          opacity: visible ? 1 : 0,
          background: `radial-gradient(460px at ${position.x}px ${position.y}px, rgba(244,208,63,0.14), rgba(130,176,245,0.12) 36%, transparent 74%)`,
        }}
      />
      <div
        className="pointer-events-none fixed z-[9999] hidden md:block rounded-full border border-[#f4d03f]/70 transition-all duration-200"
        style={{
          width: hovering ? 44 : 28,
          height: hovering ? 44 : 28,
          transform: `translate(${position.x - (hovering ? 22 : 14)}px, ${position.y - (hovering ? 22 : 14)}px)`,
          boxShadow: "0 0 26px rgba(244,208,63,0.35), inset 0 0 12px rgba(244,208,63,0.2)",
          opacity: visible ? 1 : 0,
        }}
      />
      <div
        className="pointer-events-none fixed z-[9999] hidden md:block rounded-full bg-[#f4d03f] transition-all duration-150"
        style={{
          width: hovering ? 9 : 6,
          height: hovering ? 9 : 6,
          transform: `translate(${position.x - (hovering ? 4.5 : 3)}px, ${position.y - (hovering ? 4.5 : 3)}px)`,
          boxShadow: "0 0 18px rgba(244,208,63,0.85)",
          opacity: visible ? 1 : 0,
        }}
      />
    </>
  );
}
