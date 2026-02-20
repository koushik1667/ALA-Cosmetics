import Link from 'next/link';

export default function OrderConfirmationPage() {
  return (
    <div className="py-20 text-center">
      <h1 className="text-4xl font-black">Order Confirmed ✨</h1>
      <p className="mt-4">Thank you for shopping with Ala. A confirmation email is on its way.</p>
      <Link href="/shop" className="mt-6 inline-block rounded-full bg-black px-6 py-3 text-white">Continue Shopping</Link>
    </div>
  );
}
