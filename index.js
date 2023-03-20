const express = require('express');
const morgan = require('morgan');
const app = express();
const port = 3000;

const route = require('./src/routes');
const db = require('./src/config/db');

const cors = require('cors');
const corsOptions ={
    origin:'http://localhost:8000', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}
app.use(cors(corsOptions));
// Add headers before the routes are defined
app.use(function (req, res, next) {

  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8000');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);

  // Pass to next layer of middleware
  next();
});

db.connect();

route(app);

app.use(morgan('combined'))

app.listen(port, () => {
  console.log(`App is running at http://localhost:${port}`)
})