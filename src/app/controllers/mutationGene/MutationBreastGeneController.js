const MutationBreastGene = require('../../models/mutationGene/MutationBreastGeneModel');

class mutationBreastGene {
    //GET
    index(req, res) {
        MutationBreastGene.find({}, function (err, MutationBreastGene) {
            if (!err) {
                res.json(MutationBreastGene);
            } else {
                res.status(500).json({ error: 'Error!!!' });
            }
        });
    }
}

module.exports = new mutationBreastGene();
