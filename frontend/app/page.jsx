'use client';

import { Sparkles, ShieldCheck, Truck, WandSparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import ProductCard from '@/components/ProductCard';
import { products } from '@/data/products';

const features = [
  { icon: Sparkles, title: 'Mirror Shine', text: 'Ultra-glossy finish that catches every light.' },
  { icon: ShieldCheck, title: 'Long Lasting', text: 'Comfortable wear that stays fresh for hours.' },
  { icon: WandSparkles, title: 'Hydrating', text: 'Skincare-powered formula with peptide care.' },
  { icon: Truck, title: 'Fast Delivery', text: 'Quick, trackable shipping on every order.' }
];

export default function Home() {
  return (
    <div className="space-y-16 py-8">
      <section className="gradient-card rounded-3xl p-10 text-center shadow-glow">
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl font-black md:text-6xl">Shine Different. Shine Ala.</motion.h1>
        <p className="mx-auto mt-4 max-w-xl text-neutral-700">Premium, glossy, long-lasting lip gloss for confident, trend-led beauty.</p>
        <Link href="/shop" className="mt-8 inline-block rounded-full bg-black px-8 py-3 text-white">Shop Now</Link>
      </section>

      <section>
        <h2 className="text-2xl font-bold">Featured Products</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {products.map((product) => <ProductCard key={product.id} product={product} />)}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold">Why Choose Ala</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-4">
          {features.map(({ icon: Icon, title, text }) => (
            <article key={title} className="rounded-2xl border border-black/10 p-5 dark:border-white/20">
              <Icon className="mb-3" />
              <h3 className="font-semibold">{title}</h3>
              <p className="text-sm text-neutral-500">{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        {['“The gloss is unreal.”', '“My daily go-to glow.”', '“Looks luxe, feels weightless.”'].map((quote) => (
          <blockquote key={quote} className="rounded-2xl bg-white p-6 dark:bg-black/40">{quote}</blockquote>
        ))}
      </section>

      <section>
        <h2 className="text-2xl font-bold">Ala Feed</h2>
        <div className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-4">
          {products.map((item) => <img key={item.id} src={item.image} alt={item.name} className="h-40 w-full rounded-xl object-cover" />)}
        </div>
      </section>

      <section className="rounded-3xl bg-black p-8 text-center text-white">
        <h2 className="text-2xl font-bold">Join the Gloss Club</h2>
        <p className="mt-2 text-sm text-white/80">Exclusive drops, early access, and beauty tips in your inbox.</p>
        <form className="mx-auto mt-5 flex max-w-md gap-2">
          <input type="email" placeholder="you@example.com" className="w-full rounded-full px-4 py-2 text-black" />
          <button className="rounded-full bg-blush px-5 py-2 text-black">Join</button>
        </form>
      </section>
    </div>
  );
}
