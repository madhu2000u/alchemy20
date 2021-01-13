const oauth_router = require('express').Router();
const passport = require('passport');
require('../routes/oauth');
oauth_router.get('/google', passport.authenticate('google', {scope: ['profile', 'email']}), (req, res) => {
	console.log('inside /google');
});

// oauth_router.get("/login", (req, res) => {       we are not rendering any login screen

// })
// oauth_router.get('/success', (req,res) =>{
// 	console.log('/success - ', req.user);
// 	res.status(200).json(req.user);

// })
// oauth_router.get('/auth/logout', (req, res) => {
// 	console.log('logout - ', req)
// 	req.session=null;
// 	req.logout();
// 	res.sendStatus(200)
// });

//callback to handle google redirect
oauth_router.get('/oauth/google/redirect', passport.authenticate('google', {session: false}), (req, res) => {

	console.log('inside oauth_router -', req.user.refreshToken);
	
	const cookie=`${req.user.auth_token+" "+ req.user.refreshToken}`
	console.log("c - ", cookie)
	res.cookie('tokens', cookie, {secure: process.env.app_url.includes('https')?true:false}).redirect(process.env.app_url+'/dashboard');

	//res.redirect(process.env.app_url + '/login');
	//res.status(200).json(req.user);
});
module.exports = oauth_router;
