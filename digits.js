"use strict";

function countDigits(num) {
  let str = String(num);
  let digits = str.length;
  console.log(`Skaicius ${num} turi ${digits} skaitmenis`);
}

countDigits(12345);
countDigits(7);
countDigits(9876543210);
