const express = require('express');
const router = express.Router();
const healthRecordController = require('../app/controllers/HealthRecordController');

router.post('/save', healthRecordController.save);
router.post('/get-health-record', healthRecordController.getById);
router.post('/delete-health-record', healthRecordController.deleteById);
router.get('/get-all', healthRecordController.getAll);
router.post('/search', healthRecordController.search);

module.exports = router;
