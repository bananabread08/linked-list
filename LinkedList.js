const Node = require('./Node');

class LinkedList {
  constructor(head = null) {
    this.head = head;
  }

  getHead() {
    return this.head;
  }

  getTail() {
    let tail = this.head;
    while (tail.next !== null) tail = tail.next;
    return tail;
  }

  size() {
    let count = 0;
    let pointer = this.head;
    while (pointer !== null) {
      count++;
      pointer = pointer.next;
    }
    return count;
  }

  append(value) {
    // empty Node
    if (this.head === null) {
      this.head = new Node(value);
      return this;
    }
    let tail = this.getTail();
    // let tail = this.head;
    // while (tail.next !== null) tail = tail.next;
    tail.next = new Node(value);
    return tail;
  }

  prepend(value) {
    if (this.head === null) {
      this.head = new Node(value);
      return this;
    }
    const prevHead = this.head;
    this.head = new Node(value, prevHead);
  }

  at(index) {
    let pointer = this.head;
    for (let i = 0; i < index; i++) {
      pointer = pointer.next;
    }
    return pointer ? pointer : null;
  }
}

const list = new LinkedList();
list.append(1);
list.append(2);
list.append(4);

console.log(list.size());
console.log(list.getHead());
console.log(list.getTail());
console.log(list.at(0));
