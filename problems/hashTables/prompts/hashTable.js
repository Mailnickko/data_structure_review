class HashTable {

  constructor() {
    this.storage = [];
    this.limit = 4;
    this.size = 0;
  }

  insert(key, value) {

  }

  retrieve(key) {

  }

  remove(key) {

  }

  resize(limit) {

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
