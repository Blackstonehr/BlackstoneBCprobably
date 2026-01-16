'use client'

import React from 'react';
import { motion, HTMLMotionProps } from '@liquid/tokens';
import { clsx, type ClassValue } from '@liquid/tokens';
import { twMerge } from '@liquid/tokens';
import { surfaces, glass, spring } from '@liquid/tokens';

// Utility for clean Tailwind classes
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface SurfaceProps extends Omit<HTMLMotionProps<"div">, "children"> {
  children?: React.ReactNode;
  intensity?: 'thin' | 'medium' | 'thick';
  interactive?: boolean;
}

export const Surface = ({
  children,
  className,
  intensity = 'medium',
  interactive = false,
  ...props
}: SurfaceProps) => {

  const intensityMap = {
    thin: glass.surface.thin,
    medium: glass.surface.medium,
    thick: glass.surface.thick,
  };

  return (
    <motion.div
      whileHover={interactive ? { scale: 1.01, translateY: -2 } : {}}
      transition={spring.liquid}
      className={cn(
        "relative overflow-hidden rounded-[14px] border border-bonewhite/5",
        "border-t-bonewhite/10 border-l-bonewhite/10", // Refractive highlight
        className
      )}
      style={{
        backgroundColor: intensityMap[intensity],
        backdropFilter: `blur(${glass.blur.card}) saturate(180%)`,
        WebkitBackdropFilter: `blur(${glass.blur.card}) saturate(180%)`,
        boxShadow: glass.highlight + ", 0 8px 32px rgba(0,0,0,0.4)",
        ...props.style
      }}
      {...(props as any)}
    >
      {/* Content Layer */}
      <div className="relative z-10 w-full h-full">
        {children}
      </div>
    </motion.div>
  );
};

export default Surface;