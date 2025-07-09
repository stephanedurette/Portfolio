const mongoose = require('mongoose');

const exerciseSchema = new mongoose.Schema({
    user_id: String,
    description: String,
    duration: Number,
    date : Date,
  });

const Exercise = mongoose.model('exercise', exerciseSchema);

module.exports = Exercise;