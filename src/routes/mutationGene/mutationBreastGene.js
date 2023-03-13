const express = require('express');
const router = express.Router();
const mutationBreastGeneController = require('../../app/controllers/mutationGene/MutationBreastGeneController');

router.get('/', mutationBreastGeneController.findAll);

module.exports = router;
