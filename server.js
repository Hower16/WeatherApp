var express = require('express');

//Create our app
var app = express();
const PORT = process.env.PORT || 3000;

app.use(function(request, response, next){
  if(request.headers['x-forwarded-proto'] == 'http'){
    next();
  }
  else{
    response.redirect('http://' + request.hostname + request.url);
  }
});

//add functionality to express app
app.use(express.static('public'));

//start server
app.listen(port, function(){
  console.log("Express server is up on port " + PORT);
});
