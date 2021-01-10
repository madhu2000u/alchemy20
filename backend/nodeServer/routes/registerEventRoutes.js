const express = require('express');
const router = express.Router();
const registerEventController = require('../controllers/RegisterEventController');
const utils = require('../functions/authUtils');

router.post('/registerEvent', utils.jwtVerify, registerEventController.pushRegisteredEvents);
router.get('/registerEvent', utils.jwtVerify, registerEventController.getRegisteredEvents);
router.delete('/registerEvent', utils.jwtVerify, registerEventController.removeRegisteredEvent);

module.exports = router;
