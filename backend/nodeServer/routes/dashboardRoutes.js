const express = require('express');
const router = express.Router();
const dashboardController = require('../controllers/DashboardController');
const utils = require('../functions/authUtils');

router.post('/dashboard', utils.jwtVerify, dashboardController.dashboard);

router.get('/check', (req, res) => {
    console.log("Health check successfull!")
    res.status(200).json({message:"Health check successfull!"});
});

module.exports = router;
