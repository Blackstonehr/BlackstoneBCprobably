import React from 'react';
import { motion } from 'framer-motion';
import { cva, type VariantProps } from 'class-variance-authority';

const cardVariants = cva(
  'relative overflow-hidden rounded-lg p-6 shadow-lg transition-shadow duration-300 hover:shadow-xl',
  {
    variants: {
      variant: {
        'obsidian-neon':
          'bg-gray-900/50 text-white backdrop-blur-sm border border-white/10',
        'aether-light':
          'bg-white/50 text-black backdrop-blur-sm border border-black/10',
      },
    },
    defaultVariants: {
      variant: 'obsidian-neon',
    },
  }
);

export interface GlossyMetricCardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {
  /**
   * The label for the metric (e.g., "Active Users").
   */
  label: string;
  /**
   * The main value of the metric.
   */
  value: string;
  /**
   * Optional text for change indicator (e.g., "+5.2%").
   */
  change?: string;
}

export const GlossyMetricCard: React.FC<GlossyMetricCardProps> = ({
  className,
  variant,
  label,
  value,
  change,
  intent = 'positive',
  animated = true,
  ...props
}) => {
  const changeColor = {
    positive: 'text-green-400',
    negative: 'text-red-400',
    neutral: 'text-gray-400',
  }[intent];

  return (
    <motion.div
      className={cardVariants({ variant, className })}
      initial={animated ? { opacity: 0, y: 10 } : false}
      animate={{ opacity: 1, y: 0 }}
      {...props}
    >
      <p className="text-sm uppercase tracking-wider opacity-70">{label}</p>
      <p className="text-4xl font-bold mt-2">{value}</p>
      {change && <p className={`text-sm mt-2 ${changeColor}`}>{change}</p>}
    </motion.div>
  );
};