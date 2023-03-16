const testCaseModel = require('../models/TestCaseModel');

class testCaseController {
    findAll(res) {
        testCaseModel.find({}, function (err, testCaseModel) {
            if (!err) {
                res.json(testCaseModel);
            } else {
                res.status(500).json({ error: 'Error!!!' });
            }
        });
    }

    findByID(req, res) {
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

    addTest(req, res) {
        const testCaseBody = req.body;
        const newTestData = new testCaseModel({
            patients: String(testCaseBody?.patients),
            sams: String(testCaseBody?.sams),
        });
        newTestData
            .save()
            .then((test) => {
                console.log('Added new test case to database:', test);
                res.status(201).json({
                    message: 'Test case added successfully',
                    test,
                });
            })
            .catch((err) => {
                console.error('Error adding test case to database:', err);
                res.status(500).json({ error: 'Failed to add test case' });
            });
    }
}

module.exports = new testCaseController();
