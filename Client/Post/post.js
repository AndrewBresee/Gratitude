angular.module('gratitude.post', [])

.controller('PostController', function ($scope, Post, Auth, $location, $window) {
  // Your code here

  $scope.data = [];

  $scope.userName = $window.localStorage.getItem('userName');

  if (!Auth.isAuth()) {
    console.log("ACCESS DENIED!")
    $location.path('/signin');
  }

  $scope.addPosts = function (post, date) {
    Post.addOne($scope.newPost, new Date(), $scope.userName)
      .then(function (data) {
      	console.log(data)
      });
  };

  

});
