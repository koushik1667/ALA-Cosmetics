'use client';

import { useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { products } from '@/data/products';
import { useShop } from '@/context/ShopContext';

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find((item) => item.id === id);
  const [shade, setShade] = useState(product?.shade || 'Nude');
  const { addToCart } = useShop();
  const router = useRouter();

  if (!product) return <p className="py-20">Product not found.</p>;

  return (
    <div className="grid gap-8 py-10 md:grid-cols-2">
      <div className="space-y-3">{product.images.map((img) => <img key={img} src={img} alt={product.name} className="h-80 w-full rounded-2xl object-cover" />)}</div>
      <div>
        <h1 className="text-3xl font-bold">{product.name}</h1>
        <p className="mt-2 text-xl">${product.price}</p>
        <p className="mt-4 text-neutral-600 dark:text-neutral-300">{product.description}</p>
        <div className="mt-4">
          <label className="text-sm">Shade</label>
          <select value={shade} onChange={(e) => setShade(e.target.value)} className="mt-2 block rounded-full border px-4 py-2">
            <option>Nude</option><option>Pink</option><option>Clear</option>
          </select>
        </div>
        <p className="mt-5 text-sm"><strong>Ingredients:</strong> {product.ingredients}</p>
        <p className="mt-3 text-sm">★★★★★ (4.9/5)</p>
        <div className="mt-6 flex gap-3">
          <button onClick={() => addToCart(product)} className="rounded-full bg-black px-6 py-3 text-white">Add to Cart</button>
          <button onClick={() => { addToCart(product); router.push('/checkout'); }} className="rounded-full border px-6 py-3">Buy Now</button>
        </div>
      </div>
    </div>
  );
}
