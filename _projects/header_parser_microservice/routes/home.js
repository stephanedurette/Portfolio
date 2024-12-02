var express = require('express');
var router = express.Router({ mergeParams: true });
const path = require('path');

router.get('/', function(req, res, next){
    var filePath = path.join(__dirname, "../public/main.html");
    res.sendFile(filePath);
});

router.get('/api/whoami', function(req, res, next){
    res.send(
        {
            "ipaddress":req.socket.remoteAddress,
            "language":req.headers['accept-language'],
            "software":req.headers['user-agent'],
        }
    )
});

module.exports = router;