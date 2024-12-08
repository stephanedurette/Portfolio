var express = require('express');
var router = express.Router({ mergeParams: true });
const path = require('path');
const bodyParser = require('body-parser');

const ExerciseUser = require('../models/exercise_user');

router.use(bodyParser.urlencoded({extended: false}));

function GetUserObject(user){
    return {"username":user.name,"_id":user._id}
}

router.get('/', function(req, res){
    var filePath = path.join(__dirname, "../public/main.html");
    res.sendFile(filePath);
});

router.post('/api/users/:id/exercises', async(req, res) => {
    res.send("finally")
})

router.post('/api/users', async(req, res) => {
    var newUser = await ExerciseUser.create({'name':req.body.username})
    res.send(GetUserObject(newUser));
    console.log(req)
});

router.get('/api/users', async(req, res) => {
    var users = await ExerciseUser.find({});
    res.send(users.map(GetUserObject));
});



module.exports = router;