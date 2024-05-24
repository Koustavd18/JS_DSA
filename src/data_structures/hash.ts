console.log("HASH TABLES");

function hash(key: string, num: number) {
  let i = 0;
  let total = 0;
  const PRIME = 31;
  while (i < key.length) {
    const value = key[i].charCodeAt(0) - 96;
    total = (total + value * PRIME) % num;
    i++;
  }
  return total;
}

class HashTable {
  [x: string]: any;
  constructor(size: number = 53) {
    this.keyMap = new Array(size);
  }

  _hash(key: string) {
    let total = 0;
    let PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96;
      total = (total * PRIME + value) % this.keyMap.length;
    }
    return total;
  }
}

console.log(hash("purple", 10));
console.log(hash("maroon", 10));
console.log(hash("blue", 10));
