const express = require('express');
const router = express.Router();
const utils = require('../functions/authUtils');
const userDetailsController = require('../controllers/UserDetailsController');

router.post('/userdetails', utils.jwtVerify, userDetailsController.AddUserDetails);
router.get('/allUsers', utils.validateGetapi, userDetailsController.getAllUsers);
router.get('/listOfField', utils.validatePostapi, userDetailsController.getListofField)

module.exports = router;
