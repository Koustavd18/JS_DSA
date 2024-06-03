console.log("DIJKSTRA'S ALGORITHM");
class PriorityQueueBasic {
  [x: string]: any;
  constructor() {
    this.values = [];
  }

  enqueue(value: Vertex, priority: number) {
    this.values.push({ value, priority });
    this.sort();
    return this.values;
  }

  dequeue() {
    return this.values.shift();
  }

  sort() {
    return this.values.sort(
      (a: { priority: number }, b: { priority: number }) =>
        a.priority - b.priority
    );
  }
}

class WeightedGraph {
  [x: string]: any;

  constructor() {
    this.adjacencyList = {};
  }

  addVertex(v: Vertex) {
    if (!this.adjacencyList[v]) this.adjacencyList[v] = [];
  }

  addEdge(v1: Vertex, v2: Vertex, weight: Vertex) {
    if (!this.adjacencyList[v1] || !this.adjacencyList[v2])
      return `Add Vertex first`;

    this.adjacencyList[v1].push({ node: v2, weight });
    this.adjacencyList[v2].push({ node: v1, weight });
  }

  Dijkstra(start: Vertex, end: Vertex) {
    const node = new PriorityQueueBasic();
    const distances = {};
    const previous = {};
  }
}

const wg = new WeightedGraph();

wg.addVertex("A");
wg.addVertex("B");
wg.addVertex("C");
wg.addVertex("D");
wg.addVertex("E");
wg.addVertex("F");
wg.addEdge("A", "B", 4);
wg.addEdge("A", "C", 2);
wg.addEdge("B", "E", 3);
wg.addEdge("C", "D", 2);
wg.addEdge("C", "F", 4);
wg.addEdge("D", "E", 3);
wg.addEdge("D", "F", 1);
wg.addEdge("E", "F", 1);
console.log(wg.Dijkstra("A", "E"));
