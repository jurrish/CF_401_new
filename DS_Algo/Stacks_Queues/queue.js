'use strict';

class Queue{
  constructor(){
    this.storage = [];
  }

  enqueue(item){
    this.storage.push(item);
  }

  dequeue(){
    let item = this.storage[0];
    this.storage.shift();
    return item;
  }
}

let newQueue = new Queue();

newQueue.enqueue(1);
newQueue.enqueue(2);
newQueue.enqueue(3);

console.log(newQueue);

newQueue.dequeue();
newQueue.dequeue();

console.log(newQueue);
