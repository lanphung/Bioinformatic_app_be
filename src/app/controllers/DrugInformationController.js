const drugInformationModel = require('../models/DrugInformationModel');

class drugInformationController {
    //GET
    findAll(req, res) {
        drugInformationModel.find({}, function (err, drugInformationModel) {
            if (!err) {
                res.json(drugInformationModel);
            } else {
                res.status(500).json({ error: 'Error!!!' });
            }
        });
    }

    findByID(req, res, next) {
        drugInformationModel.findById(req.params.id, (err, item) => {
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

module.exports = new drugInformationController();
