angular.module('gratitude', [
  'gratitude.services',
  'gratitude.auth',
  'gratitude.post',
  'gratitude.history',
  'ngRoute'
])

.config(function ($routeProvider, $httpProvider) {
  $routeProvider
    .when('/signin', {
      templateUrl: 'Authentication/signin.html',
      controller: 'AuthController'
    })
    .when('/signin', {
      templateUrl: 'Authentication/signin.html',
      controller: 'AuthController'
    })
    .when('/history', {
      templateUrl: 'History/History.html',
      controller: 'HistoryController'
    })
    .when('/post', {
      templateUrl: 'Post/Post.html',
      controller: 'PostController'
    })
    .when('/signout', {
      templateUrl: 'Authentication/signin.html',
      controller: 'AuthController'
    })
    .when('/signup', {
      templateUrl: 'Authentication/signup.html',
      controller: 'AuthController'
    })
    .when('/', {
      templateUrl: 'Post/Post.html',
      controller: 'PostController'
    })
    .otherwise({
      redirectTo : '/post'
    });

    // We add our $httpInterceptor into the array
    // of interceptors. Think of it like middleware for your ajax calls
    // $httpProvider.interceptors.push('AttachTokens');
})

.factory('AttachTokens', function ($window) {
  // this is an $httpInterceptor
  // its job is to stop all out going request
  // then look in local storage and find the user's token
  // then add it to the header so the server can validate the request

  var attach = {
    request: function (object) {
      var jwt = $window.localStorage.getItem('com.shortly');
      if (jwt) {
        object.headers['x-access-token'] = jwt;
      }
      object.headers['Allow-Control-Allow-Origin'] = '*';
      return object;
    }
  };

  return attach;
})

.factory('Session', function($http) {
  var Session = {
    data: {},
    saveSession: function() { /* save session data to db */ },
    updateSession: function() { 
      /* load data from db */
      $http.get('session.json').then(function(r) { return Session.data = r.data;});
    }
  };
  
  Session.updateSession();
  return Session; 
})

.run(function ($rootScope, $location, Auth) {
  // here inside the run phase of angular, our services and controllers
  // have just been registered and our app is ready
  // however, we want to make sure the user is authorized
  // we listen for when angular is trying to change routes
  // when it does change routes, we then look for the token in localstorage
  // and send that token to the server to see if it is a real user or hasn't expired
  // if it's not valid, we then redirect back to signin/signup
  $rootScope.$on('$routeChangeStart', function (evt, next, current) {
    if (next.$$route && next.$$route.authenticate && !Auth.isAuth()) {
      $location.path('/signin');
    }
  });
});
