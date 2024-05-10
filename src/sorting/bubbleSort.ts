function bubbleSort(arr: number[]) {
  let noSwap;
  const swap = (arr: number[], idx1: number, idx2: number) => {
    return ([arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]);
  };

  for (let i = arr.length; i > 0; i--) {
    noSwap = true;
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
        noSwap = false;
      }
    }
    if (noSwap) break;
  }
  return arr;
}

console.log(
  bubbleSort([
    37, 45, 29, 8, 12, 456, 7687, 45, -1, 423, 567, 4, 78, 234, 78, 34,
  ])
);
