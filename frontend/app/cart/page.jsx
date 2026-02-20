'use client';

import Link from 'next/link';
import { useShop } from '@/context/ShopContext';

export default function CartPage() {
  const { cart, updateQuantity, removeFromCart, totals } = useShop();

  return (
    <div className="py-10">
      <h1 className="text-3xl font-bold">Your Cart</h1>
      <div className="mt-8 grid gap-8 md:grid-cols-[2fr,1fr]">
        <div className="space-y-4">
          {cart.length === 0 && <p>Your cart is empty.</p>}
          {cart.map((item) => (
            <article key={item.id} className="flex items-center gap-4 rounded-2xl bg-white p-4 dark:bg-black/30">
              <img src={item.image} alt={item.name} className="h-20 w-20 rounded-xl object-cover" />
              <div className="flex-1">
                <h3 className="font-semibold">{item.name}</h3>
                <p>${item.price}</p>
                <input type="number" min="1" value={item.quantity} onChange={(e) => updateQuantity(item.id, Number(e.target.value))} className="mt-2 w-20 rounded border px-2 py-1" />
              </div>
              <button onClick={() => removeFromCart(item.id)} className="text-sm">Remove</button>
            </article>
          ))}
        </div>
        <aside className="rounded-2xl bg-white p-6 dark:bg-black/30">
          <h2 className="text-xl font-semibold">Summary</h2>
          <div className="mt-4 space-y-2 text-sm">
            <p>Subtotal: ${totals.subtotal.toFixed(2)}</p>
            <p>Tax: ${totals.tax.toFixed(2)}</p>
            <p>Shipping: ${totals.shipping.toFixed(2)}</p>
            <p className="font-bold">Total: ${totals.total.toFixed(2)}</p>
          </div>
          <Link href="/checkout" className="mt-5 block rounded-full bg-black py-2 text-center text-white">Checkout</Link>
        </aside>
      </div>
    </div>
  );
}
