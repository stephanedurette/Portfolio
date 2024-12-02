const path = require('path');
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();
const app = express();

app.use(cors({optionsSuccessStatus: 200}));  // some legacy browsers choke on 204

const projects = ['homepage', 'timestamp_microservice', 'header_parser_microservice']

projects.forEach((p) => {
    var path = `${__dirname}/_projects/${p}`;

    //static file serving
    app.use(`/${p}`, express.static(`${path}/public`));

    //route
    app.use(`/${p}`, require(`${path}/routes/home`));
})

app.get('/', (req, res) => {
    res.redirect('/homepage');
})

//listen
app.listen(process.env.PORT || 3000, () => {
    console.log(`Example app listening on port ${process.env.PORT}`);
});
