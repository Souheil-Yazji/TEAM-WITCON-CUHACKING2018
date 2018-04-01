var express = require('express');
var path = require('path');

//calling the function express
var app = express();

//listener
app.listen(8000);
console.log("Listening to port %s...",  8000);

app.use(express.static(__dirname + '/Website'));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get("/home", function(req, res) {
  res.sendFile(__dirname + "/Website/index.html");
});

app.get("/fact", function(req, res) {
  //
  res.send("Fact");
});
