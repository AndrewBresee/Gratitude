angular.module('gratitude.post', [])

.controller('PostController', function ($scope, Post, Auth, $location, $window) {
  // Your code here

  $scope.data = [];

  $scope.userName = $window.localStorage.getItem('userName');

  if (!Auth.isAuth()) {
    $location.path('/signin');
  }

  $scope.addPosts = function (post, date) {
    Post.addOne($scope.newPost, new Date(), $scope.userName)
      .then(function (data) {
        $scope.newPost = "";
      	console.log(data)
      });
  };

  

});
