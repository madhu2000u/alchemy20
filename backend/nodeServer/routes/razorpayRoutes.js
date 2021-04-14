const express = require('express');
const router = express.Router();
const utils = require('../functions/authUtils');
const PaymentController = require('../controllers/PaymentsController');

router.post('/create_order', utils.validateGetapi, utils.jwtVerify, PaymentController.createOrder);
router.post('/payment_verification', utils.validatePaymentWebhook, PaymentController.paymentVerification); //webhook enabled in razorpay

module.exports = router;
