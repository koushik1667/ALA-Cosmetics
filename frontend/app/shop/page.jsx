'use client';

import { useMemo, useState } from 'react';
import ProductCard from '@/components/ProductCard';
import { products } from '@/data/products';

export default function ShopPage() {
  const [shade, setShade] = useState('All');
  const [sort, setSort] = useState('asc');

  const filtered = useMemo(() => {
    const base = shade === 'All' ? products : products.filter((p) => p.shade === shade);
    return [...base].sort((a, b) => (sort === 'asc' ? a.price - b.price : b.price - a.price));
  }, [shade, sort]);

  return (
    <div className="py-10">
      <h1 className="text-3xl font-bold">Shop Gloss</h1>
      <div className="mt-6 flex flex-wrap gap-3">
        <select value={shade} onChange={(e) => setShade(e.target.value)} className="rounded-full border px-4 py-2">
          {['All', 'Nude', 'Pink', 'Clear'].map((s) => <option key={s}>{s}</option>)}
        </select>
        <select value={sort} onChange={(e) => setSort(e.target.value)} className="rounded-full border px-4 py-2">
          <option value="asc">Price: Low to High</option>
          <option value="desc">Price: High to Low</option>
        </select>
      </div>
      <div className="mt-6 grid gap-6 md:grid-cols-3">
        {filtered.map((product) => <ProductCard key={product.id} product={product} />)}
      </div>
    </div>
  );
}
