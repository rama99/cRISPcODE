const wrap = require('co-express');
const MongoClient = require('mongodb').MongoClient;
const userModel = require('../models/userModel');
const config = require('../../config/config').config;

var db;

function connect()
{
  return MongoClient.connect(config.mongodbUrl);
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
  db = yield connect();
  yield db.collection('users').insertOne({name:"KISHORE"});
  console.log('saved');
  db.close();
res.render('users/signup');
});
