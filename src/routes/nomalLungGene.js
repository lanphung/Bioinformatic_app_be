const express = require('express');
const router = express.Router();
const nomalLungGene = require ('../app/controllers/NomalLungGeneController');

router.use('/',nomalLungGene.index);

module.exports = router;
