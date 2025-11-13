"use strict";

function random0to1() {
  return Math.floor(Math.random() * 2);
}

function random0to100() {
  return Math.floor(Math.random() * 101);
}

function random5to20() {
  return Math.floor(Math.random() * (20 - 5 + 1)) + 5;
}

console.log(random0to1());
console.log(random0to100());
console.log(random5to20());
