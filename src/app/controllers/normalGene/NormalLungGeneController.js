const NormalLungGene = require('../../models/normalGene/NormalLungGeneModel');

class normalLungGene {
    //GET
    index(req, res) {
        NormalLungGene.find({}, function (err, NormalLungGene) {
            if (!err) {
                res.json(NormalLungGene);
            } else {
                res.status(500).json({ error: 'Error!!!' });
            }
        });
    }
}

module.exports = new normalLungGene();
