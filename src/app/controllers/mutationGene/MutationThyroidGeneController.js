const mutationThyroidGeneModel = require('../../models/mutationGene/MutationThyroidGeneModel');

class mutationThyroidGeneController {
    //GET
    findAll(req, res) {
        mutationThyroidGeneModel.find(
            {},
            function (err, mutationThyroidGeneModel) {
                if (!err) {
                    res.json(mutationThyroidGeneModel);
                } else {
                    res.status(500).json({ error: 'Error!!!' });
                }
            },
        );
    }
}

module.exports = new mutationThyroidGeneController();
