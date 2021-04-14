const Payments = require('../models/payments');
const events = require('../models/events');
const User = require('../models/users');
const razorpay = require('razorpay');

const razorpayInstance = new razorpay({
	key_id: process.env.rzp_key_id,
	key_secret: process.env.rzp_key_secret,
});

exports.createOrder = async (req, res) => {
	let user_details = {};
	User.findOne({_id: req.user.id}).then((result) => {
		if (!result) {
			console.log(err);
		} else {
			user_details.name = result.name;
			user_details.mobile = result.mobile;
			user_details.email = result.email;
		}
	});

	const workshop = await events.findOne({_id: req.headers['event_id']}, (err, result) => {
		if (err) console.log('createOrder Error - ', err);
	});

	if (workshop.event_type != 'workshop')
		return res.status(403).json({message: 'Event provided is not of type workshop'});

	const options = {
		amount: (parseInt(workshop.event_cost) * 100).toString(), //razorpay works with the smallest unit of currenty that is paise, so we need to pass in the amount in paise
		currency: 'INR',
		receipt: 'rcptid_' + Math.random().toString(36).substr(2, 9),
	};

	const user = await User.findOne({_id: req.user.id}, (err, user) => {
		if (err) console.log("PaymentsController error: User couldn't be retrieved - ", err);
	});

	const prefill = {
		name: user.name,
		email: user.email,
		contact: user.mobile,
	};

	razorpayInstance.orders
		.create(options)
		.then(async (result) => {
			console.log('Create order creted, resonse - ', result);
			//await Payments.create({user_id:user._id})
			let payment = await Payments.findOne({user_id: user._id}, (err, result) => {
				if (err) console.log('Payment finding error - ', err);
			});
			if (payment == null) {
				payment = await Payments.create({user_id: user._id});
				console.log('this is the finding paymetns result - ', payment);
			}
			const details = {event_id: workshop._id, receipt_id: result.receipt, order_id: result.id};
			//TODO: details object to be saved to payments.js
			res.status(200).json({
				id: result.id,
				amount: result.amount,
				currency: result.currency,
				prefill: prefill,
			});

			// 		}).catch(err=>{console.log("PaymentsController Error: Could not create payments model - ", err)})
		})
		.catch((err) => {
			console.log('Create order not created, error - ', err);
		});

	//})
};

exports.paymentVerification = async (req, res) => {
	// const received_signature = req.headers['x-razorpay-signature']
	// req.body.payload gives -
	// {"payment":
	// 	{"entity":
	// 		{"id":"pay_Gylu5Q339WJBGn",
	// 		"entity":"payment",
	// 		"amount":30000,
	// 		"currency":"INR",
	// 		"status":"captured",
	// 		"order_id":"order_GylroLV4V1w1r6",
	// 		"invoice_id":null,
	// 		"international":false,
	// 		"method":"upi",
	// 		"amount_refunded":0,
	// 		"refund_status":null,
	// 		"captured":true,
	// 		"description":"Alchemy workshops - Simulation Workshop on Aspen",
	// 		"card_id":null,
	// 		"bank":null,
	// 		"wallet":null,
	// 		"vpa":"success@razorpay",
	// 		"email":"sidharthshambu00@gmail.com",
	// 		"contact":"+919445737949",
	// 		"notes":[],
	// 		"fee":708,
	// 		"tax":108,
	// 		"error_code":null,
	// 		"error_description":null,
	// 		"error_source":null,
	// 		"error_step":null,
	// 		"error_reason":null,
	// 		"acquirer_data":{
	// 			"rrn":"333253312354",
	// 			"upi_transaction_id":"A53B763C476350ED5565DC56200546F4"
	// 		},
	// 		"created_at":1618396892
	// 		}
	// 	}
	// }

	// TODO(): Add in payments model

	console.log(JSON.stringify(req.body.payload));
	res.json({status: 200});
};
