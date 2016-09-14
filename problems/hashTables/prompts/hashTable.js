class HashTable {

  constructor() {
    this.storage = [];
    this.limit = 5;
    this.size = 0;
  }

  insert(key, value) {
    let index = createHashKeyIndex(key, this.limit);
    let bucket = this.storage[index] = this.storage[index] || [];
    let exists = false;
    let tuple;

    for (var i = 0; i < bucket.length; i++) {
      tuple = bucket[i];
      if (tuple[0] === key) {
        tuple[1] = value;
        exists = true;
      }
    }

    if (!exists) {
      bucket.push([key, value]);
      this.size++;
      if (this.size > this.limit * 0.75) {
        this.resize(this.limit * 2);
      }
    }
  }

  retrieve(key) {
    let index = createHashKeyIndex(key, this.limit);
    if (this.storage[index]) {
      let bucket = this.storage[index];
      let tuple;
      for (var i = 0; i < bucket.length; i++) {
        tuple = bucket[i];
        if (tuple[0] === key) {
          return tuple[1];
        }
      }
    }
  }

  remove(key) {
    let index = createHashKeyIndex(key, this.limit);
    if (this.storage[index]) {
      let bucket = this.storage[index];
      let tuple;
      for (var i = 0; i < bucket.length; i++) {
        tuple = bucket[i];
        if (tuple[0] === key) {
          bucket.splice(i,1);
          this.size--;
          if (this.size < this.limit * 0.25) {
            this.resize(this.limit / 2);
          }
        }
      }
    }
  }

  resize(limit) {
    let newHash = new HashTable();
    newHash.limit = limit;
    this.storage.forEach((bucket) => {
      bucket.forEach((tuple) => {
        newHash.insert(tuple[0], tuple[1]);
      });
    });
    this.storage = newHash.storage;
    this.limit = limit;
  }
}

// Converts a given str into an integer between 0 and max-1
const createHashKeyIndex = (str, max) => {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = (hash<<5) + hash + str.charCodeAt(i);
    hash = hash & hash; // Convert to 32bit integer
    hash = Math.abs(hash);
  }
  return hash % max;
}

module.exports = { HashTable };
