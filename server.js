var express = require('express');
var path = require('path');
// Create a new Express application.
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
//Use Static js Files

io.on('connection', function(socket){

  socket.on('coords', function(msg){
    socket.broadcast.emit('coords',msg);
  });
  
});

app.use(express.static('static'));
app.get('/',
  function(req, res) { 
  	res.sendFile(path.join(__dirname + '/live.html'));
  });

http.listen(3000);