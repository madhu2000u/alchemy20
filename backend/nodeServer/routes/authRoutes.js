const express = require('express');
const router = express.Router();
const authController = require('../controllers/AuthController');

router.post('/auth/login', authController.signIn);
router.post('/auth/register', authController.signUp);
router.get('/confirm/:verification_token', authController.Verify);
router.post('/verify_mail_resend', authController.ResendVerify);

module.exports = router;
