console.log("DOUBLY LINKED LISTS");

class Nodie {
  [x: string]: any;

  constructor(value: number | string) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  [x: string]: any;
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value: number | string) {
    const newNode = new Nodie(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return newNode;
  }

  pop() {
    if (this.length <= 1) {
      this.head = null;
      this.tail = this.head;
      return this.length === 1 ? true : false;
    } else {
      const newTail = this.tail.prev;
      newTail.next = null;
      this.tail = newTail;
    }

    this.length--;
    return true;
  }

  shift() {
    if (this.length < 2) {
      return this.length === 1 ? true : false;
    }
    const newHead = this.head.next;
    newHead.prev = null;
    this.head.next = null;
    this.head = newHead;
    this.length--;
    return true;
  }

  unshift(value: number | string) {
    const newNode = new Nodie(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
      return this;
    }
    this.head.prev = newNode;
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }

  get(index: number) {
    if (index < 0 || index >= this.length) return undefined;
    const mid = Math.floor(this.length / 2);
    let count;
    let current;
    if (index >= mid) {
      count = this.length - 1;
      current = this.tail;
      while (count !== index) {
        current = current.prev;
        count--;
      }
    } else {
      count = 0;
      current = this.head;
      while (count !== index) {
        current = current.next;
        count++;
      }
    }

    return current;
  }

  set(index: number, value: number | string) {
    const node = this.get(index);
    node.value = value;
    return node;
  }

  insert(index: number, value: number | string) {
    if (index < 0 || index > this.length) return null;
    if (index === 0) return this.unshift(value);
    if (index === this.length) return this.push(value);

    const newNode = new Nodie(value);

    const previousNode = this.get(index - 1);
    const nextNode = this.get(index);
    newNode.prev = previousNode;
    newNode.next = nextNode;
    previousNode.next = newNode;
    nextNode.prev = newNode;
    this.length++;
    return this;
  }

  remove(index: number) {
    if (index < 0 || index >= this.length) return null;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();

    const previousNode = this.get(index - 1);
    const nextNode = this.get(index + 1);

    previousNode.next = nextNode;
    nextNode.prev = previousNode;
    this.length--;
    return true;
  }

  reverse() {
    if (this.length < 2) return this;
    let current = this.head;
    this.head = this.tail;
    this.tail = current;
    let previous = null;
    let next;

    for (let i = 0; i < this.length; i++) {
      next = current.next;
      current.next = previous;
      current.prev = next;
      previous = current;
      current = next;
    }
    return this;
  }
}

const doublyList = new DoublyLinkedList();
doublyList.push(3);
doublyList.push(4);
doublyList.push(5);
doublyList.push(6);
// doublyList.unshift(3);
doublyList.push(7);
// doublyList.insert(0, 2);
// doublyList.remove(4);
console.log(doublyList.reverse());
// console.log(doublyList.set(1, "Changed"));
// console.log(doublyList);
