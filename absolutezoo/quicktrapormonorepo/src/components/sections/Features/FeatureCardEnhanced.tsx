import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  title: string;
  desc: string;
  icon: LucideIcon;
  index?: number;
}

export default function FeatureCardEnhanced({ title, desc, icon: Icon, index = 0 }: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative bg-white rounded-2xl p-8 border border-gray-100 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 overflow-hidden"
    >
      {/* Background Gradient on Hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Number Badge */}
      <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
        <span className="text-6xl font-bold text-brand-accent font-mono">
          {String(index + 1).padStart(2, '0')}
        </span>
      </div>

      <div className="relative z-10">
        {/* Icon Container */}
        <div className="mb-6 inline-flex p-4 rounded-xl bg-brand-accent/5 text-brand-accent group-hover:bg-brand-accent group-hover:text-white transition-colors duration-300">
          <Icon className="w-8 h-8" strokeWidth={1.5} />
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-graphite mb-3 group-hover:text-brand-accent transition-colors">
          {title}
        </h3>

        {/* Description */}
        <p className="text-steel leading-relaxed">
          {desc}
        </p>

        {/* Learn More Link (Optional) */}
        <div className="mt-6 flex items-center text-sm font-medium text-brand-accent opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
          <span>Learn more</span>
          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </div>
      </div>
    </motion.div>
  );
}
