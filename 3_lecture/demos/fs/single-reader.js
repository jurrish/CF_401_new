const fs = require('fs')

module.exports = (err, fileReadComplete) => {

  const fileDataFetched = (err, data) => {
    if(err) throw err;
    setTimeout(() => fileReadComplete(null, data.toString(), 5000));
  ;

  fs.readFile(path, fileDataFetched);
};
