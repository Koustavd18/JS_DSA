console.log("GRAPHS");

type Vertex = number | string;
class Graph {
  [x: string | number]: any;
  constructor() {
    this.adjacentList = {};
  }

  addVertex(vertex: Vertex) {
    if (!this.adjacentList[vertex]) {
      this.adjacentList[vertex] = [];
    }
    return this;
  }

  addEdge(vertex1: Vertex, vertex2: Vertex) {
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

  removeVertex(v: Vertex) {
    this.adjacentList[v].forEach((el: string | number) =>
      this.removeEdge(v, el)
    );
    delete this.adjacentList[v];
    return this;
  }

  dfsRecursive(v: Vertex) {
    const result: Vertex[] = [];
    const visited: {
      [x: string]: boolean;
    } = {};
    const adjacentList = this.adjacentList;
    (function dfs(v: Vertex) {
      if (!v) return null;
      result.push(v);
      visited[v] = true;
      adjacentList[v].forEach((el: Vertex) => {
        if (!visited[el]) {
          return dfs(el);
        }
      });
    })(v);
    return result;
  }

  dfsIterative(v: string | number) {
    const result: Vertex[] = [];
    const visited: {
      [x: string]: boolean;
    } = {};
    const stack: Vertex[] = [v];

    let current: Vertex | undefined;
    while (stack.length) {
      current = stack.pop();
      if (current) {
        result.push(current);
        visited[current] = true;

        this.adjacentList[current].forEach((el: Vertex) => {
          if (!visited[el]) {
            visited[el] = true;
            stack.push(el);
          }
        });
      }
    }
    return result;
  }

  bfs(v: Vertex) {
    const result: Vertex[] = [];
    const visited: {
      [x: string]: true;
    } = {};
    const queue: Vertex[] = [v];

    let current: Vertex | undefined;
    while (queue.length) {
      current = queue.shift();
      if (current) {
        visited[current] = true;
        result.push(current);

        this.adjacentList[current].forEach((el: Vertex) => {
          if (!visited[el]) {
            visited[el] = true;
            queue.push(el);
          }
        });
      }
    }
    return result;
  }
}

const g = new Graph();

g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("F");
g.addEdge("A", "B");
g.addEdge("A", "C");
g.addEdge("B", "D");
g.addEdge("C", "E");
g.addEdge("D", "E");
g.addEdge("D", "F");
g.addEdge("E", "F");
console.log(g.adjacentList);
console.log(g.bfs("A"));
