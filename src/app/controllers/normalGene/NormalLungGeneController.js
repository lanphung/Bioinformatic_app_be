const normalLungGeneModel = require('../../models/normalGene/NormalLungGeneModel');

class normalLungGeneController {
    //GET
    findAll(req, res) {
        normalLungGeneModel.find({}, function (err, normalLungGeneModel) {
            if (!err) {
                res.json(normalLungGeneModel);
            } else {
                res.status(500).json({ error: 'Error!!!' });
            }
        });
    }
}

module.exports = new normalLungGeneController();
