const path = require('path');
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const db = require('./db');

dotenv.config();
const app = express();

app.enable('trust proxy');

app.use((req,res,next)=>{
    if(req.secure || process.env.MODE !== 'prod'){
        next();
    }else{
        res.redirect('https://' + req.hostname + req.url);
    }
});

app.use(cors({optionsSuccessStatus: 200}));  // some legacy browsers choke on 204

const projects = ['homepage', 'timestamp_microservice', 'header_parser_microservice', 'url_shortener_microservice', 'exercise_tracker']

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

app.get('/defaultsite', (req, res) => {
    res.redirect('/homepage');
})

const start = async() =>{
    try{
        await db.connect();

        app.listen(process.env.PORT, () => {
            console.log(`Example app listening on port ${process.env.PORT}`);
        });

    } catch (err) {
        console.log(err);
        process.exit(1);
    } 
}

start();
