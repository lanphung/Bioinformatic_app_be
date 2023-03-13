const mutationLiverGeneModel = require('../../models/mutationGene/MutationLiverGeneModel');

class mutationLiverGeneController {
    //GET
    findAll(req, res) {
        mutationLiverGeneModel.find({}, function (err, mutationLiverGeneModel) {
            if (!err) {
                res.json(mutationLiverGeneModel);
            } else {
                res.status(500).json({ error: 'Error!!!' });
            }
        });
    }
}

module.exports = new mutationLiverGeneController();
