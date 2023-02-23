const express = require('express');
const router = express.Router();
const mutationLungGene = require ('../app/controllers/MutationLungGeneController');

router.use('/',mutationLungGene.index);

module.exports = router;
