const express = require('express');
const router = express.Router();
const utils = require('../functions/authUtils');
const eventController = require('../controllers/EventController');

router.get('/allEvents', utils.validateGetapi, eventController.getEvent);
router.post('/allEvents', utils.validatePostapi, eventController.postEvent);
router.put('/allEvents', utils.validatePostapi, eventController.updateEvent);
router.delete('/allEvents', utils.validatePostapi, eventController.deleteEvent);

module.exports = router;