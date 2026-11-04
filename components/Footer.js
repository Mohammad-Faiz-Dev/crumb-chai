'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Instagram, MapPin, Clock, Mail } from 'lucide-react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 3000);
      setEmail('');
    }
  };

  return (
    <footer className="relative bg-chocolate text-cream mt-20">
      {/* Wavy top */}
      <div className="absolute -top-12 left-0 right-0">
        <svg viewBox="0 0 1440 120" className="w-full" preserveAspectRatio="none">
          <path
            fill="#3D2314"
            d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,64C960,75,1056,85,1152,80C1248,75,1344,53,1392,42.7L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 pt-20 pb-10 relative z-10">
        <div className="grid md:grid-cols-4 gap-10">
          <div>
            <h3 className="font-display text-3xl mb-4">Crumb & Chai</h3>
            <p className="opacity-80">Chai, Crunch & Good Vibes since 2019. Hauz Khas, New Delhi.</p>
          </div>

          <div>
            <h4 className="font-bold mb-4 flex items-center gap-2"><Clock size={18} /> Opening Hours</h4>
            <p>Mon – Sun: 10:00 AM – 11:00 PM</p>
            <p className="mt-2 flex items-center gap-2"><MapPin size={16} /> 12, Hauz Khas Village, New Delhi 110016</p>
          </div>

          <div>
            <h4 className="font-bold mb-4">Order On</h4>
            <div className="flex gap-4">
              <a href="https://www.swiggy.com" target="_blank" rel="noreferrer" className="bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-bold">Swiggy</a>
              <a href="https://www.zomato.com" target="_blank" rel="noreferrer" className="bg-red-600 text-white px-4 py-2 rounded-full text-sm font-bold">Zomato</a>
            </div>
            <div className="mt-6 grid grid-cols-3 gap-2">
              {[1,2,3,4,5,6].map(i => (
                <div key={i} className="aspect-square bg-mustard/20 rounded-lg flex items-center justify-center text-xs">IG</div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-4">Newsletter</h4>
            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                className="px-4 py-3 rounded-full text-chocolate outline-none"
                required
              />
              <button type="submit" className="bg-mustard text-chocolate font-bold py-3 rounded-full hover:scale-105 transition">
                {submitted ? '🎉 Joined!' : 'Subscribe'}
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-cream/20 text-center text-sm opacity-70">
          <p>© {new Date().getFullYear()} Crumb & Chai. All rights reserved.</p>
          <p className="mt-2">
            Website by{' '}
            <a href="https://mohammadfaiz.dev" className="underline hover:text-mustard" target="_blank" rel="noreferrer">
              Mohammad Faiz
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
