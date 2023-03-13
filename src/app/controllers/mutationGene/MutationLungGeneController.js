const mutationLungGeneModel = require('../../models/mutationGene/MutationLungGeneModel');

class mutationLungGeneController {
    //GET
    findAll(req, res) {
        mutationLungGeneModel.find({}, function (err, mutationLungGeneModel) {
            if (!err) {
                res.json(mutationLungGeneModel);
            } else {
                res.status(500).json({ error: 'Error!!!' });
            }
        });
    }
}

module.exports = new mutationLungGeneController();
