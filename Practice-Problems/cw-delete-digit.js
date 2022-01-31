/*

Given an integer n, find the maximal number you can obtain by deleting exactly
one digit of the given number.

PROBLEM:
===================

Input: A number
Output: A number

Explicit Requirements:
- We want to find the highest number left over after deleting one digit of the
  input number
- The input will be between 10 and 1000000, inclusive


EXAMPLES:
===================

For n = 152, the output should be 52;

For n = 1001, the output should be 101.

For n = 435021, the output should be 45021
35021
45021
43021
43521
43501
43502


DATA STRUCTURES/ALGORITHM
===================

Number ==> Array ==> Number


- START number
- DECLARE 'compareNums' and initialize to empty array
- DECLARE 'splitNum' and initialize to number argument coerced to string
  and split into an array
- ITERATE through each element in 'splitNum'
  - For the current element
    - DECLARE 'copy' and initialize to COPY of 'splitNum'
    - REMOVE current element from 'copy'
    - DECLARE 'sum' and initialize to all elements in 'copy' joined
    - COERCE 'sum' to number and ADD to 'compareNums'
- SORT 'compareNums' lowest to highest
- RETURN last element of 'compareNums'

*/

function deleteDigit(number) {
  let compareNums = [];
  let splitNums = String(number).split('');

  for (let index = 0; index < splitNums.length; index += 1) {
    let copy = splitNums.slice();
    copy.splice(index, 1);
    let sum = copy.join('');
    compareNums.push(Number(sum));
  }

  compareNums.sort((a, b) => a - b);

  return compareNums[compareNums.length - 1];
}

console.log(deleteDigit(152));
console.log(deleteDigit(1001));
console.log(deleteDigit(435021));
