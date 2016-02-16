var Q = require('q');
var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');
//No salt for now.
//var SALT_WORK_FACTOR = 10;

var UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },

  password: {
    type: String,
    required: true
  }
});

UserSchema.methods.comparePasswords = function (candidatePassword) {
  //Sets password to equal the value on the UserSchema object
  var savedPassword = this.password;
  //Resolve and reject are callbacks. Where are they coming from?
  return Q.Promise(function (resolve, reject) {
    //Compares the attempted password with the saved password
    bcrypt.compare(candidatePassword, savedPassword, function (err, isMatch) {
      if (err) {
        reject(err);
      } else {
        resolve(isMatch);
      }
    });
  });
};

UserSchema.pre('save', function (next) {
  var user = this;

  // only hash the password if it has been modified (or is new)
  if (!user.isModified('password')) {
    return next();
  }

    // hash the password along with our new salt
    bcrypt.hash(user.password, null, null, function (err, hash) {
      if (err) {
        return next(err);
      }

      // override the cleartext password with the hashed one
      user.password = hash;
      //user.salt = salt;
      next();
    });

  });

module.exports = mongoose.model('users', UserSchema);
