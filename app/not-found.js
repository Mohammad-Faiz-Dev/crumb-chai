import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4 pt-20">
      <div className="text-8xl mb-6">🍵💦</div>
      <h1 className="font-display text-6xl font-bold mb-4">Oops! Spilled the chai</h1>
      <p className="text-xl mb-8 max-w-md">This page doesn't exist. Let's get you back to something delicious.</p>
      <Link href="/menu" className="bg-tomato text-white px-10 py-4 rounded-full font-bold text-lg hover:scale-105 transition">
        Back to the Menu
      </Link>
    </div>
  );
}
