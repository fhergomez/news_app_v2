NewsApp.factory('posts', ['$http',function($http){
  // return {

  //   find: function(){
  //     return $http.get('/api/posts');
  //   },

  //   findOne: function(id){
  //     return $http.get('/api/posts/' + id);
  //   }

  // };
  var o = {
    posts: []
  };

  o.getAll = function(){
    return $http.get('/api/posts').success(function(data){
      angular.copy(data, o.posts);
    });
  };

  o.create = function(post){
    return $http.post('/api/posts', post).success(function(data){
      o.posts.push(data);
    });
  };

  o.upvote = function(post) {
    return $http.put('/api/posts/' + post._id + '/upvote')
    .success(function(data){
      post.upvotes = data.upvotes;
    });
  };

  o.upvoteComment = function(post, comment) {
    return $http.put('/api/posts/' + post._id + '/comments/' + comment._id + '/upvote')
    .success(function(data){
      comment.upvotes = data.upvotes;
    })
  };

  o.get = function(id) {
    return $http.get('/api/posts/' + id);
  };

  o.addComment = function(id,comment) {
    return $http.post('/api/posts/' + id + '/comments', comment);
  };


  return o;

}])
