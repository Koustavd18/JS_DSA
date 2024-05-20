console.log("STACKS");

class Noda {
  [x: string]: any;
  constructor(value: number | string) {
    this.value = value;
    this.next = null;
  }
}

class Stacks {
  [x: string]: any;
  length: number;
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  push(value: number | string) {
    const newNode = new Noda(value);
    if (!this.first) {
      this.first = newNode;
      this.last = this.first;
    }
    newNode.next = this.first;
    this.first = newNode;
    this.length += 1;
    return this.length;
  }

  pop() {
    if (!this.first) return null;
    if (this.length === 1) return this.first;

    const poppedValue = this.first;
    this.first = this.first.next;
    this.length -= 1;
    return poppedValue.value;
  }
}

const stack = new Stacks();

stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.pop();
console.log(stack);
