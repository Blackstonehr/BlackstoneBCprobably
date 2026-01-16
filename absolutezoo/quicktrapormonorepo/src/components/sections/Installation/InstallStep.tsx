import { motion } from "framer-motion";
import { type LucideIcon } from "lucide-react";

interface InstallStepProps {
  number: number;
  title: string;
  desc: string;
  icon: LucideIcon;
  isLast?: boolean;
}

export default function InstallStep({ number, title, desc, icon: Icon, isLast }: InstallStepProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      className="relative pl-16 pb-12 group"
    >
      {/* Vertical Line */}
      {!isLast && (
        <div className="absolute left-[26px] top-12 bottom-0 w-0.5 bg-gradient-to-b from-brand-accent/30 to-transparent group-hover:from-brand-accent/60 transition-colors" />
      )}

      {/* Icon Badge */}
      <div className="absolute left-0 top-0 h-14 w-14 rounded-2xl bg-white border border-brand-accent/20 shadow-sm flex items-center justify-center group-hover:border-brand-accent group-hover:shadow-md transition-all duration-300 z-10">
        <Icon className="w-6 h-6 text-brand-accent" />
        <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-graphite text-white text-xs font-bold flex items-center justify-center border-2 border-white">
          {number}
        </div>
      </div>

      {/* Content */}
      <div className="pt-2">
        <h3 className="text-xl font-bold text-graphite mb-3 group-hover:text-brand-accent transition-colors">
          {title}
        </h3>
        <p className="text-steel text-base leading-relaxed max-w-xl">
          {desc}
        </p>
      </div>
    </motion.div>
  );
}
