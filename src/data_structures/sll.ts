console.log("SINGLY LINKED LIST");

class Nodee {
  [x: string]: any;
  constructor(val: number | string) {
    this.value = val;
    this.next = null;
  }
}

class SLL {
  [x: string]: any;

  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val: number | string) {
    const newNode = new Nodee(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return undefined;
    let current = this.head;
    let pre = current;
    while (current.next) {
      pre = current;
      current = current.next;
    }
    pre.next = null;
    this.tail = pre;

    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    this.length -= 1;
    return current;
  }

  shift() {
    if (!this.head) return undefined;
    const deletedHead = this.head;
    const newHead = this.head.next;
    this.head = newHead;
    this.length -= 1;
    return deletedHead;
  }

  unshift(val: number | string) {
    const newHead = new Nodee(val);
    if (!this.head) {
      this.head = newHead;
      this.tail = this.head;
    } else {
      newHead.next = this.head;
      this.head = newHead;
    }
    this.length += 1;
    return this;
  }

  get(index: number) {
    if (index < 0 || index >= this.length) return null;
    let count = 0;
    let current = this.head;
    while (count !== index) {
      count++;
      current = current.next;
    }
    return current;
  }

  set(index: number, value: number | string) {
    let current = this.get(index);
    if (!current) {
      return false;
    } else {
      current.value = value;
      return true;
    }
  }

  insert(index: number, value: number | string) {
    if (index > this.length || index < 0) {
      return false;
    }
    if (index === 0) {
      this.unshift(value);
    }
    if (index === this.length) {
      this.push(value);
    }
    let pre = this.get(index - 1);
    const newNode = new Nodee(value);
    const temp = pre.next;
    pre.next = newNode;
    newNode.next = temp;
    this.length += 1;
    return true;
  }

  remove(index: number) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();

    const current = this.get(index);
    const pre = this.get(index - 1);
    pre.next = current.next;
    this.length -= 1;
    return current.value;
  }

  reverse() {
    if (this.length < 2) return this;
    let node = this.head;
    this.head = this.tail;
    this.tail = node;
    let prev = null;
    let next;
    for (let i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }
    return this;
  }
}

const list = new SLL();
// list.push("Remove this");
list.push("hi");
list.push("there");
list.push("!");
list.push(69);
list.push(100);
// list.pop();
// list.pop();
// list.shift();
// list.unshift("new");
// console.log(list.insert(3, "Human"));
// list.remove(1);
// console.log(list.get(1));
list.reverse();
console.log(list);
