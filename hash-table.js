const sha256 = require('js-sha256');

class KeyValuePair {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.next = null;
  }
}

class HashTable {

    constructor(numBuckets = 4) {
        this.count = 0;
        this.capacity = numBuckets;
        this.data = new Array(this.capacity).fill(null);
    }

    hash(key) {
        
    }

    hashMod(key) {

    }

    insertNoCollisions(key, value) {

    }

    insertWithHashCollisions(key, value) {

    }

    insert(key, value) {

    }

}


module.exports = HashTable;
