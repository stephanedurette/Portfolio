const { debug } = require('console');
var express = require('express');
var router = express.Router({ mergeParams: true });
const path = require('path');
const bodyParser = require('body-parser');
const dns = require('dns');

var isValidUrl;

router.use(bodyParser.urlencoded({extended: false}));

router.get('/', function(req, res, next){
    var filePath = path.join(__dirname, "../public/main.html");
    res.sendFile(filePath);
});

router.get('/api/shorturl/:shorturl?', (req, res) => {
    res.send("blah")
});

router.post('/api/shorturl/', async function(req, res){
    isValidUrl(req.body.url, (isValid) => {
        if (isValid){
            res.send(req.body.url);
        } else {
            res.send("invalid url");
        }
    })
});

isValidUrl = (url, callback) => {
    try {
        dns.lookup(new URL(url).host, (err, address, family) => {
            if (err){
                console.log(err);
                callback(false);
            } else if(!address){
                console.log('invalid address');
                callback(false);
            } else {
                callback(true);
            }
        })
    } catch (err) {
        console.log(err);
        callback(false);
    }
}

module.exports = router;