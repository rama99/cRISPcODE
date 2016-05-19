'use strict';

const users = require('../app/controllers/users');
const config = require('./config').config;
const path = require('path');

module.exports = function(app) {

// Home Page , static html file
app.get('/' , function(req,res) {
  res.sendFile(path.join(config.root , 'app' , 'views' , 'index.html'));
});

// GET sign up page
app.get('/users/signup/' , users.signup);

// POST sign up page
app.post('/users/signup' , users.newUser);

}
