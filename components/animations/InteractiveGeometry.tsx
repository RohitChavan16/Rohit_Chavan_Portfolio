"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Stars, useMatcapTexture } from "@react-three/drei";
import { useRef, useMemo } from "react";
import * as THREE from "three";

function RandomShapes() {
  const group = useRef<THREE.Group>(null);
  const [matcap] = useMatcapTexture("7A7A7A_D9D9D9_BCBCBC_B4B4B4", 256); // Silver/Metallic look

  // Generate random shapes
  const shapes = useMemo(() => {
    return Array.from({ length: 40 }).map((_, i) => {
      const position = new THREE.Vector3(
        (Math.random() - 0.5) * 30,
        (Math.random() - 0.5) * 30,
        (Math.random() - 0.5) * 20
      );
      const rotation = new THREE.Euler(
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        Math.random() * Math.PI
      );
      const scale = Math.random() * 0.8 + 0.2;
      const type = Math.floor(Math.random() * 3); // 0 = Box, 1 = Icosahedron, 2 = Torus

      return { position, rotation, scale, type };
    });
  }, []);

  useFrame((state) => {
    if (group.current) {
      // Slow rotation for the entire group
      group.current.rotation.y += 0.001;
      group.current.rotation.x += 0.0005;
      
      // Slight mouse reaction
      group.current.position.x = THREE.MathUtils.lerp(group.current.position.x, (state.mouse.x * 2), 0.05);
      group.current.position.y = THREE.MathUtils.lerp(group.current.position.y, (state.mouse.y * 2), 0.05);
    }
  });

  return (
    <group ref={group}>
      {shapes.map((shape, i) => (
        <Float key={i} speed={2} rotationIntensity={2} floatIntensity={2}>
          <mesh position={shape.position} rotation={shape.rotation} scale={shape.scale}>
            {shape.type === 0 && <boxGeometry args={[1, 1, 1]} />}
            {shape.type === 1 && <icosahedronGeometry args={[1, 0]} />}
            {shape.type === 2 && <torusGeometry args={[0.7, 0.2, 16, 32]} />}
            
            <meshMatcapMaterial 
              matcap={matcap} 
              color={i % 5 === 0 ? "#f4d03f" : "#ffffff"} // Add occasional accent color
              transparent
              opacity={0.6}
            />
          </mesh>
        </Float>
      ))}
    </group>
  );
}

export default function InteractiveGeometry() {
  return (
    <div className="absolute inset-0 w-full h-full -z-10 overflow-hidden pointer-events-none mix-blend-screen opacity-50">
      <Canvas camera={{ position: [0, 0, 20], fov: 60 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#f4d03f" />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#7dd3fc" />
        
        <Stars radius={50} depth={50} count={2000} factor={4} saturation={0} fade speed={1} />
        <RandomShapes />
      </Canvas>
    </div>
  );
}
