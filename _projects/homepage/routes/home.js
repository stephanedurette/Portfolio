var express = require('express');
var router = express.Router({ mergeParams: true });
const path = require('path');

router.get('/', function(req, res){
    res.render("homepage/main");
});

module.exports = router;