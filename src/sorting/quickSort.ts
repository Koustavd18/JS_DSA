console.log("QUICK SORT");

function pivot(arr: number[], start: number = 0, end: number = arr.length - 1) {
  function swap(arr: number[], i: number, j: number) {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
  let pivot = arr[start];
  let swapIdx = start;
  for (let i = start + 1; i < arr.length; i++) {
    if (pivot > arr[i]) {
      swapIdx++;
      swap(arr, swapIdx, i);
    }
  }
  swap(arr, start, swapIdx);
  return swapIdx;
}

// function quickSort(arr: number[], left = 0, right = arr.length - 1) {
//   if (left < right) {
//     let pivotIdx = pivot(arr, left, right);
//     quickSort(arr, left, pivotIdx - 1);
//     quickSort(arr, pivotIdx + 1, right);
//   }
//   return arr;
// }

function quickSort(arr: number[]): number[] {
  if (arr.length < 2) return arr;
  const left = [];
  const right = [];
  let pivot = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  return [...quickSort(left), pivot, ...quickSort(right)];
}

console.log(quickSort([1, 4, 8, 2, 1, 5, 7, 6, 3]));
