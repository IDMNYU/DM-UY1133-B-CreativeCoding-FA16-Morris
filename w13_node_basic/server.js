var port = 7000;

//load dependencies into the node.js framework
var express = require('express');

// launch the server app through express
var app = express();

// connect to the specified port (on localhost)
var server = app.listen(port);

//serve all files in the "public" directory
app.use(express.static('public'));

console.log("The server is running");