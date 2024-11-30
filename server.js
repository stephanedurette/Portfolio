const path = require('path');
const express = require('express');
const app = express();
require('dotenv').config();

const homeRoute = require('./routes/home');
const timestampMicroserviceRoute = require('./routes/timestamp_microservice');


//middleware
app.use(express.static(path.join(__dirname, 'public/homepage')));
app.use(express.static(path.join(__dirname, 'public/timestamp_microservice')));

//routes

app.use('/timestamp_microservice', timestampMicroserviceRoute);
app.use('/', homeRoute);

//listen
app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${process.env.PORT}`);
});
