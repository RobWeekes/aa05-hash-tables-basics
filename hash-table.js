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
        this.data = new Array(numBuckets).fill(null);
    }

    hash(key) {
        let hash = sha256(key);
        // console.log(hash);
        let first8 = hash.slice(0,8);
        return parseInt(first8, 16);
    }

    hashMod(key) {  // returns the hash value modulo the number of buckets
        return this.hash(key) % this.capacity;
    }

    insertNoCollisions(key, value) {
        const index = this.hashMod(key);  // hashMod is already invoking hash(key)
        // console.log(index);

        if(this.data[index]) {  // if there is already a key/value pair at that index, throw Error
            throw new Error('hash collision or same key/value pair already exists!');
        } else {
            const newPair = new KeyValuePair(key, value);
            // console.log(newPair);
            this.data[index] = newPair; // assign value at appropriate (hashed) index
            this.count++;
        }
        // let hash = this.hash(key);      // not needed, because \/
        // console.log(hash);
    }

    insertWithHashCollisions(key, value) {

    }

    insert(key, value) {

    }

}

// local testing

hashTable = new HashTable(2);
hashTable.insertNoCollisions("key-1", "val-1");
hashTable.insertNoCollisions("key-2", "val-2");

console.log(hashTable);
console.log(hashTable.count) // (2);
console.log(hashTable.capacity) // (2);
console.log(hashTable.data.length) // (2);

const pairA = hashTable.data[0];
const pairB = hashTable.data[1];

console.log(pairA.key) // "key-1"
console.log(pairA.value) // "val-1"

console.log(pairB.key) // "key-2"
console.log(pairB.value) // "val-2"



module.exports = HashTable;
