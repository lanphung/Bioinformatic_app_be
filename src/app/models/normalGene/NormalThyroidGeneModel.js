const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const NormalThyroidGene = new Schema({
    geneName: String,
    mutatedSamples: Number,
    samplesTested: Number,
    createAt: { type: Date, default: Date.now },
    updateAt: { type: Date, default: Date.now },
  });

module.exports = mongoose.model('normal_thyroid_genes', NormalThyroidGene);