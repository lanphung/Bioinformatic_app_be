const express = require('express');
const router = express.Router();
const testCaseController = require('../app/controllers/TestCaseController');

router.get('/', testCaseController.findAll);
router.delete('/delete/:id', testCaseController.delete);
router.get('/find/:id', testCaseController.findByID);

module.exports = router;
