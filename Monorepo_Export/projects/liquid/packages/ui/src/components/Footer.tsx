'use client';

import React from 'react';
import { Text } from './Text';
import { colors } from '@liquid/tokens';

export const Footer = () => {
    return (
        <footer className="py-24 border-t" style={{ backgroundColor: colors.midnight, borderColor: colors.border.subtle }}>
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-start gap-12">
                    <div className="space-y-6">
                        <h2 className="text-4xl font-black text-bonewhite tracking-tighter uppercase">LANGUBRIDGE</h2>
                        <Text className="text-bonewhite/20 max-w-xs leading-relaxed italic font-light">
                            Engineering premium digital environments through the intersection of logic and luxury.
                        </Text>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-12 w-full md:w-auto">
                        <div className="space-y-4">
                            <h4 className="text-bonewhite/40 text-xs font-bold uppercase tracking-[0.3em]">System</h4>
                            <ul className="space-y-2">
                                <li><a href="#" className="text-bonewhite/20 hover:text-bonewhite text-sm transition-colors font-medium">Platform</a></li>
                                <li><a href="#" className="text-bonewhite/20 hover:text-bonewhite text-sm transition-colors font-medium">Solutions</a></li>
                                <li><a href="#" className="text-bonewhite/20 hover:text-bonewhite text-sm transition-colors font-medium">Architecture</a></li>
                            </ul>
                        </div>
                        <div className="space-y-4">
                            <h4 className="text-bonewhite/40 text-xs font-bold uppercase tracking-[0.3em]">Network</h4>
                            <ul className="space-y-2">
                                <li><a href="#" className="text-bonewhite/20 hover:text-bonewhite text-sm transition-colors font-medium">Twitter</a></li>
                                <li><a href="#" className="text-bonewhite/20 hover:text-bonewhite text-sm transition-colors font-medium">LinkedIn</a></li>
                                <li><a href="#" className="text-bonewhite/20 hover:text-bonewhite text-sm transition-colors font-medium">Contact</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="mt-24 pt-8 border-t border-bonewhite/5 flex flex-col md:flex-row justify-between items-center gap-6">
                    <Text className="text-[10px] text-bonewhite/10 uppercase tracking-[0.4em] font-medium">
                        © 2025 LANGUBRIDGE ARCHITECTURE. PROTOTYPE V2.0
                    </Text>
                    <div className="flex gap-8">
                        <a href="#" className="text-[10px] text-bonewhite/10 uppercase tracking-[0.4em] hover:text-bonewhite transition-colors font-medium">Legal</a>
                        <a href="#" className="text-[10px] text-bonewhite/10 uppercase tracking-[0.4em] hover:text-bonewhite transition-colors font-medium">Protocol</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};
