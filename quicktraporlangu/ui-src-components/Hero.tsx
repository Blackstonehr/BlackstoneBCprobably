'use client';

import React, { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from '@liquid/tokens';
import {
    VerticalCutReveal,
    TimelineContent,
    Sparkles
} from '@liquid/effects';
import { Button } from './Button';
import { Text } from './Text';

export const Hero = () => {
    const heroRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: heroRef,
        offset: ["start start", "end start"]
    });

    const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
    const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

    useEffect(() => {
        console.log('LANGUBRIDGE ENGINE STARTING AT:', new Date().toISOString());
    }, []);

    return (
        <section
            className="min-h-screen relative flex items-center justify-center overflow-hidden bg-[#00050a]"
            ref={heroRef}
        >
            {/* Langubridge Masterpiece Video Layer */}
            {/* Pure Midnight Void Background */}
            <div className="absolute inset-0 bg-midnight focus-visible:outline-none" />


            {/* Interactive Sparkles Layer */}
            <Sparkles
                id="hero-sparkles"
                className="absolute inset-0 z-10 pointer-events-none"
                particleDensity={180}
                particleColor="#E9DAC0"
            />

            <div className="relative z-20 max-w-7xl mx-auto px-6 py-24 w-full">
                <motion.div
                    style={{ opacity }}
                    className="flex flex-col items-center text-center space-y-16"
                >
                    {/* Main Headline with Vogue Look */}
                    <h1
                        className="text-6xl md:text-8xl lg:text-[10rem] font-black tracking-tighter text-bonewhite max-w-7xl leading-[0.85] drop-shadow-[0_0_30px_rgba(233,218,192,0.3)]"
                    >
                        <VerticalCutReveal
                            splitBy="characters"
                            staggerDuration={0.02}
                            containerClassName="justify-center"
                        >
                            LANGUBRIDGE
                        </VerticalCutReveal>
                        <div className="mt-8">
                            <i className="font-extralight text-3xl md:text-5xl lg:text-6xl lowercase tracking-widest text-bonewhite/40 block italic">
                                <VerticalCutReveal
                                    splitBy="words"
                                    staggerDuration={0.08}
                                    containerClassName="justify-center"
                                >
                                    the architecture of logic
                                </VerticalCutReveal>
                            </i>
                        </div>
                    </h1>

                    <TimelineContent animationNum={2} className="max-w-3xl">
                        <Text className="text-xl md:text-3xl !text-bonewhite/40 leading-relaxed font-light italic tracking-tight">
                            Engineering premium digital environments that transform how the world interacts with your vision.
                        </Text>
                    </TimelineContent>

                    <TimelineContent animationNum={3} className="flex flex-wrap gap-8 justify-center pt-8">
                        <Button variant="primary" className="px-16 py-8 text-2xl rounded-full shadow-[0_0_50px_rgba(233,218,192,0.15)] bg-bonewhite text-[#00050a] font-black hover:scale-105 transition-all">
                            Initialize Project
                        </Button>
                        <Button variant="ghost" className="px-16 py-8 text-2xl rounded-full border border-bonewhite/10 text-bonewhite backdrop-blur-3xl hover:bg-bonewhite/5 transition-all">
                            View Monograph
                        </Button>
                    </TimelineContent>
                </motion.div>
            </div>
        </section>
    );
};
