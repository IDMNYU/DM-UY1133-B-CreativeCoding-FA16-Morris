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

var socket = require('socket.io');
var io = socket(server);

//when type "connection" happens, call function newConnection
io.sockets.on('connection', newConnection);

//when a connection happens, a socket is made
//which will be the argument to the resulting function
function newConnection(socket){
	//console.log(socket.id);

	socket.on('mouse', mouseMessage);

	function mouseMessage(data){
		console.log(data);
		socket.broadcast.emit('mouse', data);
	}
}





