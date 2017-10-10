var express = require("express");
var fs = require("fs");
var path = require('path');
var friends = require("./data/friends.js");



var app = express();
var PORT = 8080;



app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname +'/home.html'));
});
app.get("/survey", function(req,res) {
  res.sendFile(path.join(__dirname +'/survey.html'))
});
app.get("/api/friends", function(req,res) {
  res.json(friends);
});




app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
