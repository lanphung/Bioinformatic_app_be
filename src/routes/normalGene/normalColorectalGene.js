const express = require('express');
const router = express.Router();
const normalColorectalGene = require('../../app/controllers/normalGene/NormalColorectalController');

router.use('/', normalColorectalGene.index);

module.exports = router;
