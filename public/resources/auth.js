NewsApp.factory('auth', ['$http', '$window', function ($http, $window) {

  var auth = {};

  auth.saveToken = function(token){
    $window.localStorage['news-app-token'] = token;
  };

  auth.getToken = function(){
    return $window.localStorage['news-app-token'];
  }

  auth.isLoggedIn = function(){
    var token = auth.getToken();
    if(token){
      var payload = JSON.parse($window.atob(token.split('.')[1]));
      return payload.exp > Date.now() /1000;
    } else {
      return false;
    }
  };

  auth.currentUser = function(){
    if(auth.isLoogedIn()){
      var token = auth.getToken();
      var payload = JSON.parse($window.atob(token.split('.')[1]));
      return payload.username;
    }
  };

  auth.register = function(user){
    return $http.post('/api/register',user).success(function(data){
      auth.saveToken(data.token);
    });
  };

  auth.logIn = function(user){
    return $http.post('/api/login', user).success(function(data){
      auth.saveToken(data.token);
    });
  };

  auth.logOut = function(){
    $window.localStorage.removeItem('news-app-token');
  };

  return auth;

}])