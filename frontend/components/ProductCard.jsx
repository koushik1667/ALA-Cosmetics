'use client';

import Link from 'next/link';
import { Heart } from 'lucide-react';
import { useShop } from '@/context/ShopContext';

export default function ProductCard({ product }) {
  const { addToCart, toggleWishlist, wishlist } = useShop();
  const liked = wishlist.some((item) => item.id === product.id);

  return (
    <article className="rounded-2xl bg-white p-4 shadow-sm transition hover:-translate-y-1 hover:shadow-xl dark:bg-black/40">
      <img src={product.image} alt={product.name} className="h-56 w-full rounded-xl object-cover" />
      <div className="mt-4 flex items-start justify-between">
        <div>
          <Link href={`/product/${product.id}`} className="font-semibold">{product.name}</Link>
          <p className="text-sm text-neutral-500">{product.shade} • ${product.price}</p>
        </div>
        <button onClick={() => toggleWishlist(product)} className={liked ? 'text-pink-500' : ''}><Heart size={18} /></button>
      </div>
      <button onClick={() => addToCart(product)} className="mt-4 w-full rounded-full bg-black py-2 text-sm text-white dark:bg-white dark:text-black">Add to Cart</button>
    </article>
  );
}
