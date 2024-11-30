const path = require('path');
const express = require('express');
const app = express();
const homeRoute = require('./routes/home');

require('dotenv').config();

//middleware
app.use(express.static(path.join(__dirname, 'public')));

//routes
app.get('/', homeRoute);

//listen
app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${process.env.PORT}`);
});
