'use strict';

const passport = require('passport');
const google_strategy = require('passport-google-oauth20');
const oauthController = require('../controllers/OauthController');

passport.use(
	new google_strategy(
		{
			callbackURL: '/api/oauth/google/redirect',
			clientID: process.env.oauth_clientID,
			clientSecret: process.env.oauth_clientSecret,
		},
		(authToken, refreshToken, profile, done) => {
			//console.log('profile into', profile);
			console.log('auth token', authToken);
			console.log('refresh token', refreshToken);
			const user = {
				google_id: profile.id,
				name: profile._json.name,
				email: profile._json.email,
				profile_pic: profile._json.picture,
				acc_active: profile._json.email_verified,
			};
			oauthController
				.oauth(user)
				.then((result) => {
					console.log('oauthController done result - ', result);
					done(null, result);
				})
				.catch((err) => done(err));
			//const user={name:"madhu",mob:123}
		}
	)
);
