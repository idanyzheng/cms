var path = require('path');
var express = require('express');
var app = express();

// configuration in all env
var config = require('./config');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');
app.engine('html', require('ejs-mate'));
app.locals._layoutFile = 'layout.html';

var router = require('./router');
app.use('/', router);


var server = app.listen(3000, function () {
  var host = server.address().address;
 // var port = server.address().port;

 // console.log('Example app listening at http://%s:%s', host, port);
});
