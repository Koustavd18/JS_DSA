console.log("GRAPHS");

class Graph {
  [x: string | number]: any;
  constructor() {
    this.adjacentList = {};
  }

  addVertex(vertex: string | number) {
    if (!this.adjacentList[vertex]) {
      this.adjacentList[vertex] = [];
    }
    return this;
  }

  addEdge(vertex1: string | number, vertex2: string | number) {
    if (!this.adjacentList[vertex1]) this.adjacentList[vertex1] = [];
    if (!this.adjacentList[vertex2]) this.adjacentList[vertex2] = [];
    this.adjacentList[vertex1].push(vertex2);
    this.adjacentList[vertex2].push(vertex1);
    return this;
  }
  removeEdge(v1: string | number, v2: string | number) {
    this.adjacentList[v1] = this.adjacentList[v1].filter(
      (el: string | number) => {
        return el !== v2;
      }
    );
    this.adjacentList[v2] = this.adjacentList[v2].filter(
      (el: string | number) => {
        return el !== v1;
      }
    );
    return this;
  }

  removeVertex(v: string | number) {
    this.adjacentList[v].forEach((el: string | number) =>
      this.removeEdge(v, el)
    );
    delete this.adjacentList[v];
    return this;
  }
}

const g = new Graph();

g.addVertex("Tokyo");
g.addVertex("1");
g.addVertex("Bangkok");
g.addEdge("Tokyo", "Bangkok");
g.addEdge("1", "Bangkok");
// g.removeEdge("1", "Bangkok");
// g.removeVertex("Tokyo");
console.log(g);
