class Set {

  constructor() {
    this.storage = {};
  }

  add(val) {
    this.storage[val] = true;
  }

  remove(val) {
    delete this.storage[val];
  }

  contains(val) {
    return !!this.storage[val];
  }
}

module.exports = { Set };