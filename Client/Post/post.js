angular.module('gratitude.post', [])

.controller('PostController', function ($scope, Post) {
  // Your code here

  $scope.data = [];

  $scope.addPosts = function (post, date) {
    Post.addOne($scope.newPost, $scope.date)
      .then(function (data) {
      	console.log(data)
      });
  };

  

});
