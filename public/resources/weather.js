NewsApp.directive('weather', function() {
 return {
  restrict: 'E',
  scope: {
   location: '=?'
  },
  controller: ['$scope', '$http', function($scope,$http){
   $scope.location = 'Seattle,WA';
    console.log($scope.location);
     $http({
       url:'/api/weather',
       params:{
         q:$scope.location,
         units:'imperial'
        }
     }).success(function(data){
        console.log(data)
        var weatherData = data.weather[0];
        $scope.temperature = Math.round(data.main.temp);
        $scope.city = data.name;
        $scope.image = 'https://openweathermap.org/img/w/' + weatherData.icon + '.png';
     })
   }],
    template:'<li class="weather"> \
                Today\'s temperature is: {{temperature}}&deg;<img src="{{image}}">\
                </li>',
    replace: true,
    transclude: true
 }
});