'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from '@liquid/tokens';
import { Cog, Lightbulb, ListChecks } from '@liquid/tokens';
import { Surface } from './Surface';
import { Text } from './Text';
import { TimelineContent } from '@liquid/effects';

const features = [
    {
        id: "research",
        heading: "Research",
        icon: <Lightbulb className="w-5 h-5 text-bonewhite" />,
        description: "Deep dive into your market audience and technical requirements before we write a single line of code.",
        image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg",
    },
    {
        id: "refine",
        heading: "Refine",
        icon: <ListChecks className="w-5 h-5 text-bonewhite" />,
        description: "Iterative design sprints where we polish the UX and verify every interaction with high-fidelity prototypes.",
        image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-2.svg",
    },
    {
        id: "build",
        heading: "Build",
        icon: <Cog className="w-5 h-5 text-bonewhite" />,
        description: "Execution using the Liquid architecture, ensuring modular growth and unmatched performance standards.",
        image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-3.svg",
    },
];

export const ProcessSteps = () => {
    const [activeTab, setActiveTab] = useState(features[0].id);

    return (
        <section className="py-32 bg-midnight">
            <div className="container mx-auto px-6">
                <TimelineContent animationNum={0} className="mb-16 text-center">
                    <h2 className="text-4xl md:text-6xl font-bold text-bonewhite mb-4">Our Process</h2>
                    <Text className="text-xl text-bonewhite/40">From discovery to deployment.</Text>
                </TimelineContent>

                <div className="flex flex-col gap-12">
                    {/* Controls */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {features.map((feature, index) => (
                            <TimelineContent key={feature.id} animationNum={index + 1}>
                                <Surface
                                    intensity={activeTab === feature.id ? "medium" : "thin"}
                                    interactive
                                    className={`p-8 border-bonewhite/10 text-left transition-all duration-500 ${activeTab === feature.id ? 'bg-bonewhite/5 ring-1 ring-bonewhite/20' : 'bg-transparent'}`}
                                    onClick={() => setActiveTab(feature.id)}
                                >
                                    <div className="flex flex-col gap-6">
                                        <div className={`p-4 rounded-2xl w-fit transition-colors duration-500 ${activeTab === feature.id ? 'bg-bonewhite/20' : 'bg-bonewhite/5'}`}>
                                            {feature.icon}
                                        </div>
                                        <div>
                                            <h3 className="text-2xl font-bold text-bonewhite mb-3">{feature.heading}</h3>
                                            <Text className="text-bonewhite/50 leading-relaxed font-medium">
                                                {feature.description}
                                            </Text>
                                        </div>
                                    </div>
                                </Surface>
                            </TimelineContent>
                        ))}
                    </div>

                    {/* Visualization */}
                    <TimelineContent animationNum={4}>
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeTab}
                                initial={{ opacity: 0, filter: 'blur(20px)', scale: 0.95 }}
                                animate={{ opacity: 1, filter: 'blur(0px)', scale: 1 }}
                                exit={{ opacity: 0, filter: 'blur(20px)', scale: 1.05 }}
                                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                            >
                                <Surface intensity="thick" className="w-full relative h-[600px] border-bonewhite/5 overflow-hidden">
                                    <img
                                        src={features.find(f => f.id === activeTab)?.image}
                                        className="w-full h-full object-cover grayscale opacity-40 brightness-50"
                                        alt="Visualization"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-midnight/80 to-transparent" />
                                    <div className="absolute bottom-12 left-12 right-12">
                                        <Text className="text-sm uppercase tracking-[0.4em] font-bold text-bonewhite/40 mb-2">Phase Overview</Text>
                                        <h4 className="text-3xl font-bold text-bonewhite">Developing the {features.find(f => f.id === activeTab)?.heading} Layer</h4>
                                    </div>
                                </Surface>
                            </motion.div>
                        </AnimatePresence>
                    </TimelineContent>
                </div>
            </div>
        </section>
    );
};
