angular.module('gratitude.history', [])

.controller('HistoryController', function ($scope, Post, Auth, $location, $window) {
  // Your code here
  $scope.data = {};

  if (!Auth.isAuth()) {
    console.log("ACCESS DENIED!")
    $location.path('/signin');
  }

  $scope.getAllPosts = function () {
    Post.getAll()
      .then(function (data) {
        $scope.data.post = data;
        console.log(data)
      });
  };

  $scope.getAllPosts(); 


});
