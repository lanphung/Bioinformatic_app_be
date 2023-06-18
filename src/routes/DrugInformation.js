const express = require('express');
const router = express.Router();
const drugInformationController = require('../app/controllers/DrugInformationController');

router.use(express.json());
router.get('/', drugInformationController.findAll);
router.get('/find/:id', drugInformationController.findByID);
router.post('/search', drugInformationController.search);
router.post(
    '/prediction/evidence-mixed-asia',
    drugInformationController.getEvidenceAsiaMixed,
);
router.post(
    '/prediction/evidence-mixed-world',
    drugInformationController.getEvidenceWorldMixed,
);
router.post('/prediction/evidence', drugInformationController.getEvidence);

module.exports = router;
