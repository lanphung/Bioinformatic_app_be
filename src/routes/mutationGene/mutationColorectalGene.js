const express = require('express');
const router = express.Router();
const mutationColorectalGene = require('../../app/controllers/mutationGene/MutationColorectalGeneController');

router.use('/', mutationColorectalGene.index);

module.exports = router;
