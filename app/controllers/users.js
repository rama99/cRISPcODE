const wrap = require('co-express');

module.exports.save = wrap(function *(req , res) {
res.end('Saved the details.');
});
