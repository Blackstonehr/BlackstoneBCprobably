'use client';

import React from 'react';
import { motion } from '@liquid/tokens';

const logos = [
    "AETHER", "CORE-X", "SYNERGY", "VERTEX", "NEXUS", "ORACLE", "QUANTUM", "VELOCITY"
];

export const LogoCarousel = () => {
    return (
        <div className="py-12 bg-midnight/50 backdrop-blur-sm border-y border-bonewhite/5 overflow-hidden">
            <div className="flex select-none overflow-hidden">
                <motion.div
                    className="flex flex-nowrap gap-16 items-center px-8"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{
                        duration: 30,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                >
                    {/* Double the logos for seamless loop */}
                    {[...logos, ...logos].map((logo, i) => (
                        <span
                            key={i}
                            className="text-2xl font-bold text-bonewhite/20 hover:text-bonewhite/40 transition-colors uppercase tracking-[0.4em]"
                        >
                            {logo}
                        </span>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};
