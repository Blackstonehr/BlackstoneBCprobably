"use client";

import { SectionShell } from "../ui/SectionShell";
import { GlossyCard } from "../ui/GlossyCard";
import { motion } from "framer-motion";

export function ContactSection() {
  return (
    <SectionShell>
      <GlossyCard>
        <div className="text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Engage Blackstone
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Ready to gain a strategic advantage? Contact us to discuss your human capital needs and learn how Blackstone can elevate your operations.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-neon-blue text-white font-bold rounded-lg shadow-neon-blue hover:bg-opacity-90 transition-all"
          >
            Initiate Command
          </motion.button>
        </div>
      </GlossyCard>
    </SectionShell>
  );
}
