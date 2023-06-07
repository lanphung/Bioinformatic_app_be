const testCaseModel = require('../models/TestCaseModel');
const dataTestModel = require('../models/DataTestModel');
const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const multer = require('multer');
const path = require('path');

const dataDirectory = path.join(__dirname, '../../../data/');

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
            patientID: String(testCaseBody?.patientID),
            patientName: String(testCaseBody?.patientName),
            testName: String(testCaseBody?.testName),
            primaryTissue: String(testCaseBody?.primaryTissue),
            avaliable: false,
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

    addTestResult(req, res) {
        console.log(req.body);
        const testResultArray = req.body;

        const newTestResults = testResultArray.map((testResultBody) => {
            return new dataTestModel({
                IDTest: String(testResultBody?.IDTest),
                Gene: String(testResultBody?.Gene),
                RS_ID: String(testResultBody?.['RS-ID']),
                Nucleotide: String(testResultBody?.Nucleotide),
                Protein: String(testResultBody?.Protein),
                VariationType: String(testResultBody?.VariationType),
                VariantLength: String(testResultBody?.VariantLength),
                Position: String(testResultBody?.Position),
                DrugResponse: String(testResultBody?.DrugResponse),
                VariantRate: String(testResultBody?.VariantRate),
                ReadDepth: String(testResultBody?.ReadDepth),
            });
        });

        dataTestModel
            .insertMany(newTestResults)
            .then((tests) => {
                console.log('Added new test cases to the database:', tests);
                res.status(201).json({
                    message: 'Test cases added successfully',
                    tests,
                });
            })
            .catch((err) => {
                console.error('Error adding test cases to the database:', err);
                res.status(500).json({ error: 'Failed to add test cases' });
            });
    }

    uploadFile(req, res) {
        const storage = multer.diskStorage({
            destination: dataDirectory,
            filename: (req, file, cb) => {
                cb(null, 'TestFile.gz');
            },
        });

        const upload = multer({
            storage,
            // Thêm middleware để theo dõi tiến độ upload
            fileFilter: (req, file, cb) => {
                cb(null, true);
            },
            limits: {
                // Giới hạn kích thước file
                fileSize: 1024 * 1024 * 1024 * 1024, // Ví dụ giới hạn 10MB
            },
        }).single('file');

        // Thêm middleware để in ra tiến độ upload
        upload(req, res, (err) => {
            if (err instanceof multer.MulterError) {
                // Xử lý lỗi từ multer
                console.log('Multer Error:', err);
                res.status(400).json({
                    error: 'Có lỗi xảy ra khi tải lên tệp tin.',
                });
            } else if (err) {
                // Xử lý lỗi khác
                console.log('Error:', err);
                res.status(500).json({
                    error: 'Có lỗi xảy ra khi tải lên tệp tin.',
                });
            } else {
                // Upload thành công
                res.send('Tệp tin đã được tải lên thành công!');
            }
        });
    }

    download(req, res) {
        fileName = req.query.id;
        const filePath = path.join(dataDirectory, `${fileName}`);
        res.download(filePath, (err) => {
            if (err) {
                console.error('Lỗi khi tải file:', err);
                res.status(500).send('Lỗi khi tải file.');
            }
        });
    }
}

module.exports = new testCaseController();
