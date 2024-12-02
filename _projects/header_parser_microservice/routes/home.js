var express = require('express');
var router = express.Router({ mergeParams: true });
const path = require('path');
const controller = require('../controllers/header_parser_microservice');

router.get('/', function(req, res, next){
    var filePath = path.join(__dirname, "../public/main.html");
    res.sendFile(filePath);
});

module.exports = router;