require('dotenv').config();
const connectDB = require('../src/config/db');
const Product = require('../src/models/Product');

const seed = async () => {
  await connectDB();
  await Product.deleteMany({});
  await Product.insertMany([
    {
      name: 'Ala Gloss – Crystal Nude',
      price: 14.99,
      shade: 'Nude',
      description: 'Ultra-hydrating, high-shine gloss with long-lasting formula.',
      ingredients: 'Jojoba Oil, Vitamin E, Hyaluronic Acid',
      image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=900&q=80'
    }
  ]);
  console.log('Seeded');
  process.exit(0);
};

seed();
