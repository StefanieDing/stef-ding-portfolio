var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
  res.render('index');
});

router.get('/websites', function(req, res){
  res.render('websites');
});

router.get('/animation', function(req, res){
  res.render('animation');
});

router.get('/character', function(req, res){
  res.render('character');
});
module.exports = router;