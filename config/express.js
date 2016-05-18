'use strict';

const express = require('express');
const path = require('path');
const ejs = require('ejs');


module.exports = function(app) {

app.set('view engine' , 'ejs');
app.set('views', '../app/views/');
// path.join(__dirname, 'app/views')

}
