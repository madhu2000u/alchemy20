'use strict';
const mailer = require('nodemailer');
const validator = require('email-validator');
const crypto = require('crypto');
const jwt = require('jsonwebtoken');
const User = require('../models/users');

exports.mailer = (to_email, sub, html) => {
	return new Promise((resolve, reject) => {
		try {
			let t = mailer.createTransport({
				service: 'gmail',
				auth: {
					user: process.env.alchemy_gmail,
					pass: process.env.alchemy_gmail_pass,
				},
			});

			const opt = {
				from: 'Alchemy-20<alchemy20@nitt.edu>',
				to: to_email,
				subject: sub,
				//html: '<h3>Verify your email by clicking the link <a href="localhost:3000/api/confirm/'+verification_token+'">here</a></h3>'
				html: html, //"Verify your email by clicking this link http://localhost:3000/api/confirm/" + verification_token
			};

			t.sendMail(opt, (err, info) => {
				if (err) {
					if (err.message.includes('Username and Password not accepted')) {
						err.message = `Could not send verification mail. Please contact support at ${process.env.alchemy_gmail}.`;
						reject(err);
					}
					reject(err);
				} else {
					resolve(info);
				}
			});
		} catch (error) {
			reject(error);
		}
	});
};

exports.validateEmail = (email) => {
	return validator.validate(email);
};

exports.validateGetapi = (req, res, next) => {
	const header = req.headers['get_api'];
	if (header == process.env.get_api_key) {
		next();
	} else {
		res.status(401);
		res.json('Unauthorized');
	}
};

exports.validatePostapi = (req, res, next) => {
	const header = req.headers['post_api'];
	if (header == process.env.post_api_key) {
		next();
	} else {
		res.status(401);
		res.json('Unauthorized');
	}
};

exports.validatePaymentWebhook=(req, res, next)=>{		//Validate with process.env.webhook_secret to confrim callback authenticity

}

exports.gen_alc_id = (curr_cout) => {
	//curr_count is the value 'len' passed from signup route in auth_route. it is the number of users in the current database. so if there are 10 users the the ALC id will be alloted as per the algorightm
	let alc_id = 'ALC';
	if (curr_cout < 10) {
		alc_id += '000' + curr_cout.toString();
		console.log('ALC id - ', alc_id);
	} else if ((curr_cout >= 10) & (curr_cout < 100)) {
		alc_id += '00' + curr_cout.toString();
	} else if ((curr_cout >= 100) & (curr_cout < 1000)) {
		alc_id += '0' + curr_cout.toString();
	} else {
		alc_id += curr_cout.toString();
	}
	return alc_id;
};

exports.gen_pass_hash = (password) => {
	const salt = crypto.randomBytes(64).toString('hex');
	const hashed_pass = crypto.pbkdf2Sync(password, salt, 1000, 64, 'sha512'); //returns hashed password
	const hash = {
		salt: salt,
		hashed_password: hashed_pass,
	};
	return hash;
};

exports.compare_pass = (hashed_pass, password, salt) => {
	return hashed_pass == crypto.pbkdf2Sync(password, salt, 1000, 64, 'sha512');
};

exports.validateUserLogin = (token) => {
	//send token for verificaiont to the respective function
	//return boolean
};

exports.jwtVerify = (req, res, next) => {
	const authHeader = req.body.headers['Authorization'];
	console.log(authHeader);
	if (authHeader) {
		const token = authHeader.split(' ')[1];
		jwt.verify(token, process.env.SECRET_ACCESS_TOKEN, (err, user) => {
			if (err) {
				console.log('jwtVerify error: ' + err);
				return res.status(403).json({message: 'User not allowed to perform this action'});
			}
			User.findOne({_id: user.id}).then((user_id) => {
				if (!user_id) {
					return res
						.status(403)
						.json({message: 'Auth token valid but user account not found. Please contact Admin'}); //Suppose user account was deleted by the admin maybe but the auth token was that was given is still active. Rarly happens but server will be more stable if at all it should encounter such issue.
				} else {
					req.user = user;
					console.log('inside jwtVerify, req - ', req.user);
					next();
				}
			});
		});
	} else {
		res.sendStatus(401).json({message: 'No access token sent'});
	}
};

exports.genAccessToken = (user) => {
	return jwt.sign(user, process.env.SECRET_ACCESS_TOKEN, {expiresIn: '6m'});
};

exports.genRefreshToken = (accessToken) => {
	return jwt.sign(accessToken, process.env.SECRET_REFRESH_TOKEN, {expiresIn: '60d'});
};
