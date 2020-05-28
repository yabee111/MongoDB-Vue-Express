var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');

const commenttest = require('./src/router/commentdata');

var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(cookieParser());


app.use('/api', commenttest);
app.listen(3000,() => {
    console.log('app listening on port 3000.')
})
app.use(express.static('dist'))


module.exports = app;
