var express = require('express');
var router = express.Router();
var userController = require('../../controllers/userController.js');

/*
 * Login
 */
router.post('/login', userController.login);
router.post('/inscription', userController.inscription);

module.exports = router;