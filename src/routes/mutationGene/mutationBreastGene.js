const express = require('express');
const router = express.Router();
const mutationBreastGeneController = require('../../app/controllers/mutationGene/MutationBreastGeneController');

router.get('/', mutationBreastGeneController.findAll);
router.get('/top20', mutationBreastGeneController.findAllTop20);

module.exports = router;
