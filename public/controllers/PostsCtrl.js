NewsApp.controller('PostsCtrl', ['$scope','posts','$routeParams', function ($scope, posts, $routeParams) {

  console.log('post controller reporting');

  posts.get($routeParams.id).success(function(post){
    $scope.post = post;
  });


  $scope.addComment = function(){
    if(!$scope.body && $scope.body === '') {
      return;
    }
    posts.addComment($scope.post._id, {
      body: $scope.body,
      author: 'user'
    }).success(function(comment){
      $scope.post.comments.push(comment);
    });
    $scope.body = '';
  }

  $scope.incrementUpvotes = function(post) {
    posts.upvote(post);
  }

  $scope.incrementUpvotes = function(comment) {
    posts.upvoteComment($scope.post,comment);
  }
}]);