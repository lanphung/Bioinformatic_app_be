const express = require('express');
const router = express.Router();
const normalThyroidGene = require ('../../app/controllers/normalGene/NormalThyroidGeneController');

router.use('/',normalThyroidGene.index);

module.exports = router;
