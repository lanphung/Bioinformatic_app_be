const express = require('express');
const morgan = require('morgan');
const app = express();
const port = process.env.PORT || 3000;
// const clientURL = 'http://localhost:8000';
// const clientURL =  'http://192.168.1.14:8000';
const clientURL =  'http://103.124.93.57';

const route = require('./src/routes');
const db = require('./src/config/db');


const cors = require('cors');
const corsOptions ={
    origin: clientURL, 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}
app.use(cors(corsOptions));
// Add headers before the routes are defined
app.use(function (req, res, next) {

  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', clientURL);

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
  console.log(`App is running at http://localhost:${port}`);
  console.log(clientURL);
  console.log(process.env.CLIENT_URL);
})
