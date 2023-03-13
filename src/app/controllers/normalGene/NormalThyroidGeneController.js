const normalThyroidGeneModel = require('../../models/normalGene/NormalThyroidGeneModel');

class normalThyroidGeneController {
    //GET
    findAll(req, res) {
        normalThyroidGeneModel.find({}, function (err, normalThyroidGeneModel) {
            if (!err) {
                res.json(normalThyroidGeneModel);
            } else {
                res.status(500).json({ error: 'Error!!!' });
            }
        });
    }
}

module.exports = new normalThyroidGeneController();
