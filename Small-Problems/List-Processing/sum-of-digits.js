/*
Write a function that takes one argument, a positive integer, and returns the
sum of its digits. Do this without using for, while, or do...while loops -
instead, use a series of method calls to perform the sum.
*/

function sum(number) {
  let numToStrArray = String(number).split('');
  let strArrToNumArray = numToStrArray.map((element) => Number(element));
  let result = strArrToNumArray.reduce((a, b) => a + b);
  return result;
}

console.log(sum(23));
console.log(sum(496));
console.log(sum(123456789));
