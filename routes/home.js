var express = require('express');
var router = express.Router();
const path = require('path');

router.get('/', function(req, res){
    var filePath = path.join(__dirname, "../public/main.html");
    res.sendFile(filePath);
});

module.exports = router;