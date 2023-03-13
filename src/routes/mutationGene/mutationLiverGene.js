const express = require('express');
const router = express.Router();
const mutationLiverGeneController = require('../../app/controllers/mutationGene/MutationLiverGeneController');

router.get('/', mutationLiverGeneController.findAll);

module.exports = router;
