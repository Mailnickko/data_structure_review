class Stack {

  constructor() {
    this.storage = [];
  }

  push(val) {
    this.storage.push(val);
  }

  pop() {
    return this.storage.pop();
  }

  size() {
    return this.storage.length;
  }
}

module.exports = { Stack };
