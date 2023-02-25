const express = require('express');
const router = express.Router();
const mutationLiverGene = require('../../app/controllers/mutationGene/MutationLiverGeneController');

router.use('/', mutationLiverGene.index);

module.exports = router;
