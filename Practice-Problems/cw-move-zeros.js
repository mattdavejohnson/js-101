/*
Moving Zeros To The End

Write an algorithm that takes an array and moves all of the zeros to the
end, preserving the order of the other elements.


PROBLEM:
====================

Input: An array
Output: An array

Explicit Requirements:
- Remove 0s from input array and add them to the end of array
- Preserve the order of the other elements
- Elements may be of any type


EXAMPLES:
====================

moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]


DATA STRUCTURES/ALGORITHM:
====================

Array ==> Array


- START array
- DECLARE 'copyArray' and initialize to a copy of array arg
- DECLARE 'zeroArray' and initialize to empty array
- ITERATE while there are 0s still in 'copyArray'
  - REMOVE 0 from 'copyArray' and ADD 0 to 'zeroArray'
- RETURN 'copyArray' and 'zeroArray' concatenated

*/

function moveZeros(array) {
  let copyArray = array.slice();
  let zeroArray = [];

  while (copyArray.indexOf(0) !== -1) {
    let zeroIndex = copyArray.indexOf(0);
    zeroArray.push(copyArray.splice(zeroIndex, 1)[0]);
  }

  return copyArray.concat(zeroArray);
}

console.log(moveZeros([false, 1, 0, 1, 2, 0, 1, 3, 'a']));
