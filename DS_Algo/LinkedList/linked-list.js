class LinkedList {
constructor(node = null){
  this.head = node;
  this.values = [];
  }

  print() {
    let current = this.head;
    let string = '';
    while(current) {
      string += current.value;
    }
    return string;
  }

  insert(value) {
    //create node with given value
    const newNode = new Node(value);
    const oldHead = this.head;

    //set new head's next to old head
    newNode.next = oldHead;

    //set head to new Node
    this.head =  newNode;
  }

  includes(value) {
    //starting at head, ask each one if it has the value (loop through)
    //if so return true
    //if not, move to next if possible
    //if no next, (at end) return false
    let current = this.head;

    while(current) {
      if(current.value === value) {
        return true;
      }
      current = current.next;
    }
    return false;
  }
}







class Node {
  constructor(value, next = null){
    this.value = value;
    this.next = next;
  }
}

module.exports=  {
  LinkedList,
  Node
}
