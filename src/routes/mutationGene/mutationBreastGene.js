const express = require('express');
const router = express.Router();
const mutationBreastGene = require ('../../app/controllers/mutationGene/MutationBreastGeneController');

router.use('/',mutationBreastGene.index);

module.exports = router;
