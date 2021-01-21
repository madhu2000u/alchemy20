const crypto = require('crypto');
const utils = require('../functions/authUtils');
const acc_verify = require('../functions/activationUtils');
const User = require('../models/users');
const UserToken = require('../models/user_tokens');
const TempUser = require('../models/tempActivationUser');
const RegisteredEvent = require('../models/registered_students');
const RefreshToken = require('../models/refreshtoken');
const passwordChange = require('../models/password_change');
const jwt = require('jsonwebtoken');
const EmailTemplates = require('../functions/emailTemplates');

exports.signUp = (req, res) => {
	const body = req.body;
	console.log(body);
	//regex to indetify phone number
	if (!body.email || !body.password) {
		res.status(400).json({message: 'Bad request. One or more requried fields are missing'});
	} else {
		User.findOne({email: body.email}).then((result) => {
			if (result !== null) {
				console.log(result);
				res.status(409).json({message: 'Email already exists! Login instead'});
			} else {
				let alc_id = 'ALC';
				User.find()
					.then((result) => {
						//these are ES6 functions (aurgument1,aurgument2)=>{<statements>} .then is executed when the db successfuly finds the docs and .catch is used if some error occurs
						const len = result.length;
						alc_id = utils.gen_alc_id(len);
						const hashed_password = utils.gen_pass_hash(body.password);
						const newUser = new User({
							//creates the new userSchema object newUser
							alc_id: alc_id,
							email: body.email,
							hashed_password: hashed_password.hashed_password,
							// name: body.name,
							// mobile: body.mobile,
							// college: body.college,
							// dept: body.department,
							// year_of_study: body.year_of_study,
							// accommodation: body.requires_accommodation,
							acc_active: false,
						});

						User.create(newUser)
							.then((result) => {
								RegisteredEvent.create({user_id: result._id, event_reg: []})

									.then((res) => {
										console.log(res);
									})
									.catch((err) => console.log(err));

								//create a new doc newUser, this create() returns a promise and .then is used to handle when the creation is successfull and the callback function with return parameter returns the created document. And the .cathc is used to handle any error that arises when creating the doc
								const tokens = new UserToken({
									user_id: result._id,
									salt: hashed_password.salt,
									//auth_token: crypto.randomBytes(64).toString('hex'),
									refreshToken: '',
								});
								UserToken.create(tokens)
									.then(() => {
										//so once the newUser is created, we need to store their individual aut_tokens to later authorize the api calls they do in front-end. so a seprate collection for and it and the user_id attribute of thi token collectio is the _id of th user collection (so they are basically linked).
										console.log('Sign up user_token created');
										console.log('result values - ', result._id, result.email);
										acc_verify
											.sendVerificationMail(result._id, result.email)
											.then((verif_mail) => {
												res.status(201).json({
													message: 'User registered successfully',
													verif_mail: verif_mail,
												});
												console.log(verif_mail);
											})
											.catch((err) => {
												res.status(403).json(err);
												console.log('sendVerificationMail() error - ', err.message);
											});
									})
									.catch((err) => {
										console.log(err);
										//res.status(500).json({message:"Internal Server Error",err})
									});

								// res.status(201)
								// res.json({message:"User registered successfully!"})
							})
							.catch((err) => {
								console.log(err);
								if (err.code == 11000) {
									res.status(409);
									res.json({message: 'Email already exists! Login instead'});
								}
							});
					})
					.catch((err) => {
						console.log('Error in auth finding for user collection with given mail - ', err);
					});
			}
		});
	}
};

exports.signIn = (req, res) => {
	const body = req.body;
	console.log('body - ', body);
	if (!body.email || !body.password) {
		res.status(400).json({message: 'Bad request. One or more requried fields are missing'});
		return;
	}
	if (!utils.validateEmail(body.email)) {
		res.status(400).json({message: 'Invalid email'});
		return;
	}
	User.findOne({email: body.email}, (err, result) => {
		//here instead of using the promise's .then and .catch, I have used the findOne() function's callback method which returens a respons and the found document and an error if any. I'm just using this just for a change and to see how it is different from the Promise way of handling.
		if (err) {
			res.status(500).json({message: 'Internal server error'});
		} else if (!result) {
			res.status(404).json({message: 'Email not registered '});
		} else if (result.google_id) {
			res.status(409).json({message: 'Use google oauth'});
		} else {
			UserToken.findOne({user_id: result._id}, (err, user_tokens_result) => {
				//to get the salt for comparing the password. Salt is stored in user_tokens collection. callback method type used instead of the promise's .then and .catch type due to same reason as above comment
				if (err) {
					res.status(500).json({message: 'Internal server error'});
				} else {
					let password_compare = utils.compare_pass(
						result.hashed_password,
						body.password,
						user_tokens_result.salt
					);
					if (!password_compare) {
						//comparing password
						res.status(401).json({message: 'Invalid password'});
						return;
					} else if (!result.acc_active) {
						res.status(403).json({
							message: 'Account not activated. Please check you registered email for verification link',
						});
						return;
					} else if (result.acc_active & password_compare) {
						const payload = {
							id: user_tokens_result.user_id,
						};
						const auth_token = utils.genAccessToken(payload);
						const refreshToken = utils.genRefreshToken(payload);

						RefreshToken.create({refreshToken: refreshToken}, (err, result) => {
							if (err) {
								res.status(500).json({message: 'Internal server error'});
							} else {
								res.status(200).json({
									auth_token: auth_token,
									refreshToken: refreshToken,
									name: result.name,
									profile_pic: result.profile_pic,
								});
								return;
							}
						});
					}
				}
			});
		}
		return;
	});
};

exports.logout = (req, res) => {
	const refreshToken = req.body.headers['refreshToken'];
	if (!refreshToken) {
		res.sendStatus(401);
	}

	RefreshToken.deleteOne({refreshToken: refreshToken}).then((result) => {
		res.sendStatus(200);
	});
};

exports.Verify = (req, res) => {
	TempUser.findOne({verification_token: req.params.verification_token})
		.then((actvn_result) => {
			//finds the _id using the verification token sent to their mail as a parameter
			console.log('actvn_result - ', actvn_result);
			if (actvn_result != null) {
				User.updateOne({_id: actvn_result.user_id}, {acc_active: true}).then((result) => {
					//then uses the _id to update the account status to active so user can login
					res.status(200);
					console.log(actvn_result);
					User.findOne({_id: actvn_result.user_id})
						.then((conf_user_id) => {
							//conf_user_id is the result mongoose gives after findOne using _id which contains a json format of the user collection
							acc_verify
								.sendConfirmationMail(conf_user_id.email)
								.then((info) => {
									//also in the above line, user_id is the _id in the user collection which is linked to the tempActivation collection
									console.log(info);
								})
								.catch((err) => {
									console.log(err);
								});
						})
						.catch((err) => {
							console.log('Error in activation route while finding user collection- ', err);
						});
					TempUser.deleteOne({user_id: actvn_result.user_id}, (err) => {
						console.log('Error in verification token when when deleting tempActivaion - ', err);
					});
					res.redirect(process.env.app_url);
				});
			} else {
				res.status(200);
				res.redirect(process.env.app_url);
			}
		})
		.catch((err) => {
			console.log('Error in email verificaion temp_actvn_user - ', err);
		});
};

exports.ResendVerify = (req, res) => {
	if (!utils.validateEmail(req.body.headers['email'])) {
		res.status(400).json({message: 'Invalid email'});
	} else {
		User.findOne({email: req.body.headers['email']}).then((user_result) => {
			if (user_result == null) {
				res.status(404).json({message: 'Email not registered'});
			} else {
				acc_verify
					.resendVerificationMail(req.body.headers['email'])
					.then((result) => {
						res.status(200).json({message: result.message});
					})
					.catch((err) => {
						console.log('Resend email error - ', err);
						res.status(500).json({message: 'Internal server error'});
					});
			}
		});
	}
};

exports.newAccessToken = (req, res) => {
	//sending request token as body
	const refreshToken = req.body.headers['refreshtoken'];
	console.log(refreshToken);

	RefreshToken.find()
		.then((result) => {
			const hasRefreshToken = result.some((token) => token['refreshToken'] == refreshToken);
			if (!refreshToken || !hasRefreshToken) {
				return res.status(404).json({message: 'Refresh token not found, login again'});
			}
			// If the refresh token is valid, create a new accessToken and return it.
			jwt.verify(refreshToken, process.env.SECRET_REFRESH_TOKEN, (err, user) => {
				if (!err) {
					const accessToken = jwt.sign({id: user.id}, process.env.SECRET_ACCESS_TOKEN, {
						expiresIn: '5m',
					});
					return res.json({success: true, accessToken});
				} else {
					return res.json({
						success: false,
						message: 'Invalid refresh token',
					});
				}
			});
		})
		.catch((err) => {
			console.log(err);
			res.status(500).json({message: 'Internal server error'});
		});
};

exports.ForgotPassword = (req, res) => {
	const email = req.headers['email'];
	if (!email) {
		return res.status(400).json({message: 'Email field missing'});
	}
	User.findOne({email: email}).then((user) => {
		if (!user) {
			return res.status(404).json({message: 'No account registered with this email'});
		}
		passwordChange.findOne({user_id: user._id}).then((result) => {
			console.log(result);
			const un_hashed_token = crypto.randomBytes(64).toString('hex');
			const hash = utils.gen_pass_hash(un_hashed_token); //this is the token_hash

			const passChange = {
				id: hash.hashed_password, //token_hash is used as the ID of the table
				token: un_hashed_token,
				salt: hash.salt,
				user_id: user._id,
				time: new Date(),
			};

			const sub = 'Alchemy password reset request';
			const html = EmailTemplates.getForgotPasswordEmail(process.env.app_url, un_hashed_token);

			if (result) {
				passwordChange
					.updateOne({user_id: result.user_id}, passChange)
					.then((result) => {
						utils
							.mailer(email, sub, html)
							.then((result) => {
								console.log('Password reset request mail sent', result);
								res.status(200).json({
									success: 'Password reset link has been sent to the registered mail id',
								});
							})
							.catch((err) => {
								console.log('forgot password email sending error', err);
							});
					})
					.catch((err) => {
						console.log('forgot password passChange error', err);
					});
			} else {
				passwordChange
					.create(passChange)
					.then((result) => {
						utils
							.mailer(email, sub, html)
							.then((result) => {
								console.log('Password reset request mail sent', result);
								res.status(200).json({
									success: 'Password reset link has been sent to the registered mail id',
								});
							})
							.catch((err) => {
								console.log('forgot password email sending error', err);
							});
					})
					.catch((err) => {
						console.log('forgot password passChange error', err);
					});
			}
		});
	});
};

exports.ResetPassword = (req, res) => {
	const id = req.headers['id']; //this is the same is the un_hashed_token in the ForgotPassword function
	const newPass = req.headers['new_pass'];
	if (!id) {
		return res.status(400).json({message: 'id field missing'});
	}
	if (!newPass) {
		return res.status(400).json({message: 'newPass not provided'});
	}
	passwordChange.findOne({token: id}).then((result) => {
		if (!result) {
			return res.status(403).json({message: 'Invlaid reset ID / link'});
		} else if (new Date() - result.time > 900000) {
			passwordChange
				.deleteOne({token: id})
				.then((result) => {
					return res.status(403).json({message: 'Link has expired'});
				})
				.catch((err) => {
					console.log(err);
				});
		}
		if (utils.compare_pass(result.id, id, result.salt)) {
			const newPassHash = utils.gen_pass_hash(newPass);
			// console.log(newPassHash.hashed_password)
			// console.log(newPassHash.salt)

			User.update({_id: result.user_id}, {hashed_password: newPassHash.hashed_password})
				.then((user_result) => {
					UserToken.update({user_id: result.user_id}, {salt: newPassHash.salt})
						.then((user_tokens_result) => {
							res.status(200).json({message: 'Your Password has been updated'});
							passwordChange.deleteOne({token: id}, (err) => {
								console.log('error in deleting passwordChange - ', err);
							});
						})
						.catch((err) => {
							console.log('reset password user token error - ', error);
						});
				})
				.catch((err) => {
					console.log('reset password user error - ', err);
				});
		}
	});
};
