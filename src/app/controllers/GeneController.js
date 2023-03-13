const geneModel = require('../models/GeneModel');

class geneController {
    //GET
    findAll(req, res) {
        geneModel.find({}, function (err, geneModel) {
            if (!err) {
                res.json(geneModel);
            } else {
                res.status(500).json({ error: 'Error!!!' });
            }
        });
    }
}

module.exports = new geneController();
