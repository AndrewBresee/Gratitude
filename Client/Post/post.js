angular.module('gratitude.post', [])

.controller('PostController', function ($scope, Post) {
  // Your code here

  $scope.data = [];

 // console.log("controller called")

  $scope.addPosts = function () {

    Post.addOne($scope.newPost)
      .then(function (data) {
      	console.log(data)
      
      });
  };

  $scope.newPosts = function () { 
  	
    Post.addOne($scope.newPost)
      .then(function (data) {
      	console.log(data)
      
      });
  };

});
