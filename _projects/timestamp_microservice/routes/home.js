var express = require('express');
var router = express.Router({ mergeParams: true });
const path = require('path');
const controller = require('../controllers/timestamp_microservice');

router.get('/', function(req, res, next){
    var filePath = path.join(__dirname, "../public/main.html");
    res.sendFile(filePath);
});

router.get('/app/:date', function(req, res, next){
    res.send(controller.GetTimeStampObjectFromString(req.params.date));
});

router.get('/app/', function(req, res, next){
    res.send(controller.GetCurrentTimeStampObject());
});

module.exports = router;