'use client';

import React from 'react';
import { motion } from '@liquid/tokens';

export const Navbar = () => {
    return (
        <nav className="fixed top-0 left-0 right-0 z-[100] px-6 py-8">
            <div className="max-w-7xl mx-auto flex justify-between items-center bg-midnight/20 backdrop-blur-xl border border-bonewhite/10 rounded-full px-8 py-4">
                <div className="text-2xl font-black tracking-tighter text-bonewhite">
                    LANGUBRIDGE
                </div>
                <div className="hidden md:flex items-center gap-12">
                    {['Platform', 'Solutions', 'Contact'].map((link) => (
                        <a
                            key={link}
                            href={`#${link.toLowerCase()}`}
                            className="text-sm font-bold uppercase tracking-widest text-bonewhite/60 hover:text-bonewhite transition-colors"
                        >
                            {link}
                        </a>
                    ))}
                </div>
                <div className="md:hidden">
                    {/* Mobile menu could go here, but keeping it minimal as requested */}
                    <div className="w-6 h-[1px] bg-bonewhite mb-1" />
                    <div className="w-4 h-[1px] bg-bonewhite" />
                </div>
            </div>
        </nav>
    );
};
