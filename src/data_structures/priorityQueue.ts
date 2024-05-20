console.log("Priority Queue using Heap")

class PriorityNode {
  [x:string]:any
  constructor(value:string|number, priority:number){
    this.value = value;
    this.priority = priority;
  }
}

class PriorityQueue{
  [x:string]: any;
  constructor(){
    this.root = null;
    this.values = [];
  }

  order(value:number|string, priority:number){
    for(let i = 0 ;i<this.values.length; i++){
      let lowest = i;
      for(let j = i+1 ; j<this.values.length;j++) {
        if(this.values[j].priority< this.values[i].priority ){
          lowest = j
        }
      }
      if(lowest !== i) {
        const temp = this.values[i];
        this.values[i] = this.values[lowest];
        this.values[lowest] = temp;
      }
    }
    this.root = this.values[0];
  }

  enqueue(value:number|string,priority:number){
    const newNode = new PriorityNode(value,priority);
    this.values.push(newNode);
    this.order();
    return this.values;
  }
}

const pq = new PriorityQueue();
pq.enqueue(5,5)
pq.enqueue(2,2)
pq.enqueue(6,6)
pq.enqueue(4,4)
pq.enqueue(1,1)
pq.enqueue(3,3)
pq.enqueue(7,1)
pq.enqueue(8,1)
console.log(pq.values);
