var express = require('express');
var app = express();

var routes = require('./server/routes');

//TODO: Este middleware habilita todo los archivos de assets o manda todo el directorio. Además la app ya acepta la petición / y manda el index.html, el resto han de ser relativas.
//Esto esá bien para usar un framework de cliente como Angular, Ember, etc.. pero para Ghost que quiere enviar una página por ruta no.
app.use(express.static('./assets'));

module.exports = app;

app.listen(8088, function () {
  console.log('Example app listening on port 8083!');
});

/*
var express = require('express');
var app = express();

app.use(express.static('./assets'));

app.get('/', function (req, res, next) {

  var options = {
    root: __dirname + '/assets/',
    dotfiles: 'allow',
    headers: {
        'x-timestamp': Date.now(),
        'x-sent': true
    }
  };
  res.type('html');
  //var fileName = req.params.name;
  res.sendFile('index.html', options, function (err) {
    if (err) {
      next(err);
    } else {
      console.log('Sent!!');
    }
  });

});*/
