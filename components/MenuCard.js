'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function MenuCard({ item }) {
  const [added, setAdded] = useState(false);

  return (
    <motion.div
      layout
      whileHover={{ y: -8 }}
      className="bg-white rounded-3xl overflow-hidden shadow-lg border-2 border-mustard/30"
    >
      <div className="relative h-48">
        <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
        <div className={`absolute top-3 right-3 w-4 h-4 rounded-full ${item.veg ? 'bg-green-500' : 'bg-red-500'} border-2 border-white`} />
      </div>
      <div className="p-5">
        <h3 className="font-display text-xl font-bold">{item.name}</h3>
        <p className="text-2xl font-bold text-tomato mt-1">₹{item.price}</p>
        <button
          onClick={() => setAdded(true)}
          className="mt-4 w-full bg-mustard text-chocolate font-bold py-3 rounded-full hover:scale-105 transition relative overflow-hidden"
        >
          <motion.span
            animate={added ? { scale: [1, 1.3, 1] } : {}}
            onAnimationComplete={() => setTimeout(() => setAdded(false), 500)}
          >
            {added ? 'Added!' : 'Add'}
          </motion.span>
        </button>
      </div>
    </motion.div>
  );
}
