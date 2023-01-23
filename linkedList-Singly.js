/*las Linked List guardan los nodos aleatoriamente en la memoria, sí, aunque esta estructura de datos solo conoce a su siguiente nodo, los nodos pueden estar guardados aleatoriamente en la memoria porque cada nodo sabe cuál es la referencia de memoria del siguiente nodo*/

//Construyendo una singly Linked List

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class MySinglyLinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    };
    this.tail = this.head;
    this.length = 1;
  }
  //Agregamos un nodo al final
  append(value) {
    const node = new Node(value);
    this.tail.next = node;
    this.tail = node;
    this.length++;
    //return this
  }
  //Agregamos un nodo al principio
  preppend(value) {
    const node = new Node(value);
    node.next = this.head;
    this.head = node;
    this.length++;
  }
  insert(index, value) {
    if (index >= this.length) {
      return this.append(value);
    }
    const node = new Node(value);
    const firstPointer = this.getIndex(index - 1);
    const holdingPointer = firstPointer.next;
    firstPointer.next = node;
    node.next = holdingPointer;
    this.length++;
    return this;
  }

  getIndex(index) {
    let counter = 0;
    let current = this.head;

    while (counter !== index) {
      current = current.next;
      counter++;
    }
    return current;
  }

  remove(value) {
    if (this.length === 1) {
      this.head = null;
      this.tail = this.head;
      this.length--;
      return this;
    }
    if (!this.length) {
      return "Ya la lista esta vacía";
    }
    let currentNode = this.head;
    while (currentNode.next.value !== value) {
      currentNode = currentNode.next;
    }
    let holdingNode = currentNode.next.next;
    currentNode.next = holdingNode;
    //console.log("->", currentNode.next)
    this.length--;
    return this;
  }
}

const myLinkedList = new MySinglyLinkedList("inicio");
myLinkedList.append("primero");
myLinkedList.append("segundo");
myLinkedList.append("tercero");
//myLinkedList.preppend("nuevaCabeza")
//myLinkedList.insert(1, "atravesao")
myLinkedList.remove("tercero");

console.log(myLinkedList);
