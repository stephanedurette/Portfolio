const path = require('path');
const express = require('express');
const app = express();
require('dotenv').config();

const homepage_path = path.join(__dirname, '_projects/homepage');
const timestamp_microservice_path = path.join(__dirname, '_projects/timestamp_microservice');

const homepage_route = require(homepage_path + '/routes/home');
const timestamp_microservice_route = require(timestamp_microservice_path + '/routes/home');

//middleware
app.use('/timestamp_microservice', express.static(timestamp_microservice_path + '/public'));
app.use('/',express.static(homepage_path + '/public'));

//routes
app.use('/timestamp_microservice', timestamp_microservice_route);
app.use('/', homepage_route);

//listen
app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${process.env.PORT}`);
});
