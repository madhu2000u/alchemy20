const express = require('express');
const router = express.Router();
const DashboardController = require('../controllers/DashboarController');
const utils = require('../functions/authUtils');

router.get('/dashboard', utils.jwtVerify, DashboardController.dashboard); //utils.jwtVerify essentially verifies if user signed in or notifController

module.exports = router;
