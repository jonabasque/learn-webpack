var http = require('http');
var fs = require('fs');
var server = require('./server');
/*
fs.readFile('./index.html', function (err, html) {
    if (err) {
        throw err;
    }
    http.createServer(function(request, response) {
        response.writeHeader(200, {"Content-Type": "text/html"});
        response.write(html);
        response.end();
    }).listen(8082);
});
*/

fs.readFile('./index.html', function (err, html) {
    if (err) {
        throw err;
    }
    server(function(request, response) {
        response.writeHeader(200, {"Content-Type": "text/html"});
        response.write(html);
        response.end();
    }, 8082);
});
