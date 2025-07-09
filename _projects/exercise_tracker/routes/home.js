var express = require('express');
var router = express.Router({ mergeParams: true });
const path = require('path');
const bodyParser = require('body-parser');

const ExerciseUser = require('../models/exercise_user');
const Exercise = require('../models/exercise');

router.use(bodyParser.urlencoded({extended: false}));

function GetUserObject(user){
    return {"username":user.name,"_id":user._id}
}

router.get('/', function(req, res){
    var filePath = path.join(__dirname, "../public/main.html");
    res.sendFile(filePath);
});

router.post('/api/users/:id/exercises', async(req, res) => {

    console.log(req.body)
    
    var newExercise = await Exercise.create({
        'user_id':req.body.id,
        'date':req.body.date,
        'duration':req.body.duration,
        'description':req.body.description
    })
    
    var userName = await ExerciseUser.find({'_id':req.body.id})
    console.log(userName.name)
    res.send({
        username:userName.name,
        description:req.body.description,
        duration:req.body.duration,
        date:req.body.date,
        _id:req.body.id,
    });
    
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