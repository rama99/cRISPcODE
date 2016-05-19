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

module.exports.login = function(req , res) {
  res.render('users/login');
}

module.exports.home = wrap(function *(req , res) {
  res.render('index');
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
