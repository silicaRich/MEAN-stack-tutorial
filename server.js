var express = require('express');

//dev or production mode?
var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';

//express application
var app = express();

// set views property
app.set('views', __dirname + '/server/views');
app.set('view engine', 'jade');

//what happens @ root of application, will route
app.get('*', function (req, res) {
    res.render('index');
});

var port = 3030;
app.listen(port);
console.log('server running on port ', port);