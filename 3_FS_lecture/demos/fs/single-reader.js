const fs = require('fs')

module.exports = (err, fileReadComplete) => {

  const fileDataFetched = (err, data) => {
    if(err) {
      fileReadComplete(err)
      return
    }

    fileReadComplete(null, data.toString());
  };

  fs.readFile('./hi.txt', fileDataFetched);
};
