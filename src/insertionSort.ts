console.log("INSERTION SORT");

function insertionSort(arr: number[]): number[] {
  for (let i = 1; i < arr.length; i++) {
    const current = arr[i];
    for (let j = i - 1; j >= 0; j--) {
      if (arr[j] > current) {
        const temp = arr[j];
        arr[j] = current;
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

console.log(insertionSort([2, 1, 9, 76, 4, 0, 54, 69, 41, 88, 93, 100, 7, 32]));
