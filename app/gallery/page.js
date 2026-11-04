'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const images = [
  'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800',
  'https://images.unsplash.com/photo-1571934811356-5cc061b6821f?w=800',
  'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800',
  'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=800',
  'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=800',
  'https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=800',
];

export default function GalleryPage() {
  const [selected, setSelected] = useState(null);

  return (
    <div className="pt-28 pb-20 px-4 max-w-7xl mx-auto">
      <h1 className="font-display text-5xl font-bold text-center mb-12">Gallery</h1>
      <div className="columns-2 md:columns-3 gap-4">
        {images.map((src, i) => (
          <motion.img
            key={i}
            src={src}
            alt={`Gallery ${i + 1}`}
            className="mb-4 rounded-2xl cursor-pointer hover:scale-105 transition-transform break-inside-avoid"
            onClick={() => setSelected(i)}
            whileHover={{ scale: 1.05 }}
          />
        ))}
      </div>

      <AnimatePresence>
        {selected !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelected(null)}
          >
            <img src={images[selected]} alt="" className="max-w-full max-h-full object-contain rounded-2xl" />
            <button className="absolute top-6 right-6 text-white text-4xl" onClick={() => setSelected(null)}>×</button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
