(function () {
  console.log("DSA IN TYPESCRIPT");
})();

function add(n1: number): number {
  let number = 0;
  for (let i = 0; i <= n1; i++) {
    number += i;
  }
  return number;
}

const p1: number = performance.now();
console.log(add(10));
const p2: number = performance.now();
console.log(p2 - p1);
