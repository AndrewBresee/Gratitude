angular.module('gratitude.history', [])

.controller('HistoryController', function ($scope, Post, Auth, $location) {
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

// .controller('PostController', function ($scope, Post) {
//   // Your code here

//   $scope.data = [];

//   $scope.addPosts = function (post, date) {
//     Post.addOne($scope.newPost, $scope.date)
//       .then(function (data) {
//       	console.log(data)
//       });
//   };

// });
