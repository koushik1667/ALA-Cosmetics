const Stripe = require('stripe');
const Order = require('../models/Order');
const { sendOrderEmail } = require('../utils/sendEmail');

exports.createOrder = async (req, res) => {
  const { items, amount, email, address } = req.body;
  const order = await Order.create({ user: req.user.id, items, amount, address });
  await sendOrderEmail(email, order._id.toString());
  res.status(201).json(order);
};

exports.getOrders = async (_, res) => res.json(await Order.find().populate('user', 'name email'));

exports.createStripeSession = async (req, res) => {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
  const { amount } = req.body;
  const session = await stripe.checkout.sessions.create({
    mode: 'payment',
    payment_method_types: ['card'],
    line_items: [{ quantity: 1, price_data: { currency: 'usd', product_data: { name: 'Ala Order' }, unit_amount: Math.round(amount * 100) } }],
    success_url: `${process.env.CLIENT_URL}/order-confirmation`,
    cancel_url: `${process.env.CLIENT_URL}/cart`
  });
  res.json({ url: session.url });
};
