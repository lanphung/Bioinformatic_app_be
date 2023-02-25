const NormalColorectalGene = require('../../models/normalGene/NormalColorectalGeneModel');

class normalColorectalGene {
    //GET
    index(req, res) {
        NormalColorectalGene.find({}, function (err, NormalColorectalGene) {
            if (!err) {
                res.json(NormalColorectalGene);
            } else {
                res.status(500).json({ error: 'Error!!!' });
            }
        });
    }
}

module.exports = new normalColorectalGene();
