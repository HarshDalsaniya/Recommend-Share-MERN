var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var connection=require('express-myconnection');
var mysql = require('mysql');
var dbConfig=require('./config/db.js');
var session = require('express-session');
var multer= require('multer');
var bodyparser = require('body-parser');
require('dotenv').config();

var indexRouter = require('./routes/index');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use(connection(mysql,dbConfig));




// user Login API
app.use('/api/user', require('./routes/api/user/login'),function (err, req, res, next) {
  console.log(err);
  res.json({status: 0,message: "Oops! Something went wrong"});
});
// tradespeople
app.use('/api/tradespeople', require('./routes/api/tradespeople'),function (err, req, res, next) {
  console.log(err);
  res.json({status: 0,message: "Oops! Something went wrong"});
});
// business 
app.use('/api/business', require('./routes/api/business/business'),function (err, req, res, next) {
  console.log(err);
  res.json({status: 0,message: "Oops! Something went wrong"});
});

// user forgot-password API
app.use('/api/user', require('./routes/api/user/forgot-password'),function (err, req, res, next) {
  console.log(err);
  res.json({status: 0,message: "Oops! Something went wrong"});
});

app.use('/api/profile', require('./routes/api/user/profile'),function (err, req, res, next) {
  console.log(err);
  res.json({status: 0,message: "Oops! Something went wrong"});
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
