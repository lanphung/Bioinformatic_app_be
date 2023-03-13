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
}

module.exports = new drugInformationController();
