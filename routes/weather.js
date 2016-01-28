//http://api.openweathermap.org/data/2.5/weather

var express = require('express');
var router = express.Router();
var request = require('request');

router.get('/', function(req, res, next) {
  request({
    url:'http://api.openweathermap.org/data/2.5/weather',
    qs:req.query
  },function(err,response,body){
    if(err) return res.send(500,err);
    res.send(body);
  });
});


module.exports = router;
