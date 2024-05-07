console.log("REDIX SORT");

function getDigit(num: number, i: number): number {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

function digitCount(num: number): number {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigits(nums: number[]): number {
  let maxDigits = 0;
  for (let i = 0; i < nums.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(nums[i]));
  }
  return maxDigits;
}

function redixSort(nums: number[]) {
  const maxDigits = mostDigits(nums);
  for (let k = 0; k < maxDigits; k++) {
    let digitsBucket = Array.from({ length: 10 }, () => []);
    for (let i = 0; i < nums.length; i++) {
      let digit = getDigit(nums[i], k);
      digitsBucket[digit].push(nums[i]);
    }
    nums = [].concat(...digitsBucket);
  }
  return nums;
}

// console.log(digitCount(213456));
// console.log(getDigit(342789, 3));
// console.log(mostDigits([21, 34, 454356, 1323, 856]));

console.log(redixSort([23, 345, 5467, 12, 2435, 9852]));
