console.log("INSERTION SORT");

console.log(insertionSort([2, 1, 9, 76, 4, 0, 54, 69, 41, 88, 93, 100, 7, 32]));
console.log(insertionSort([4, 3, 2, 1]));

function insertionSort(arr: number[]) {
  if (arr.length <= 1) return arr;
  for (let i = 1; i < arr.length; i++) {
    for (let j = i - 1; j >= 0; j--) {
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}
