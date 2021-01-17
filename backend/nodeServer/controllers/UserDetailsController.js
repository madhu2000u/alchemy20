const User = require('../models/users');

exports.AddUserDetails = (req, res) => {
	console.log('Inside user details controller req - ', req.user, req.body);
	const body = req.body;

	if (!body.name || !body.mobile || !body.college || !body.dept || !body.year_of_study) {
		res.status(401).json({message: 'Required fields missing'});
	}

	User.findOne({_id: req.user.id}).then((result) => {
		if (!result) {
			res.status(403).json({message: "Invalid auth token or user doesn't exist. Please login again"});
		} else if (result.mobile) {
			console.log(result.mobile);
			res.status(409).json({message: 'Already filled'});
		} else {
			User.updateOne({_id: req.user.id}, body)
				.then((result) => {
					console.log('AddUserDetails result: ' + result);
					res.sendStatus(200);
				})
				.catch((err) => {
					res.status(401).json({error: err});
				});
		}
	});
};

exports.checkUserDetails = (req, res, next) => {
	User.findOne({_id: req.user.id}).then((result) => {
		if (!result) {
			res.status(403).json({message: "Invalid auth token or user doesn't exist. Please login again"});
		} else if (result.mobile) {
			console.log(result.mobile);
			next();
		} else {
			res.status(404).json({message: 'Fill details before event/workshop registration'});
		}
	});
};
