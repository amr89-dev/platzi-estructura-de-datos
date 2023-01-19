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
  pop() {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return this.data;
  }
  delete(index) {
    const item = this.data[index];
    console.log("delete-->", item);
    this.shiftIndex(index);
    return item;
  }
  shiftIndex(index) {
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
      console.log("->", this.data[i]);
    }
    delete this.data[this.length - 1];
    this.length--;
  }
}

const myArray = new MyArray();

myArray.push("ana");
myArray.push("diego");
myArray.push("jose");
myArray.push({ nombre: "jose" });
myArray.push(159);
myArray.push("amdres");
myArray.pop();
myArray.pop();
myArray.pop();
myArray.pop();
myArray.pop();
console.log(myArray.get(0));
console.log(myArray.get(myArray.length - 1));
console.log(myArray);
