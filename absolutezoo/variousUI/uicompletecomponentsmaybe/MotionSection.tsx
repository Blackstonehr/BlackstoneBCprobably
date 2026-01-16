"use client";

import { motion } from "framer-motion";
import * as React from "react";

type MotionSectionProps = {
  children: React.ReactNode;
  className?: string;
};

export const MotionSection = ({ children, className = "" }: MotionSectionProps) => (
  <motion.section
    className={className}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.5 }}
  >
    {children}
  </motion.section>
);
