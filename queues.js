class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }
  enqueue(value) {
    const node = new Node(value);
    if (this.length === 0) {
      this.first = node;
      this.last = node;
    } else {
      this.last.next = node;
      this.last = node;
    }
    this.length++;
  }
}

const myQueue = new Queue();
myQueue.enqueue("primero");
myQueue.enqueue("segundo");
myQueue.enqueue("tercero");
//myQueue.enqueue("cuarto")
//myQueue.dequeue()
console.log(myQueue);
