const express = require('express');
const router = express.Router();
// const authController = require('../controllers/authController');
const authController = require('../controllers/authController');

router.post('/login', authController.authenticateCustomer);
router.post('/register', authController.registerCustomer);
module.exports = router;
