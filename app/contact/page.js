'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', phone: '', date: '', guests: '2', time: '7:00 PM' });
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  const validate = () => {
    const e = {};
    if (!form.name) e.name = 'Name required';
    if (!form.phone || form.phone.length < 10) e.phone = 'Valid phone required';
    if (!form.date) e.date = 'Date required';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setSuccess(true);
      setTimeout(() => setSuccess(false), 4000);
    }
  };

  return (
    <div className="pt-28 pb-20 px-4 max-w-6xl mx-auto">
      <h1 className="font-display text-5xl font-bold text-center mb-12">Reserve a Table</h1>
      <div className="grid md:grid-cols-2 gap-12">
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <input
              placeholder="Your Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full px-5 py-4 rounded-2xl border-2 border-mustard outline-none"
            />
            {errors.name && <p className="text-tomato text-sm mt-1">{errors.name}</p>}
          </div>
          <div>
            <input
              placeholder="Phone (+91)"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              className="w-full px-5 py-4 rounded-2xl border-2 border-mustard outline-none"
            />
            {errors.phone && <p className="text-tomato text-sm mt-1">{errors.phone}</p>}
          </div>
          <input
            type="date"
            value={form.date}
            onChange={(e) => setForm({ ...form, date: e.target.value })}
            className="w-full px-5 py-4 rounded-2xl border-2 border-mustard outline-none"
          />
          <select
            value={form.guests}
            onChange={(e) => setForm({ ...form, guests: e.target.value })}
            className="w-full px-5 py-4 rounded-2xl border-2 border-mustard outline-none"
          >
            {[1,2,3,4,5,6,7,8].map(n => <option key={n}>{n} Guests</option>)}
          </select>
          <select
            value={form.time}
            onChange={(e) => setForm({ ...form, time: e.target.value })}
            className="w-full px-5 py-4 rounded-2xl border-2 border-mustard outline-none"
          >
            {['12:00 PM','1:00 PM','2:00 PM','6:00 PM','7:00 PM','8:00 PM','9:00 PM'].map(t => (
              <option key={t}>{t}</option>
            ))}
          </select>
          <button type="submit" className="w-full bg-tomato text-white font-bold py-4 rounded-full text-lg hover:scale-105 transition">
            Book Table
          </button>
          {success && (
            <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="text-center text-green-600 font-bold text-xl">
              🎉 Reservation confirmed! We'll WhatsApp you.
            </motion.div>
          )}
        </form>

        <div>
          <div className="h-80 rounded-3xl overflow-hidden mb-6">
            <iframe
              src="https://maps.google.com/maps?q=Hauz%20Khas%20Village%20New%20Delhi&t=&z=15&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full border-0"
              title="Map"
            />
          </div>
          <a
            href="https://wa.me/919876543210?text=Hi!%20I%20want%20to%20reserve%20a%20table%20at%20Crumb%20%26%20Chai"
            className="block text-center bg-green-500 text-white font-bold py-4 rounded-full"
          >
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
