'use strict';
var db;
const wrap = require('co-express');
const only = require('only');
const config = require('../../config/config').config;
var ObjectID = require('mongodb').ObjectID;
const MongoClient = require('mongodb').MongoClient;


function connect(){
  return MongoClient.connect(config.mongodbUrl);
}

module.exports.create = wrap(function *(req , res) {
db = yield connect();
 res.render('tickets/create');
});

module.exports.getLookups = wrap(function * (req , res) {
  let lookup = {};
  let users = yield getUsers();
  let projects = yield getProjects();
  let priorities = yield getPriorities();
  lookup.users = users;
  lookup.projects = projects;
  lookup.priorities = priorities;

  db.close();
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(lookup));
});

module.exports.save = wrap(function *(req , res) {
  db = yield connect();
  let ticket = req.body; //only(req.body , '');

  ticket.assignedToUserID = new ObjectID(ticket.assignedToUserID);
  ticket.deptID = new ObjectID(ticket.deptID);
  ticket.commentss = [];
  ticket.commentss.push(ticket.comments);

  yield db.collection("tickets").insertOne(ticket);
  db.close();
  res.setHeader('Content-Type' , 'application/json');
  res.send(JSON.stringify(ticket));
});

// get users from MEAN mongoDB
function  getUsers(){
return db.collection("users").find({}).toArray();
}

// get priorities from MEAN mongoDB
function getPriorities(){
return db.collection("priorities").find({}).toArray();
}

// get projects from MEAN mongoDB
function getProjects() {
  return db.collection("projects").find({}).toArray();
}
