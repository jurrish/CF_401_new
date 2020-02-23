let promiseAdd = (a, b) => {
  return new Promise( (resolve, reject) => {
    if(typeof a === 'number' && typeof b === 'number')
    {
      resolve(a + b);
    }
    else {
      reject(`cant add ${a} and ${b}`)
    }
  } )
}

console.log(promiseAdd(2, 5));
// console.log(promiseAdd(2, false));

let promiseSquare = (number) => {
  return new Promise( (resolve, reject) => {
    if(typeof number === 'number' && !Number.isNaN(number)){
      resolve(Math.pow(number, 2))
    } else {
      reject(`cant square ${number}`)
    }
  } )
}

console.log(promiseSquare(4));

//Chained (one depends on the other)
promiseAdd(2,2) //4
// the returned promise of 4 is then passed to promiseSquare to square it!
.then(result => promiseSquare(result))
.then(result => console.log(result))
.catch(err => console.log('promise error', err))

//Spread (they run independently in parallel)
let arrayOfPromises = [];
arrayOfPromises.push( promiseAdd(2,2))
arrayOfPromises.push( promiseSquare(3))

//processed separately - takes an array of promises and thens it
Promise.all(arrayOfPromises).then( ( [added, squared] ) => {
  console.log('Added ', added );
  console.log('Squared ', squared);
})
