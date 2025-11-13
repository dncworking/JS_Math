"use strict";

function toDecimals(num, decimals) {
  return num.toFixed(decimals);
}

console.log(toDecimals(2.100212, 2)); //--> 2.10
console.log(toDecimals(2.100212, 3)); //--> 2.100
console.log(toDecimals(2100, 2)); //--> 2100.00
