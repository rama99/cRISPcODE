const MongoClient = require('mongodb').MongoClient;
const path = require('path');
const config = require('../../config/config').config;
var db;

function connect()
{
  return MongoClient.connect(config.mongodbUrl);
}

exports.newUser = function newUser()
{
  db = connect();
  db.collection('users').insertOne({name:"KISHORE"});
  console.log('saved');
  db.close();
}
