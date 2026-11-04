'use client';

import { motion } from 'framer-motion';
import SectionTitle from '../../components/SectionTitle';

export default function AboutPage() {
  return (
    <div className="pt-28 pb-20">
      <SectionTitle>Our Story</SectionTitle>
      <div className="max-w-4xl mx-auto px-4 space-y-16">
        <div className="relative pl-8 border-l-4 border-mustard">
          {[
            { year: '2019', text: 'Started with a small stall in Hauz Khas serving the best masala chai.' },
            { year: '2021', text: 'Expanded to burgers and wraps. Became the neighbourhood favourite.' },
            { year: '2024', text: 'Opened our full café with shakes, desserts and 30-min delivery.' },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="mb-10"
            >
              <div className="absolute -left-3 w-6 h-6 bg-tomato rounded-full" />
              <h3 className="font-display text-2xl font-bold">{item.year}</h3>
              <p className="mt-2">{item.text}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {['Chef Rahul', 'Barista Priya', 'Founder Arjun'].map((name, i) => (
            <motion.div
              key={name}
              whileHover={{ rotateY: 180 }}
              className="bg-white rounded-3xl p-6 text-center shadow-lg h-48 flex items-center justify-center"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div className="font-display text-xl font-bold">{name}</div>
            </motion.div>
          ))}
        </div>

        <div className="relative h-96 rounded-3xl overflow-hidden">
          <motion.div
            initial={{ clipPath: 'inset(0 100% 0 0)' }}
            whileInView={{ clipPath: 'inset(0 0% 0 0)' }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="absolute inset-0"
          >
            <img
              src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=1200"
              alt="Our kitchen"
              className="w-full h-full object-cover"
            />
          </motion.div>
          <div className="absolute inset-0 bg-black/30 flex items-end p-8">
            <h3 className="text-white font-display text-4xl">Our Kitchen</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
