const express = require('express');
const router = express.Router();
const drugInformationController = require('../app/controllers/DrugInformationController');

router.get('/', drugInformationController.findAll);
router.get('/find/:id', drugInformationController.findByID);

module.exports = router;
