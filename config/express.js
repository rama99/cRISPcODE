'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const ejs = require('ejs');
const config = require('./config').config;


module.exports = function(app) {

// bodyParser should be above methodOverride
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Static files middleware
app.use(express.static(config.root + '/public'));

app.set('view engine' , 'ejs');
app.set('views', path.join(config.root , 'app' , 'views'));

// console.log(path.join(__dirname , '..'));
// path.join(__dirname, 'app/views')

}
