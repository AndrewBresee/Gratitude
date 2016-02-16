angular.module('gratitude.history', [])

.controller('HistoryController', function ($scope, Post) {
  // Your code here
  $scope.data = {};

  $scope.getAllPosts = function () {

  	console.log("history button pressed!")

    Post.getAll()
      .then(function (data) {
        $scope.data.links = data;
        console.log(data)
      });
  };


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
