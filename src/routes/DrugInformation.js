const express = require('express');
const router = express.Router();
const drugInformation = require('../app/controllers/DrugInformationController');

router.use('/', drugInformation.index);

module.exports = router;
