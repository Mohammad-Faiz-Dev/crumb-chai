'use client';

import { motion } from 'framer-motion';

export default function SectionTitle({ children }) {
  return (
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="font-display text-4xl md:text-5xl font-bold text-center mb-12"
    >
      {children}
    </motion.h2>
  );
}
