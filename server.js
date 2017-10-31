//server.js
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var fs = require('fs');
var randomNumberBetween0and19;

app.get('/', function(req, res){
  res.sendfile(__dirname + '/index.html');
});

app.get('/newone.mp4', function(req, res){
  res.writeHead(200,{'content-type':'video/mp4'});
  var readstream = fs.createReadStream('sample.mp4');
  readstream.pipe(res);
});

io.on('connection', function (socket){
  socket.on('CH01', function (from, msg) {
    console.log('Connected client to socket');
    //Generating a Random Number
    randomNumberBetween0and19 = Math.floor(Math.random() * 10000000000000000);
    
    
    console.log('video link is '+randomNumberBetween0and19);
    //Emiting that random link to the client
    socket.emit('videolink', randomNumberBetween0and19);
    app.get('/'+randomNumberBetween0and19, function(req, res){
      res.writeHead(200,{'content-type':'video/mp4'});
      var readstream = fs.createReadStream('sample.mp4');
      //piping that video stream to the random generated link
      readstream.pipe(res);
    });
  });
});

http.listen(8000, function () {
  console.log('listening on *:8000');
});
