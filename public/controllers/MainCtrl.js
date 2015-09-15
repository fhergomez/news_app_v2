NewsApp.controller('MainCtrl', ['$scope', '$routeParams','$modal','posts', function ($scope, $routeParams, $modal, posts){

  console.log('Main Controller....here!!')

  // posts.get($routeParams.id).success(function(post){
  //   $scope.post = post;
  // });

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