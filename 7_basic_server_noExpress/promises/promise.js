let success = console.log;
let fail = console.error;

let getName = () => new Promise( (resolve, reject) => {
  console.log('getName');
  //force asynchrounicity with setTimeout
  setTimeout( () => {
    //this mocks fetching a request and work being done on the other end
    console.log('time up');
    resolve('Johnny');
  }, 5000);
});

getName()
//instead of this we can save getName in a variable and that returns a promise
  // .then( name => name.toUpperCase())
  // .then( success )
  // .catch( fail );

  //returns a promise!!
let nameGetter = getName();

console.log(nameGetter);
//name getter is holding our promise, so we can .then!!!
nameGetter
  .then(name => name.toUpperCase())
  .then( success )
  .catch( fail );


//contrived example
// let getBurgerAndFries = () => new Promise( (resolve, reject) => {
//   const fs = require('fs');
//   //here's the asynchronous operation
//   //do work on the burger
//   fs.readFile('./burger.meat', (err, buffer) => {
//     //resolve the worked on burger inside the callback!
//     let prepared = prepare(burger);
//     resolve(prepared);
//   })
// })
// //then we can handle the promised data
// getBurgerAndFries()
// .then(burger => console.log('i am processing promised ' + burger));

//a "getName" function that just instantly resolves
// getName = () => Promise.resolve("John");

//a "getName" function that just instantly rejets
// getName = () => Promise.reject("Nobody by that name");

//uncomment any of thsoe to see the results
//notice how the .then() blocks chain. Each "then" recieves a value which is
//always going to be either what was resolved by the promise, or what was returned
//by the previous "then()" (which could also be a promise, btw)


// Promise.reject(5)
// .then(success)
// .catch( (number) => number * 2 )
// .then(success);
