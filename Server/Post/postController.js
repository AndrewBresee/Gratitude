var Post = require('./postModel.js');
var Q = require('q');

var findPost = Q.nbind(Post.findOne, Post);
var createPost = Q.nbind(Post.create, Post);
var findAllLinks = Q.nbind(Post.find, Post);

module.exports = {

  newPost: function (req, res, next) {

    console.log(req.body.post)
    var entry = req.body.post;
    
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
            post: post
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
      

    //   .then(function (createdPost) {
    //     if (createdPost) {
    //       res.json(createdPost);
    //     }
    //   })
      
    //   .fail(function (error) {
    //     next(error);
    //   });
  }
}