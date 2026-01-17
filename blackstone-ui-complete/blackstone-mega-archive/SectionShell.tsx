import React from 'react';
import { motion } from 'framer-motion';
import { cva, type VariantProps } from 'class-variance-authority';

const sectionShellVariants = cva('p-8 md:p-16 lg:p-24 w-full', {
  variants: {
    variant: {
      'obsidian-neon': 'bg-black text-white',
      'aether-light': 'bg-white text-black',
      transparent: 'bg-transparent',
    },
  },
  defaultVariants: {
    variant: 'transparent',
  },
});

export interface SectionShellProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof sectionShellVariants> {
  as?: 'section' | 'div';
}

export const SectionShell: React.FC<SectionShellProps> = ({
  className,
  variant,
  as: Comp = 'section',
  ...props
}) => {
  return <Comp className={sectionShellVariants({ variant, className })} {...props} />;
};