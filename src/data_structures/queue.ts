console.log("QUEUE");

class QueueNode {
  [x: string]: any;
  constructor(value: number | string) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  [x: string]: any;
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  enqueue(value: number | string) {
    const newNode = new QueueNode(value);

    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    }
    this.last.next = newNode;
    this.last = newNode;
    this.length += 1;

    return this.length;
  }

  dequeue() {
    if (this.length < 1) return null;
    const temp = this.first;
    this.first = temp.next;
    if (this.length === 1) {
      this.first = null;
      this.last = null;
    }
    this.length -= 1;
    return temp.value;
  }
}

const q = new Queue();
q.enqueue(1);
q.enqueue(2);
q.enqueue(3);
q.enqueue(4);
// q.dequeue();
// q.dequeue();
// q.dequeue();
// q.dequeue();
console.log(q);
