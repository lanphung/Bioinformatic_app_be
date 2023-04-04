const mutationLungGeneModel = require('../../models/mutationGene/MutationLungGeneModel');

class mutationLungGeneController {
    //GET
    findAllTop20(req, res) {
        mutationLungGeneModel.find({}, function (err, mutationLungGeneModel) {
            if (!err) {
                res.json(mutationLungGeneModel);
            } else {
                res.status(500).json({ error: 'Error!!!' });
            }
        });
    }


    findAll(req, res) {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;
        const skip = (page - 1) * limit;

        mutationLungGeneModel.countDocuments({}, function (err, count) {
            if (err) {
                return res.status(500).json({ error: 'Error!!!' });
            }

            mutationLungGeneModel
                .find({})
                .skip(skip)
                .limit(limit)
                .exec(function (err, mutationLungGeneModels) {
                    if (err) {
                        return res.status(500).json({ error: 'Error!!!' });
                    }

                    const totalPages = Math.ceil(count / limit);

                    res.json({
                        mutationLungGeneModels,
                        currentPage: page,
                        totalPages,
                    });
                });
        });
    }
}

module.exports = new mutationLungGeneController();
