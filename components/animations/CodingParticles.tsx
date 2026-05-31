"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Text } from "@react-three/drei";
import { useRef, useMemo } from "react";
import * as THREE from "three";

function Particles() {
  const group = useRef<THREE.Group>(null);
  const particleCount = 100;

  // Symbols to drop/float
  const symbols = ["{ }", "< >", "/>", "const", "let", "=>", "()", "[]", "01", "10", "react", "next"];

  const particles = useMemo(() => {
    return Array.from({ length: particleCount }).map(() => ({
      position: new THREE.Vector3(
        (Math.random() - 0.5) * 40,
        (Math.random() - 0.5) * 40,
        (Math.random() - 0.5) * 10
      ),
      speed: Math.random() * 0.05 + 0.01,
      text: symbols[Math.floor(Math.random() * symbols.length)],
      color: Math.random() > 0.8 ? "#f4d03f" : "#4a8ce5", // Yellow accent or blueish
      opacity: Math.random() * 0.5 + 0.2
    }));
  }, []);

  useFrame(() => {
    if (group.current) {
      group.current.children.forEach((child, i) => {
        child.position.y += particles[i].speed;
        
        // Reset position when it goes too high
        if (child.position.y > 20) {
          child.position.y = -20;
          child.position.x = (Math.random() - 0.5) * 40;
        }
      });
    }
  });

  return (
    <group ref={group}>
      {particles.map((p, i) => (
        <Text
          key={i}
          position={p.position}
          color={p.color}
          fontSize={Math.random() * 0.5 + 0.3}
          fillOpacity={p.opacity}
          anchorX="center"
          anchorY="middle"
          font="https://fonts.gstatic.com/s/firamono/v14/N0bX2SlFPv1weGeLZDtgJv7S.woff" // Monospace font
        >
          {p.text}
        </Text>
      ))}
    </group>
  );
}

export default function CodingParticles() {
  return (
    <div className="absolute inset-0 w-full h-full -z-10 overflow-hidden pointer-events-none opacity-40">
      <Canvas camera={{ position: [0, 0, 15], fov: 60 }}>
        <Particles />
      </Canvas>
    </div>
  );
}
