console.log("PROBLEM SOLVING PATTERNS");

// O(n**2)
// function same(arr1: number[], arr2: number[]): boolean {
//   if (arr1.length !== arr2.length) {
//     return false;
//   }
//   for (let i = 0; i < arr1.length; i++) {
//     let j = arr2.indexOf(arr1[i] ** 2);

//     if (j === -1) {
//       return false;
//     }

//     arr2.splice(j, 1);
//   }
//   return true;
// }

// O(n)
function same(arr1: number[], arr2: number[]): boolean {
  if (arr1.length !== arr2.length) {
    return false;
  }

  const obj1: {
    [key: number]: number;
  } = {};
  const obj2: {
    [key: number]: number;
  } = {};

  for (let i of arr1) {
    obj1[i] = ++obj1[i] || 1;
  }
  for (let i of arr2) {
    obj2[i] = ++obj2[i] || 1;
  }

  for (let key in obj1) {
    if (!(parseInt(key) ** 2 in obj2)) {
      return false;
    }
    if (obj2[parseInt(key) ** 2] !== obj1[key]) {
      return false;
    }
  }
  return true;
}

// console.log(same([1, 2, 3], [4, 1, 9]));
// console.log(same([1, 2, 1, 1], [4, 4, 1, 1]));
// console.log(same([1, 2, 4], [1, 9]));

function anagram(str1: string, str2: string): boolean {
  const s1 = str1.toLowerCase().split("");
  const s2 = str2.toLowerCase().split("");

  if (s1.length !== s2.length) {
    return false;
  }

  const obj1: {
    [key: string]: number;
  } = {};
  //   const obj2: {
  //     [key: string]: number;
  //   } = {};

  s1.forEach((el) => (obj1[el] = ++obj1[el] || 1));
  //   s2.forEach((el) => (obj2[el] = ++obj2[el] || 1));

  //   for (let key in obj1) {
  //     if (!obj2[key]) {
  //       return false;
  //     }
  //     if (obj1[key] !== obj2[key]) {
  //       return false;
  //     }
  //   }

  for (let i of s2) {
    if (!obj1[i]) {
      return false;
    } else {
      obj1[i] -= 1;
    }
  }

  return true;
}

// console.log(anagram("grAm", "gram"));
// console.log(anagram("helo", "Hello"));
// console.log(anagram("sdkajshdk", "JHFKSDHkjsdhfkjs"));
// const p12: number = performance.now();
// console.log(anagram("", "")); // true
// console.log(anagram("aaz", "zza")); // false
// console.log(anagram("anagram", "nagaram")); // true
// console.log(anagram("rat", "car")); // false
// console.log(anagram("awesome", "awesom")); // false
// console.log(anagram("amanaplanacanalpanama", "acanalmanplanpamana")); // false
// console.log(anagram("qwerty", "qeywrt")); // true
// console.log(anagram("texttwisttime", "timetwisttext")); // true
// console.log(performance.now() - p12);

function sumZero(arr: number[]): number[] | undefined {
  // the array is considered sorted
  let i = 0;
  let j = arr.length - 1;

  while (i < j) {
    let sum = arr[i] + arr[j];
    if (sum === 0) {
      return [arr[i], arr[j]];
    } else if (sum > 0) {
      j -= 1;
    } else {
      i += 1;
    }
  }
}

// console.log(sumZero([-4, -3, -2, -1, 0, 1, 2, 3, 5]));

function countUniqueValues(arr: number[]): number {
  if (arr.length === 0) {
    return 0;
  }
  let i = 0;
  let j = i + 1;
  while (j < arr.length) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    } else {
      j++;
    }
  }
  return i + 1;
}

// console.log(countUniqueValues([1, 1, 1, 1, 1, 2])); // 2
// console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])); // 7
// console.log(countUniqueValues([])); // 0

//Sliding Window

function maxSubArray(arr: number[], num: number): number | boolean | undefined {
  if (arr.length < num) {
    return false;
  }
  let maxSum = 0;
  let tempSum = 0;

  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum;

  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }

  return maxSum;
}

// console.log(
//   maxSubArray([1, 2, 3, 1, 2, 3, 2, 4, 1, 2, 3, 4, 3, 2, 4, 3, 4, 5], 4)
// );
// console.log(maxSubArray([2, 6, 9, 2, 1, 8, 5, 6, 3], 3));

function sameFrequency(num1: number, num2: number): boolean {
  const n1 = num1.toString();
  const n2 = num2.toString();
  if (n1.length != n2.length) {
    return false;
  }

  const obj1: { [key: string]: number } = {};
  const obj2: { [key: string]: number } = {};
  for (let i = 0; i < n1.length; i++) {
    obj1[n1[i]] = ++obj1[n1[i]] || 1;
  }

  for (let i = 0; i < n2.length; i++) {
    obj2[n2[i]] = ++obj2[n2[i]] || 1;
  }

  for (let key in obj1) {
    if (key in obj2 === null || undefined) return false;

    if (obj1[key] !== obj2[key]) return false;
  }

  return true;
}

// console.log(sameFrequency(182, 281)); // true
// console.log(sameFrequency(34, 14)); // false
// console.log(sameFrequency(3589578, 5879385)); // true
// console.log(sameFrequency(22, 222)); // false

function areThereDuplicates<T>(...args: T[]): boolean {
  const obj: any = {};

  console.log(new Set(args));

  for (let i of args) {
    obj[i] = ++obj[i] || 1;
  }
  for (let i in obj) {
    if (obj[i] > 1) {
      return true;
    }
  }
  return false;
}

// function areThereDuplicates() {
//   return new Set(arguments).size !== arguments.length;
// }

// console.log(areThereDuplicates(1, 2, 3)); // false
// console.log(areThereDuplicates(1, 2, 2)); // true
// console.log(areThereDuplicates("a", "b", "c", "a")); // true

function averagePair(arr: number[], avg: number) {
  // The array is considered sorted
  if (arr.length < 1) {
    return false;
  }
  let i = 0;
  let j = arr.length - 1;
  while (i < j) {
    let num = (arr[i] + arr[j]) / 2;
    if (num === avg) {
      return true;
    }
    if (num < avg) {
      i++;
    } else {
      j--;
    }
  }
  return false;
}

console.log(averagePair([1, 2, 3], 2.5)); // true
console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8)); // true
console.log(averagePair([-1, 0, 3, 4, 5, 6], 4.1)); // false
console.log(averagePair([], 4)); // false
