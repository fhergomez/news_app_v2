var express = require('express');
var router = express.Router();
var request = require('request');

//GET http://localhost:3000/news
router.get("/", function(req, res) {
  //var searchTerm = req.query.q;
  var nytimes = process.env.NYTIMES_API_KEY;
  var url = "http://api.nytimes.com/svc/topstories/v1/sports.json?api-key=" + nytimes;
  request(url, function(error,response,data){
    // res.render('news/index', {results: JSON.parse(data).results});
    res.send(data)
  });
});





module.exports = router;