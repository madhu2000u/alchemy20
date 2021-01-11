const express = require('express');
const router = express.Router();
const utils = require('../functions/authUtils');
const userDetailsController= require('../controllers/userDetailsController');


router.post('/userdetails', utils.jwtVerify, userDetailsController.AddUserDetails);

module.exports = router;