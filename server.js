var http = require('http');
var app = require('./config/express');

http.createServer(app)
.listen(3031, function () {
	console.log('App simple-mock-server started');
});
