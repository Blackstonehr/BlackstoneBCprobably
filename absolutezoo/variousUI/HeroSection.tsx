import React from 'react';
import { motion } from 'framer-motion';

export interface HeroSectionProps {
  /**
   * The main title of the hero section.
   */
  title: string;
  /**
   * The subtitle or descriptive text.
   */
  subtitle: string;
  /**
   * The text for the primary call-to-action button.
   */
  ctaText: string;
  /**
   * The URL for the primary call-to-action button.
   */
  ctaLink: string;
  /**
   * Controls the visual theme of the component.
   */
  variant?: 'obsidian-neon' | 'aether-light';
  /**
   * Determines if animations should be enabled.
   */
  animated?: boolean;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  subtitle,
  ctaText,
  ctaLink,
  variant = 'obsidian-neon',
  animated = true,
}) => {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.2 } },
  };

  return (
    <motion.div
      className={`flex flex-col items-center justify-center p-16 text-center ${
        variant === 'obsidian-neon' ? 'bg-black text-white' : 'bg-gray-100 text-black'
      }`}
      variants={animated ? containerVariants : undefined}
      initial="hidden"
      animate="visible"
    >
      <motion.h1 variants={containerVariants} className="text-5xl font-bold mb-4">
        {title}
      </motion.h1>
      <motion.p variants={containerVariants} className="text-xl mb-8 max-w-2xl">
        {subtitle}
      </motion.p>
      <motion.a
        href={ctaLink}
        variants={containerVariants}
        className={`px-8 py-3 rounded-full font-bold transition-colors ${
          variant === 'obsidian-neon'
            ? 'bg-purple-500 hover:bg-purple-600'
            /            : 'bg-blue-500 hover:bg-blue-600 text-white'
        }`}
      >
        {ctaText}
      </motion.a>
    </motion.div>
  );
};