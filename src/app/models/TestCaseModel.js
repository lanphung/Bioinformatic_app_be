const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const testCaseModel = new Schema({
    patients: { type: String },
    sams: { type: String },
    // run: {
    //     id: Number,
    //     runId: String,
    //     status: String,
    //     finishDate: String,
    //     totalBases: String,
    //     keySignal: String,
    //     totalReads: String,
    //     usableReads: String,
    //     meanLength: String,
    //     medianLength: String,
    //     modeLength: String,
    //     ISPLoading: String,
    //     polyclonal: String,
    //     lowQuanlity: String,
    //     score: String,
    //     ISPLoadingPic: String,
    //     quanlityPic: String,
    //     lengthPic: String,
    // },

    createAt: { type: Date, default: Date.now },
    updateAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('test_cases', testCaseModel);
