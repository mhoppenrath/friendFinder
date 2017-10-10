var express = require("express");
var fs = require("fs");
var path = require('path');
var friends = require("./app/data/friends.js");



var app = express();
var PORT = 8080;



app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname +'/app/public/home.html'));
});
app.get("/survey", function(req,res) {
  res.sendFile(path.join(__dirname +'/app/public/survey.html'))
});
app.get("/api/friends", function(req,res) {
  res.json(friends);
});




app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
