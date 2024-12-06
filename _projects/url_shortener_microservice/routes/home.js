var express = require('express');
var router = express.Router({ mergeParams: true });
const path = require('path');
const bodyParser = require('body-parser');
const isValidUrl = require('../controllers/isValidUrl');
const shortUrl = require('../models/shortUrl');

router.use(bodyParser.urlencoded({extended: false}));

router.get('/', function(req, res, next){
    var filePath = path.join(__dirname, "../public/main.html");
    res.sendFile(filePath);
});

router.get('/api/shorturl/:shorturl?', async(req, res) => {
    var document = await shortUrl.findOne({shortUrl:req.params.shorturl});

    if (!document){
        res.send({ error: 'invalid url' });
    } else {
        res.redirect(document.fullUrl);
    }
});

router.post('/api/shorturl/', (req, res) => {
    isValidUrl(req.body.url, async function(isValid){
        if (isValid){
            var document = await shortUrl.findOne({fullUrl:req.body.url});
            if (!document){
                document = await shortUrl.create({fullUrl:req.body.url});
            } 
            res.send({ original_url : document.fullUrl, short_url : document.shortUrl })
        } else {
            res.send({ error: 'invalid url' });
        }
    })
});

module.exports = router;