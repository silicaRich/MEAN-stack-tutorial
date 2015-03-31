var express = require('express'),
stylus = require('stylus'), // used to serve up css files
logger = require('morgan'),
bodyParser = require('body-parser');

//dev or production mode?
var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';

//express application
var app = express();

//stylus middleware init
function compile(str, path) {
    return stylus(str).set('filename', path); 
}


// set views property
app.set('views', __dirname + '/server/views');
app.set('view engine', 'jade');

//turn on express's logging
app.use(logger('dev'));

//stylus middleware configuration
app.use(stylus.middleware(
    {
        src: __dirname + '/public', //current directory + public
        compile: compile
    }
));

//set up static routing to public directory
//serve file when request maps to public directory
app.use(express.static(__dirname + '/public'));


//what happens @ root of application, will route
app.get('*', function (req, res) {
    res.render('index');
});

var port = 3030;
app.listen(port);
console.log('server running on port ', port);