'use strict';
var db;
const wrap = require('co-express');
const only = require('only');
const config = require('../../config/config').config;
const MongoClient = require('mongodb').MongoClient;


function connect(){
  return MongoClient.connect(config.mongodbUrl);
}

module.exports.create = wrap(function *(req , res) {
db = yield connect();
let users = yield getUsers();
 res.render('tickets/create');
//res.render('tickets/create' );
});

module.exports.getLookups = wrap(function * (req , res) {
  let users = yield getUsers();
  db.close();
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(users));
});

// get users from MEAN mongoDB
function  getUsers(){
return db.collection("users").find({}).toArray();
}

// get priorities from MEAN mongoDB
function getPriorities(db){

}
