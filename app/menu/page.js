'use client';

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import MenuCard from '../../components/MenuCard';

const allItems = [
  // Burgers
  { id: 1, name: 'Crispy Chicken Burger', price: 249, veg: false, category: 'burgers', image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600' },
  { id: 2, name: 'Veggie Delight Burger', price: 189, veg: true, category: 'burgers', image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?w=600' },
  { id: 3, name: 'Double Cheese Burger', price: 279, veg: false, category: 'burgers', image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?w=600' },
  { id: 4, name: 'Paneer Tikka Burger', price: 219, veg: true, category: 'burgers', image: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=600' },
  { id: 5, name: 'Spicy Aloo Tikki Burger', price: 169, veg: true, category: 'burgers', image: 'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=600' },
  { id: 6, name: 'Classic Beef Burger', price: 299, veg: false, category: 'burgers', image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600' },
  { id: 7, name: 'Mushroom Swiss Burger', price: 239, veg: true, category: 'burgers', image: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d?w=600' },

  // Wraps
  { id: 8, name: 'Paneer Tikka Wrap', price: 199, veg: true, category: 'wraps', image: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=600' },
  { id: 9, name: 'Chicken Shawarma Wrap', price: 229, veg: false, category: 'wraps', image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=600' },
  { id: 10, name: 'Falafel Hummus Wrap', price: 189, veg: true, category: 'wraps', image: 'https://images.unsplash.com/photo-1529006557810-274b9b2fc783?w=600' },
  { id: 11, name: 'Grilled Chicken Wrap', price: 219, veg: false, category: 'wraps', image: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=600' },
  { id: 12, name: 'Veggie Loaded Wrap', price: 179, veg: true, category: 'wraps', image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=600' },

  // Chai & Coffee
  { id: 13, name: 'Masala Chai', price: 89, veg: true, category: 'chai', image: 'https://images.unsplash.com/photo-1571934811356-5cc061b6821f?w=600' },
  { id: 14, name: 'Cold Coffee', price: 129, veg: true, category: 'chai', image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=600' },
  { id: 15, name: 'Adrak Elaichi Chai', price: 99, veg: true, category: 'chai', image: 'https://images.unsplash.com/photo-1571934811356-5cc061b6821f?w=600' },
  { id: 16, name: 'Cappuccino', price: 149, veg: true, category: 'chai', image: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?w=600' },
  { id: 17, name: 'Iced Americano', price: 139, veg: true, category: 'chai', image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=600' },
  { id: 18, name: 'Cardamom Latte', price: 159, veg: true, category: 'chai', image: 'https://images.unsplash.com/photo-1578314675249-a6910f80cc4e?w=600' },
  { id: 19, name: 'Filter Coffee', price: 79, veg: true, category: 'chai', image: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?w=600' },

  // Shakes
  { id: 20, name: 'Chocolate Oreo Shake', price: 149, veg: true, category: 'shakes', image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=600' },
  { id: 21, name: 'Strawberry Shake', price: 139, veg: true, category: 'shakes', image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=600' },
  { id: 22, name: 'Mango Lassi Shake', price: 129, veg: true, category: 'shakes', image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=600' },
  { id: 23, name: 'Vanilla Bean Shake', price: 149, veg: true, category: 'shakes', image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=600' },
  { id: 24, name: 'Banana Caramel Shake', price: 159, veg: true, category: 'shakes', image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=600' },
  { id: 25, name: 'Cold Coffee Shake', price: 139, veg: true, category: 'shakes', image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=600' },

  // Desserts
  { id: 26, name: 'Brownie Sundae', price: 169, veg: true, category: 'desserts', image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=600' },
  { id: 27, name: 'Gulab Jamun', price: 99, veg: true, category: 'desserts', image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=600' },
  { id: 28, name: 'Chocolate Lava Cake', price: 189, veg: true, category: 'desserts', image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=600' },
  { id: 29, name: 'Cheesecake Slice', price: 179, veg: true, category: 'desserts', image: 'https://images.unsplash.com/photo-1533134486753-c833f0ed4866?w=600' },
  { id: 30, name: 'Waffle with Ice Cream', price: 159, veg: true, category: 'desserts', image: 'https://images.unsplash.com/photo-1562376552-0d160a2f238d?w=600' },
  { id: 31, name: 'Rasmalai', price: 119, veg: true, category: 'desserts', image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=600' },
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
