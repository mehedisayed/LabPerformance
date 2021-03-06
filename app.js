//declaration
var express = require('express');
var ejs = require('ejs');
var exSession = require('express-session');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var app = express();

var home = require('./controllers/home');
var login = require('./controllers/login');
var logout = require('./controllers/logout');
var register = require('./controllers/register');
//configuration
app.set('view engine', 'ejs');

//middleware 
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(exSession({secret: 'my top secret value', saveUninitialized: true, resave: false}));
app.use(cookieParser());

app.use('/home', home);
app.use('/login', login);
app.use('/logout', logout);
app.use('/register', register);

//routes
app.get('/', function(req, res) {
    res.redirect('/home');
});

//server startup
app.listen(3000, function() {
    console.log('node server started at 3000!');
});