const path = require('path');
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();
const app = express();

const homepage_path = path.join(__dirname, '_projects/homepage');
const timestamp_microservice_path = path.join(__dirname, '_projects/timestamp_microservice');

const homepage_route = require(homepage_path + '/routes/home');
const timestamp_microservice_route = require(timestamp_microservice_path + '/routes/home');

//middleware
app.use('/timestamp_microservice', express.static(timestamp_microservice_path + '/public'));
app.use('/',express.static(homepage_path + '/public'));

app.use(cors({optionsSuccessStatus: 200}));  // some legacy browsers choke on 204

//routes
app.use('/timestamp_microservice', timestamp_microservice_route);
app.use('/', homepage_route);

//listen
app.listen(process.env.PORT || 3000, () => {
    console.log(`Example app listening on port ${process.env.PORT}`);
});
