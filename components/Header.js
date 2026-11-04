'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';

const navItems = [
  { name: 'Home', href: '/' },
  {
    name: 'Menu',
    href: '/menu',
    dropdown: [
      { name: 'Burgers', href: '/menu?cat=burgers' },
      { name: 'Wraps', href: '/menu?cat=wraps' },
      { name: 'Chai & Coffee', href: '/menu?cat=chai' },
      { name: 'Shakes', href: '/menu?cat=shakes' },
      { name: 'Desserts', href: '/menu?cat=desserts' },
    ],
  },
  { name: 'About', href: '/about' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Contact', href: '/contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-cream/95 backdrop-blur-md shadow-lg py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <motion.div
            whileHover={{ rotate: [0, -10, 10, -5, 0], scale: 1.1 }}
            transition={{ type: 'spring', stiffness: 300 }}
            className="w-12 h-12 bg-mustard rounded-full flex items-center justify-center text-2xl font-display font-bold text-chocolate shadow-lg"
          >
            C&C
          </motion.div>
          <span className="font-display font-bold text-2xl text-chocolate hidden sm:block">
            Crumb & Chai
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <div
              key={item.name}
              className="relative"
              onMouseEnter={() => item.dropdown && setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <Link
                href={item.href}
                className="font-medium hover:text-tomato transition-colors flex items-center gap-1"
              >
                {item.name}
                {item.dropdown && <ChevronDown size={16} />}
              </Link>
              {item.dropdown && (
                <AnimatePresence>
                  {dropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute top-full left-0 mt-2 bg-white rounded-2xl shadow-xl p-3 min-w-[180px] border border-mustard/20"
                    >
                      {item.dropdown.map((sub) => (
                        <Link
                          key={sub.name}
                          href={sub.href}
                          className="block px-4 py-2 rounded-xl hover:bg-mustard/20 transition-colors"
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              )}
            </div>
          ))}
        </nav>

        <Link
          href="/contact"
          className="hidden lg:block bg-tomato text-white px-6 py-3 rounded-full font-bold shadow-lg hover:shadow-xl hover:scale-105 transition-all animate-bounce"
        >
          Order Now
        </Link>

        <button
          className="lg:hidden p-2"
          onClick={() => setMobileOpen(true)}
          aria-label="Open menu"
        >
          <Menu size={28} />
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-chocolate z-[100] flex flex-col items-center justify-center lg:hidden"
          >
            <button
              className="absolute top-6 right-6 text-cream"
              onClick={() => setMobileOpen(false)}
              aria-label="Close menu"
            >
              <X size={32} />
            </button>
            <nav className="flex flex-col items-center gap-8 text-3xl font-display text-cream">
              {navItems.map((item, i) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link href={item.href} onClick={() => setMobileOpen(false)}>
                    {item.name}
                  </Link>
                </motion.div>
              ))}
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="bg-tomato px-8 py-4 rounded-full text-xl mt-4"
              >
                Order Now
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
