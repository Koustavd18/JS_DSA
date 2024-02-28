(function () {
  for (let i = 1; i < 10; i++) {
    let str: string = "";
    for (let j = 10 - i; j > 0; j--) {
      str += " ";
    }
    for (let z = 2 * i - 1; z > 0; z--) {
      str += "*";
    }
    console.log(str);
  }
  console.log(" DSA IN TYPESCRIPT");
})();

const p1: number = performance.now();
console.log(addUpto(1));
const p2: number = performance.now();
console.log(p2 - p1);

function addUpto(n1: number): number {
  let number = 0;
  for (let i = 0; i <= n1; i++) {
    number += i;
  }
  return number;
}

const str: string =
  "sdlkad5467jsajd  SDADSAD   dsakj          dlasjkdla                      12341234";

//get the number from any string
console.log(
  str
    .split("")
    .filter((el) => parseInt(el))
    .join("")
);

//count common words

function charCounter(str: string): {} {
  const result: {
    [key: string]: number;
  } = {};

  for (let i: number = 0; i < str.length; i++) {
    let ch: string = str[i].toLowerCase();
    const code: number = ch.charCodeAt(0);
    if ((code > 47 && code < 58) || (code > 96 && code < 123)) {
      result[ch] = ++result[ch] || 1;
    }
  }
  return result;
}

function logger(value: string, message?: string): void {
  message ? console.log(message, value) : console.log(value);
}

logger("asdasd");

console.log(charCounter(str));
