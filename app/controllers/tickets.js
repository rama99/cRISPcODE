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

module.exports.open = wrap(function *(req , res) {
res.render('tickets/open');
});

module.exports.openTickets = wrap(function *(req , res) {
db = yield connect();
// get OPEN tickets
let openTickets = yield getOpenTickets();

//
db.close();
res.setHeader('Content-Type' , 'application/json');
res.send(JSON.stringify(openTickets));

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
  ticket.Allcomments = [];
  ticket.Allcomments.push(ticket.comments);
  ticket.createDate = new Date()
  delete ticket["comments"];

  yield db.collection("tickets").insertOne(ticket);
  db.close();
  res.setHeader('Content-Type' , 'application/json');
  res.send(JSON.stringify(ticket));
});

// get users from MEAN mongoDB
function  getUsers(){
  // toArray()
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

// get open Tickets from MEAN mongoDB
function getOpenTickets() {
  return db.collection("tickets").find({}).toArray();
}
