const MutationLungGene = require('../../models/mutationGene/MutationLungGeneModel');

class mutationLungGene {
    //GET
    index(req, res) {
        MutationLungGene.find({}, function (err, MutationLungGene) {
            if (!err) {
                res.json(MutationLungGene);
            } else {
                res.status(500).json({ error: 'Error!!!' });
            }
        });
    }
}

module.exports = new mutationLungGene();
