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

  hash(key: string) {
    let total = 0;
    let PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96;
      total = (total * PRIME + value) % this.keyMap.length;
    }
    return total;
  }
  set(key: string, value: number | string) {
    const index = this.hash(key);
    if (this.keyMap[index] === undefined) this.keyMap[index] = [];
    this.keyMap[index].push([key, value]);
    return this;
  }
  get(key: string) {
    const index = this.hash(key);
    let result = -1;
    if (!this.keyMap[index]) return -1;
    for (let i = 0; i < this.keyMap[index].length; i++) {
      if (this.keyMap[index][i][0] === key) {
        result = this.keyMap[index][i];
      }
    }
    return result;
  }
  keys() {
    const keys: string[] = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          keys.push(this.keyMap[i][j][0]);
        }
      }
    }
    return keys;
  }

  values() {
    const values = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          values.push(this.keyMap[i][j][1]);
        }
      }
    }
    return values;
  }
}

const table = new HashTable();
console.log(table.set("purple", "lambo"));
console.log(table.set("maroon", 5));
console.log(table.set("blue", "All rise"));
console.log(table.keys());
console.log(table.values());
