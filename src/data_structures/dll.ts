console.log("DOUBLY LINKED LISTS");

class Nodie {
  [x: string]: any;

  constructor(value: number) {
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
}

const doublyList = new DoublyLinkedList();

console.log(doublyList);
