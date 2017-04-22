var express = require('express');
var app = express();

var routes = require('./server/routes');

app.use(express.static('./assets'));
app.use('/', routes.router);

module.exports = app;

app.listen(8083, function () {
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
