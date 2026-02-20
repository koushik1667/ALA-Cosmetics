const router = require('express').Router();
const { createOrder, getOrders, createStripeSession } = require('../controllers/orderController');
const { protect, adminOnly } = require('../middleware/auth');

router.post('/', protect, createOrder);
router.get('/', protect, adminOnly, getOrders);
router.post('/stripe-session', protect, createStripeSession);

module.exports = router;
