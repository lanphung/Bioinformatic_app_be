const express = require('express');
const router = express.Router();
const mutationLungGene = require ('../../app/controllers/mutationGene/MutationLungGeneController');

router.use('/',mutationLungGene.index);

module.exports = router;
