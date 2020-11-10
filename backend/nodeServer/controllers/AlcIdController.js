const user_token = require('../models/user_tokens');
const users = require('../models/users');

exports.alcId = (req, res) => {
	try {
		const header = req.headers['auth_token'];
		if (header == null) {
			res.status(400).json({message: 'Not logged in'});
		} else {
			user_token
				.findOne({auth_token: header})
				.then((user_token_result) => {
					if (user_token_result == null) {
						res.status(401).json({message: 'Unauthorized'});
					} else {
						users
							.findOne({_id: user_token_result.user_id})
							.then((user_result) => {
								res.status(200).json({alc_id: user_result.alc_id});
							})
							.catch((user_err) => {
								console.log('Error in alcid user_token - ', user_err);
								res.status(500).json({message: 'Internal server error'});
							});
					}
				})
				.catch((user_token_err) => {
					console.log('Error in alcid user_token - ', user_token_err);
				});
		}
	} catch (error) {
		console.log('Error in alcid route', error);
	}
};
