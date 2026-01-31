"use client";
import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function GridLines() {
  const meshRef = useRef<THREE.LineSegments>(null);

  // Create a plane geometry with enough segments for smooth waves
  // 100x100 units wide, with 40x40 segments
  const geometry = useMemo(() => new THREE.PlaneGeometry(120, 120, 40, 40), []);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (!meshRef.current) return;

    const positions = geometry.attributes.position;
    
    for (let i = 0; i < positions.count; i++) {
      const x = positions.getX(i);
      const y = positions.getY(i);
      
      // WAVE MATH:
      // z creates the "height". 
      // Math.sin(y * 0.3 + t) creates the forward movement.
      // Math.cos(x * 0.2 + t) adds side-to-side rolling.
      const z = Math.sin(y * 0.2 + t * 1.5) * 2.5 + Math.cos(x * 0.2 + t) * 1.5;
      
      positions.setZ(i, z);
    }
    positions.needsUpdate = true;
  });

  return (
    <lineSegments 
      ref={meshRef} 
      geometry={geometry} 
      rotation={[-Math.PI / 2.1, 0, 0]} 
      position={[0, -2, 0]}
    >
      <lineBasicMaterial color="#00ffff" transparent opacity={0.4} />
    </lineSegments>
  );
}

export default function WavyGrid() {
  return (
    <div className="fixed inset-0 -z-10 bg-black">
      <Canvas camera={{ position: [0, 8, 25], fov: 60 }}>
        <GridLines />
      </Canvas>
      {/* This gradient creates the "fade to black" at the horizon */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black pointer-events-none" />
    </div>
  );
}