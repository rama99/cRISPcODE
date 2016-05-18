const wrap = require('co-express');

module.exports.home = wrap(function *(req , res) {
  res.render('index');
});

module.exports.save = wrap(function *(req , res) {

});
