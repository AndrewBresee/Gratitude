angular.module('gratitude.post', [])

.controller('PostController', function ($scope, Post, Auth, $location, $window) {
  // Your code here

  $scope.data = [];

  var userName =   $window.localStorage.getItem('userName');

  if (!Auth.isAuth()) {
    console.log("ACCESS DENIED!")
    $location.path('/signin');
  }

  $scope.addPosts = function (post, date) {
    Post.addOne($scope.newPost, $scope.date, userName)
      .then(function (data) {
      	console.log(data)
      });
  };

  

});
