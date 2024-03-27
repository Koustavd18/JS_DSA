(function () {
  console.log("Recursion");
})();

//** Start  */
function print(...rest: number[]): void {
  console.log(rest);
  console.log(arguments);
}

// print(9, 8, 7, 6, 5, 4, 3);

function countDown(n: number): void {
  if (n <= 0) {
    console.log("Done");
    return;
  }
  console.log(n);
  n--;
  countDown(n);
}

// countDown(4);

function sumRange(n: number): number {
  if (n === 1) return 1;
  return n + sumRange(n - 1);
}

// console.log(sumRange(5));

//! factorial iteratively

function fact(num: number): number {
  let total = 1;
  for (let i = num; i > 1; i--) {
    total *= i;
  }
  return total;
}

// console.log(fact(5));

//! Factorial Recursively

function factorialy(n: number): number {
  if (n === 1) return 1;
  return n * factorialy(n - 1);
}

// console.log(factorialy(5));

//! Helper Method Recursion

function collectOdds(arr: number[]): number[] {
  let result: number[] = [];

  function helper(helperInput: number[]) {
    if (helperInput.length === 0) return;

    if (helperInput[0] % 2 !== 0) {
      result.push(helperInput[0]);
    }
    helper(helperInput.slice(1));
  }

  helper(arr);

  return result;
}

// console.log(collectOdds([1, 2, 3, 4, 5, 6, 7, 8, 9]));

//! Pure Recursion Method for collect Odds

function collectOdd(arr: number[]): number[] {
  let newArr: number[] = [];

  if (arr.length === 0) return newArr;

  if (arr[0] % 2 !== 0) {
    newArr.push(arr[0]);
  }

  newArr = newArr.concat(collectOdd(arr.slice(1)));

  return newArr;
}

// console.log(collectOdd([1, 2, 3, 4, 5, 6, 7, 8, 9]));

function power(base: number, exp: number): number {
  if (exp === 0) return 1;

  return base * power(base, --exp);
}

// console.log(power(2, 0)); // 1
// console.log(power(2, 2)); // 4
// console.log(power(2, 4)); // 16

function factorial(n: number): number {
  if (n === 1) return 1;
  return n * factorial(--n);
}

// console.log(factorial(1)); // 1
// console.log(factorial(2)); // 2
// console.log(factorial(4)); // 24
// console.log(factorial(7)); // 5040

function productOfArray(arr: number[]): number {
  if (arr.length === 0) return 1;
  return arr[0] * productOfArray(arr.slice(1));
}

// console.log(productOfArray([1, 2, 3])); // 6
// console.log(productOfArray([1, 2, 3, 10])); // 60

function recursiveRange(n: number): number {
  if (n === 0) return 0;
  return n + recursiveRange(--n);
}

// console.log(recursiveRange(6)); // 21
// console.log(recursiveRange(10)); // 55

function fib(n: number): number {
  if (n <= 2) return 1;
  return fib(n - 1) + fib(n - 2);
}

console.log(fib(4)); // 3
console.log(fib(10)); // 55
console.log(fib(28)); // 317811
console.log(fib(35)); // 9227465
