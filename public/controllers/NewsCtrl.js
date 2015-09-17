NewsApp.controller('NewsCtrl', ['$scope','$http','$routeParams', function ($scope, $http, $routeParams) {

  $scope.data = {};
   $http.get('/api/news').success(function(data){
    console.log(data);
    $scope.results = data.results;
   });

}]);