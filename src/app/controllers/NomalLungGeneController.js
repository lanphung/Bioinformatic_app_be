const NomalLungGene = require ('../models/NomalLungGeneModel')

class nomalLungGene {
    //GET
    index(req, res){
        NomalLungGene.find({}, function (err, NomalLungGene){
            if(!err){
                res.json(NomalLungGene);
            } else {
                res.status(500).json({error: 'Error!!!'});
            }
        })
    }
}

module.exports = new nomalLungGene;