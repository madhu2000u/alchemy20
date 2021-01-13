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
	//res.redirect(process.env.app_url + '/login');
	res.status(200).json(req.user);
});
module.exports = oauth_router;
