var express = require('express');
var app = express();

app.use(express.static(__dirname + '/client'));

app.get('/', function(req, res){
  res.redirect('index.html');
});

module.exports = app;
