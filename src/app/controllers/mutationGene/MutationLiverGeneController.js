const MutationLiverGene = require('../../models/mutationGene/MutationLiverGeneModel');

class mutationLiverGene {
    //GET
    index(req, res) {
        MutationLiverGene.find({}, function (err, MutationLiverGene) {
            if (!err) {
                res.json(MutationLiverGene);
            } else {
                res.status(500).json({ error: 'Error!!!' });
            }
        });
    }
}

module.exports = new mutationLiverGene();
