console.log("DIJKSTRA'S ALGORITHM");

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
}

const wg = new WeightedGraph();

wg.addVertex("A");
wg.addVertex("B");
wg.addVertex("C");
wg.addEdge("A", "B", 9);
wg.addEdge("A", "C", 5);
wg.addEdge("B", "C", 7);
console.log(wg);
