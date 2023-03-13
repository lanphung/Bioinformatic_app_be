const express = require('express');
const router = express.Router();
const mutationColorectalGeneController = require('../../app/controllers/mutationGene/MutationColorectalGeneController');

router.get('/', mutationColorectalGeneController.findAll);

module.exports = router;
