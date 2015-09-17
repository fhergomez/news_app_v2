NewsApp.controller('MainCtrl', ['$scope', '$routeParams','$http','$modal','posts', function ($scope, $routeParams, $http, $modal, posts){

  console.log('Main Controller....here!!')

  $scope.data = {};
   $http.get('/api/news').success(function(data){
    console.log(data);
    $scope.results = data.results;
   });
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
    $scope.link = $scope.link + 'target="_blank"';
  }

  $scope.incrementUpvotes = function(post) {
    posts.upvote(post);
  };

  $scope.showForm = false;

}]);