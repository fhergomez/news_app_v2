NewsApp.controller('NewsCtrl', ['$scope','$http','$routeParams', function ($scope, $http, $routeParams) {

  $scope.data = {};
   $http.get('/api/news').success(function(data){
    console.log(data);
    if ($scope.results.title === "Super Bowl") {
      $scope.results = data.results;
    };
   });

}]);