NewsApp.factory('posts', ['$http', 'auth', function($http, auth){
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
    return $http.post('/api/posts', post, {
      headers: {
        Authorization: 'Bearer ' + auth.getToken()
      }
    }).success(function(data){
      o.posts.push(data);
    });
  };

  o.upvote = function(post) {
    return $http.put('/api/posts/' + post._id + '/upvote', null, {
      headers: {
        Authorization: 'Bearer ' + auth.getToken()
      }
    }).success(function(data){
      post.upvotes = data.upvotes;
    });
  };

  o.editPost = function(post) {
    return $http.put('api/posts/' + post._id, null, {
      headers: {
        Authorization: 'Bearer ' + auth.getToke()
      }
    }).success(function(data){
      post = data.post;
    });
  };

  o.deletePost = function(post) {
    return $http.delete('api/posts/' + post._id, null, {
      headers: {
        Authorization: 'Bearer ' + auth.getToke()
      }
    }).success(function(data){
      post = data.post;
    });
  };

  o.upvoteComment = function(post, comment) {
    return $http.put('/api/posts/' + post._id + '/comments/' + comment._id + '/upvote', null, {
      headers: {
        Authorization: 'Bearer ' + auth.getToken()
      }
    }).success(function(data){
      comment.upvotes = data.upvotes;
    })
  };

  o.get = function(id) {
    return $http.get('/api/posts/' + id);
  };

  o.addComment = function(id,comment) {
    return $http.post('/api/posts/' + id + '/comments', comment, {
      headers: {
        Authorization: 'Bearer ' + auth.getToken()
      }
    });
  };

  o.deleteComment = function(id,comment) {
    return $http.delete('/api/post/' + id + '/comments/' , comment, {
      headers: {
        Authorization: 'Bearer ' + auth.getToken()
      }
    });
  }


  return o;

}])
