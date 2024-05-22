console.log("HEAP")


class HeapNode {
  [x:string] : any 
  constructor(value:number|string){
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class MaxHeap{
  [x:string] : any;
  constructor(){
    this.root = null;
    this.heapValues = [];
  }

  insert(value: number|string){
    const newNode = new HeapNode(value);
    this.heapValues.push(newNode)
    let index = this.heapValues.length - 1;
    let parentNode = Math.floor((index-1)/2);
    while(index > 0 && this.heapValues[parentNode].value < this.heapValues[index].value){
      [this.heapValues[parentNode], this.heapValues[index]] = [this.heapValues[index],this.heapValues[parentNode]];
      index = parentNode;
      parentNode = Math.floor((index-1)/2)
    }
    return this.heapValues;

  }

  extractMax(){
    if(this.heapValues.length < 1) return undefined;
    const max = this.heapValues[0];
    const end = this.heapValues.pop();
    this.heapValues[0] = end;
    this.bubbleDown();
    return max;
  }

  bubbleDown(){
    let index = 0;
    const element = this.heapValues[0];
    const length = this.heapValues.length;
    let leftChild, rightChild;
    while(true){
      let swap = null;
      const leftIndex = (2 * index) + 1;
      const rightIndex = (2 * index) + 2;
      
      if (leftIndex < length) {
        leftChild = this.heapValues[leftIndex];
        if( leftChild > element){
          swap = leftIndex;
        }
      }
      if( rightIndex < length ) {
        rightChild = this.heapValues[rightIndex];
        if ( (swap === null && rightChild > element) || ( swap !== null && rightChild > leftChild ) ){
          swap = rightIndex;
        } 
      }
      if(swap === null) break;
      this.heapValues[index] = this.heapValues[swap];
      this.heapValues[swap] = element;
      index = swap
    }
  }

  createHeap(){
    this.root = this.heapValues[0];
    let current;
    for(let i = 0; i< this.heapValues.length; i++) {
      current = this.heapValues[i];
      current.left = this.heapValues[(2*i)+1];
      current.right = this.heapValues[(2*i)+2]
    }
    return this;
  }

  showHeapValues(){
    console.log(this.heapValues)
  }
}

const maxHeap = new MaxHeap();
maxHeap.insert(41);
maxHeap.insert(39);
maxHeap.insert(33);
maxHeap.insert(18);
maxHeap.insert(27);
maxHeap.insert(12);
maxHeap.insert(55);
maxHeap.extractMax();
//maxHeap.showHeapValues();
console.log(maxHeap.createHeap());
