const NormalThyroidGene = require ('../../models/normalGene/NormalThyroidGeneModel')

class normalThyroidGene {
    //GET
    index(req, res){
        NormalThyroidGene.find({}, function (err, NormalThyroidGene){
            if(!err){
                res.json(NormalThyroidGene);
            } else {
                res.status(500).json({error: 'Error!!!'});
            }
        })
    }
}

module.exports = new normalThyroidGene;