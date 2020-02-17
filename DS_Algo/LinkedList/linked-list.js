class LinkedList {
constructor(node = null){
  this.head = node;
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
