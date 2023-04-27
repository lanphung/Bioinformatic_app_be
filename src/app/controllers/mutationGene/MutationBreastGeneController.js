const mutationBreastGeneModel = require('../../models/mutationGene/MutationBreastGeneModel');
const top20BreastModel = require('../../models/top20Gene/Top20BreastModel');

class mutationBreastGeneController {
    //GET
    findAllTop20(req, res) {
        top20BreastModel.find({}, function (err, top20BreastModel) {
            if (!err) {
                res.json(top20BreastModel);
            } else {
                res.status(500).json({ error: 'Error!!!' });
            }
        });
    }

    findAll(req, res) {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;
        const skip = (page - 1) * limit;

        mutationBreastGeneModel.countDocuments({}, function (err, count) {
            if (err) {
                return res.status(500).json({ error: 'Error!!!' });
            }

            mutationBreastGeneModel
                .find({})
                .skip(skip)
                .limit(limit)
                .exec(function (err, mutationBreastGeneModels) {
                    if (err) {
                        return res.status(500).json({ error: 'Error!!!' });
                    }

                    const totalPages = Math.ceil(count / limit);

                    res.json({
                        mutationBreastGeneModels,
                        currentPage: page,
                        totalPages,
                    });
                });
        });
    }
}

module.exports = new mutationBreastGeneController();
