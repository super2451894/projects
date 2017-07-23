﻿//Extract Module
var http = require('http');
var express = require('express');

//Create Server
var app = express();

//Set Middleware
app.use(express.cookieParser());
app.use(express.session({ secret: 'secret key' }));
app.use(express.bodyParser());
app.use(function (request, response) { });

//Start Server
http.createServer(app).listen(50000, function () {
    console.log('Server Running at http://127.0.0.1:50000');
});