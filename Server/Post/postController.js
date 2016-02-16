var Post = require('./postModel.js');
var Q = require('q');

var findPost = Q.nbind(Post.findOne, Post);
var createLink = Q.nbind(Post.create, Post);
var findAllLinks = Q.nbind(Post.find, Post);

module.exports = {

  newPost: function (req, res, next) {

    console.log(req.body)

    // var post = req.body.post;
    // if (!util.isValidUrl(post)) {
    //   return next(new Error('Not a valid url'));
    // }

    // findPost({post: post})
    //   .then(function (match) {
    //     if (match) {
    //       res.send(match);
    //     } else {
    //       return res.post;
    //     }
    //   })

    //   .then(function (title) {
    //     if (title) {
    //       var newPost = {
    //         post: post,
    //         title: title
    //       };
    //       return createPost(newPost);
    //     }
    //   })

    //   .then(function (createdLink) {
    //     if (createdPost) {
    //       res.json(createdPost);
    //     }
    //   })
      
    //   .fail(function (error) {
    //     next(error);
    //   });
  }
}