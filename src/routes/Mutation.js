const express = require('express');
const router = express.Router();
const mutationController = require('../app/controllers/MutationController');

router.get('/', mutationController.findAll);

module.exports = router;
