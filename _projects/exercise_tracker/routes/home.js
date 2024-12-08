var express = require('express');
var router = express.Router({ mergeParams: true });
const path = require('path');
const bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({extended: false}));

router.get('/', function(req, res){
    var filePath = path.join(__dirname, "../public/main.html");
    res.sendFile(filePath);
});

module.exports = router;