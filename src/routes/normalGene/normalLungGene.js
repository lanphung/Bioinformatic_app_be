const express = require('express');
const router = express.Router();
const normalLungGene = require('../../app/controllers/normalGene/NormalLungGeneController');

router.use('/', normalLungGene.index);

module.exports = router;
