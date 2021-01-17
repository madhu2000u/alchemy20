const express = require('express');
const router = express.Router();
const alcIDController = require('../controllers/AlcIdController');
const utils = require('../functions/authUtils');

router.get('/alcid', utils.jwtVerify, alcIDController.alcId);

module.exports = router;
