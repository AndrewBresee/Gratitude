angular.module('gratitude.services', [])

.factory('Post', function ($http) {

  var addOne = function (post) {

    console.log("ADDED ONE : ", post)


    return $http({
      method: 'POST',
      url: '/api/post',
       data: {
        post: post
      }
    })
    .then(function (data) {
      return data;
    })
  };

  var getAll = function () {
    return $http({
      method: 'GET',
      url: '/api/post'
    })
    .then(function (links) {
      return post.data;
    });
  };

  return {
    getAll: getAll,
    addOne: addOne
  };

})

.factory('Auth', function ($http, $location, $window) {
  // Don't touch this Auth service!!!
  // it is responsible for authenticating our user
  // by exchanging the user's username and password
  // for a JWT from the server
  // that JWT is then stored in localStorage as 'com.shortly'
  // after you signin/signup open devtools, click resources,
  // then localStorage and you'll see your token from the server
  var signin = function (user) {
    return $http({
      method: 'POST',
      url: '/api/signin',
      data: user
    })
    .then(function (resp) {
      return resp.data.token;
    });
  };

  var signup = function (user) {
    return $http({
      method: 'POST',
      url: '/api/signup',
      data: user
    })
    .then(function (resp) {
      return resp.data.token;
    });
  };

  var isAuth = function () {
    return !!$window.localStorage.getItem('com.shortly');
  };

  var signout = function () {
    $window.localStorage.removeItem('com.shortly');
    $location.path('/signin');
  };

  return {
    signin: signin,
    signup: signup,
    isAuth: isAuth,
    signout: signout
  };
});
