class Queue {

  constructor() {
    this.firstKey = 0;
    this.lastKey = 0;
    this.storage = {};
  }

  enqueue(val) {
    this.storage[this.lastKey] = val;
    this.lastKey++;
  }

  dequeue() {
    if (this.size()) {
      var result = this.storage[this.firstKey];
      delete this.storage[this.firstKey];
      this.firstKey++;
      return result;
    }
  }

  size() {
    return this.lastKey - this.firstKey;
  }
}

module.exports = { Queue };