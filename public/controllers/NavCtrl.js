NewsApp.controller('NavCtrl', ['$scope','$routeParams','auth', function ($scope,$routeParams,auth) {
  console.log('Nav ctrl');
  // console.log('auth',auth.isLoggedIn(),auth.currentUser());
  // $scope.auth = auth;
  $scope.navCollapsed = true;
  $scope.isLoggedIn = auth.isLoggedIn;
  $scope.currentUser = auth.currentUser;
  $scope.logOut = auth.logOut;
}]);
