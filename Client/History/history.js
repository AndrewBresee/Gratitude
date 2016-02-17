angular.module('gratitude.history', [])

.controller('HistoryController', function ($scope, Post, Auth, $location, $window) {
  // Your code here
  $scope.data = {};

 $scope.userName = $window.localStorage.getItem('userName');

  if (!Auth.isAuth()) {
    $location.path('/signin');
  }

  $scope.getAllPosts = function () {
    Post.getAll($scope.userName)
      .then(function (data) {
        $scope.data.post = data;
        console.log(data)
      });
  };

  $scope.getAllPosts(); 


});
