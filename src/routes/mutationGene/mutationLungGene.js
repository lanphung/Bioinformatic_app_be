const express = require('express');
const router = express.Router();
const mutationLungGeneController = require('../../app/controllers/mutationGene/MutationLungGeneController');

router.get('/', mutationLungGeneController.findAll);

module.exports = router;
