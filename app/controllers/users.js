'use strict';
const wrap = require('co-express');
const MongoClient = require('mongodb').MongoClient;
const userModel = require('../models/userModel');
const config = require('../../config/config').config;
const only = require('only');

var db;

function connect()
{
  return MongoClient.connect(config.mongodbUrl);
}

module.exports.signin = function(req , res) {
  res.render('users/signin');
}

module.exports.home = wrap(function *(req , res) {
 console.log('home-2');
  res.render('home');
});

module.exports.validateSignin = wrap(function *(req , res) {
let loginDetails = only(req.body , "userName password");
let response = {};

db = yield connect();
var user = yield db.collection('users').findOne({login: loginDetails.userName , password: loginDetails.password , isActive:true });

if(user) {
response.status = 'SUCCESS';
}
else {
response.status = 'ERROR';
}

db.close();
res.setHeader('Content-Type', 'application/json');
res.send(JSON.stringify(response));

});


// GET for SignUp
module.exports.signup = wrap(function *(req , res) {
res.render('users/signup');
});


// POST for SignUp
module.exports.newUser = wrap( function *(req , res) {

let user = only(req.body ,'login firstName lastName password email' );

//activeFlag
user.isActive = true;
  db = yield connect();
  yield db.collection('users').insertOne(user);
  console.log('saved');
  db.close();
res.render('users/signup');

});
