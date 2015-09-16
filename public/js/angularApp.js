var NewsApp = angular.module('NewsApp', ['ui.bootstrap','ngRoute']);

NewsApp.config(['$routeProvider','$locationProvider', function ($routeProvider, $locationProvider) {

  $locationProvider.html5Mode(true);

  $routeProvider
  .when('/', {
    templateUrl: '/views/main/index.html',
    controller: 'MainCtrl',
    resolve: {
      postPromise: ['posts', function(posts){
        return posts.getAll();
      }]
    }
  })

  .when('/about', {
    templateUrl: '/views/main/about.html'
  })

  .when('/posts', {
    templateUrl: '/views/posts/show.html',
    controller: 'PostsCtrl'
  })

  .when('/posts/:id', {
    templateUrl: '/views/posts/index.html',
    controller: 'PostsCtrl'
  })

  .when('/news', {
    templateUrl: '/views/news/index.html',
    controller: 'NewsCtrl'
  })

  .when('/login', {
    templateUrl: '/views/auth/login.html',
    controller: 'AuthCtrl'
  })

  .when('/signup', {
    templateUrl: '/vies/auth/signup.html',
    controller: 'AuthCtrl'
  })

  .otherwise({
    templateUrl:'/views/errors/404.html'
  })

}]);
