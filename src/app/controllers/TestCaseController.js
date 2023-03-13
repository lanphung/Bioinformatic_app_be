const testCaseModel = require('../models/TestCaseModel');

class testCaseController {
    findAll(req, res) {
        testCaseModel.find({}, function (err, testCaseModel) {
            if (!err) {
                res.json(testCaseModel);
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

    delete(req, res, next) {
        testCaseModel
            .deleteOne({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next);
    }
}

module.exports = new testCaseController();
