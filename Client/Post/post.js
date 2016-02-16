angular.module('gratitude.post', [])

.controller('PostController', function ($scope, Post, Auth, $location) {
  // Your code here
  $scope.data = {};

  $scope.addPost = function () {
    Post.addOne($scope.newPost)
      .then(function (data) {
      	console.log(data)
      });
  };

});
