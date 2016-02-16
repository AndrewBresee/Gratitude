var mongoose = require('mongoose');
var crypto = require('crypto');

var PostSchema = new mongoose.Schema({
 post: String,
 date: Date,
 user: String
});

module.exports = mongoose.model('Post', PostSchema);
