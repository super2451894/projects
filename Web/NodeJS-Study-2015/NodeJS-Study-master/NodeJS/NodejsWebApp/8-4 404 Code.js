﻿//Extract Module
var http = require('http');
var express = require('express');

//create Server
var app = express();

// Option with request Event
app.use(function (request, response, next) {
    //Response
    response.send(404, '<h1>ERROR</h1>');

});

//Start Server
http.createServer(app).listen(50000, function () {
    console.log('Server Running at http://127.0.0.1:50000');
});
