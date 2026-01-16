'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from '@liquid/tokens';
import { Plus } from '@liquid/tokens';
import { Surface } from './Surface';
import { Text } from './Text';
import { TimelineContent } from '@liquid/effects';

const industries = [
    {
        name: "Fintech",
        description: "Cutting-edge financial technology solutions that transform banking and investment management for the digital gold age.",
        image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-2.svg",
    },
    {
        name: "Luxury",
        description: "Comprehensive online retail platforms and marketplace solutions that drive sales and enhance premium customer experiences.",
        image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-3.svg",
    },
    {
        name: "Education",
        description: "Innovative learning management systems and educational technology that empower students and educators worldwide.",
        image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-4.svg",
    },
    {
        name: "Wellness",
        description: "Revolutionary medical solutions and digital health platforms that improve patient outcomes and streamline delivery.",
        image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg",
    },
];

export const ServicesCards = () => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <section className="py-32 bg-midnight overflow-hidden">
            <div className="container mx-auto px-6">
                <TimelineContent animationNum={0} className="mb-24">
                    <h2 className="text-4xl md:text-7xl font-black text-bonewhite mb-4 tracking-tighter uppercase">Our Expertise</h2>
                    <Text className="text-xl text-bonewhite/40 font-extralight italic tracking-[0.1em]">The Intersection of Logic & Luxury</Text>
                </TimelineContent>

                <div className="flex flex-col md:flex-row gap-4 h-[600px] w-full items-stretch">
                    {industries.map((item, index) => (
                        <motion.div
                            key={index}
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                            animate={{
                                flex: hoveredIndex === index ? 4 : hoveredIndex === null ? 1 : 0.5,
                            }}
                            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                            className="relative overflow-hidden cursor-pointer group h-full"
                        >
                            <Surface intensity="thick" className="h-full border-bonewhite/10 transition-colors duration-700 group-hover:bg-bonewhite/[0.02]">
                                {/* Background Image */}
                                <div className="absolute inset-0 z-0">
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="h-full w-full object-cover grayscale opacity-30 transition-all duration-700 group-hover:scale-110 group-hover:opacity-40"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-midnight via-midnight/40 to-transparent" />
                                </div>

                                <div className="relative z-10 h-full p-8 flex flex-col justify-end">
                                    <motion.div
                                        animate={{ rotate: hoveredIndex === index ? 90 : 0 }}
                                        className="absolute top-8 right-8 p-3 rounded-full border border-bonewhite/10 bg-bonewhite/5 backdrop-blur-xl"
                                    >
                                        <Plus className="text-bonewhite w-5 h-5" />
                                    </motion.div>

                                    <div className="space-y-4">
                                        <h3 className="text-3xl md:text-4xl font-black text-bonewhite tracking-tighter uppercase">
                                            {item.name}
                                        </h3>

                                        <AnimatePresence mode="popLayout">
                                            {hoveredIndex === index && (
                                                <motion.div
                                                    initial={{ opacity: 0, y: 10 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    exit={{ opacity: 0, y: 10 }}
                                                    transition={{ duration: 0.4, delay: 0.2 }}
                                                >
                                                    <Text className="text-bonewhite/60 text-lg leading-relaxed font-light italic max-w-sm">
                                                        {item.description}
                                                    </Text>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                </div>
                            </Surface>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
