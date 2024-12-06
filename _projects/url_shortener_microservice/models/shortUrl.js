const mongoose = require('mongoose');
const autoIncrement = require('mongoose-sequence')(mongoose);

const shortUrlSchema = new mongoose.Schema({
    fullUrl: String
  });

shortUrlSchema.plugin(autoIncrement, {inc_field:'shortUrl'});

const shortUrl = mongoose.model('shortUrl', shortUrlSchema);

module.exports = shortUrl;