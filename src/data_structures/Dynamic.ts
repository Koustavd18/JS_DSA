console.log("DYNAMIC PROGRAMMING");

function fib(n: number, memo: number[] = [0, 1, 1]): number {
  if (memo[n] !== undefined) return memo[n];
  const res = fib(n - 1, memo) + fib(n - 2, memo);
  memo[n] = res;
  return res;
}

function fibTable(n: number): number {
  if (n < 2) return 1;
  const table = [0, 1, 1];
  for (let i = 3; i <= n; i++) {
    table[i] = table[i - 1] + table[i - 2];
  }
  return table[n];
}

console.log(fibTable(5));
