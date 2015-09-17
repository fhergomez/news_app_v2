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
    templateUrl: '/views/posts/index.html',
    controller: 'PostsCtrl',
    resolve: {
      postPromise: ['posts', function(posts){
        return posts.getAll();
      }]
    }
  })

  .when('/posts/:id', {
    templateUrl: '/views/posts/show.html',
    controller: 'PostsShowCtrl'
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
    templateUrl: '/views/auth/signup.html',
    controller: 'AuthCtrl'
  })

  .when('/news', {
    templateUrl: 'views/news/index.html',
    controller: 'NewsCtrl'
  })

  .otherwise({
    templateUrl:'/views/errors/404.html'
  })

}]);
