const normalBreastGeneModel = require('../../models/normalGene/NormalBreastGeneModel');

class normalBreastGeneController {
    //GET
    findAll(req, res) {
        normalBreastGeneModel.find({}, function (err, normalBreastGeneModel) {
            if (!err) {
                res.json(normalBreastGeneModel);
            } else {
                res.status(500).json({ error: 'Error!!!' });
            }
        });
    }
}

module.exports = new normalBreastGeneController();
