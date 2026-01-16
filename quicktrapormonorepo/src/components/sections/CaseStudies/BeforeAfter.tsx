import { motion } from "framer-motion";

interface BeforeAfterProps {
  before: string;
  after: string;
  caption: string;
}

export default function BeforeAfter({ before, after, caption }: BeforeAfterProps) {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Before Image */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="group relative rounded-xl overflow-hidden border border-red-100 shadow-sm"
        >
          <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-red-600 shadow-sm z-10">
            BEFORE
          </div>
          <img
            src={before}
            alt="Before installation"
            className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-red-900/10 group-hover:bg-transparent transition-colors duration-300" />
        </motion.div>

        {/* After Image */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="group relative rounded-xl overflow-hidden border border-brand-accent/20 shadow-md ring-1 ring-brand-accent/10"
        >
          <div className="absolute top-4 left-4 bg-brand-accent text-white px-3 py-1 rounded-full text-xs font-bold shadow-sm z-10">
            AFTER
          </div>
          <img
            src={after}
            alt="After installation"
            className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-brand-accent/5 group-hover:bg-transparent transition-colors duration-300" />
        </motion.div>
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="text-steel text-sm text-center italic max-w-2xl mx-auto bg-concrete/50 py-3 px-6 rounded-full"
      >
        {caption}
      </motion.p>
    </div>
  );
}
