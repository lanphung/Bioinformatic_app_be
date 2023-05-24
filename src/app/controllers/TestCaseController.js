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

    findAPage(req, res) {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;
        const skip = (page - 1) * limit;

        testCaseModel.countDocuments({}, function (err, count) {
            if (err) {
                return res.status(500).json({ error: 'Error!!!' });
            }

            testCaseModel
                .find({})
                .skip(skip)
                .limit(limit)
                .exec(function (err, testCaseModels) {
                    if (err) {
                        return res.status(500).json({ error: 'Error!!!' });
                    }

                    const totalPages = Math.ceil(count / limit);

                    res.json({
                        testCaseModels,
                        currentPage: page,
                        totalPages,
                    });
                });
        });
    }

    // findAPage = async (req, res) => {
    //     try {
    //       const page = parseInt(req.query.page) || 1;
    //       const limit = parseInt(req.query.limit) || 10;
    //       const skip = (page - 1) * limit;

    //       const count = await testCaseModel.countDocuments({});

    //       const totalPages = Math.ceil(count / limit);

    //       const records = await testCaseModel
    //         .find({})
    //         .select('patients run sams _id')
    //         .skip(skip)
    //         .limit(limit)
    //         .lean();

    //       const mappedRecords = records.map((record) => ({
    //         runID: record.run.id,
    //         _id: record._id,
    //         name: record.patients,
    //         samples: record.sams,
    //       }));

    //       return res.status(200).json({
    //         success: true,
    //         data: mappedRecords,
    //         totalPages: totalPages,
    //         currentPage: page,
    //       });
    //     } catch (error) {
    //       console.error(error);
    //       return res.status(500).json({ error: 'Error!!!' });
    //     }
    //   };

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
        console.log(req.body);
        const testCaseBody = req.body;
        const newTestData = new testCaseModel({
            patients: String(testCaseBody?.patients),
            sams: String(testCaseBody?.sams),
            // run: {
            //     id: Number(testCaseBody?.run.id),
            //     runId: String(testCaseBody?.run.runId),
            //     status: String(testCaseBody?.run.status),
            //     finishDate: String(testCaseBody?.run.finishDate),
            //     totalBases: String(testCaseBody?.run.totalBases),
            //     keySignal: String(testCaseBody?.run.keySignal),
            //     totalReads: String(testCaseBody?.run.totalReads),
            //     usableReads: String(testCaseBody?.run.usableReads),
            //     meanLength: String(testCaseBody?.run.meanLength),
            //     medianLength: String(testCaseBody?.run.medianLength),
            //     modeLength: String(testCaseBody?.run.modeLength),
            //     ISPLoading: String(testCaseBody?.run.ISPLoading),
            //     polyclonal: String(testCaseBody?.run.polyclonal),
            //     lowQuanlity: String(testCaseBody?.run.lowQuanlity),
            //     score: String(testCaseBody?.run.score),
            //     ISPLoadingPic: String(testCaseBody?.run.ISPLoadingPic),
            //     quanlityPic: String(testCaseBody?.run.quanlityPic),
            //     lengthPic: String(testCaseBody?.run.lengthPic),
            // },
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

    // addTest(req, res) {
    //     try {
    //         const fileData = fs.promises.readFile(req.file.path, 'utf-8');
    //         const jsonData = JSON.parse(fileData);
    //         const testCase = new testCaseModel(jsonData);
    //         testCase.save();
    //         res.send('File uploaded and saved to database');
    //         console.log(fileData);
    //     } catch (error) {
    //         console.error(err);
    //         res.status(500).send('Internal Server Error');
    //     }
    // }
}

module.exports = new testCaseController();
