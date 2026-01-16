'use client';

import React from 'react';
import { Surface } from './Surface';
import { Text } from './Text';
import { TimelineContent, MotionNumber } from '@liquid/effects';

const stats = [
    { value: 98, suffix: "%", label: "Satisfaction", sublabel: "From verified reviews" },
    { value: 3.8, suffix: "x", label: "ROI Improvement", sublabel: "Within first quarter" },
    { value: 4.2, suffix: "x", label: "Team Efficiency", sublabel: "Proven productivity gains" },
    { value: 72, suffix: "%", label: "Reduced Task Time", sublabel: "Across all projects" },
];

export const CaseStudies = () => {
    return (
        <section className="py-32 bg-midnight">
            <div className="container mx-auto px-6 text-bonewhite">
                <div className="flex flex-col gap-8 mb-20 text-center">
                    <TimelineContent animationNum={0}>
                        <Text className="font-semibold tracking-widest uppercase text-sm text-bonewhite/40 mb-4">
                            4500+ Satisfied Customers
                        </Text>
                        <h2 className="text-4xl md:text-6xl font-bold leading-tight">
                            Real results from real users
                        </h2>
                    </TimelineContent>
                </div>

                <div className="grid lg:grid-cols-12 gap-12">
                    {/* Main Testimonial Column */}
                    <div className="lg:col-span-8 flex flex-col gap-12">
                        {[1, 2].map((i) => (
                            <TimelineContent key={i} animationNum={i}>
                                <Surface intensity="medium" className="p-8 md:p-12 border-bonewhite/10">
                                    <div className="flex flex-col md:flex-row gap-10">
                                        <img
                                            src={`https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-${i}.svg`}
                                            alt="Avatar"
                                            className="w-48 h-64 object-cover rounded-3xl grayscale"
                                        />
                                        <div className="flex flex-col justify-between py-2">
                                            <blockquote className="text-2xl md:text-3xl font-medium leading-normal mb-10">
                                                "{i === 1 ? "This luxury design system transformed how we collaborate. Our output increased while maintaining premium aesthetics." : "The interface is intuitive and customizable to our needs. We saw immediate results across departments."}"
                                            </blockquote>
                                            <div className="flex items-center gap-6">
                                                <div className="flex flex-col">
                                                    <span className="text-xl font-bold">{i === 1 ? "Michael Rivera" : "Sarah Chen"}</span>
                                                    <span className="text-bonewhite/40 uppercase tracking-widest text-xs font-semibold">{i === 1 ? "Product Director" : "Operations Lead"}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Surface>
                            </TimelineContent>
                        ))}
                    </div>

                    {/* Stats Column */}
                    <div className="lg:col-span-4 flex md:flex-row lg:flex-col gap-6 justify-center">
                        {stats.map((stat, idx) => (
                            <TimelineContent key={idx} animationNum={idx + 3}>
                                <Surface intensity="thin" className="p-8 flex-1 border-bonewhite/5">
                                    <div className="flex flex-col gap-2">
                                        <div className="text-5xl md:text-6xl font-bold flex items-center">
                                            <MotionNumber value={stat.value} />
                                            <span>{stat.suffix}</span>
                                        </div>
                                        <Text className="text-lg font-bold !text-bonewhite mt-2">{stat.label}</Text>
                                        <Text className="text-sm text-bonewhite/40">{stat.sublabel}</Text>
                                    </div>
                                </Surface>
                            </TimelineContent>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
