console.log("BINARY SEARCH TREE");

class BSTNode {
  [x: string]: any;
  constructor(value: string | number) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.frequency = 1;
  }
}

class BinarySearchTree {
  [x: string]: any;
  constructor() {
    this.root = null;
  }
  insert(value: number | string) {
    const newNode = new BSTNode(value);
    if (!this.root) {
      this.root = newNode;
      return this;
    }
    let current = this.root;
    while (true) {
      if (current.value === newNode.value) {
        current.frequency += 1;
        return this;
      }
      if (newNode.value < current.value) {
        if (current.left === null) {
          current.left = newNode;
          return this;
        } else {
          current = current.left;
        }
      } else if (newNode.value > current.value) {
        if (current.right === null) {
          current.right = newNode;
          return this;
        } else {
          current = current.right;
        }
      }
    }
  }

  find(value: number | string) {
    let current = this.root;
    while (current && current.value !== value) {
      if (current.value < value) {
        current = current.right;
      } else if (current.value > value) {
        current = current.left;
      }
    }
    return current;
  }

  bfs() {
    let node = this.root;
    const data = [];
    const queue = [];
    if (!this.root) return null;
    queue.push(node);
    while (queue.length) {
      node = queue.shift();
      data.push(node.value);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    return data;
  }

  dfsPre() {
    const data: number[] = [];
    function traverse(node: { [x: string]: any }) {
      data.push(node.value);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }
    traverse(this.root);
    return data;
  }

  dfsPost() {
    const data: number[] = [];
    function traverse(node: { [x: string]: any }) {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      data.push(node.value);
    }
    traverse(this.root);
    return data;
  }
  dfsInOrder(){
    const data:number[] = []
    function traverse(node:{[x:string]:any}){
      if(node.left) traverse(node.left)
      data.push(node.value)
      if(node.right) traverse(node.right)
    }
    traverse(this.root)
    return data
  }
}

const tree = new BinarySearchTree();
tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);
console.log(tree.dfsInOrder());
// console.log(tree);
