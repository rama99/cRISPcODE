'use strict';

const users = require('../app/controllers/users');
const config = require('./config').config;
const path = require('path');

module.exports = function(app) {

// Home Page , static html file
app.get('/' , function(req,res) {
  res.sendFile(path.join(config.root , 'app' , 'views' , 'index.html'));
});

// GET login
app.get('/users/signin' , function(req , res , next) {
// dummy middleware to test error handling
//throw new Error("test");
next();
} , users.signin);

// POST SignIn
app.post('/users/signin' , users.validateSignin);

// GET sign up page
app.get('/users/signup/' , users.signup);

// POST sign up page
app.post('/users/signup' , users.newUser);

// Page not found Error
app.use( function(req , res) {
res.render('404');
});

// Server Error
app.use( function(err,req,res,next) {
  console.log(err.message);
res.end(err.message);
});

}
