const Payments = require('../models/payments');
const events = require('../models/events');
const User = require('../models/users');
const razorpay = require('razorpay');

const razorpayInstance = new razorpay({
	key_id: process.env.rzp_key_id,
	key_secret: process.env.rzp_key_secret,
});

exports.createOrder = async (req, res) => {
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

	const user=await User.findOne({_id:req.user.id}, (err, user)=>{
		if(err) console.log("PaymentsController error: User couldn't be retrieved - ", err)
	})

	const prefill={
		name:user.name,
		email:user.email,
		contact:user.mobile
	}


	razorpayInstance.orders
		.create(options)
		.then(async (result) => {
			console.log('Create order creted, resonse - ', result);
			//await Payments.create({user_id:user._id})
			let payment=await Payments.findOne({user_id:user._id}, (err, result)=>{if(err)console.log("Payment finding error - ",err)})
			if(payment==null){
				payment=await Payments.create({user_id:user._id})
				console.log("this is the finding paymetns result - ", payment)

			}
			const details={event_id:workshop._id,
			receipt_id:result.receipt,
			order_id:result.id}
			//TODO: details object to be saved to payments.js
					res.status(200).json({
						id: result.id,
						amount: result.amount,
						currency: result.currency,
						prefill:prefill
					});




			// 		}).catch(err=>{console.log("PaymentsController Error: Could not create payments model - ", err)})
				}).catch((err) => {
					console.log('Create order not created, error - ', err);
				});

			//})
			

			
		
		
};
