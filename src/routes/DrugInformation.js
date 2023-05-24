const express = require('express');
const router = express.Router();
const drugInformationController = require('../app/controllers/DrugInformationController');

router.use(express.json());
router.get('/', drugInformationController.findAll);
router.get('/find/:id', drugInformationController.findByID);
router.post('/search', drugInformationController.search);

module.exports = router;
