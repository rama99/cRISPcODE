'use strict';

const users = require('../app/controllers/users');
const tickets = require('../app/controllers/tickets')
const config = require('./config').config;
const path = require('path');

module.exports = function(app) {

// Home Page , static html file
app.get('/' , function(req,res) {
  res.sendFile(path.join(config.root , 'app' , 'views' , 'index.html'));
});

// GET login
app.get('/users/signin' , users.signin);

// POST SignIn
app.post('/users/signin' , users.validateSignin);

// GET Home Page
app.get('/home' , function(req,res,next) {
  console.log('home-1');
  next();
} , users.home);

// GET sign up page
app.get('/users/signup/' , users.signup);

// POST sign up page
app.post('/users/signup' , users.newUser);

// TICKET

// GET create Ticket
app.get('/tickets/create' , tickets.create);

// GET open Tickets template
app.get('/tickets/open' , tickets.open);

// GET open Tickets data
app.get('/tickets/openTickets' , tickets.openTickets);

// GET lookups , projects , priorities , users
app.get('/tickets/getLookups' , tickets.getLookups);

// POST create Ticket
app.post('/tickets/create' , tickets.save);

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
