NewsApp.controller('MainCtrl', ['$scope', '$modal','posts', function ($scope, $modal, posts){

  console.log('Main Controller....here!!')

  $scope.posts = posts.posts;

  $scope.addPost = function() {
    if (!$scope.title || $scope.title === '') {
      return;
    }
    posts.create({
      title: $scope.title,
      link: $scope.link
    });
    $scope.title = '';
    $scope.link = '';
  }

  $scope.incrementUpvotes = function(post) {
    posts.upvote(post);
  };

}]);