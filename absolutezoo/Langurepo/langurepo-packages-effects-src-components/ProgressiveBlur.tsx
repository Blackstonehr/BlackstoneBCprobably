'use client';
import React from 'react';
import { clsx, type ClassValue } from '@liquid/tokens';
import { twMerge } from '@liquid/tokens';

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

interface ProgressiveBlurProps {
    children: React.ReactNode;
    className?: string;
    blur?: number;
}

export const ProgressiveBlur = ({
    children,
    className,
    blur = 40,
}: ProgressiveBlurProps) => {
    return (
        <div className={cn("relative overflow-hidden group", className)}>
            {/* Content */}
            <div className="relative z-0">
                {children}
            </div>

            {/* Progressive Blur Layer */}
            <div
                className="absolute inset-0 z-10 pointer-events-none"
                style={{
                    backdropFilter: `blur(${blur}px)`,
                    WebkitBackdropFilter: `blur(${blur}px)`,
                    maskImage: 'radial-gradient(circle at center, transparent 30%, black 100%)',
                    WebkitMaskImage: 'radial-gradient(circle at center, transparent 30%, black 100%)',
                }}
            />

            {/* Vignette Overlay */}
            <div className="absolute inset-0 z-20 pointer-events-none bg-gradient-to-t from-midnight/90 via-transparent to-transparent" />
        </div>
    );
};
