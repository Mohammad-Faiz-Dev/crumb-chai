'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { useRef, useEffect, useState } from 'react';
import MenuCard from '../components/MenuCard';
import SectionTitle from '../components/SectionTitle';

const bestsellers = [
  { id: 1, name: 'Crispy Chicken Burger', price: 249, veg: false, image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600' },
  { id: 2, name: 'Masala Chai', price: 89, veg: true, image: 'https://images.unsplash.com/photo-1571934811356-5cc061b6821f?w=600' },
  { id: 3, name: 'Paneer Wrap', price: 199, veg: true, image: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=600' },
  { id: 4, name: 'Chocolate Shake', price: 149, veg: true, image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=600' },
  { id: 5, name: 'Double Cheese Burger', price: 279, veg: false, image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?w=600' },
  { id: 6, name: 'Brownie Sundae', price: 169, veg: true, image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=600' },
];

function Counter({ end, label, suffix = '' }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([e]) => setInView(e.isIntersecting), { threshold: 0.5 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1800;
    const step = end / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [inView, end]);

  return (
    <div ref={ref} className="text-center">
      <div className="text-5xl font-display font-bold text-tomato">
        {count.toLocaleString()}{suffix}
      </div>
      <div className="mt-2 opacity-80">{label}</div>
    </div>
  );
}

export default function Home() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -140]);

  return (
    <div>
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-b from-mustard/20 to-cream" />
        <motion.img
          src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400"
          alt="Burger"
          className="absolute w-48 h-48 object-cover rounded-full shadow-2xl"
          style={{ y: y1, x: -200, top: '20%' }}
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.img
          src="https://images.unsplash.com/photo-1571934811356-5cc061b6821f?w=400"
          alt="Chai"
          className="absolute w-40 h-40 object-cover rounded-full shadow-2xl"
          style={{ y: y2, x: 180, top: '30%' }}
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 3.5, repeat: Infinity }}
        />
        <motion.img
          src="https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=400"
          alt="Fries"
          className="absolute w-36 h-36 object-cover rounded-full shadow-2xl"
          style={{ y: y3, x: 0, bottom: '15%' }}
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 5, repeat: Infinity }}
        />

        <div className="relative z-10 text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-tight"
          >
            Chai, Crunch<br />& Good Vibes
          </motion.h1>
          <p className="mt-6 text-xl max-w-2xl mx-auto opacity-90">
            Freshly made burgers, wraps, chai and shakes in the heart of Hauz Khas. Since 2019.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link href="/menu" className="bg-tomato text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:scale-105 transition">
              See Menu
            </Link>
            <a
              href="https://wa.me/919876543210?text=Hi!%20I%20want%20to%20order%20from%20Crumb%20%26%20Chai"
              className="bg-green-500 text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:scale-105 transition"
            >
              Order on WhatsApp
            </a>
          </div>
        </div>
      </section>

      <div className="bg-mustard py-4 overflow-hidden">
        <motion.div
          className="flex whitespace-nowrap font-display text-2xl font-bold text-chocolate"
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        >
          {Array(4).fill('Fresh • Hot • Made with Love • Since 2019 • ').map((t, i) => (
            <span key={i} className="mx-8">{t}</span>
          ))}
        </motion.div>
      </div>

      <section className="py-20 px-4">
        <SectionTitle>Bestsellers</SectionTitle>
        <div className="relative max-w-6xl mx-auto">
          <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-4 scrollbar-hide px-2">
            {bestsellers.map((item) => (
              <div key={item.id} className="snap-center flex-shrink-0 w-72">
                <MenuCard item={item} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-4 bg-mustard/5">
        <SectionTitle>How We Build It</SectionTitle>
        <div className="max-w-3xl mx-auto text-center space-y-8">
          {[
            { label: 'Sesame bun', emoji: '🍞' },
            { label: 'House patty', emoji: '🥩' },
            { label: 'Melted cheddar', emoji: '🧀' },
            { label: 'Fresh lettuce & tomato', emoji: '🥬' },
            { label: 'House sauce', emoji: '🥫' },
            { label: 'Top bun', emoji: '🍞' },
          ].map((layer, i) => (
            <motion.div
              key={layer.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="flex items-center justify-center gap-4 text-2xl font-display"
            >
              <span className="text-4xl">{layer.emoji}</span>
              <span>{layer.label}</span>
            </motion.div>
          ))}
          <div className="text-6xl mt-6">🍔</div>
        </div>
      </section>

      <section className="py-20 px-4">
        <SectionTitle>What People Say</SectionTitle>
        <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-6 max-w-6xl mx-auto">
          {[
            { name: 'Riya, Saket', text: 'Best masala chai in Hauz Khas. The crispy chicken burger is dangerous — I keep coming back.', stars: 5 },
            { name: 'Aman, Hauz Khas', text: 'Vibes are perfect. Paneer wrap + cold coffee after work is my ritual now.', stars: 5 },
            { name: 'Neha, Vasant Kunj', text: 'Delivery is actually 30 mins. Food arrives hot and the shakes are thick.', stars: 5 },
            { name: 'Kabir, Green Park', text: 'Finally a place that does both proper chai and a solid burger. Love the energy.', stars: 4 },
          ].map((t) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="snap-center flex-shrink-0 w-80 bg-white rounded-3xl p-6 shadow-lg border-2 border-mustard/40"
            >
              <div className="text-mustard mb-2">{'★'.repeat(t.stars)}</div>
              <p className="italic">"{t.text}"</p>
              <div className="mt-4 font-bold text-tomato">— {t.name}</div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-16 bg-mustard/10">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          <Counter end={50000} label="Cups Served" suffix="+" />
          <Counter end={4.7} label="★ on Zomato" />
          <div className="text-center"><div className="text-5xl font-display font-bold text-tomato">30</div><div className="mt-2">Min Delivery</div></div>
          <div className="text-center"><div className="text-5xl font-display font-bold text-tomato">2019</div><div className="mt-2">Since</div></div>
        </div>
      </section>

      <section className="py-20 text-center bg-tomato text-white">
        <h2 className="font-display text-4xl md:text-6xl font-bold">Hungry? We deliver in 30 mins.</h2>
        <a href="https://wa.me/919876543210" className="inline-block mt-8 bg-white text-tomato px-10 py-4 rounded-full font-bold text-xl hover:scale-105 transition">
          Order Now
        </a>
      </section>
    </div>
  );
}
