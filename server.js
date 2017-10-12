var express = require("express");
var fs = require("fs");
var path = require('path');
var friends = require("./app/data/friends.js");
var bodyparser = require("body-parser")


var app = express();
app.use(bodyparser.json());
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
app.post('/api/friends', function(req,res) {
  console.log(req.body);
  res.status(200).send("");
});




app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
