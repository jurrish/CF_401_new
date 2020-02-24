
const Stack = require("./stack.js");

class Queue{
  constructor(){
    this.stackOne = new Stack();
    this.stackTwo = new Stack();
  }

  enqueue(item){
    this.stackTwo.push(item);
    while(this.stackOne.storage.length === 1){
      let value = this.stackOne.pop()
      this.stackTwo.push(value)
    }
  }

  dequeue(){
    return this.stackTwo.storage.shift();
  }
}



let q = new Queue();

q.enqueue(1);
q.enqueue(2);
q.enqueue(3);
q.enqueue(4);
q.dequeue();
q.dequeue();
q.enqueue(5);
q.enqueue(6);
q.dequeue();


console.log(q);
