var mongoose = require('mongoose');
var crypto = require('crypto');

var PostSchema = new mongoose.Schema({
 post: String,
});

// var createSha = function (post) {
//   var shasum = crypto.createHash('sha1');
//   shasum.update(post);
//   return shasum.digest('hex').slice(0, 5);
// };

// PostSchema.pre('save', function (next) {
//   var code = createSha(this.post);
//   this.code = code;
//   next();
// });

module.exports = mongoose.model('Post', PostSchema);
