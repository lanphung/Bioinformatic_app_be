const normalColorectalGeneModel = require('../../models/normalGene/NormalColorectalGeneModel');

class normalColorectalGeneController {
    //GET
    findAll(req, res) {
        normalColorectalGeneModel.find(
            {},
            function (err, normalColorectalGeneModel) {
                if (!err) {
                    res.json(normalColorectalGeneModel);
                } else {
                    res.status(500).json({ error: 'Error!!!' });
                }
            },
        );
    }
}

module.exports = new normalColorectalGeneController();
