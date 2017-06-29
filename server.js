var express = require('express');

//Create our app
var app = express();

//add functionality to express app
app.use(express.static('public'));

//start server
var port = 3000;
app.listen(port, function(){
  console.log("Express server is up on port 3000");
});
