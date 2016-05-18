'use strict';

/*A MEAN demo*/

// Node Modules
const fs = require('fs');
// web MVC framwwork for node js
const express = require('express');
// generator async control flow goodness
const co = require('co');
// Native node js drivers for MongoDB
const MongoClient = require('mongodb').MongoClient;
// Terminal string styling done right. Much color.
const chalk = require('chalk');

// get config information
const config = require('./config/config').config;

const app = express();

// set express middlewares
require('./config/express')(app);

//  set routes
require('./config/routes')(app);

var connect = function * () {
  try {
        yield MongoClient.connect(config.mongodbUrl);
        app.listen(config.mongodbPort);
        console.log('Xpress started' , config.mongodbPort);
      }
      catch(err) {
        console.log(chalk.red(err.message));
      }
}

co(connect);
