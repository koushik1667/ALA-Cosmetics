const Product = require('../models/Product');

exports.getProducts = async (_, res) => res.json(await Product.find());
exports.getProduct = async (req, res) => res.json(await Product.findById(req.params.id));
exports.createProduct = async (req, res) => res.status(201).json(await Product.create(req.body));
exports.updateProduct = async (req, res) => res.json(await Product.findByIdAndUpdate(req.params.id, req.body, { new: true }));
exports.deleteProduct = async (req, res) => {
  await Product.findByIdAndDelete(req.params.id);
  res.json({ message: 'Deleted' });
};
