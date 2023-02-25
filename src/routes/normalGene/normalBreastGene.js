const express = require('express');
const router = express.Router();
const normalBreastGene = require ('../../app/controllers/normalGene/NormalBreastGeneController');

router.use('/',normalBreastGene.index);

module.exports = router;
