var express = require('express');
var router = express.Router({ mergeParams: true });
const path = require('path');

router.get('/', function(req, res, next){
    var filePath = path.join(__dirname, "../public/timestamp_microservice/main.html");
    res.sendFile(filePath);
});

module.exports = router;