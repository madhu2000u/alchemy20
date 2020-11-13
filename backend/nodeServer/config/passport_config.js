'use strict';

const passport = require('passport');
const google_strategy = require('passport-google-oauth20');

passport.use(
	new google_strategy(
		{
			callbackURL: 'api/oauth/google/redirect',
			clientID: process.env.oauth_clientID,
			clientSecret: process.env.oauth_clientSecret,
		},
		(authToken, refreshToken, profile, done) => {
			console.log('profile into', profile);
		}
	)
);
