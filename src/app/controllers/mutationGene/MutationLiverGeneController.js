const mutationLiverGeneModel = require('../../models/mutationGene/MutationLiverGeneModel');

class mutationLiverGeneController {
    //GET
    findAllTop20(req, res) {
        mutationLiverGeneModel.find({}, function (err, mutationLiverGeneModel) {
            if (!err) {
                res.json(mutationLiverGeneModel);
            } else {
                res.status(500).json({ error: 'Error!!!' });
            }
        });
    }

    findAll(req, res) {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;
        const skip = (page - 1) * limit;

        mutationLiverGeneModel.countDocuments({}, function (err, count) {
            if (err) {
                return res.status(500).json({ error: 'Error!!!' });
            }

            mutationLiverGeneModel
                .find({})
                .skip(skip)
                .limit(limit)
                .exec(function (err, mutationLiverGeneModels) {
                    if (err) {
                        return res.status(500).json({ error: 'Error!!!' });
                    }

                    const totalPages = Math.ceil(count / limit);

                    res.json({
                        mutationLiverGeneModels,
                        currentPage: page,
                        totalPages,
                    });
                });
        });
    }
}

module.exports = new mutationLiverGeneController();
