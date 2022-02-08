/*

You are given array of integers, your task will be to count all pairs in that
array and return their count.

PROBLEM:
=================

Input: An array
Output: A number

Explicit Requirements:
- If an array is empty, return 0
- If there are more pairs of a certain number, count each pair only once
  - [0, 0 ,0 ,0] return value is 2, because 2 pairs of 0s
- Maximum array length is 1000
- Range of values in array is between 0 and 1000
  - No negative numbers


EXAMPLES:
=================

[1, 2, 5, 6, 5, 2]  -->  2 because there are 2 pairs, 2 and 5

[1, 2, 2, 20, 6, 20, 2, 6, 2]  -->  4 because there are 4 pairs, 2, 20, 6
and 2 (again)


DATA STRUCTURES/ALGORITHM:
=================

Array ==> Number

- START array
- DECLARE 'resultObj' and initialize to empty object
- DECLARE 'result' and initialze to 0
- ITERATE through each element in 'array'
  - For each number:
    - Check if it exists as a property key in 'resultObj'
      - If true, increment value by 1
      - If false, add current number as key and 1 as value
- DECLARE 'values' and initialize to an array of the values of 'resultObj'
- ITERATE through each element in 'values'
  - Reassign 'result' to 'result' + Math.floor(element / 2)
- RETURN 'result'

*/

function duplicates(array) {
  let resultObj = {};
  let result = 0;

  for (let index = 0; index < array.length; index += 1) {
    let currentNumber = String(array[index]);

    if (resultObj.hasOwnProperty(currentNumber)) {
      resultObj[currentNumber] += 1;
    } else {
      resultObj[currentNumber] = 1;
    }
  }

  let values = Object.values(resultObj);

  for (let index = 0; index < values.length; index += 1) {
    result += Math.floor(values[index] / 2);
  }

  return result;
}

console.log(duplicates([1, 2, 5, 6, 5, 2]));
console.log(duplicates([1, 2, 2, 20, 6, 20, 2, 6, 2]));
