import { motion } from "framer-motion";
import { Maximize2 } from "lucide-react";

export default function ProductRender() {
  return (
    <section id="render" className="mb-20">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-graphite">Isometric Render</h2>
        <button className="text-sm text-brand-accent font-medium hover:underline flex items-center gap-1">
          <Maximize2 className="w-4 h-4" />
          View Fullscreen
        </button>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative rounded-2xl overflow-hidden border border-gray-100 shadow-card bg-white group"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-concrete to-white z-0" />

        {/* Blueprint Grid Background */}
        <div className="blueprint-grid absolute inset-0 opacity-10 z-0" />

        <div className="relative z-10 p-8 flex items-center justify-center min-h-[400px]">
          <img
            src="/images/render_quicktrap.png"
            alt="Quicktrap Render"
            className="w-full h-auto max-w-lg object-contain drop-shadow-2xl transform group-hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* Interactive Hotspots (Placeholder) */}
        <div className="absolute top-1/2 left-1/2 w-4 h-4 bg-brand-accent rounded-full animate-ping opacity-75 z-20 pointer-events-none" />
      </motion.div>
    </section>
  );
}
