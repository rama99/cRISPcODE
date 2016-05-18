'use strict';

const users = require('../app/controllers/users');

module.exports = function(app) {

app.get('/' , users.home);
//app.post('/', users.save);

}
