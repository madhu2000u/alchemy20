const User = require('../models/users');

exports.AddUserDetails = (req, res) => {
	console.log('Inside user details controller req - ', req.user, req.body);
	const body = req.body;

	if (!body.name || !body.mobile || !body.college || !body.dept || !body.year_of_study) {
		res.status(401).json({message: 'Required fields missing'});
	}

	User.update({_id: req.user.id}, body)
		.then((result) => {
			console.log('AddUserDetails result: ' + result);
			res.sendStatus(200);
		})
		.catch((err) => {
			res.status(401).json({error: err});
		});
};
