const path = require('path');
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

dotenv.config();
const app = express();

app.enable('trust proxy');

app.use((req,res,next)=>{
    if(req.secure || process.env.MODE !== 'prod'){
        next();
    }else{
        res.redirect('https://' + req.hostname + req.url + ':' + process.env.PORT);
    }
});

app.use(cors({optionsSuccessStatus: 200}));  // some legacy browsers choke on 204

const projects = ['homepage', 'timestamp_microservice', 'header_parser_microservice', 'url_shortener_microservice']

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

async function main(){
    try {
        // Create a Mongoose client with a MongoClientOptions object to set the Stable API version
        await mongoose.connect(process.env.DB_CONN, { serverApi: { version: '1', strict: true, deprecationErrors: true } });
        await mongoose.connection.db.admin().command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
      } finally {
        // Ensures that the client will close when you finish/error
        await mongoose.disconnect();
      }

    app.listen(process.env.PORT, () => {
        console.log(`Example app listening on port ${process.env.PORT}`);
    });
}

main().catch((err) => console.log(err));
