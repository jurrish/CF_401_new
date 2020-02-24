//a for loop that counts down from 10 to 1
// for(let i = 10; i >= 1; i--) {
//   console.log(i);
// }

let countDown = (n) => {
  if(n === 0){
    return 0;
  } else {
    console.log(n);
    countDown(n - 1)
  }
}
countDown(10);


let sumTo = (n) => {
  if(n === 1){
    return 1;
  } else {
    console.log(n);
    return n + sumTo(n - 1);
  }
}
// console.log(sumTo(3));
sumTo(10);
