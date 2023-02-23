const newsRouter = require('./news');
const nomalLungRouter = require('./nomalLungGene');
const mutationLungRouter = require('./mutationLungGene');
const drugInformationRouter = require('./DrugInformation');

function routes (app) {
    app.use('/news', newsRouter);
    app.use('/nomal-lung-gene', nomalLungRouter);
    app.use('/mutation-lung-gene', mutationLungRouter);
    app.use('/drugs-information',drugInformationRouter);
    app.get('/', (req, res) => {
        res.send('Hello World!')
      })
}

module.exports = routes;
