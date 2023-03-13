const mutationBreastGeneModel = require('../../models/mutationGene/MutationBreastGeneModel');

class mutationBreastGeneController {
    //GET
    findAll(req, res) {
        mutationBreastGeneModel.find(
            {},
            function (err, mutationBreastGeneModel) {
                if (!err) {
                    res.json(mutationBreastGeneModel);
                } else {
                    res.status(500).json({ error: 'Error!!!' });
                }
            },
        );
    }
}

module.exports = new mutationBreastGeneController();
