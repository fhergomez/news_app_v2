NewsApp.controller('PostsCtrl', ['$scope','posts', function ($scope, posts) {

  console.log('post controller reporting');

  $scope.posts = posts.posts;

}]);