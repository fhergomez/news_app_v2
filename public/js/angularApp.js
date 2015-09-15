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

  .when('/posts/:id', {
    templateUrl: '/views/posts/posts.html',
    controller: 'PostsCtrl'
  })
  .otherwise({
    templateUrl:'/views/errors/404.html'
  })

}]);
