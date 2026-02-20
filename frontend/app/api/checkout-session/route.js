import Stripe from 'stripe';

export async function POST(req) {
  const { amount } = await req.json();

  if (!process.env.STRIPE_SECRET_KEY) {
    return Response.json({ url: '/order-confirmation' });
  }

  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: [
      {
        price_data: {
          currency: 'usd',
          product_data: { name: 'Ala Gloss Order' },
          unit_amount: Math.round(amount * 100)
        },
        quantity: 1
      }
    ],
    mode: 'payment',
    success_url: `${process.env.NEXT_PUBLIC_SITE_URL}/order-confirmation`,
    cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL}/cart`
  });

  return Response.json({ url: session.url });
}
