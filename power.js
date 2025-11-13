"use strict";

function isPowerOfTwo(num) {
  if (num <= 0) return false;
  let k = Math.log(num) / Math.log(2);
  return Number.isInteger(k);
}

console.log(isPowerOfTwo(2)); // true  -> 2^1
console.log(isPowerOfTwo(3)); // false
console.log(isPowerOfTwo(4)); // true  -> 2^2
console.log(isPowerOfTwo(2 ** 20)); // true  -> 2^20
console.log(isPowerOfTwo(2 ** 20 + 1)); // false
