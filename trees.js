/*Un Binary Search Tree básicamente costa de un elemento root (El elemento padre del que todos descienden). Es a partir de ese elemento en donde se empieza la búsqueda.
.
La condición es simple, un elemento únicamente puede tener dos descendientes, no más. Los descendientes que son mayores que el elemento padre se colocan del lado derecho y los descendientes que son menores se colocan del lado izquierdo, simple, ¿verdad?
.
Para buscar en un Binary Search Tree simplemente tienes que preguntarte: ¿Este elemento es mayor o menor que el que estoy buscando? Ohh es mayor, entonces me voy para la izquierda, y así sucesivamente hasta que encuentres el elemento que estabas buscando.*/

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.node = null;
  }

  insert(value) {
    const node = new Node(value);
    if (this.node === null) {
      this.node = node;
    } else {
      let currentNode = this.node;
      while (true) {
        if (value < currentNode.value) {
          if (!currentNode.left) {
            currentNode.left = node;
            return this;
          }
          currentNode = currentNode.left;
        } else {
          if (!currentNode.right) {
            currentNode.right = node;
            return;
          }
          currentNode = currentNode.right;
        }
      }
    }
  }
}

const tree = new BinarySearchTree();
tree.insert(10);
tree.insert(20);
tree.insert(4);
tree.insert(2);
tree.insert(8);
tree.insert(17);
tree.insert(170);
console.log(tree);
