const mutationModel = require('../models/MutationModel');

class mutationController {
    //GET
    findAll(req, res) {
        mutationModel.find({}, function (err, mutationModel) {
            if (!err) {
                res.json(mutationModel);
            } else {
                res.status(500).json({ error: 'Error!!!' });
            }
        });
    }
}

module.exports = new mutationController();
