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

var user = {
  firstName: "rama",
  lastName: "kishore",
  login: "rama",
  password: "1234",
  email: "rama.kishore@gmail.com",
  phone: "1234",
  dateTime: "1212121",
  activeFlag: "12121"  //userImage

}

  db = yield connect();
  yield db.collection('users').insertOne(user);
  console.log('saved');
  db.close();
res.render('users/signup');
});
