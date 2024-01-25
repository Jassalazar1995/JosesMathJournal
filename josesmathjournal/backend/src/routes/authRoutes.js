// The authController.js and authRoutes.js will handle user registration, login, and authentication
const express = require('express');
const router = express.Router();
const { register, login } = require( '../controllers/authController' )

router.post('/register', register)
router.post('/login', login)

module.exports = router