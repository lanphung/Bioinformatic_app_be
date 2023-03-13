const normalLiverGeneModel = require('../../models/normalGene/NormalLiverGeneModel');

class normalLiverGeneControllor {
    //GET
    findAll(req, res) {
        normalLiverGeneModel.find({}, function (err, normalLiverGeneModel) {
            if (!err) {
                res.json(normalLiverGeneModel);
            } else {
                res.status(500).json({ error: 'Error!!!' });
            }
        });
    }
}

module.exports = new normalLiverGeneControllor();
