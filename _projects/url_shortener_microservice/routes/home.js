const { debug } = require('console');
var express = require('express');
var router = express.Router({ mergeParams: true });
const path = require('path');
const bodyParser = require('body-parser');


router.use(bodyParser.urlencoded({extended: false}));

router.get('/', function(req, res, next){
    var filePath = path.join(__dirname, "../public/main.html");
    res.sendFile(filePath);
});

router.get('/api/shorturl/:shorturl?', (req, res) => {
    res.send("blah")
});

router.post('/api/shorturl/', async function(req, res){
    //var exists = await urlExist(req.body.url);
    //console.log(exists);
});

module.exports = router;