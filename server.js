var http = require('http');
var server = http.createServer();

module.exports = function(callback, port){
    //Si no nos pasan nada...
    if(typeof callback === 'undefined'){
        callback = cbOnRequest;
    //si solo nos pasan el puerto...
    } else if (typeof callback === 'number'){
        port = callback;
        callback = cbOnRequest;
    // si solo nos pasan el callback y no el puerto...
    } else if (typeof callback === 'function' && typeof port === 'undefined'){
        port = 8081;
    }else {
        console.log('Pasa las cosas bien torpedo....');
    }

    console.log(callback);
    server.on('request', callback);
    server.listen(port);
    console.log('Browse to http://127.0.0.1:' + port);


    function cbOnRequest(request, response) {
        response.writeHead(200);
        console.log(request);
        console.log(request.method);
        console.log(request.headers);
        console.log(request.url);
        response.write('Hola, no has pasado nada :(');
        response.end();
    }
};
