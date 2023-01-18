class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  get(index) {
    return this.data[index];
  }

  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.data;
  }
}

const myArray = new MyArray();

myArray.push("ana");
myArray.push({ nombre: "jose" });
myArray.push(159);
console.log(myArray.get());
console.log(myArray);
