const fs = require('fs');
let file = `${__dirname}/data.txt`;

//reading file contens synchronously
//this is a BLOCKING operation (it lives in the call stak until it finishes),
//therefore not recommended for processUserInput
//it will read a file's contenst and return a Buffer
let data= fs.readFileSync(file);
console.log(data.toString());


//asynchronously reading a file
fs.readFile(file, (err, data) => {
  if(err) {throw err;}
  console.log(data.toString());
})

//this is the same as above, but a little cleaner
//we reate a callback function and then send it in by __dirname
//rather than inline
//same functionality it just reads better

let doSomethingWithTheContentsOfTheFile = (err, data) => {
if(err) {
  throw err;
  }
console.log(data.toString());
};

fs.readFile(file, doSomethingWithTheContentsOfTheFile)



// fs.readFile('./index.js', (err, data) => {
//   if(err) console.error(err);
//   console.log(data.toString('hex'));
// });
