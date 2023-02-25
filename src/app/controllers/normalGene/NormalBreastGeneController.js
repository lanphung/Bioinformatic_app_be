const NormalBreastGene = require ('../../models/normalGene/NormalBreastGeneModel')

class normalBreastGene {
    //GET
    index(req, res){
        NormalBreastGene.find({}, function (err, NormalBreastGene){
            if(!err){
                res.json(NormalBreastGene);
            } else {
                res.status(500).json({error: 'Error!!!'});
            }
        })
    }
}

module.exports = new normalBreastGene;