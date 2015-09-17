NewsApp.controller('PostsCtrl', ['$scope','posts','$routeParams', function ($scope, posts,$routeParams) {

  console.log('post controller reporting');

  $scope.posts = posts.posts;

  $scope.incrementUpvotes = function(post) {
    posts.upvote(post);
  }

}]);