(function () {
  console.log("Searching Algorithms");
})();

function linearSearch(arr: number[], el: number): number {
  if (arr[0] === el) return 0;
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] === el) return i;
  }

  return -1;
}

// console.log(linearSearch([10, 15, 20, 25, 30], 15)); // 1
// console.log(linearSearch([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 4)); // 5
// console.log(linearSearch([100], 100)); // 0
// console.log(linearSearch([1, 2, 3, 4, 5], 6)); // -1
// console.log(linearSearch([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 10)); // -1
// console.log(linearSearch([100], 200)); // -1

function binarySearch(arr: number[], val: number): number {
  let start = 0;
  let last = arr.length - 1;
  let middle = Math.floor((start + last) / 2);

  while (arr[middle] !== val && start <= last) {
    if (arr[middle] < val) {
      start = middle + 1;
    } else {
      last = middle - 1;
    }
    middle = Math.floor((start + last) / 2);
  }
  return arr[middle] === val ? middle : -1;
}

// console.log(binarySearch([1, 2, 3, 4, 5], 2)); // 1
// console.log(binarySearch([1, 2, 3, 4, 5], 3)); // 2
// console.log(binarySearch([1, 2, 3, 4, 5], 5)); // 4
// console.log(binarySearch([1, 2, 3, 4, 5], 6)); // -1
// console.log(
//   binarySearch(
//     [
//       5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98,
//       99,
//     ],
//     10
//   )
// ); // 2
// console.log(
//   binarySearch(
//     [
//       5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98,
//       99,
//     ],
//     95
//   )
// ); // 16
// console.log(
//   binarySearch(
//     [
//       5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98,
//       99,
//     ],
//     100
//   )
// ); // -1

function stringSearch(str: string, substr: string): number {
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < substr.length; j++) {
      if (substr[j] !== str[i + j]) {
        break;
      }
      if (j === substr.length - 1) {
        count++;
      }
    }
  }
  return count;
}

// console.log(stringSearch("lorie lolled a lapalapa loli", "lol"));
