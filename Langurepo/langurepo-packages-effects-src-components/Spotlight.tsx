'use client'

import React from 'react';
import { motion } from '@liquid/tokens';

export const Spotlight = ({ children }: { children: React.ReactNode }) => (
  <motion.div
    className="relative"
    animate={{
      boxShadow: [
        "0 0 0 rgba(0,0,0,0)",
        "0 0 20px rgba(0,0,0,0.2)",
        "0 0 0 rgba(0,0,0,0)",
      ],
    }}
    transition={{ repeat: Infinity, duration: 4 }}
  >
    {children}
  </motion.div>
);
