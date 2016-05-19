const mongodbUrl = "mongodb://localhost:27017/MEAN";
const mongodbPort = 3009;
const path = require('path');


exports.config = {
  mongodbUrl:mongodbUrl,
  mongodbPort:mongodbPort,
  root:path.join(__dirname , '..')
}
