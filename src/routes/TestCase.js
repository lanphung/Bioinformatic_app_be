const express = require('express');
const router = express.Router();
const testCaseController = require('../app/controllers/TestCaseController');
const bodyParser = require('body-parser');

router.use(bodyParser.json());

router.get('/', testCaseController.findAPage);
router.delete('/delete/:id', testCaseController.delete);
router.get('/find/:id', testCaseController.findByID);
router.post('/add', testCaseController.addTest);

module.exports = router;
