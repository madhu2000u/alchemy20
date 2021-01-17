const express = require('express');
const router = express.Router();
const registerEventController = require('../controllers/RegisterEventController');
const userDetailsController = require('../controllers/UserDetailsController');
const utils = require('../functions/authUtils');

router.post(
	'/registerEvent',
	utils.jwtVerify,
	userDetailsController.checkUserDetails,
	registerEventController.pushRegisteredEvents
);
router.get(
	'/registerEvent',
	utils.jwtVerify,
	userDetailsController.checkUserDetails,
	registerEventController.getRegisteredEvents
);
router.delete(
	'/registerEvent',
	utils.jwtVerify,
	userDetailsController.checkUserDetails,
	registerEventController.removeRegisteredEvent
);

//router.post('/registerTeamEvent', /*utils.jwtVerify,*/ userDetailsController.checkTeamDetails)

module.exports = router;
