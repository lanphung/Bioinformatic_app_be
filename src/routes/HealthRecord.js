const express = require('express');
const router = express.Router();
const BreastRecordController = require('../app/controllers/healthRecord/BreastRecordController');
const ConlorectalRecordController = require('../app/controllers/healthRecord/ConlorectalRecordController');
const LiverRecordController = require('../app/controllers/healthRecord/LiverRecordController');
const LungRecordController = require('../app/controllers/healthRecord/LungRecordController');
const ThyroidRecordController = require('../app/controllers/healthRecord/ThyroidRecordController');
router.use(express.json());
router.post('/lung-record/save', LungRecordController.save);
router.post('/lung-record/get-health-record', LungRecordController.getById);
router.post('/lung-record/delete-health-record', LungRecordController.deleteById);
router.get('/lung-record/get-all', LungRecordController.getAll);
router.post('/lung-record/search', LungRecordController.search);

router.post('/breast-record/save', BreastRecordController.save);
router.post('/breast-record/get-health-record', BreastRecordController.getById);
router.post('/breast-record/delete-health-record', BreastRecordController.deleteById);
router.get('/breast-record/get-all', BreastRecordController.getAll);
router.post('/breast-record/search', BreastRecordController.search);

router.post('/conlorectal-record/save', ConlorectalRecordController.save);
router.post('/conlorectal-record/get-health-record', ConlorectalRecordController.getById);
router.post('/conlorectal-record/delete-health-record', ConlorectalRecordController.deleteById);
router.get('/conlorectal-record/get-all', ConlorectalRecordController.getAll);
router.post('/conlorectal-record/search', ConlorectalRecordController.search);

router.post('/liver-record/save', LiverRecordController.save);
router.post('/liver-record/get-health-record', LiverRecordController.getById);
router.post('/liver-record/delete-health-record', LiverRecordController.deleteById);
router.get('/liver-record/get-all', LiverRecordController.getAll);
router.post('/liver-record/search', LiverRecordController.search);

router.post('/thyroid-record/save', ThyroidRecordController.save);
router.post('/thyroid-record/get-health-record', ThyroidRecordController.getById);
router.post('/thyroid-record/delete-health-record', ThyroidRecordController.deleteById);
router.get('/thyroid-record/get-all', ThyroidRecordController.getAll);
router.post('/thyroid-record/search', ThyroidRecordController.search);

module.exports = router;
