var express = require('express');
var router = express.Router({ mergeParams: true });
const path = require('path');
const controller = require('../controllers/timestamp_microservice');

router.get('/', function(req, res, next){
    var filePath = path.join(__dirname, "../public/main.html");
    res.sendFile(filePath);
});

router.get('/api/', function(req, res, next){
    res.send(controller.GetCurrentTimeStampObject());
});

router.get('/api/:date?', function(req, res, next){
    res.send(controller.GetTimeStampObjectFromString(req.params.date));
});


module.exports = router;