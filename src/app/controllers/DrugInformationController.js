const drugInformationModel = require('../models/DrugInformationModel');

class drugInformationController {
    //GET
    findAll(req, res) {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;
        const skip = (page - 1) * limit;

        drugInformationModel.countDocuments({}, function (err, count) {
            if (err) {
                return res.status(500).json({ error: 'Error!!!' });
            }

            drugInformationModel
                .find({})
                .skip(skip)
                .limit(limit)
                .exec(function (err, drugInformationModels) {
                    if (err) {
                        return res.status(500).json({ error: 'Error!!!' });
                    }

                    const totalPages = Math.ceil(count / limit);

                    res.json({
                        drugInformationModels,
                        currentPage: page,
                        totalPages,
                    });
                });
        });
    }

    findByID(req, res, next) {
        drugInformationModel.findById(req.params.id, (err, item) => {
            if (err) {
                console.log(err);
                res.status(500).send(err);
            } else if (!item) {
                res.status(404).send('Item not found');
            } else {
                res.send(item);
            }
        });
    }

    search = async (req, res) => {
        try {
            const page = parseInt(req.query.page) || 1;
            const limit = parseInt(req.query.limit) || 10;
            const skip = (page - 1) * limit;

            let { geneName, drugName, cancerMainType, cancerSubType } =
                req.body;
            console.log(req.body);
            geneName = geneName || '.*';
            drugName = drugName || '.*';
            cancerMainType = cancerMainType || '.*';
            cancerSubType = cancerSubType || '.*';
            console.log(geneName, drugName, cancerMainType, cancerSubType);

            const count = await drugInformationModel.countDocuments({
                gene: new RegExp(geneName),
                drug: new RegExp(drugName),
                cancer_main_type: new RegExp(cancerMainType),
                cancer_sub_type: new RegExp(cancerSubType),
            });

            const totalPages = Math.ceil(count / limit);

            const records = await drugInformationModel
                .find({
                    gene: new RegExp(geneName),
                    drug: new RegExp(drugName),
                    cancer_main_type: new RegExp(cancerMainType),
                    cancer_sub_type: new RegExp(cancerSubType),
                })
                .select(
                    'gene drug alteration level cancer_main_type cancer_sub_type articles',
                )
                .skip(skip)
                .limit(limit)
                .lean();

            const mappedRecords = records.map((record) => ({
                gene: record.gene,
                drug: record.drug,
                alteration: record.alteration,
                level: record.level,
                cancer_main_type: record.cancer_main_type,
                cancer_sub_type: record.cancer_sub_type,
                articles: record.articles.map((articles) => articles.pmid),
            }));

            return res.status(200).json({
                success: true,
                data: mappedRecords,
                totalPages: totalPages,
                currentPage: page,
            });
        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: 'Error!!!' });
        }
    };
}

module.exports = new drugInformationController();
