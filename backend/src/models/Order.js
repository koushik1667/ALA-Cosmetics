const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  items: [{ productId: String, name: String, price: Number, quantity: Number }],
  amount: Number,
  status: { type: String, default: 'paid' },
  address: String
}, { timestamps: true });

module.exports = mongoose.model('Order', orderSchema);
