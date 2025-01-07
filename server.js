'use strict';
var app = require('./app.js');
var http = require('http');
var port = process.env.PORT || 1337;

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end(app +' LMAO');
}).listen(port);
