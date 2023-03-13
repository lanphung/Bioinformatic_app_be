const mutationColorectalGeneModel = require('../../models/mutationGene/MutationColorectalGeneModel');

class mutationColorectalGeneController {
    //GET
    findAll(req, res) {
        mutationColorectalGeneModel.find(
            {},
            function (err, mutationColorectalGeneModel) {
                if (!err) {
                    res.json(mutationColorectalGeneModel);
                } else {
                    res.status(500).json({ error: 'Error!!!' });
                }
            },
        );
    }
}

module.exports = new mutationColorectalGeneController();
