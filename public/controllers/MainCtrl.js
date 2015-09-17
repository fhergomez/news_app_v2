NewsApp.controller('MainCtrl', ['$scope', '$routeParams','$http','$modal','posts', 'auth', function ($scope, $routeParams, $http, $modal, posts, auth){

  console.log('Main Controller....here!!')

  $scope.isLoggedIn = auth.isLoggedIn;

  $scope.data = {};
  $http.get('/api/news').success(function(data){
    console.log(data);
    $scope.results = data.results;
  });
  // posts.get($routeParams.id).success(function(post){
  //   $scope.post = post;
  // });

  $scope.posts = posts.posts;
  $scope.title = '';
  $scope.link = '';

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

  $scope.showForm = false;

}]);