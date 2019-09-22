"use strict";
let express = require('express');

let application = express();
//aplication.use();
require('./routes/application.route')(application);
application.listen(3000, () => {console.log("info demoNodeJs Juan started on port 3000")});
/*
var http = require('http');
var date = require('./date');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end(date.myDateTime());
}).listen(8080);

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  //Return the url part of the request object:
  if(req.url == "/date"){res.write(req.url+" "+date.myDateTime());} 
  res.end();
}).listen(3000);

console.log("listening localhost:8080");

var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
*/

