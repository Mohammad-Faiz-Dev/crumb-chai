'use client';

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import MenuCard from '../../components/MenuCard';

const allItems = [
  { id: 1, name: 'Crispy Chicken Burger', price: 249, veg: false, category: 'burgers', image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600' },
  { id: 2, name: 'Veggie Delight Burger', price: 189, veg: true, category: 'burgers', image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?w=600' },
  { id: 3, name: 'Paneer Tikka Wrap', price: 199, veg: true, category: 'wraps', image: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=600' },
  { id: 4, name: 'Chicken Shawarma Wrap', price: 229, veg: false, category: 'wraps', image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=600' },
  { id: 5, name: 'Masala Chai', price: 89, veg: true, category: 'chai', image: 'https://images.unsplash.com/photo-1571934811356-5cc061b6821f?w=600' },
  { id: 6, name: 'Cold Coffee', price: 129, veg: true, category: 'chai', image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=600' },
  { id: 7, name: 'Chocolate Oreo Shake', price: 149, veg: true, category: 'shakes', image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=600' },
  { id: 8, name: 'Strawberry Shake', price: 139, veg: true, category: 'shakes', image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=600' },
  { id: 9, name: 'Brownie Sundae', price: 169, veg: true, category: 'desserts', image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=600' },
  { id: 10, name: 'Gulab Jamun', price: 99, veg: true, category: 'desserts', image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=600' },
];

const categories = ['all', 'burgers', 'wraps', 'chai', 'shakes', 'desserts'];

export default function MenuPage() {
  const [cat, setCat] = useState('all');
  const [search, setSearch] = useState('');
  const [vegOnly, setVegOnly] = useState(false);

  const filtered = useMemo(() => {
    return allItems.filter(item => {
      const matchCat = cat === 'all' || item.category === cat;
      const matchSearch = item.name.toLowerCase().includes(search.toLowerCase());
      const matchVeg = !vegOnly || item.veg;
      return matchCat && matchSearch && matchVeg;
    });
  }, [cat, search, vegOnly]);

  return (
    <div className="pt-28 pb-20 px-4 max-w-7xl mx-auto">
      <h1 className="font-display text-5xl font-bold text-center mb-8">Our Menu</h1>

      <div className="flex flex-col md:flex-row gap-4 mb-8 sticky top-20 bg-cream/90 backdrop-blur z-30 py-4">
        <input
          type="text"
          placeholder="Search menu..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 px-6 py-3 rounded-full border-2 border-mustard outline-none"
        />
        <label className="flex items-center gap-2 bg-white px-6 py-3 rounded-full cursor-pointer">
          <input type="checkbox" checked={vegOnly} onChange={(e) => setVegOnly(e.target.checked)} />
          Veg Only
        </label>
      </div>

      <div className="flex gap-4 overflow-x-auto pb-4 mb-8">
        {categories.map(c => (
          <button
            key={c}
            onClick={() => setCat(c)}
            className={`px-6 py-2 rounded-full font-bold capitalize whitespace-nowrap relative ${
              cat === c ? 'text-white' : 'text-chocolate bg-white'
            }`}
          >
            {cat === c && (
              <motion.div layoutId="underline" className="absolute inset-0 bg-tomato rounded-full" />
            )}
            <span className="relative z-10">{c}</span>
          </button>
        ))}
      </div>

      <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence>
          {filtered.map(item => (
            <MenuCard key={item.id} item={item} />
          ))}
        </AnimatePresence>
      </motion.div>

      {filtered.length === 0 && <p className="text-center text-xl mt-10">No items found. Try another search!</p>}
    </div>
  );
}
