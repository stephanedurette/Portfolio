var express = require('express');
var router = express.Router({ mergeParams: true });
const path = require('path');
const bodyParser = require('body-parser');

const ExerciseUser = require('../models/exercise_user');

router.use(bodyParser.urlencoded({extended: false}));

router.get('/', function(req, res){
    var filePath = path.join(__dirname, "../public/main.html");
    res.sendFile(filePath);
});

router.post('/api/users/', async(req, res) => {
    var newUser = await ExerciseUser.create({'name':req.body.username})
    res.send({"username":newUser.name,"_id":newUser._id});
});

module.exports = router;