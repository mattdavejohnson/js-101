/*
Given an array of integers, Find the minimum sum which is obtained
from summing each Two integers product.

PROBLEM:
=================

Input: An array of positive integers
Output: A number

Explicit Rules:
- The array will only contain positive integers
- The array will always have an even size
- We must use each integer only once
  - We multiply each integer with one other integer
  - We must find the lowest sum from adding each two integer product


EXAMPLES:
=================

minSum([5,4,2,3]) ==> return (22) 5*2 + 3*4 = 22

minSum([12,6,10,26,3,24]) ==> return (342) 26*3 + 24*6 + 12*10 = 342

minSum([9,2,8,7,5,4,0,6]) ==> return (74) 9*0 + 8*2 + 7*4 + 6*5 = 74

Looks like we take highest times lowest, then next highest times next
lowest, etc.


DATA STRUCTURES/ALGORTHM
=================

Array of positive integers ==> Array ==> Number


- START array
- DECLARE 'sortedArray' and initialize to copy of array sorted high to low
- DECLARE 'highNums' and initialize to the high half of 'sortedArray'
  - Slice from 0 to 'sortedArray'.length / 2
- DECLARE 'lowNums' and initialize to the low half of 'sortedArray' and
  sort low to high
    - Slice from 'sortedArray'.length / 2 and 'sortedArray'.length
- DECLARE 'result' and initialize to 0
- ITERATE from 0 to length of 'highNums'
  - DECLARE 'currentNum' and initialize to multiplying element at current
    index in 'highNums' with element at current index in 'lowNums'
  - Reassign 'result' to 'result' + 'currentNum'
- RETURN 'result'

*/

function minSum(array) {
  let sortedArray = array.slice().sort((a, b) => b - a);
  let highNums = sortedArray.slice(0, sortedArray.length / 2);
  let lowNums = sortedArray.slice(sortedArray.length / 2, sortedArray.length);
  lowNums.sort((a, b) => a - b);
  let result = 0;

  for (let index = 0; index < highNums.length; index += 1) {
    let currentNum = highNums[index] * lowNums[index];
    result += currentNum;
  }

  return result;
}

console.log(minSum([5, 4, 2, 3]));
console.log(minSum([12, 6, 10, 26, 3, 24]));
console.log(minSum([9, 2, 8, 7, 5, 4, 0, 6]));
