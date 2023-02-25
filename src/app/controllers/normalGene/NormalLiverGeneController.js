const NormalLiverGene = require ('../../models/normalGene/NormalLiverGeneModel')

class normalLiverGene {
    //GET
    index(req, res){
        NormalLiverGene.find({}, function (err, NormalLiverGene){
            if(!err){
                res.json(NormalLiverGene);
            } else {
                res.status(500).json({error: 'Error!!!'});
            }
        })
    }
}

module.exports = new normalLiverGene;