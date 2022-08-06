import Node from './Node';

class LinkedList {
  constructor(head = null) {
    this.head = head;
  }

  append(value) {
    const newNode = new Node(value);
    if (this.head === null) {
      this.head = newNode;
      return this;
    }
    let tail = this.head;
    while (newNode.next !== null) tail = newNode.next;
    tail.next = new Node(value);
  }
}
