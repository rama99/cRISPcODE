'use strict';

const express = require('express');
const path = require('path');
const ejs = require('ejs');
const config = require('./config').config;


module.exports = function(app) {

// Static files middleware
app.use(express.static(config.root + '/public'));

app.set('view engine' , 'ejs');
app.set('views', path.join(config.root , 'app' , 'views'));

// console.log(path.join(__dirname , '..'));
// path.join(__dirname, 'app/views')

}
