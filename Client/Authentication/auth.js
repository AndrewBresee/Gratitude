angular.module('gratitude.auth', [])

.controller('AuthController', function ($scope, $window, $location, Auth) {
  $scope.user = {};

  $scope.signup = function () {
    Auth.signup($scope.user)
      .then(function (token) {
        $window.localStorage.setItem('com.grateful', token);
        $location.path('/post');
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  $scope.signin = function () {
    console.log("AUTH SIGNIN")
      Auth.signin($scope.user)
      .then(function (token) {
        $window.localStorage.setItem('com.grateful', token);
        $location.path('/post');
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  $scope.signout = function () {
    console.log("SINGOUT HAPPENED!")
    Auth.signout();
  };

});