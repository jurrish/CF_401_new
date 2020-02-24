'use strict';

class Stack {
  constructor() {
    this.storage = [];
  }

  push(item){
    this.storage.push(item);
    return item;
  }

  pop(){
    let item = this.storage[this.storage.length - 1];
    this.storage.pop();
    return item;
  }

  peek(){
    let item = this.storage[this.storage.length - 1];
    return item;
  }
}

let newStack = new Stack();

// newStack.push(1);
// newStack.push(2);
// newStack.push(3);
//
// console.log(newStack);
//
// newStack.pop();
// console.log(newStack);
//
// newStack.peek();
// console.log(newStack.peek());
module.exports = Stack;
