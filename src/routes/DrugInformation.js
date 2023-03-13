const express = require('express');
const router = express.Router();
const drugInformationController = require('../app/controllers/DrugInformationController');

router.get('/', drugInformationController.findAll);

module.exports = router;
