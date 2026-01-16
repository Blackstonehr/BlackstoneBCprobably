import React from 'react';
import { motion, colors, glass } from '@liquid/tokens';

export const Navbar = () => {
    return (
        <nav className="fixed top-0 left-0 right-0 z-[100] px-6 py-8">
            <div
                className="max-w-7xl mx-auto flex justify-between items-center rounded-full px-8 py-4 border"
                style={{
                    backgroundColor: glass.surface.thin,
                    backdropFilter: `blur(${glass.blur.navigation})`,
                    WebkitBackdropFilter: `blur(${glass.blur.navigation})`,
                    borderColor: 'rgba(233, 218, 192, 0.12)',
                }}
            >
                <div
                    className="text-2xl font-black tracking-tighter"
                    style={{ color: colors.bonewhite }}
                >
                    LANGUBRIDGE
                </div>
                <div className="hidden md:flex items-center gap-12">
                    {['Platform', 'Solutions', 'Contact'].map((link) => (
                        <a
                            key={link}
                            href={`#${link.toLowerCase()}`}
                            className="text-sm font-bold uppercase tracking-widest opacity-60 hover:opacity-100 transition-opacity"
                            style={{ color: colors.bonewhite }}
                        >
                            {link}
                        </a>
                    ))}
                </div>
                <div className="md:hidden">
                    <div className="w-6 h-[1px] mb-1" style={{ backgroundColor: colors.bonewhite }} />
                    <div className="w-4 h-[1px]" style={{ backgroundColor: colors.bonewhite }} />
                </div>
            </div>
        </nav>
    );
};

