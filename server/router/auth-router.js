const express = require('express');
const router = express.Router();
require('../utils/db');
const authControllers = require("../controllers/auth-controller");



// Register Route

router.route('/register').post(authControllers.register);


// Login Route

router.route('/login').post(authControllers.login);






module.exports = router;