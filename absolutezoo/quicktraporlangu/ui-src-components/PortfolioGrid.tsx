'use client';

import React from 'react';
import { motion } from '@liquid/tokens';
import { MoveUpRight } from '@liquid/tokens';
import { Surface } from './Surface';
import { Text } from './Text';
import { Button } from './Button';
import { TimelineContent } from '@liquid/effects';

const projects = [
    {
        title: "Quantum Banking",
        category: "Fintech",
        description: "Developing a security-first financial dashboard for elite liquidity management.",
        image: "https://images.unsplash.com/photo-1530099486328-e021101a494a?auto=format&fit=crop&w=2147&q=80",
        stats: [
            { label: "Team", value: "Core Engineering" },
            { label: "Year", value: "2025" }
        ]
    },
    {
        title: "Luminous",
        category: "Branding",
        description: "High-fidelity brand identity for a modern wellness platform focused on clarity.",
        image: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=900&q=90",
    },
    {
        title: "Nexus One",
        category: "Product",
        description: "Hardware integration interface designed for industrial scale automation.",
        image: "https://images.unsplash.com/photo-1518600506278-4e8ef466b810?auto=format&fit=crop&w=900&q=90",
    }
];

export const PortfolioGrid = () => {
    return (
        <section className="py-32 bg-midnight">
            <div className="container mx-auto px-6">
                <TimelineContent animationNum={0} className="mb-24 flex flex-col md:flex-row justify-between items-end gap-12">
                    <div className="max-w-2xl">
                        <h2 className="text-4xl md:text-7xl font-bold text-bonewhite mb-6 tracking-tight">Case Studies</h2>
                        <Text className="text-xl md:text-2xl !text-bonewhite/60 leading-relaxed font-medium italic">
                            A selection of high-impact products built with the Liquid system.
                        </Text>
                    </div>
                    <Button variant="ghost" className="text-bonewhite border-bonewhite/20 hover:bg-bonewhite/5 rounded-full px-8 py-6 h-auto text-lg gap-4">
                        Explore All <MoveUpRight className="w-5 h-5" />
                    </Button>
                </TimelineContent>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                    {/* Main Feature */}
                    <div className="lg:col-span-12 mb-12">
                        <TimelineContent animationNum={1}>
                            <Surface intensity="medium" className="group overflow-hidden relative min-h-[600px] border-bonewhite/10">
                                <div className="grid grid-cols-1 lg:grid-cols-2 h-full min-h-[600px]">
                                    <div className="p-12 flex flex-col justify-between">
                                        <div className="space-y-4">
                                            <Text className="text-sm uppercase tracking-widest font-bold text-bonewhite/40">Feature Project</Text>
                                            <h3 className="text-5xl md:text-6xl font-bold text-bonewhite tracking-tight">{projects[0].title}</h3>
                                            <Text className="text-xl text-bonewhite/70 leading-relaxed max-w-md">{projects[0].description}</Text>
                                        </div>
                                        <div className="pt-12 space-y-4 max-w-sm">
                                            {projects[0].stats?.map(stat => (
                                                <div key={stat.label} className="flex justify-between border-b border-bonewhite/10 pb-4">
                                                    <span className="text-bonewhite/40 uppercase text-xs font-bold tracking-widest">{stat.label}</span>
                                                    <span className="text-bonewhite font-semibold font-medium">{stat.value}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="relative overflow-hidden min-h-[400px]">
                                        <img
                                            src={projects[0].image}
                                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 grayscale opacity-80"
                                            alt="Project"
                                        />
                                    </div>
                                </div>
                            </Surface>
                        </TimelineContent>
                    </div>

                    {/* Secondary Projects */}
                    {projects.slice(1).map((project, idx) => (
                        <div key={idx} className="lg:col-span-6">
                            <TimelineContent animationNum={idx + 2}>
                                <Surface intensity="thin" interactive className="group h-full border-bonewhite/5">
                                    <div className="flex flex-col">
                                        <div className="h-[400px] overflow-hidden relative">
                                            <img
                                                src={project.image}
                                                className="w-full h-full object-cover grayscale opacity-60 transition-all duration-700 group-hover:scale-110 group-hover:opacity-100"
                                                alt={project.title}
                                            />
                                            <div className="absolute top-6 left-6">
                                                <span className="px-4 py-2 bg-midnight/80 backdrop-blur-xl border border-bonewhite/20 rounded-full text-xs font-bold uppercase tracking-widest text-bonewhite">
                                                    {project.category}
                                                </span>
                                            </div>
                                        </div>
                                        <div className="p-8 space-y-4">
                                            <h3 className="text-3xl font-bold text-bonewhite">{project.title}</h3>
                                            <Text className="text-bonewhite/60 italic leading-relaxed">{project.description}</Text>
                                        </div>
                                    </div>
                                </Surface>
                            </TimelineContent>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
