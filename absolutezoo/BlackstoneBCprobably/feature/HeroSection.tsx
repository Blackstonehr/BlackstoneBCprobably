"use client";

import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <div className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-black scanline">
      <div className="absolute inset-0 bg-dark-glass backdrop-blur-xl"></div>
      <div className="absolute inset-0 bg-gradient-to-tr from-neon-blue to-neon-pink opacity-20"></div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 text-center text-white"
      >
        <motion.h1
          className="text-6xl md:text-8xl lg:text-9xl font-extrabold uppercase tracking-wider animate-glitch"
          style={{
            textShadow: "0 0 10px #00BFFF, 0 0 20px #00BFFF, 0 0 30px #FF00FF",
          }}
        >
          BLACKSTONE
        </motion.h1>
        <p className="mt-4 text-lg md:text-2xl font-light">
          Advanced Human Capital Solutions
        </p>
        <p className="mt-2 text-md md:text-xl text-gray-400">
          Precision. Efficiency. Dominance.
        </p>
      </motion.div>
    </div>
  );
}
