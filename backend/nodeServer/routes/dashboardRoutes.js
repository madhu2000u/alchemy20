const express = require('express');
const router = express.Router();
const dashboardController = require('../controllers/DashboardController');
const utils = require('../functions/authUtils');

router.post('/dashboard', utils.jwtVerify, dashboardController.dashboard);

module.exports = router;
