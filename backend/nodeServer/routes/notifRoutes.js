const express = require('express');
const router = express.Router();
const notifController = require('../controllers/NotificationController');
const utils = require('../functions/authUtils');

router.get('/allNotific', utils.validateGetapi, notifController.getNotif);
router.post('/allNotific', utils.validatePostapi, notifController.postNotif);
router.put('/allNotific', utils.validatePostapi, notifController.updateNotif);
router.delete('/allNotific', utils.validatePostapi, notifController.deleteNotif);

module.exports = router;
