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
        console.log(testCaseBody);
        const newTestData = new testCaseModel({
            patients: String(testCaseBody?.patients),
            sams: String(testCaseBody?.sams),
            run: {
                id: Number(testCaseBody?.run.id),
                runId: String(testCaseBody?.run.runId),
                status: String(testCaseBody?.run.status),
                finishDate: String(testCaseBody?.run.finishDate),
                totalBases: String(testCaseBody?.run.totalBases),
                keySignal: String(testCaseBody?.run.keySignal),
                totalReads: String(testCaseBody?.run.totalReads),
                usableReads: String(testCaseBody?.run.usableReads),
                meanLength: String(testCaseBody?.run.meanLength),
                medianLength: String(testCaseBody?.run.medianLength),
                modeLength: String(testCaseBody?.run.modeLength),
                ISPLoading: String(testCaseBody?.run.ISPLoading),
                polyclonal: String(testCaseBody?.run.polyclonal),
                lowQuanlity: String(testCaseBody?.run.lowQuanlity),
                score: String(testCaseBody?.run.score),
                ISPLoadingPic: String(testCaseBody?.run.ISPLoadingPic),
                quanlityPic: String(testCaseBody?.run.quanlityPic),
                lengthPic: String(testCaseBody?.run.lengthPic),
            },
        });
        console.log(newTestData);
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
