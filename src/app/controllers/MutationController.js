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

    findByID(req, res, next) {
        testCaseModel.findById(req.params.id, (err, item) => {
            if (err) {
                console.log(err);
                res.status(500).send(err);
            } else if (!item) {
                res.status(404).send('Item not found');
            } else {
                res.send(item);
            }
        });
    }
}

module.exports = new mutationController();
