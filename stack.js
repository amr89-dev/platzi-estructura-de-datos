class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }
  peek() {
    return this.top;
  }
  push(value) {
    const node = new Node(value);
    if (this.length === 0) {
      this.top = node;
      this.bottom = node;
    } else {
      const holdingPointer = this.top;
      this.top = node;
      this.top.next = holdingPointer;
    }
    this.length++;
  }
  pop() {
    this.top = this.top.next;
    this.length--;
  }
}

const myStack = new Stack();
myStack.push("incio");
myStack.push("segundo");
myStack.push("tercero");
myStack.push("cuarto");
myStack.pop();

console.log(myStack);
