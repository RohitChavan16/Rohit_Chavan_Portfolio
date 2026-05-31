"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface TextRevealAnimationProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  direction?: "up" | "down" | "left" | "right";
}

export default function TextRevealAnimation({
  children,
  delay = 0,
  className = "",
  direction = "up",
}: TextRevealAnimationProps) {
  const directions = {
    up: { y: 40, x: 0 },
    down: { y: -40, x: 0 },
    left: { x: 40, y: 0 },
    right: { x: -40, y: 0 },
  };

  return (
    <motion.div
      initial={{
        opacity: 0,
        ...directions[direction],
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        x: 0,
      }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration: 0.8,
        delay: delay,
        ease: [0.21, 0.47, 0.32, 0.98], // Custom cubic-bezier for a very smooth easing
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
