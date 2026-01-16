'use client';

import React from 'react';
import { motion, AnimatePresence } from '@liquid/tokens';
import { Plus, X } from '@liquid/tokens';
import { Surface } from './Surface';
import { Text } from './Text';
import { useState } from 'react';

interface PopoutItem {
    id: number;
    url: string;
    title: string;
    description: string;
    tags: string[];
}

const items: PopoutItem[] = [
    {
        id: 1,
        url: 'https://images.unsplash.com/photo-1757672242146-a6a7897bcc80?auto=format&fit=crop&w=1171&q=80',
        title: 'Experience Layer',
        description: 'Immerse yourself in our cutting-edge interactive gallery, designed to showcase visual content with unparalleled clarity and style.',
        tags: ['Interactive', 'Visual', 'Modern'],
    },
    {
        id: 2,
        url: 'https://images.unsplash.com/photo-1756806983725-977bb2308d4e?auto=format&fit=crop&w=1170&q=80',
        title: 'Global Logic',
        description: 'Spin the globe with a flick of your mouse, zoom into street-level views, or soar high for a continental perspective.',
        tags: ['Data', 'Real-time', 'Scale'],
    },
    {
        id: 3,
        url: 'https://images.unsplash.com/photo-1756806983832-1f056cf24182?auto=format&fit=crop&w=1170&q=80',
        title: 'Motion Trail',
        description: 'A trail of carefully curated images follows in its wake, creating a dynamic and engaging visual spectacle.',
        tags: ['FX', 'Particle', 'Canvas'],
    },
];

export const PopoutCard = () => {
    const [selectedId, setSelectedId] = useState<number | null>(null);

    return (
        <div className="flex flex-wrap gap-8 justify-center items-center py-24 bg-midnight">
            {items.map((item) => (
                <motion.div
                    key={item.id}
                    layoutId={`card-${item.id}`}
                    onClick={() => setSelectedId(item.id)}
                    className="relative w-80 h-96 cursor-pointer group"
                >
                    <Surface intensity="medium" interactive className="h-full border-bonewhite/10 overflow-hidden">
                        <img
                            src={item.url}
                            className="w-full h-full object-cover grayscale brightness-50 transition-all duration-700 group-hover:grayscale-0 group-hover:brightness-100 group-hover:scale-105"
                            alt={item.title}
                        />
                        <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-midnight to-transparent">
                            <h3 className="text-2xl font-bold text-bonewhite">{item.title}</h3>
                        </div>
                        <div className="absolute top-4 right-4 p-2 bg-bonewhite/10 backdrop-blur-xl border border-bonewhite/20 rounded-full">
                            <Plus className="text-bonewhite w-4 h-4" />
                        </div>
                    </Surface>
                </motion.div>
            ))}

            <AnimatePresence>
                {selectedId && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-6 md:p-24 backdrop-blur-xl bg-midnight/80">
                        <motion.div
                            layoutId={`card-${selectedId}`}
                            className="w-full max-w-5xl overflow-hidden"
                        >
                            <Surface intensity="thick" className="border-bonewhite/20 overflow-hidden">
                                <div className="grid grid-cols-1 lg:grid-cols-2">
                                    <div className="h-[400px] lg:h-full overflow-hidden">
                                        <img
                                            src={items.find(i => i.id === selectedId)?.url}
                                            className="w-full h-full object-cover"
                                            alt="Project"
                                        />
                                    </div>
                                    <div className="p-8 md:p-12 space-y-8 flex flex-col justify-center">
                                        <div className="space-y-4">
                                            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
                                                <h2 className="text-5xl md:text-6xl font-bold text-bonewhite tracking-tight">
                                                    {items.find(i => i.id === selectedId)?.title}
                                                </h2>
                                                <Text className="text-xl text-bonewhite/60 mt-6 leading-relaxed italic">
                                                    {items.find(i => i.id === selectedId)?.description}
                                                </Text>
                                            </motion.div>
                                        </div>
                                        <div className="flex flex-wrap gap-3">
                                            {items.find(i => i.id === selectedId)?.tags.map(tag => (
                                                <span key={tag} className="px-4 py-2 bg-bonewhite/5 border border-bonewhite/10 rounded-full text-xs font-bold uppercase tracking-widest text-bonewhite/60">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                        <button
                                            onClick={(e) => { e.stopPropagation(); setSelectedId(null); }}
                                            className="absolute top-8 right-8 p-3 bg-bonewhite text-midnight rounded-full hover:scale-110 transition-transform"
                                        >
                                            <X className="w-5 h-5" />
                                        </button>
                                    </div>
                                </div>
                            </Surface>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </div>
    );
};
