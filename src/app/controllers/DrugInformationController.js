const DrugInformation = require('../models/DrugInformationModel');

class drugInformation {
    //GET
    index(req, res){
        DrugInformation.find({}, function (err, DrugInformation){
            if(!err){
                res.json(DrugInformation);
            } else {
            res.status(500).json({error: 'Error!!!'});
            }
        })
    }
}

module.exports = new drugInformation;