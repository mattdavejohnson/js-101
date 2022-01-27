/*You've just discovered a square (NxN) field and you notice a warning sign.
The sign states that there's a single bomb in the 2D grid-like field in front
of you.

Write a function mineLocation/MineLocation that accepts a 2D array, and
returns the location of the mine. The mine is represented as the integer 1 in
 the 2D array. Areas in the 2D array that are not the mine will be represented
 as 0s.

The location returned should be an array (Tuple<int, int> in C#) where the
first element is the row index, and the second element is the column index
of the bomb location (both should be 0 based). All 2D arrays passed into
your function will be square (NxN), and there will only be one mine in the
array.


 0 1 2 3 column
0  *
1
2
3
rows
 [0, 1]

Input: An array of subarrays
Output: An array, represents where the mine is

Explicit:
 - Given 2D array
 - Looking for the location of the mine, which is located where the integer 1 is
 - Empty squares will be represented as 0s
 - The length of given array is the same length as each subarray
 - There is only one bomb
 - Return value is first element row, second element column

Implicit:


Example:

 0 1 2
0*
1
2
   0  1. 2. 3
0 [0, 0, 0, 0]
1 [0, 0, 0, 0]
2 [0, 0, 1, 0]
3 [0, 0, 0, 0]

[2, 2]

DS

2D array -> array

Alg:

  START Array
  ITERATE through given array
    ITERATE through each sub-array
      DECLARE 'currentValue' and initialize to current array element value
      EVALUTATE if 'currentValue' is equal to 1
        if true, return an array with outerloop index and innerloop index

*/

function mineLocation(array) {
  for (let index = 0; index < array.length; index += 1) {
    for (
      let secondIndex = 0;
      secondIndex < array[index].length;
      secondIndex += 1
    ) {
      let currentValue = array[index][secondIndex];

      if (currentValue === 1) {
        return [index, secondIndex];
      }
    }
  }

  return undefined;
}

console.log(
  mineLocation([
    [1, 0],
    [0, 0],
  ])
); // [0, 0]);
console.log(
  mineLocation([
    [1, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ])
); // [0, 0]);
console.log(
  mineLocation([
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 1, 0],
    [0, 0, 0, 0],
  ])
); // [2, 2]);
