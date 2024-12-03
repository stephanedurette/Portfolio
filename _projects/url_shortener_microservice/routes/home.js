const { debug } = require('console');
var express = require('express');
var router = express.Router({ mergeParams: true });
const path = require('path');

router.get('/', function(req, res, next){
    var filePath = path.join(__dirname, "../public/main.html");
    res.sendFile(filePath);
});

router.get('/api/shorturl/:shorturl?', (req, res) => {
    res.send("blah")
});

router.post('/api/shorturl/', (req, res) => {
    res.send("blah");
});

module.exports = router;