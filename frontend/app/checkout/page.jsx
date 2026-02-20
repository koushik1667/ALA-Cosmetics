'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useShop } from '@/context/ShopContext';

export default function CheckoutPage() {
  const { totals } = useShop();
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleCheckout = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch('/api/checkout-session', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ amount: totals.total }) });
      const data = await res.json();
      if (data.url) window.location.href = data.url;
      else router.push('/order-confirmation');
    } catch {
      router.push('/order-confirmation');
    }
  };

  return (
    <div className="py-10">
      <h1 className="text-3xl font-bold">Secure Checkout</h1>
      <form onSubmit={handleCheckout} className="mt-6 grid gap-3 rounded-2xl bg-white p-6 md:grid-cols-2 dark:bg-black/30">
        <input required placeholder="Full Name" className="rounded border px-3 py-2" />
        <input required type="email" placeholder="Email" className="rounded border px-3 py-2" />
        <input required placeholder="Address" className="rounded border px-3 py-2 md:col-span-2" />
        <input required placeholder="City" className="rounded border px-3 py-2" />
        <input required placeholder="Postal Code" className="rounded border px-3 py-2" />
        <div className="md:col-span-2">
          <p className="mb-3 text-sm">Order Total: ${totals.total.toFixed(2)}</p>
          <button disabled={loading} className="rounded-full bg-black px-6 py-3 text-white">{loading ? 'Redirecting…' : 'Pay with Stripe'}</button>
        </div>
      </form>
    </div>
  );
}
