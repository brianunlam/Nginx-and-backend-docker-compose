var express = require('express');
var app = express();
var bodyParser = require('body-parser');
//var mongoose   = require('mongoose');

console.log(process.env.NODE_ENV);

//mongoose.connect('mongodb://db:27017/app');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


var port = 8081; //process.env.PORT 






var server = require('http').Server(app);
var io = require('socket.io')(server);




io.on('connection', function (socket) {


});

server.listen(port);

module.exports = server
