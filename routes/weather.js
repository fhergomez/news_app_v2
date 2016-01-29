//http://api.openweathermap.org/data/2.5/weather

var express = require('express');
var router = express.Router();
var request = require('request');

//GET http://localhost:3000
router.get('/', function(req, res, next) {
  req.query.APPID = process.env.WEATHER_API_KEY;
  request({
    url:'http://api.openweathermap.org/data/2.5/weather',
    qs:req.query
  },function(err,response,body){
    if(err) return res.send(500,err);
    // res.send({app_key: env, data: body});
    res.send(body);
  });
});


module.exports = router;
