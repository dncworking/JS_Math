"use strict";

function getMax(a, b, c) {
  let max = Math.max(a, b, c);
  let min = Math.min(a, b, c);

  console.log(`Max number is ${max}, min is ${min}`);
}
getMax(12, 34, 56);
getMax(0, -34, 83);
getMax(-5, -10, -1);
