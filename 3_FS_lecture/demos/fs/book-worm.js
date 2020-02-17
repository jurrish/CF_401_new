const reader = require('./single-reader.js');

const bookFetchComplete = (err, text) => {
  console.log(text);
}

reader('./hi.txt', bookFetchComplete);
