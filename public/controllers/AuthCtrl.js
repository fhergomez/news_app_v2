NewsApp.controller('AuthCtrl', ['$scope','$routeParams','$location','auth', function ($scope, $routeParams, $location, auth) {

  $scope.user = {};
  $scope.error = false;

  $scope.register = function(){
    auth.register($scope.user).error(function(error){
      $scope.error = error;
      console.log('error',error);
    }).then(function(){
      $location.path('/');
    });
  };

  $scope.logIn = function(){
    auth.logIn($scope.user).error(function(error){
      $scope.error = error;
      // console.log('error');
    }).then(function(){
      // console.log('then');
      $location.path('/');
    })
  }

}]);