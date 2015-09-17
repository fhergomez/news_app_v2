var express = require('express');
var jwt = require('express-jwt');
var router = express.Router();
var mongoose = require('mongoose');
var Post = mongoose.model('Post');
var Comment = mongoose.model('Comment');
var User = mongoose.model('User');
var passport = require('passport');
var auth = jwt({secret: 'SECRET', userProperty: 'payload'});

router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Seattle News' });
  res.send('api page');
});

router.post('/register', function(req,res,next){
  if(!req.body.username || !req.body.password){
    return res.status(400).json({message: 'Please fill out all fields'});
  }
  var user = new User();
  user.name = req.body.name;
  user.username = req.body.username;
  user.setPassword(req.body.password)
  if (user.username) {
    return res.status(400).json({message: 'Username already exists'});
  }
  user.save(function(err){
    if(err){
      return next(err);
    }
    return res.json({
      token: user.generateJWT()
    });
  })
});

router.post('/login', function(req,res,next){
  if(!req.body.username || !req.body.password){
    return res.status(400).json({
      message: 'Please fill out all fields'
    });
  }
  passport.authenticate('local', function(err, user, info){
    if(err){
      return next(err);
    }
    if(user){
      return res.json({
        token:user.generateJWT()
      });
    } else {
      return res.status(401).json(info);
    }
  })(req,res,next);
})

module.exports = router;
