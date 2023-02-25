const MutationThyroidGene = require('../../models/mutationGene/MutationThyroidGeneModel');

class mutationThyroidGene {
    //GET
    index(req, res) {
        MutationThyroidGene.find({}, function (err, MutationThyroidGene) {
            if (!err) {
                res.json(MutationThyroidGene);
            } else {
                res.status(500).json({ error: 'Error!!!' });
            }
        });
    }
}

module.exports = new mutationThyroidGene();
