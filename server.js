//Used for __dirName
var path = require('path');
//Express
var express = require('express');
//Creating the app
var app = express();
x
var port = process.env.PORT || 8080;
//Allows for use of other files
app.use('/app', express.static(path.join(__dirname,'app')));

//Handles get response to root
app.get("/", function(req,res){
  console.log("Request received");
  res.sendFile(path.join(__dirname,'index.html'));
});

//Starts the server listening on PORT


app.listen('3000',function(){
  console.log("Server Started");
})



// //Import HTTP module
// var http = require('http');
//
// //define port to listen to
// const PORT = 8080;
//
// //Hand;e requests and responses
// function handleRequest(request, response){
//   response.writeHead(200);
//   response.end();
// };
//
// //create server
// var server = http.createServer(handleRequest);
//
// //Server should start listening
// server.listen(PORT, function(){
//   //Callback
//   console.log("Server started, listenting on http://localhost:%s",PORT)
// });
