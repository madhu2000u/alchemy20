const express = require('express');
const router = express.Router();
const registerEventController = require('../controllers/RegisterEventController');
const utils = require('../functions/authUtils');

router.post('/registerEvent', utils.validatePostapi, registerEventController.pushRegisteredEvents);
router.get('/registerEvent', utils.validateGetapi, registerEventController.getRegisteredEvents);
router.delete('/registerEvent', utils.validatePostapi, registerEventController.removeRegisteredEvent);

module.exports = router;
