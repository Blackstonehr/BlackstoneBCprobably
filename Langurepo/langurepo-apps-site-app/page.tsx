'use client';

import React from 'react';
import { motion, AnimatePresence } from '@liquid/tokens';
import {
    Hero,
    ServicesCards,
    Footer,
    CustomCursor,
    Navbar
} from '@liquid/ui';

export default function Home() {
    return (
        <>
            <CustomCursor />
            <Navbar />
            <AnimatePresence mode="wait">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="bg-midnight min-h-screen relative z-10"
                >
                    {/* Section 1: Hero */}
                    <Hero />

                    {/* Section 2: Core Offer (The 4-Panel Grid) */}
                    <div id="solutions">
                        <ServicesCards />
                    </div>

                    {/* Section 3: Closing Footer */}
                    <Footer />
                </motion.div>
            </AnimatePresence>
        </>
    );
}
