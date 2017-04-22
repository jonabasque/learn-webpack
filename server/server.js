var express = require('express');
var app = express();

var routes = require('./routes');

app.use(express.static('../assets'));
app.use('/', routes.router);

module.exports = app;
