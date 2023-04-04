const mutationThyroidGeneModel = require('../../models/mutationGene/MutationThyroidGeneModel');

class mutationThyroidGeneController {
    //GET
    findAllTop20(req, res) {
        mutationThyroidGeneModel.find({}, function (err, mutationThyroidGeneModel) {
            if (!err) {
                res.json(mutationThyroidGeneModel);
            } else {
                res.status(500).json({ error: 'Error!!!' });
            }
        });
    }

    findAll(req, res) {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;
        const skip = (page - 1) * limit;

        mutationThyroidGeneModel.countDocuments({}, function (err, count) {
            if (err) {
                return res.status(500).json({ error: 'Error!!!' });
            }

            mutationThyroidGeneModel
                .find({})
                .skip(skip)
                .limit(limit)
                .exec(function (err, mutationThyroidGeneModels) {
                    if (err) {
                        return res.status(500).json({ error: 'Error!!!' });
                    }

                    const totalPages = Math.ceil(count / limit);

                    res.json({
                        mutationThyroidGeneModels,
                        currentPage: page,
                        totalPages,
                    });
                });
        });
    }
}

module.exports = new mutationThyroidGeneController();
