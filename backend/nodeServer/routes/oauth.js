const oauth_router = require('express').Router();
const passport = require('passport');
require('../routes/oauth');
oauth_router.get('/google', passport.authenticate('google', {scope: ['profile', 'email']}), (req, res) => {
	console.log('inside /google');
});

// oauth_router.get("/login", (req, res) => {       we are not rendering any login screen

// })

oauth_router.get('/logout', (req, res) => {});

//callback to handle google redirect
oauth_router.get('/oauth/google/redirect', passport.authenticate('google', {session: false}), (req, res) => {
	console.log('inside oauth_router -', req.user);
	res.send({
		name: req.user.name,
		email: req.user.email,
		profile_pic: req.user.profile_pic,
	});
});
module.exports = oauth_router;
