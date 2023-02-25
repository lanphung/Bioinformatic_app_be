const express = require('express');
const router = express.Router();
const mutationThyroidGene = require ('../../app/controllers/mutationGene/MutationThyroidGeneController');

router.use('/',mutationThyroidGene.index);

module.exports = router;
