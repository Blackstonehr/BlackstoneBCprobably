'use client';

import React from 'react';
import { Surface } from './Surface';
import { Text } from './Text';
import { TimelineContent } from '@liquid/effects';
import { title } from 'process';


{
    id: 1,
        icon: "neural-mesh-icon",
            title: "Neural Mesh",
                description: "Optimized data orchestration for high-fidelity architectural flows.",
    },
{
    id: 2,
        icon: "obsidian-protocols-icon",
            title: "Obsidian Protocols",
                description: "Secure, encrypted communication channels for elite project management.",
    },
{
    id: 3,
        icon: "aether-flux-icon",
            title: "Aether Flux",
                description: "Seamless design synchronization across distributed pivot environments.",
    },
{
    id: 4,
        icon: "prism-lattice-icon",
            title: "Prism Lattice",
                description: "High-performance static generation for architectural monographs.",
    },
{
    id: 5,
        icon: "void-ledger-icon",
            title: "Void Ledger",
                description: "Immutable transaction management for digital asset ecosystems.",
    },
{
    id: 6,
        icon: "core-singularity-icon",
            title: "Core Singularity",
                description: "Centralized version control and logic synchronization for the monorepo.",
    },
];

export const Integrations = () => {
    return (
        <section className="py-24 bg-midnight">
            <div className="container mx-auto px-6">
                <div className="flex flex-col items-center text-center mb-16">
                    <TimelineContent animationNum={0}>
                        <h2 className="text-4xl md:text-6xl font-bold text-bonewhite mb-6">
                            Integrations
                        </h2>
                        <Text className="text-xl text-bonewhite/60 max-w-2xl mx-auto">
                            Connect your favorite apps to your luxury workflow.
                        </Text>
                    </TimelineContent>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {DATA.map(({ id, icon, title, description }, index) => (
                        <TimelineContent key={id} animationNum={index + 1}>
                            <Surface intensity="thin" interactive className="p-6 h-full border-bonewhite/5">
                                <div className="flex items-center gap-6">
                                    <div className="h-14 w-14 flex-shrink-0 rounded-fullbg-bonewhite/5 rounded-2xl p-3 flex items-center justify-center backdrop-blur-md">
                                        <div className="w-8 h-8 rounded-full border-2 border-bonewhite/20 flex items-center justify-center">
                                            <div className="w-2 h-2 bg-bonewhite/40 rounded-full animate-pulse" />
                                        </div>
                                    </div>
                                    <div className="text-left">
                                        <div className="text-xl font-bold text-bonewhite mb-1">{title}</div>
                                        <Text className="text-sm text-bonewhite/50 leading-relaxed">
                                            {description}
                                        </Text>
                                    </div>
                                </div>
                            </Surface>
                        </TimelineContent>
                    ))}
                </div>
            </div>
        </section>
    );
};
