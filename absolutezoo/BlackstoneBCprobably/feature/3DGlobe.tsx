"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Icosahedron, OrbitControls } from "@react-three/drei";
import { useRef, useEffect, useState } from "react";
import { SectionShell } from "../ui/SectionShell";
import { motion } from "framer-motion";

function Globe() {
  const meshRef = useRef<any>();

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.001;
      meshRef.current.rotation.x += 0.0005;
    }
  });

  return (
    <Icosahedron args={[2, 4]} ref={meshRef}>
      <meshStandardMaterial wireframe color="#ff0000" emissive="#ff0000" emissiveIntensity={2} />
    </Icosahedron>
  );
}

export function ThreeDGlobe() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <SectionShell>
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-white">Operational Theatre Map</h2>
        <p className="text-lg text-gray-400">Global Human Capital Deployment Network</p>
      </div>
      <motion.div
        className="w-full h-[500px] rounded-lg border border-neon-pink shadow-neon-pink"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        {mounted && (
          <Canvas>
            <ambientLight intensity={0.1} />
            <directionalLight color="red" position={[0, 0, 5]} />
            <fog attach="fog" args={["#000", 5, 15]} />
            <Globe />
            <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
          </Canvas>
        )}
      </motion.div>
    </SectionShell>
  );
}
