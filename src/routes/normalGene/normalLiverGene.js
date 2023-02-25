const express = require('express');
const router = express.Router();
const normalLiverGene = require ('../../app/controllers/normalGene/NormalLiverGeneController');

router.use('/',normalLiverGene.index);

module.exports = router;
