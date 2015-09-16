var weatherUrl = "http://api.openweathermap.org/data/2.5/weather?q=Seattle,%20US&units=imperial"
var request = new XMLHttpRequest();
 request.open("get", weatherUrl, false);
 request.send();
 // if (request.responseText IS NOT AN ERROR )
 var data = JSON.parse(request.responseText);
 var temp = data.main.temp;
 var conditions = data.weather[0].description;
 //console.log(conditions);

 // put the data into .weather-widget element
 var weather_display = "<span>" + temp + "</span><span>" + conditions + "</span>";
document.getElementById("weather-widget").innerHTML = weather_display;