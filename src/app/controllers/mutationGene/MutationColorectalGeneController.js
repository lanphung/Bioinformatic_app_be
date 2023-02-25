const MutationColorectalGene = require('../../models/mutationGene/MutationColorectalGeneModel');

class mutationColorectalGene {
    //GET
    index(req, res) {
        MutationColorectalGene.find({}, function (err, MutationColorectalGene) {
            if (!err) {
                res.json(MutationColorectalGene);
            } else {
                res.status(500).json({ error: 'Error!!!' });
            }
        });
    }
}

module.exports = new mutationColorectalGene();
