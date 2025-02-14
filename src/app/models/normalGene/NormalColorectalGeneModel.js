const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const normalColorectalGeneModel = new Schema({
    geneName: String,
    mutatedSamples: Number,
    samplesTested: Number,
    createAt: { type: Date, default: Date.now },
    updateAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model(
    'normal_colorectal_genes',
    normalColorectalGeneModel,
);
