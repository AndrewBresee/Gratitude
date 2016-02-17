var Post = require('./postModel.js');
var Q = require('q');

var findPost = Q.nbind(Post.findOne, Post);
var createPost = Q.nbind(Post.create, Post);
var findAllPosts = Q.nbind(Post.find, Post);

module.exports = {

  newPost: function (req, res, next) {

    var entry = req.body.post;
    var date = req.body.date; 
    var user = req.body.user;
    
    findPost({post: entry})
      .then(function (match) {
        if (match) {
          res.send(match);
        } else {
          return entry;
        }
      })
      .then(function (post) {
        if (post) {
          var newPost = {
            post: post,
            date: date,
            user: user
          };
          return createPost(newPost);
        }
      })
      .then(function (createdPost) {
        if (createdPost) {
          res.json(createdPost);
        }
      })
      .fail(function (error) {
        next(error);
      });

  },

  allPosts: function (req, res, next) {

    user = req.params.userName; 

      findAllPosts({user : user})
        .then(function (posts) {
          res.json(posts);
        })
        .fail(function (error) {
          next(error);
        });
  },
}