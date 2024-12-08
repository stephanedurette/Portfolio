const mongoose = require('mongoose');

const exerciseUserSchema = new mongoose.Schema({
    name: String
  });

const ExerciseUser = mongoose.model('exerciseUser', exerciseUserSchema);

module.exports = ExerciseUser;