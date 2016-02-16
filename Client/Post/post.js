angular.module('gratitude.post', [])

.controller('PostController', function ($scope, Post, Auth, $location) {
  // Your code here

  $scope.data = [];

  if (!Auth.isAuth()) {
    console.log("ACCESS DENIED!")
    $location.path('/signin');
  }

  $scope.addPosts = function (post, date) {
    Post.addOne($scope.newPost, $scope.date)
      .then(function (data) {
      	console.log(data)
      });
  };

  

});
