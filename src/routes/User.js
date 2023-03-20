const express = require('express');
const router = express.Router();
const userController = require('../app/controllers/UserController');
const bodyParser = require('body-parser');

router.use(bodyParser.json());
router.post('/login', userController.findUser);
router.post('/register', userController.register);

module.exports = router;
