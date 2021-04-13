const express = require('express');
const router = express.Router();
const utils=require('../functions/authUtils')
const PaymentController=require('../controllers/PaymentsController')

router.get('/create_order', utils.jwtVerify, utils.validateGetapi, PaymentController.createOrder)
//router.post('/payment_verification', utils.validatePaymentWebhook, PaymentController.paymentVerification)        //webhook enabled in razorpay


module.exports=router