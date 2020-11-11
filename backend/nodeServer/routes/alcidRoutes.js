const express = require('express');
const router = express.Router();
const alcIDController = require('../controllers/AlcIdController');

router.get('/alcid', alcIDController.alcId);

module.exports = router;
